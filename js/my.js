//  let a=prompt("mời nhập số a")
//  let b=prompt("mời nhập số b")
//  function min(a,b){
//      if(a>b){
//          alert(a);
//          }   
//      else if(b>a){
//          alert(b);
//      }
//          else{
//              alert(a,b);
//          }
        
//  }
//  min(a,b);   
// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert( pow(3,3) );

// let a=prompt("mời nhập số a");
//          let b=prompt("mời nhập số b");
//          if (a>b)
//              alert('min của 2 số là: '+ b);
//          else (a<b)
//             alert('min của 2 số là: '+ a);
    
//  function so_mu(x,n){
//             alert('x mũ n bằng: '+(x**n));             
//         }
//         let soa=prompt("mời nhập hệ số ");
//         let sob=prompt("mời nhập số mũ");
//         so_mu(soa,sob)


// let a = 0;
// function tong(a,b){
//     return a+b;
// }
// a = tong(4,5);
// // alert(a);


// let tg = (a,b) => {
//     let c = a+b;
//    return c-1;
// };


// let ask= (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();  
// } 
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );


// let i = 0;
// while (i < 3) {       
//   alert( `number ${i}!` );
//   i++;dfdfg
// }

// let user ={
//   name: "john",
//   age: 30,
// }
// console.log(user.name);
// user.surname=["smith"];
// user.name=["pete"];
// alert(user.name+"   "+user.surname);
// delete user.name;   

let nhanvien1 = {
  ten: "huy",
  luong: 3000
}
let nhanvien2 = {
  ten: "duy",
  luong: 2000
}
let nhanvien3= {
  ten: "vien",
  luong: 2000
}
let arrs = [nhanvien1, nhanvien2, nhanvien3]
let sum = 0
for(let i = 0; i < arrs.length; i++){
sum= arrs[i].luong + sum;
}


// let newAr = [];
function deleteobj(arrs){
  
  let choose = prompt('xoa vi tri  nao',);
  arrs1 = arrs.splice(1,1,arrs);
  // for(let i = 0; i <arrs choose ; i++){
  //   newAr.push(arrs[i]);
  // }
  // newAr.pop();
}

sdfsdf


deleteobj(arrs);
// arrs =arrs.concat (newAr);



  
