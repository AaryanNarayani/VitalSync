import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HealthDetails {
  id: number;
  userId: number;
  weight: number;
  height: number;
  age: number;
  BMI: number;
  BP: string;
  HeartRate: number;
  calorie: number;
  hydration: number;
  spo2: number;
  sleepCycle: number;
  steps: number;
  weather: number;
  AQI: number;
  UvIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface Device {
  id: number;
  userId: number;
  isFitbit: boolean;
  isApple: boolean;
  isBoat: boolean;
  isSleepApp: boolean;
  isFitbitApp: boolean;
  isAppleApp: boolean;
  isBoatRing: boolean;
  isOuraRing: boolean;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: number;
  name: string | null;
  email: string;
  avatar: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  details: HealthDetails;
  devices: Device[];
}

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    updateHealthDetails: (state, action: PayloadAction<HealthDetails>) => {
      if (state.user) {
        state.user.details = action.payload;
      }
    },
    updateDevices: (state, action: PayloadAction<Device[]>) => {
      if (state.user) {
        state.user.devices = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    }
  }
});

export const {
  setUser,
  updateHealthDetails,
  updateDevices,
  setLoading,
  setError,
  clearUser
} = userSlice.actions;

// export const selectUser = (state: { user: UserState }) => state.user.user;
// export const selectHealthDetails = (state: { user: UserState }) => state.user.user?.details;
// export const selectDevices = (state: { user: UserState }) => state.user.user?.devices;
// export const selectIsLoading = (state: { user: UserState }) => state.user.isLoading;
// export const selectError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;