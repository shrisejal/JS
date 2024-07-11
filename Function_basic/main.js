// const FIRST_NAME ='';
//   let myFirstName = getMyFirstName();
// function getMyFirstName(){
//    const FIRST_NAME ="Sejal";
//    return FIRST_NAME;
   
// }
 
  
//    console.log(myFirstName);
//    console.log(FIRST_NAME);
    
    
    function getMyFullName(firstName=" " , lastName=" "){
       
    return   firstName +" "+ lastName;
    
     }
     
    function addition(integerOne , integerTwo){
    return integerOne + integerTwo;
    }
    function subtraction(integerOne,integerTwo){
        return integerOne - integerTwo;

    }
    let myFullName = getMyFullName("sejal","shrivastava");
    let myMistakeFullName = getMyFullName("sejal");
    let add = addition(4,6);
    let sub  =  subtraction(9,5);
    // console.log(myFullName);
    console.log(add);
    // console.log(sub);
    console.log(myMistakeFullName);

    function sum(a,b,...args){
       let num = a+b;

        for(let n of args){
            num = num + n;
        }
        return num;
    }
    let result = sum(4,5,6,7,8);
    console.log(result);

    function isPrime(n){
        if(n<2){
            return `${n} is not a prime number`;
        }
    
        for(let i = 2;i<n;i++){
            if(n%i===0){
                return `${n} is not a prime number`;
            }
        }
    
        return `${n} is a prime number`;
    
    }
    console.log(isPrime(143));
        
        
    



  
   

// why function work efficiently even if we call a function before the function defination?
// what is mutable and immutable in js?
// challenge 1: In this pattern can't ignore optional parameter
// challenge 2: In this pattern I can't pass dynamic or as much as needed parameter

    