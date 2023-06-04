
let idNumber = 10

const decrementedId = (number : number) =>{
    return number + 1
}
export const createTodoId = () =>{

    const newOne = decrementedId(idNumber)
    idNumber = newOne;
    return newOne.toString()
}