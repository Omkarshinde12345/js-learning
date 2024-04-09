
console.log("=======================STEP 1===========================");
let show = () =>{
console.log(`Good Morning,Today is Monday`);
}
show();
console.log("=======================STEP 2===========================");
function multiplication(n1,n2,n3=1) {
console.log(`Given Value: ${n1},${n2},${n3}`);
console.log(`Multiplication is :${n1*n2*n3}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log("=======================STEP 3===========================");
let add = (n1,n2,n3,n4,n5)=>{
    console.log(`Given Values :${n1},${n2},${n3},${n4},${n5}`);
    console.log(`Addition is:${n1+n2+n3+n4+n5}`);
}
add(100,100,200,349,756);
add("I Am " , " learning " , " ES6 " , " features " , " in Depth"
)