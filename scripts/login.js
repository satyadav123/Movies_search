// document.querySelector("form").addEventListener("submit",myfun)
// array=JSON.parse(localStorage.getItem("data"))


// function myfun(event){
//     event.preventDefault()
//    // let l=document.querySelector("#email").Value
//     let email="sk259454@gmail.com"
    
//    let password=document.getElementById("passrd").value
    
// array.forEach(function(ele){

//   if((email==ele.e)&&(password==ele.pass)){
//     alert("welcome! you are successfully login")
//     break;
//   }
//   else{
//     alert("wrong infomation")
//   }
// });
  
//}
document.querySelector("form").addEventListener("submit",SignInFunction)
var LoginArr= JSON.parse(localStorage.getItem("data"))
// console.log(LoginArr)
// console.log(LoginArr)
function SignInFunction(event){
event.preventDefault();
var Email=document.querySelector("#email").value
// console.log(Email)
var Password=document.querySelector("#passrd").value
//console.log(LoginArr[10].Login_Eid)
var count=0;
for(var i=0;i<LoginArr.length;i++){
if(LoginArr[i].e==Email && LoginArr[i].pass==Password){
    
    window.location.href="index.html"
    alert("Login SuccesFully")
}
else{
count++;
}
}
if(count==LoginArr.length){
alert("Invalid")
}
}