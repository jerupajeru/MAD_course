// Normal Function
function students(){
    var name = "ayesha";
    console.log(name);
}
// Anonymous Funnction
let age = function (){
    console.log("22");
}
// Arrow function
const contactNo =()=>{
    console.log("03316937174");
}

students();
age();
contactNo();

// simple if else
if(50<60){
    console.log("50 less than 60");
}
else{
    console,log("error");
}
// ternary if else
(5<9) ? console.log("5 less than 9") : console.log("Error");
// AND operator
(2<3)&& console.log("2 less than 3");

// empty array fill data later on
const arr =[];
arr[0]=1;
arr[1]='Ayesha';
console.log(arr);
// array with data
let arr1 = ['ayesha',2];
console.log(arr1);

//array with new keyword
let arr3 = new Array (1,2,3,4,5);
console.log(arr3);