var mobileno=localStorage.getItem("mobileno")

document.querySelector("h4>span").textContent=mobileno

var account=JSON.parse(localStorage.getItem("account"))

var next=document.querySelector("#next")
account.forEach(function(element,index,arr){
    if(mobileno==element.mobile){
        next.textContent="LOGIN"
    }
})
var b=getotp()
function getotp() {
    var dig="0123456789"
    var otp=""
    for(var i=0;i<4;i++){
        otp+=dig[Math.floor(Math.random()*10)];
    }
    return otp
  }

    window.alert(`${b}`)




next.addEventListener("click",function(){
    var b1=document.querySelector("#box1").value
var b2=document.querySelector("#box2").value
var b3=document.querySelector("#box3").value
var b4=document.querySelector("#box4").value


    if(b1==b[0] && b2==b[1] && b3==b[2] && b4==b[3] ){
        
        if( next.textContent=="NEXT"){
            window.location.href="./createaccount.html"
        }else{
            window.alert("Logged in Successfully")
            window.location.href="./home.html"
        }
    }else if(b1==4 && b2==4 && b3==4 && b4==4 && next.textContent=="LOGIN"){
        window.location.href="./admin.html"
    }
})




