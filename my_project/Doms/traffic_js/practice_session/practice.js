let obj={fname:"vinod",lname:"kushwaha",age:18,hello:
function greeteveryone(){
    c=`${this.fname}`
    return c
}
}
//console.log(obj.hello())


// for(let i in obj){
//     console.log(obj[i]);
// }

// for(let x in obj){
//     console.log(x);
// }

// for(let i in obj){
//     if(typeof obj[i]!=='function'&& typeof obj[i]!=='boolean'){
//         console.log(i);
//     }
// }
//     for(let i in obj){
//         console.log('first 2 iteration!',i)
//     if(typeof obj[i]!=='function'){
//         console.log('first 1 iteration!',i)
//       if(typeof obj[i]!=='boolean'){
//         console.log(i);
//     }
//     }
//   }  // console.log(typeof obj[i]);

console.log(Object.keys(obj).length)