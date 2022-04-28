document.querySelector("form").addEventListener("submit",myfun)
array=JSON.parse(localStorage.getItem("data"))||[]
function myfun(event){
    event.preventDefault();
   Name=document.getElementById("name").value

   phone=document.getElementById("phone").value
 
   email=document.getElementById("email").value
  
   password=document.getElementById("passrd").value

obj={
  n:Name,
  p:phone,
  e:email,
  pass:password,
}

array.push(obj)

localStorage.setItem("data",JSON.stringify(array))

alert("NOW YOU ARE REGISTER")
window.location.href="login.html"

}
