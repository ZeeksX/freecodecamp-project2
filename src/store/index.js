import { defineStore } from "pinia";
import data from "@/assets/data.json";

export const useCalculatorStore = defineStore("calculator", {

	state: () => ({
		calculatorRows: data,
	}),
  
});
