import { Dispatch } from "react";

export interface FilterParams {
  colors: string[];
  sizes: string[];
  selectedColors: string[];
  setSelectedColors: Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: Dispatch<React.SetStateAction<string[]>>;
}