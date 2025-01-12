import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardState {
    name: string;
    weight: number;
    height: number;
    age: number;
    isFitbit: boolean;  
    isApple: boolean;      
    isBoat: boolean;        
    isSleepApp: boolean;    
    isFitbitApp: boolean;  
    isAppleApp: boolean;  
    isBoatRing: boolean;    
    isOuraRing: boolean;  
}

const initialState: OnboardState = {
    name: "",
    weight: 0,
    height: 0,
    age: 0,
    isFitbit: false,
    isApple: false,
    isBoat: false,
    isSleepApp: false,
    isFitbitApp: false,
    isAppleApp: false,
    isBoatRing: false,
    isOuraRing: false,
};

interface BasicDataPayload {
    name: string;
    weight: number;
    height: number;
    age: number;
}

interface DeviceDataPayload {
    type: keyof Pick<OnboardState, 
        'isFitbit' | 'isApple' | 'isBoat' | 
        'isSleepApp' | 'isFitbitApp' | 'isAppleApp' | 
        'isBoatRing' | 'isOuraRing'>;
    value: boolean;
}

const onboardSlice = createSlice({
    name: "onboard",
    initialState,
    reducers: {
        setBasicData: (state, action: PayloadAction<BasicDataPayload>) => {
            const { name, weight, height, age } = action.payload;
            state.name = name;
            state.weight = weight;
            state.height = height;
            state.age = age;
        },
        setDeviceData: (state, action: PayloadAction<DeviceDataPayload>) => {
            state[action.payload.type] = action.payload.value;
        },
    },
});

export const { setBasicData, setDeviceData } = onboardSlice.actions;
export default onboardSlice.reducer;