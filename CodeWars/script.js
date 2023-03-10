function findUniq(arr) {
    let broj;
    for (let i = 0; i < arr.length - 1; i++){
        
        if (arr[i] !== arr[i] && arr[i] > arr[i] && arr) {
            broj = arr[i]
        }
    }
    return broj
}
  
// console.log(findUniq([1,1,1,4,1,1]))




function findAverage(arr) {
    var el = 0;
    var average1 = 0;
  for(let i = 0; i<arr.length; i++){
      el = el + arr[i] 
      console.log(el)
    average1 = el/arr.length
  }
    return average1
  }

    
// console.log(findAverage([1, 2, 3, 4, 5]))



function sum (numbers) {
    var zbir = 0;
      for(let i = 0; i<numbers.length; i++){
          zbir = zbir + numbers[i];
        
        if(numbers === []){
            return 0
          }
      }
      
        return zbir
};
    
// console.log(sum([]))






function noSpace(x){

  let arr = x.split("")
  let withoutSpaces = [];

  // console.log(arr)

  withoutSpaces = arr.filter((item, index) => {
    return item !== " "
  })
  
  

  
  return withoutSpaces.join("")
  
}

//  console.log(noSpace("dawdawd awdawdaw awwdawd awwdd d dawda "))




const sumArray = (array) => {

  
  
  
  if(array === null){
    return 0
  }
    if(array.length <= 2){
      return 0
    }
    
    const newArr = [...array].sort((a,b) => a-b)
   
    newArr.pop();
    newArr.shift();
    
    let sum = 0;
    newArr.forEach((item,index)=>{
      sum = sum + item
    })
    
    return sum
    
    
  }

// console.log("Sum = " + sumArray([7,2,4,5,3,2,9,1]))





// https://www.codewars.com/kata/5875b200d520904a04000003/solutions/javascript

function enough(cap, on, wait) {
 
  
  if(cap >= (on+wait)){
    return 0
  }
  else{
    return (on + wait) - cap
  }
  
}

// console.log(enough(100, 30, 80));


function squareSum(numbers){

  let el = 0;

  numbers.forEach((item, index) => {
   el = el + (item*item)
 })
  return el
}
// console.log(squareSum([1,3,2]))




let arej = ["Davud", "igra", "fudbal"]

let rijec = arej.join(" ");

// console.log(rijec)



function century(year) {

  let century = [];
  
  for(let i = 0; i<=year.length-1; i++){
    
       century.push(Math.ceil(year[i] / 100))
  
  }
    return century
  }

// console.log(century([1200,1300,1000,1905]))


const inicijali = (str) =>{
  
const arr3 = str.join("");
let inicijal = 0;
for(let i = 0; i<arr3.length -1; i++){
  
  let inicijal1 = 0;
  let inicijal2 = 0;
  if(arr3[i] === " "){
    inicijal = arr3[0] + arr3[i + 1]
    
    
    
  }
  if(arr3[i] !== " "){
    inicijal1 = arr3[0]
    inicijal2 = arr3[1]
    inicijal = inicijal1 + inicijal2.toUpperCase()
    
  }



}
return inicijal

}

// console.log(inicijali(["Davud Carovac"]))




  function squareDigits(num){

    let preArr = num+""
    const arr10 = preArr.split("")
    

   const arr4 = arr10.map((item,index)=> Number(item))
const arr5 = arr4.map((item,index)=> item * item)

    const arr6 = arr5.join("")


   return Number(arr6)
}

// console.log(squareDigits(765))


// for(let i = 0; i<=newArr.length -1; i++){
//    if(newArr[newArr.length -1]){
//     newArr[newArr.length-1] = newArr[newArr.length-1] + ""
//   } 
//   if(newArr[i]){
// newArr[i] = newArr[i] + "-"
//   }
// }  

function isPythagoreanTriple(integers) {
 
  integers.sort((a, b) => b - a)
    
  for (let i = 0; i <= integers.length - 1; i++) {
    if ((integers[0] * integers[0]) === ((integers[1] * integers[1]) + (integers[2] * integers[2]))) {
      return true
    }
    else {
      return false
    }
  }
} 

// console.log(isPythagoreanTriple([3, 4, 5]))




function numberToPower(number, power){
 
  let count = 1;

  for (let i = 1; i <= power; i++){
    count = count * number
  }
  return count

}

// console.log(numberToPower(3,4))



var summation = function (num) {
  
  let count = 0;
  
  for(let i = 0; i<=num; i++){
  count = count + i
  }
  return count
}

// console.log(summation(2))



function findShort(s){

  let a = s.split(" ");
  let shortest = a[0].length;
  let ind;
  
  for(let i = 0; i<=a.length-1; i++){
    ind = a[i].length
    if(shortest > ind){
      shortest = ind
    }
    
  }
return shortest
}

// console.log(findShort("Nadji najmanju duzinu stringa ud recenici."))



function betterThanAverage(classPoints, yourPoints) {
  let avg = 0;
  let total = 0;

  classPoints.forEach((item, index) => {
    total = total + item
  })

  avg = total / classPoints.length

  

 

  if (avg < yourPoints) {
    return true
  }

  else {
    return false
  }
}

// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))




function abbrevName(name){

  let name1 = name.split("");
  let first = name1[0].toUpperCase()
  let second;

  for (let i = 0; i <= name1.length; i++){
    if (name1[i] === " ") {
      second = name1[i + 1]
      return first + "." + second.toUpperCase()
    }
    else {
      return first + name1[1]
    }
  }
}

// console.log(abbrevName("davud"))


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
// mpg = fuelLeft * 25

  if (distanceToPump > (fuelLeft * mpg)) {
  return false
}
  else {
    return true
}
};

// console.log(zeroFuel(50,25,2))



function filter_list(l) {
 
  const listOfNum = l.filter((item,index)=> typeof(item) === "number")
return listOfNum

}

// console.log(filter_list([1,2,3,4,"Davud",34,"Carovac",9]));


function areYouPlayingBanjo(name) {
 
  if(name[0] === "r" || name[0] === "R")  {
    return name + " plays banjo"
  }
  else{
    return name + " does not plays banjo"
  }
  
}

// console.log(areYouPlayingBanjo("Davud"))


let b = "dawdawd"

// console.log(b)


function repeatStr (n, s) {
  
  let res = s;

  for (let i = 1; i <= n - 1; i++){
    res = res + s
  }
return res
}

// console.log(repeatStr(10,"Davud"))



// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

const isSquare =  (n) =>{

  if (n < 0) {
    return false
  }

  for (let i = 0; i <= n; i++){
    if (i * i=== n) {
      return true
    } 
    else {
      continue
    }
    
  }
return false

}

console.log(isSquare(6))