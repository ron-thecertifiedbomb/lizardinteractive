import { create } from "zustand";
import { appData, AppData } from "@/config/appData";
import { lizardData,LizardData } from "@/config/lizardData";

interface AppDataStore {
  appData: AppData;
}



export const useAppDataStore = create<AppDataStore>(() => ({
  appData,
}));

interface LizardDataStore {
  lizardData: LizardData;
}



export const useLizardDataStore = create<LizardDataStore>(() => ({
  lizardData,
}));
