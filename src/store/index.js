/* eslint-disable no-useless-escape */
import { defineStore } from "pinia";
import data from "@/assets/data.json";

export const useCalculatorStore = defineStore("calculator", {
	state: () => ({
		calculatorRows: data,
		formula: "",
		text: "0",
		firstNumber: null,
		secondNumber: null,
		
	}),
});
