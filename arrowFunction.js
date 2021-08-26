function square(number){
    return number*number;
}
const result = square(2);
//console.log(result);

function addNumber (num1,num2){
    return num1 + num2;
}
const results= addNumber(10,90);
///console.log(results)

//arrow function

const multiple = num => num/2;
const multiple2 = ()=>  "Heyyyyyyyyy this is shit";
const multiple3 = (number)=> {
    const result = number+number;
    const result2= result*2;
    return result2;
}

console.log(multiple(50))
console.log(multiple2())
console.log(multiple3(3))