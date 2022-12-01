"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidFoodAmountError_1 = __importDefault(require("../error/InvalidFoodAmountError"));
const EmptyFoodNameError_1 = __importDefault(require("../error/EmptyFoodNameError"));
class Food {
    name;
    unit;
    baseValues;
    currentValues;
    constructor(name, unit, baseValues) {
        this.name = name;
        this.unit = unit;
        this.baseValues = baseValues;
        this.validateFoodName(name);
        this.validateFoodAmount(baseValues.amount);
        this.currentValues = { ...baseValues };
    }
    validateFoodAmount(amount) {
        if (amount <= 0) {
            throw new InvalidFoodAmountError_1.default(amount);
        }
    }
    validateFoodName(name) {
        if (name.length == 0) {
            throw new EmptyFoodNameError_1.default();
        }
    }
    calculateNutriment(nutriments) {
        nutriments.map(nutriment => {
            this.currentValues[nutriment] = this.calculNutritionFromAMount(nutriment);
        });
    }
    calculateAmountFromNutrition(nutrition) {
        return Math.ceil(this.currentValues[nutrition] * this.baseValues.amount / this.baseValues[nutrition]);
    }
    calculNutritionFromAMount(nutrition) {
        return Math.ceil(this.currentValues.amount * this.baseValues[nutrition] / this.baseValues.amount);
    }
    getName() {
        return this.name;
    }
    getUnit() {
        return this.unit;
    }
    getBaseValues() {
        return this.baseValues;
    }
    getCurrentValues() {
        return this.currentValues;
    }
    changeAmount(amount) {
        this.validateFoodAmount(amount);
        this.currentValues.amount = amount;
        this.calculateNutriment([
            'calorie',
            'fat',
            'carbohydrate',
            'protein'
        ]);
    }
    changeCalories(calories) {
        this.currentValues.calorie = calories;
        this.currentValues.amount = this.calculateAmountFromNutrition('calorie');
        this.calculateNutriment([
            'fat',
            'carbohydrate',
            'protein'
        ]);
    }
    changeFat(fat) {
        this.currentValues.fat = fat;
        this.currentValues.amount = this.calculateAmountFromNutrition('fat');
        this.calculateNutriment([
            'calorie',
            'carbohydrate',
            'protein'
        ]);
    }
    changeProtein(protein) {
        this.currentValues.protein = protein;
        this.currentValues.amount = this.calculateAmountFromNutrition('protein');
        this.calculateNutriment([
            'calorie',
            'carbohydrate',
            'fat'
        ]);
    }
    changeCarbohydrate(carbohydrate) {
        this.currentValues.carbohydrate = carbohydrate;
        this.currentValues.amount = this.calculateAmountFromNutrition('carbohydrate');
        this.calculateNutriment([
            'calorie',
            'protein',
            'fat'
        ]);
    }
}
exports.default = Food;
