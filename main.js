
function activeSidebar(){
    document.querySelector(".sidebarContainer").style.display="inline-block";

}
function deActiveSidebar(){
    document.querySelector(".sidebarContainer").style.display="none";

}
function goToEducation(){
    document.querySelector(".sidebarContainer").style.display="none";
    document.getElementById("goToEducation").setAttribute("href","#allEdu")
}
function signIn(){
    document.getElementById("beforeLoginBut").style.display = "none"
    location.replace("form.html")
}

function inputStyleName(){
    document.querySelector(".formContainer form #name").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer form #name legend").style.display="inline-block";
    document.querySelector(".formContainer form #name input").setAttribute("placeholder","");
    document.querySelector(".formContainer form #name input").style.textAlign ="right";
    document.querySelector(".formContainer form #name input").style.direction ="rtl";
    document.querySelector(".formContainer form #email input").disabled = false;
}
function inputStyleName2(){
    document.querySelector(".formContainer2 form #name2").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer2 form #name2 legend").style.display="inline-block";
    document.querySelector(".formContainer2 form #name2 input").setAttribute("placeholder","");
}

function inputStyleEmail(){
    document.querySelector(".formContainer form #email").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer form #email legend").style.display="inline-block";
    document.querySelector(".formContainer form #email input").setAttribute("placeholder","");
    document.querySelector(".formContainer form #email input").style.textAlign ="left";
    document.querySelector(".formContainer form #email input").style.direction ="ltr";
    var name = document.querySelector(".formContainer #fieldsetContainer #name input").value;
    document.querySelector(".formContainer form #mobile input").disabled = false;
    if(name.length<4){
        alert("طول نام کابری شما نباید از ۴ حرف کمتر باشد");
    }
    else if(name.length>12){
        alert("طول نام کاربری شما نباید از ۱۲ حرف بیشتر باشد")
    }
}
function inputStyleMobile(){
    document.querySelector(".formContainer form #mobile").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer form #mobile legend").style.display="inline-block";
    document.querySelector(".formContainer form #mobile input").setAttribute("placeholder","");
    document.querySelector(".formContainer form #mobile input").style.textAlign ="left";
    document.querySelector(".formContainer form #mobile input").style.direction ="ltr";
    var email = document.querySelector(".formContainer #fieldsetContainer #email input").value;
    document.querySelector(".formContainer form #pass input").disabled = false;
    if(email.includes("@")!=true && email.includes(".") !=true){
        alert("فرمت ایمیل به درستی وارد نشده است")
    }
}

function inputStylePass(){
    document.querySelector(".formContainer form #pass").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer form #pass legend").style.display="inline-block";
    document.querySelector(".formContainer form #pass input").setAttribute("placeholder","");
    document.querySelector(".formContainer form #pass input").style.textAlign ="left";
    document.querySelector(".formContainer form #pass input").style.direction ="ltr";
    var mobile = document.querySelector(".formContainer #fieldsetContainer #mobile input").value;
    document.querySelector(".formContainer form #passRepeat input").disabled = false;
    if(mobile.length != "11"){
        alert("طول شماره موبایل شما معتبر نیست")
    }
}
function inputStylePass2(){
    document.querySelector(".formContainer2 form #pass2").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer2 form #pass2 legend").style.display="inline-block";
    document.querySelector(".formContainer2 form #pass2 input").setAttribute("placeholder","");
    document.querySelector(".formContainer2 form #pass2 input").style.textAlign ="left";
    document.querySelector(".formContainer2 form #pass2 input").style.direction ="ltr";
}
function inputStylePassR(){
    document.querySelector(".formContainer form #passRepeat").style.boxShadow="1px 1px 12px rgb(75, 69, 143)";
    document.querySelector(".formContainer form #passRepeat legend").style.display="inline-block";
    document.querySelector(".formContainer form #passRepeat input").setAttribute("placeholder","");
    document.querySelector(".formContainer form #passRepeat input").style.textAlign ="left";
    document.querySelector(".formContainer form #passRepeat input").style.direction ="ltr";
    var pass = document.querySelector(".formContainer #fieldsetContainer #pass input").value;

    // if(pass.includes("@")!=true || pass.includes("_")!=true || pass.includes("&")!=true){
    //     alert("پسورد شما باید شامل علامت های خاص مثل @ ، _ یا & باشد")
    // }
     if(pass.length <6){
        alert("طول پسورد شما کوتاهتر از حد مجاز است")
    }
    else if(pass.length >15){    
        alert("طول پسورد شما بلندتر از حد مجاز است")  
    }i

}
function evaluation(){
    var name = document.querySelector(".formContainer #fieldsetContainer #name input").value;
    var email = document.querySelector(".formContainer #fieldsetContainer #email input").value;
    var mobile = document.querySelector(".formContainer #fieldsetContainer #mobile input").value;
    var pass = document.querySelector(".formContainer #fieldsetContainer #pass input").value;
    var passRepeat = document.querySelector(".formContainer #fieldsetContainer #passRepeat input").value;
       if(pass == passRepeat){
        document.querySelector(".sure").style.display = "block"
        document.querySelector(".sure #yourName").innerHTML =name;
        document.querySelector(".sure #yourEmail").innerHTML = email;
        document.querySelector(".sure #yourMobile").innerHTML = mobile;
        document.querySelector(".sure #yourPass").innerHTML = pass;
       }
        
      else{
        alert("پسورد و تکرار پسورد یکسان نیستند");
        document.querySelector(".form-pic-container .formContainer").style.display="inline-block";
        document.querySelector(".form-pic-container .formContainer2").style.display="none";
      }

}
class person{
    constructor(user,pass){
       this.userName = user;
       this.password = pass;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function yesFunction(){
    var name = document.querySelector(".formContainer #fieldsetContainer #name input").value;
    var pass = document.querySelector(".formContainer #fieldsetContainer #pass input").value;
    p1 = new person(name,pass)
    document.querySelector(".sure").style.display="none";
    document.querySelector(".welcome").style.display="block";
    document.querySelector(".form-pic-container .formContainer").style.display="none";
    document.querySelector(".form-pic-container .formContainer2").style.display="inline-block"; 
    // location.replace("index.html");
}
function checkSignIn(){
   let name2 = document.querySelector(".formContainer2 form #name2 input").value;
   let pass2 = document.querySelector(".formContainer2 form #pass2 input").value;
   if(p1.userName === name2 && p1.password ===pass2){
    location.href="index.html"
    // document.getElementById("afterLoginTag").setAttribute("style","display:flex;")
    // document.getElementById("beforeLoginBut").style.display="none"
   }
   else{
    alert("نام کاربری یا رمز ورود اشتباه است!");
   }
}

function noFunction(){
    location.reload();
}
function closeWelcome(){
    document.querySelector(".welcome").style.display="none"
}

function changeFormToLogIn(){
    document.querySelector(".form-pic-container .formContainer").style.display="none";
    document.querySelector(".form-pic-container .formContainer2").style.display="inline-block";
    
}

   function changeFormToSignIn(){
       document.querySelector(".form-pic-container .formContainer").style.display="inline-block";
       document.querySelector(".form-pic-container .formContainer2").style.display="none";
   }

   function showInfo(){
        document.getElementById("Info").classList.add("accountAddStyle");
        document.getElementById("accountInfo").style.display="inline-block";
        document.getElementById("accountEducation").style.display="none";
        document.getElementById("accountOpinion").style.display="none";
    } 
    function deShowInfo(){
        document.getElementById("Info").classList.remove("accountAddStyle");
    }
    function showLesson(){
        document.getElementById("myLesson").classList.add("accountAddStyle");
        document.getElementById("Info").classList.remove("accountAddStyle");
        document.getElementById("accountInfo").style.display="none";
        document.getElementById("accountEducation").style.display="inline-block";
        document.getElementById("accountOpinion").style.display="none";
        }
    function deShowLesson(){
        document.getElementById("myLesson").classList.remove("accountAddStyle");
    }
    function showOpinion(){
        document.getElementById("Opinion").classList.add("accountAddStyle");
        document.getElementById("Info").classList.remove("accountAddStyle");
        document.getElementById("accountInfo").style.display="none"
        document.getElementById("accountEducation").style.display="none";
        document.getElementById("accountOpinion").style.display="inline-block";
    }
    function deShowOpinion(){
        document.getElementById("Opinion").classList.remove("accountAddStyle");
    }

                                                                           
    function showLogOut(){
        document.getElementById("logOut").classList.add("accountAddStyle");
        location.replace("form.html");
    }
    function deShowLogOut(){
        document.getElementById("logOut").classList.remove("accountAddStyle");
    }
    function showCities(){
        let selectedOption = document.getElementById("provincy").value;
        if( selectedOption == "tehran"){
            document.getElementById("tehran").style.display="inline"
            document.getElementById("gilan").style.display="none"
            document.getElementById("alternative").style.display="none"
        }
        else if(selectedOption == "gilan"){
            document.getElementById("gilan").style.display="inline"
            document.getElementById("tehran").style.display="none"
            document.getElementById("alternative").style.display="none"
        }
    }  

    var eduCount = 0 ;
    var clonedEdu = 0 ;
    const educationsList = [];

    function addEducation(){
        if(eduCount < 3){
            var eduContainer = document.querySelector("#accountInfo .educationContent .sub_EducationContent");
            clonedEdu = eduContainer.cloneNode(true);
            educationsList.push(clonedEdu)
            document.querySelector("#accountInfo .educationContent").appendChild(clonedEdu);
            document.querySelector("#accountInfo .educationContent").style.display="block"
            clonedEdu.style.display="flex"
            eduCount++;
        }
    }

   function removeEducation(){
        if(eduCount ==1 ){
            var deleted = educationsList.pop();
            document.querySelector("#accountInfo .educationContent").removeChild(deleted);
            document.querySelector("#accountInfo .educationContent").style.display="none"
            eduCount--;
        }

        else if(eduCount > 1 ){
            var deleted = educationsList.pop();
            // deleted.remove(); هر سه روش کار می کنن
            // deleted.parentNode.removeChild(deleted);
            document.querySelector("#accountInfo .educationContent").removeChild(deleted);
            eduCount--;
        }

    }
    function videoToggle(x){
        var thisId = x.id ;
        for(var i=1 ; i<8 ; i++){
            if(thisId == "v"+i)
            {
                const thisDiv = document.getElementById('videoDiv'+i);
                const thisDivDisplay = window.getComputedStyle(thisDiv).display;
                if(thisDivDisplay == "flex"){
                    document.getElementById("videoDiv"+i).style.display="none"
                    document.getElementById("iUp"+i).style.display="none"
                    document.getElementById("iDown"+i).style.display="flex"


                }
                else{
                    document.getElementById("videoDiv"+i).style.display="flex"
                    document.getElementById("iDown"+i).style.display="none"
                    document.getElementById("iUp"+i).style.display="flex"

                }
            }
        }

    }

   function colorRange(){
    document.getElementById("afterFooter").classList.add("colorRange");
   }

   var countOpinion = 0;
   function setOpinion(){
    countOpinion++ ;
    let name = document.querySelector(".opinionContainer .sendOpinion .opinonLabel input").value;
    let Opinion = document.querySelector(".opinionContainer .sendOpinion .opinionText input").value;
    document.querySelector(".opinionContainer").innerHTML += "<div id="+countOpinion+" class='yourOpinion'> <div class='userN'> <img src='images/unknownUser_318-644324.avif'><label >"+ name +"</label><i onclick='clearMessage()' class='iconMiddle fa fa-close'></i> </div> <div class='userOpinion'> <label>"+ Opinion +"</label> </div> </div>";
   }

   function clearMessage(){
        document.getElementById(countOpinion).style.display = "none";
        countOpinion-- ;
   }

const products = new Map([
    ["پایتون","product_python.html"],
    ["python","product_python.html"],
    ["اکسل","product_excel.html"],
    ["excel","product_excel.html"],
    ["اصول و مبانی برنامه نویسی","product_programming.html"],
    ["programming","product_programming.html"],
    ["photoshop","product_photoshop.html"],
    ["فتوشاپ","product_photoshop.html"]
]);

function search(){
   let searched = document.getElementById("searched").value;
    for(const item of products.keys()){
        if(item.includes(searched)){
            location.replace(products.get(item))
        }
    }
}
var input = document.getElementById("searched");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("find").click();
  }
});


function doSearch(){
    var navInput = document.querySelector(".navBar .navSearched .navSearchedInput");
    navInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        let navSearched = document.querySelector(".navBar .navSearched .navSearchedInput").value;
        for(const item of products.keys()){
            if(item.includes(navSearched)){
                location.replace(products.get(item))
            }
        }
    }
    });
}
