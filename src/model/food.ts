import InvalidFoodAmountError from "../error/InvalidFoodAmountError";
import Nutritions from "src/type/Nutrition";
import EmptyFoodNameError from "../error/EmptyFoodNameError";
import Units from "src/constante/Units";

class Food {
  private currentValues: Nutritions;
  constructor(
    private readonly name: string,
    private readonly unit: Units,
    private readonly baseValues: Nutritions
  ){
    this.validateFoodName(name);
    this.validateFoodAmount(baseValues.amount);
    this.currentValues = { ...baseValues };
  }

  private validateFoodAmount(amount: number) {
    if (amount <= 0) {
      throw new InvalidFoodAmountError(amount);
    }
  }

  private validateFoodName(name: string) {
    if (name.length == 0) {
      throw new EmptyFoodNameError();
    }
  }

  private calculateNutriment(nutriments: Array<keyof Nutritions>): void {
    nutriments.map(nutriment => {
      this.currentValues[nutriment as keyof Nutritions] = this.calculNutritionFromAMount(nutriment)
    })
  }

  private calculateAmountFromNutrition(nutrition: keyof Nutritions): number {
    return Math.ceil(
      this.currentValues[nutrition] * this.baseValues.amount / this.baseValues[nutrition]
    )
  }

  private calculNutritionFromAMount(nutrition: keyof Nutritions): number{
    return Math.ceil(
      this.currentValues.amount * this.baseValues[nutrition] / this.baseValues.amount
    );
  }

  getName(): string {
    return this.name
  }

  getUnit(): string {
    return this.unit  
  }

  getBaseValues(): Nutritions {
    return this.baseValues
  }

  getCurrentValues(): Nutritions {
    return this.currentValues
  }

  changeAmount(amount: number): void {
    this.validateFoodAmount(amount)
    this.currentValues.amount = amount;
    this.calculateNutriment([
      'calorie',
      'fat',
      'carbohydrate',
      'protein'
    ])
  }

  changeCalories(calories: number): void {
    this.currentValues.calorie = calories;
    this.currentValues.amount = this.calculateAmountFromNutrition('calorie')
    this.calculateNutriment([
      'fat',
      'carbohydrate',
      'protein'
    ])
  }

  changeFat(fat: number): void {
    this.currentValues.fat = fat;
    this.currentValues.amount = this.calculateAmountFromNutrition('fat')
    this.calculateNutriment([
      'calorie',
      'carbohydrate',
      'protein'
    ])
  }

  changeProtein(protein: number): void {
    this.currentValues.protein = protein;
    this.currentValues.amount = this.calculateAmountFromNutrition('protein')
    this.calculateNutriment([
      'calorie',
      'carbohydrate',
      'fat'
    ])
  }

  changeCarbohydrate(carbohydrate: number): void {
    this.currentValues.carbohydrate = carbohydrate;
    this.currentValues.amount = this.calculateAmountFromNutrition('carbohydrate')
    this.calculateNutriment([
      'calorie',
      'protein',
      'fat'
    ])
  }
}

export default Food;