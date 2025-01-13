import { PrismaClient, User, Details, Alert, History } from '@prisma/client'

interface HealthThresholds {
  maxSteps: number;
  minSteps: number;
  maxHeartRate: number;
  minHeartRate: number;
  maxBP: string;
  minBP: string;
  maxSPO2: number;
  minSPO2: number;
  minHydration: number;
  maxHydration: number;
  minSleepCycle: number;
  maxCalorie: number;
  minCalorie: number;
  maxAQI: number;
  maxUvIndex: number;
  maxTemperature: number;
  minTemperature: number;
}

export class HealthManager {
  private static instance: HealthManager;
  private prisma: PrismaClient;
  private activeUsers: Map<number, Details>;
  private userHistory: Map<number, History[]>;
  private thresholds: HealthThresholds;

  private constructor() {
    this.prisma = new PrismaClient();
    this.activeUsers = new Map();
    this.userHistory = new Map();
    this.thresholds = {
      maxSteps: 50000,
      minSteps: 2000,
      maxHeartRate: 120,
      minHeartRate: 60,
      maxBP: "140/90",
      minBP: "90/60",
      maxSPO2: 100,
      minSPO2: 95,
      minHydration: 500,
      maxHydration: 4000,
      minSleepCycle: 6,
      maxCalorie: 3000,
      minCalorie: 1500,
      maxAQI: 150,
      maxUvIndex: 8,
      maxTemperature: 35,
      minTemperature: 10
    };
  }

  public static getInstance(): HealthManager {
    if (!HealthManager.instance) {
      HealthManager.instance = new HealthManager();
    }
    return HealthManager.instance;
  }

  public async addUser(userId: number): Promise<void> {
    const userDetails = await this.prisma.details.findUnique({
      where: { userId }
    });
    
    const userHistory = await this.prisma.history.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 7 // Last 7 days
    });

    if (userDetails) {
      this.activeUsers.set(userId, userDetails);
      this.userHistory.set(userId, userHistory);
      await this.checkHealthMetrics(userId);
    }
  }

  public removeUser(userId: number): void {
    this.activeUsers.delete(userId);
    this.userHistory.delete(userId);
  }

  public async updateUserDetails(userId: number, details: Details): Promise<void> {
    this.activeUsers.set(userId, details);
    await this.checkHealthMetrics(userId);
  }

  private async checkHealthMetrics(userId: number): Promise<void> {
    const details = this.activeUsers.get(userId);
    const history = this.userHistory.get(userId);
    if (!details) return;

    // Activity Monitoring
    if (details.steps > this.thresholds.maxSteps) {
      await this.createAlert(userId, "You've exceeded 50,000 steps today. Rest is important to avoid overexertion and muscle fatigue.");
    } else if (details.steps < this.thresholds.minSteps) {
      await this.createAlert(userId, "Your step count today is less than 2,000. Consider a light walk or stretching to stay active.");
    }

    // Heart Rate Monitoring
    if (details.HeartRate > this.thresholds.maxHeartRate) {
      await this.createAlert(userId, "Your heart rate is elevated. Pause and focus on calming down. Consider deep breathing exercises.");
    } else if (details.HeartRate < this.thresholds.minHeartRate) {
      await this.createAlert(userId, "Your heart rate is unusually low. If you're feeling dizzy or weak, please consult a doctor.");
    }

    // Hydration Monitoring
    if (details.hydration < this.thresholds.minHydration) {
      await this.createAlert(userId, "Your hydration level is critically low. Drink water immediately to avoid dehydration.");
    } else if (details.hydration > this.thresholds.maxHydration) {
      await this.createAlert(userId, "You're drinking a lot of water. Remember to maintain electrolyte balance.");
    }

    // Sleep Monitoring
    if (details.sleepCycle < this.thresholds.minSleepCycle) {
      await this.createAlert(userId, "You've slept less than 6 hours last night. Prioritize rest to maintain optimal health.");
    }

    // Calorie Monitoring
    if (details.calorie > this.thresholds.maxCalorie) {
      await this.createAlert(userId, "You've burned over 3,000 calories today. Ensure you eat a nutrient-rich meal to refuel your energy.");
    }

    // Environmental Monitoring
    if (details.AQI > this.thresholds.maxAQI) {
      await this.createAlert(userId, "The AQI in your area is high (unhealthy). Consider indoor activities today.");
    }

    if (details.UvIndex > this.thresholds.maxUvIndex) {
      await this.createAlert(userId, "UV Index is high. Use sunscreen and avoid direct sunlight between 10 AM and 4 PM.");
    }

    if (details.weather > this.thresholds.maxTemperature) {
      await this.createAlert(userId, `Outdoor temperature is ${details.weather}°C. Stay hydrated and avoid prolonged outdoor activities.`);
    } else if (details.weather < this.thresholds.minTemperature) {
      await this.createAlert(userId, `Cold weather detected (${details.weather}°C). Wear appropriate clothing to stay warm during activities.`);
    }

    // SpO2 Monitoring
    if (details.spo2 < this.thresholds.minSPO2) {
      await this.createAlert(userId, "Your SpO2 levels are below normal. If you're feeling short of breath, please seek medical attention.");
    }

    // Check blood pressure
    await this.checkBloodPressure(userId, details.BP);

    // Trend Analysis
    if (history && history.length > 0) {
      await this.analyzeTrends(userId, details, history);
    }
  }

  private async analyzeTrends(userId: number, current: Details, history: History[]): Promise<void> {
    // Calculate average steps from history
    const avgSteps = history.reduce((sum, day) => sum + day.steps, 0) / history.length;
    if (current.steps < avgSteps * 0.8) {
      await this.createAlert(userId, "Your activity level has dropped by 20% compared to your weekly average. Try to stay more active!");
    }

    // Check BMI trends
    const oldestBMI = history[history.length - 1].BMI;
    if (current.BMI - oldestBMI >= 2) {
      await this.createAlert(userId, "Your BMI has increased by 2 points in the last week. Consider adjusting diet and exercise.");
    }

    // Check hydration trends
    const avgHydration = history.reduce((sum, day) => sum + day.hydration, 0) / history.length;
    if (current.hydration < avgHydration * 0.7) {
      await this.createAlert(userId, "Your hydration levels are lower than usual. Remember to drink water regularly!");
    }
  }

  private async checkBloodPressure(userId: number, bp: string): Promise<void> {
    const [systolic, diastolic] = bp.split('/').map(Number);
    const [maxSystolic, maxDiastolic] = this.thresholds.maxBP.split('/').map(Number);
    const [minSystolic, minDiastolic] = this.thresholds.minBP.split('/').map(Number);

    if (systolic > maxSystolic || diastolic > maxDiastolic) {
      await this.createAlert(userId, `Your BP reading (${bp}) is higher than normal. Take a moment to relax and consider consulting your doctor.`);
    } else if (systolic < minSystolic || diastolic < minDiastolic) {
      await this.createAlert(userId, `Your BP reading (${bp}) is lower than normal. Stay hydrated and avoid sudden movements.`);
    }
  }

  private async createAlert(userId: number, message: string): Promise<void> {
    await this.prisma.alert.create({
      data: {
        userId,
        alert: message,
        isRead: false
      }
    });
  }

  public updateThresholds(newThresholds: Partial<HealthThresholds>): void {
    this.thresholds = { ...this.thresholds, ...newThresholds };
  }

  public getThresholds(): HealthThresholds {
    return { ...this.thresholds };
  }

  public getActiveUsers(): Map<number, Details> {
    return new Map(this.activeUsers);
  }
}