class InvalidFoodAmountError extends Error {
  constructor(
    amount: number
  ){
    super(`Invalid amount ${amount}. It must be a positive number.`);
  } 
}

export default InvalidFoodAmountError