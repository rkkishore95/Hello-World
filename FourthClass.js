// // // Loop -> perform a set of task again and again until the condition gets satisfied
// // // Initialization -> Starting point of the loop
// // // Condition  -> Ending point of the loop
// // // iteration

// // // SYNTAX -> for(Inizialization; condition ; Iteration){statement}



// // // let i;
// // // for (  i = 10; i>=0;i--) {
// // //      console.log(i);       
// // // }

// // // Nested loop  --> A loop inside another loop

// // // for(let a = 1;a<=5;a++){
// // //     for(let b= 1; b<=5;b++){
// // //         console.log(a);     
// // //     }
// // // }

// // // 1
// // // 12
// // // 123
// // // 1234
// // // 12345


// // // for(let a = 1;a<=5;a++){
// // //     let result = 1 ;
// // //     // for(let b= 1; b<=a;b++){
// // //         // console.log(a);     
// // //         result *= a;
// // // // }
// // //         console.log(result);
    
// // // }

// // // for(let a = 1; a<=3;a++){
// // //     console.log(String(a).repeat(3));
    
// // // }

// // // let def ;
// // // console.log(def);

// // //  let result = 1;
// // // for(let a = 1;a<=5;a++){ 
    
// // //     result *=a; 
// // // }
// // //  console.log(result);


// // // While Loop(Entry checking loop)

// // // SYNTAX 
// // // Initialization
// // // while(condition){statement; iteration}

// // let a = 1;

// // while(a>10){
// //     // a++;
// //     console.log(a);
// //     a++;
    
// // }

// // // Do While Loop(Exit Checking Loop)
// // // SYNTAX 
// // // Initialization
// // //do{statement; iteration}
// // // while(condition);

// // let a1 = 1;
// // do{
// //     console.log(a1);
// //     a1++;
    
// // }while(a1>10);





// // // let str = "Automation";
// // // let result = "";
// // // for(let a = str.length-1; a>=0;a-- ){   
// // //     result += str[a];
     
// // // }
// // // console.log(result);




// // Condition Statements(if --- else)   -> It gives the statements only when the condition is true

// // let age = 19;
// // if(age > 18){
// //     console.log("im eligible");   
// // }
// // else {
// //     console.log("im not eligible");
    
// // }

// // let marks = 70;
// // if(marks >90){
// // console.log("Grade A");
// // }
// // else if(marks >80){
// // console.log("Grade B");

// // }
// // else if(marks >70){
// // console.log("Grade C");

// // }
// // else if(marks >60){
// // console.log("Grade D");

// // }
// // else{
// //     console.log("Grade E");
    
// // }

// // let sub = [60,70,90,56,78];
// // for(let i = 0; i<= sub.length-1;i++){
// //     if(sub[i] > 90){
// //         console.log("Grade A");
        
// //     }else if(sub[i] > 80){
// //         console.log("Grade B");
        
// //     } else if(sub[i] > 70){
// //         console.log("Grade C");
        
// //     } else if(sub[i] > 60){
// //         console.log("Grade D");
        
// //     }else{
// //         console.log("Grade E");
        
// //     }
// // }

// // SwitchCase Statements

// let marks = 90;
// switch (marks) {
//     case 90: console.log("Grade A");
//      break;   // Teerminates the loop
//     case 80: console.log("Grade B");
//     break;
//     case 70: console.log("Grade C");
//     break;
//     case 60: console.log("Grade D");
//     break;
//     case 50: console.log("Grade E");
//     break;   
      

//     default:console.log("none");
//     break;
        
// }



// // Palindrome

let str = "Madam";
let str1 = str.toLowerCase();
// let rev = str1.split('').reverse().join('');
// console.log(rev);


// if(str1 === rev){
//     console.log("is palindrome");
    
// }else{
//     console.log("not a palindrome");
    
// }


// let rev1 ="";
// // str1.length -1 = 4
// for(let i = str1.length-1; i>=0;i--){
//     rev1= rev1 + str1[i];

// }
// console.log(rev1);


// 54321
// 5432

// for(let i = 1; i<=5 ; i++){
//     let res = "";
//     for(let j = 5; j >=i ; j--){
//         res +=j;
//     }console.log(res);  
// }



let n = 5;
for(let i = 1; i <=n; i++){
    let res = "";
    // for spaces
    for(let j = 1; j <= n-i;j++){
        res += " ";
    }
    // for stars
    for(let k = 1; k <=(2*i - 1);k++){
        res += k;
    }console.log(res);
    
}
for(let i = n; i >=1; i--){
    let res = "";
    // for spaces
    for(let j = 1; j <= n-i;j++){
        res += " ";
    }
    // for stars
    for(let k = 1; k <=(2*i - 1);k++){
        res += k;
    }console.log(res);
    
}



// Object -> Collection of key and value pairs

let user = {
    name : "Nithees",
    age  : 24,
    role : "tester",
    exp  : 3,
   salary: 30000
}

console.log(user["name"]);


// Nested Object

let details = {
    name : "Nithees",
    age  : 24,
    address : {
        block : 3,
        city : "Sivakasi"
    }
}
delete details.address
console.log(details);
details.name="Gopi";
console.log(details.name);


// console.log(details.address.city);

for (const user in details) {
    
    console.log(user ,details[user] );   
    
}
let s = "Nithees";
for (const value of s) {
    console.log(value);
    
}

let arr = [1,2,3,4,5];
arr.forEach(function(value ,index){
    console.log(index,value);
    
})