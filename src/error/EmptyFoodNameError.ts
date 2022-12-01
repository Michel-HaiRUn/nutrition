class EmptyFoodNameError extends Error {
  constructor(
    message: string = 'Empty food name is not allowed'
  ){
    super(message)
  } 
}

export default EmptyFoodNameError