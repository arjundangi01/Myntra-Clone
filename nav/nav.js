var obj = {
  name: "arjun",
  mobile: 8349831395,
};

display()

function display() {
    if (obj.name == "arjun") {
       
        var login = document.querySelector("#login");
        login.style.display = "none";
        var profile = document.querySelector("#profile");
      
        var hide = document.querySelectorAll(".hide");
        hide.forEach(function (element) {
          element.style.display = "none";
        });
        var namep = document.createElement("h4");
        namep.setAttribute("class", "info");
        namep.textContent = "Hello " + obj.name;
        namep.style.margin = "0";
      
        var nump = document.createElement("p");
        nump.textContent = obj.mobile;
        nump.style.margin = "0";
        nump.setAttribute("class", "info");
      
          profile.append(namep, nump);
          var logout = document.createElement("li");
          logout.textContent = "Logout"
        document.querySelector(".profiledrop").append(logout)
        
        logout.addEventListener("click", function () {
       
              obj.name = "";
              display();
          })
       
    } else if (obj.name == "") {
        var login = document.querySelector("#login");
        login.style.display = "block";
       
        var profile = document.querySelector("#profile");
        var info = document.querySelectorAll(".info");
      
        var hide = document.querySelectorAll(".hide");
        hide.forEach(function (element) {
          element.style.display = "block";
        });
        info.forEach(function (element) {
            element.style.display = "none";
          });
    }
    
     
    
}

