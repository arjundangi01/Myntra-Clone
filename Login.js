
document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    var mobileinput=document.querySelector("#emailormobile").value

    mobileinput=localStorage.getItem("mobileno")
    var account=JSON.parse(localStorage.getItem("account"))
    var password=document.querySelector("#password").value
    console.log(typeof mobileinput)
    account.forEach(function(element,index,arr){
        if(password=="4444"&& (mobileinput == "1111111111" || mobileinput=="admin@gmail.com")){
            console.log("moin")
            window.location.href="./admin.html"
        } else if(password===element.password && (mobileinput == element.mobile || mobileinput==element.email)){
           window.alert("Successfully Login ")
            window.location.href="./home.html"
        }
    })

})