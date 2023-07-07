var mobileno=localStorage.getItem("mobileno")

document.querySelector("h4>span").textContent=mobileno

var account=JSON.parse(localStorage.getItem("account"))

var next=document.querySelector("#next")
account.forEach(function(element,index,arr){
    if(mobileno==element.mobile){
        next.textContent="LOGIN"
    }
})





next.addEventListener("click",function(){
    var b1=document.querySelector("#box1").value
var b2=document.querySelector("#box2").value
var b3=document.querySelector("#box3").value
var b4=document.querySelector("#box4").value
    console.log(b1)
    if(b1==1 && b2==2 && b3==3 && b4==4 ){
        
        if( next.textContent=="NEXT"){
            window.location.href="./createaccount.html"
        }else{
            window.location.href="./home.html"
        }
    }else if(b1==4 && b2==4 && b3==4 && b4==4 && next.textContent=="LOGIN"){
        window.location.href="./admin.html"
    }
})




