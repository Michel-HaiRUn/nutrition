import Nutritions from "src/type/Nutrition";
import Units from "src/constante/Units";
declare class Food {
    private readonly name;
    private readonly unit;
    private readonly baseValues;
    private currentValues;
    constructor(name: string, unit: Units, baseValues: Nutritions);
    private validateFoodAmount;
    private validateFoodName;
    private calculateNutriment;
    private calculateAmountFromNutrition;
    private calculNutritionFromAMount;
    getName(): string;
    getUnit(): string;
    getBaseValues(): Nutritions;
    getCurrentValues(): Nutritions;
    changeAmount(amount: number): void;
    changeCalories(calories: number): void;
    changeFat(fat: number): void;
    changeProtein(protein: number): void;
    changeCarbohydrate(carbohydrate: number): void;
}
export default Food;
