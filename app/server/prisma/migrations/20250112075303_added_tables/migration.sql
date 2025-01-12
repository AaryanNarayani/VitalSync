-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "createdAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "isFitbit" BOOLEAN NOT NULL DEFAULT false,
    "isApple" BOOLEAN NOT NULL DEFAULT false,
    "isBoat" BOOLEAN NOT NULL DEFAULT false,
    "isSleepApp" BOOLEAN NOT NULL DEFAULT false,
    "isFitbitApp" BOOLEAN NOT NULL DEFAULT false,
    "isAppleApp" BOOLEAN NOT NULL DEFAULT false,
    "isBoatRing" BOOLEAN NOT NULL DEFAULT false,
    "isOuraRing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Details" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL DEFAULT 70,
    "height" INTEGER NOT NULL DEFAULT 170,
    "age" INTEGER NOT NULL DEFAULT 25,
    "BMI" INTEGER NOT NULL DEFAULT 25,
    "BP" TEXT NOT NULL DEFAULT '120/80',
    "HeartRate" INTEGER NOT NULL DEFAULT 70,
    "calorie" INTEGER NOT NULL DEFAULT 2000,
    "hydration" INTEGER NOT NULL DEFAULT 850,
    "spo2" INTEGER NOT NULL DEFAULT 95,
    "sleepCycle" INTEGER NOT NULL DEFAULT 8,
    "steps" INTEGER NOT NULL DEFAULT 10000,
    "weather" INTEGER NOT NULL DEFAULT 25,
    "AQI" INTEGER NOT NULL DEFAULT 90,
    "UvIndex" INTEGER NOT NULL DEFAULT 4,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "goal" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "alert" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "BMI" INTEGER NOT NULL,
    "BP" TEXT NOT NULL,
    "HeartRate" INTEGER NOT NULL,
    "calorie" INTEGER NOT NULL,
    "hydration" INTEGER NOT NULL,
    "spo2" INTEGER NOT NULL,
    "sleepCycle" INTEGER NOT NULL,
    "steps" INTEGER NOT NULL,
    "weather" INTEGER NOT NULL,
    "AQI" INTEGER NOT NULL,
    "UvIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Details_userId_key" ON "Details"("userId");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
