import { create } from "zustand";
import { appData, AppData } from "@/config/appData";

interface AppDataStore {
  appData: AppData;
}

export const useAppDataStore = create<AppDataStore>(() => ({
  appData,
}));
