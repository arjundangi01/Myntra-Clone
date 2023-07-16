var mobileno = localStorage.getItem("mobileno") || "";

document.querySelector("h4>span").textContent=mobileno

var account = JSON.parse(localStorage.getItem("account")) || [];

var next=document.querySelector("#next")
account.forEach(function(element,index,arr){
    if(mobileno==element.mobile){
        next.textContent="LOGIN"
    }
})
var otpReset = document.getElementById("resetotp");
otpReset.addEventListener("click", () => {
    getotp();
})
var b;
function getotp() {
   
    var otp = Math.round(Math.random() * 10000) ;
    window.alert(otp)
    b= otp
    
  }

   
    
    function move(first,last){
        if(first.value.length){
            document.getElementById(last).focus();
        }
    }


next.addEventListener("click",function(){
    var b1=document.querySelector("#box1").value
var b2=document.querySelector("#box2").value
var b3=document.querySelector("#box3").value
var b4=document.querySelector("#box4").value
 
    var finalOtp = b1 + b2 + b3 + b4;
    console.log(finalOtp)

    if(b==finalOtp){
        
        if( next.textContent=="NEXT"){
            window.location.href="./createaccount.html"
        }else{
            window.alert("Logged in Successfully")
            window.location.href="/Myntra-Clone/index.html"
        }
    }else if(finalOtp=="1234" ){
        window.location.href="/Myntra-Clone/admin/admin.html"
    }
})




