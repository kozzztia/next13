
let idNumber = 1

const decrementedId = (number : number) =>{
    return number + 1
}
export const createTodoId = (length : number) =>{
    if( length <= 0){
        return idNumber
    }else{
        const newOne = decrementedId(idNumber)
        return idNumber = newOne
    }
}