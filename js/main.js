// ********** DAY AND NIGHT **********
let body=document.querySelector("body");
let moon=document.querySelector(".fa-moon-o");
let star=document.querySelector(".fa-star");
moon.addEventListener("click",function(){
    body.style.backgroundImage="linear-gradient(rgba(37,45,56,0.1),rgba(37,45,56,0.1)),url('../images/pamidor.jpg')";
    moon.style.display="none";
    star.style.display="block";
});
star.addEventListener("click",function(){
    body.style.backgroundImage="linear-gradient(rgba(37,45,56,0.6),rgba(37,45,56,0.6)),url('../images/pamidor.jpg')";
    moon.style.display="block";
    star.style.display="none";
});
// ********** SEARCH **********
let mar2=document.querySelector("#mar2");
let inp1=document.querySelector("#inp1");
let search1=document.querySelector("#search1");
let times1=document.querySelector("#times1");
search1.addEventListener("click",function(){
    inp1.style.display="block"
    search1.style.display="none";
    times1.style.display="block";
    mar2.style.display="none";
})
times1.addEventListener("click",function(){
    inp1.style.display="none";
    search1.style.display="block";
    times1.style.display="none";
    mar2.style.display="block";
})
// ********** MENU BUTTON **********
let a1=document.querySelector("#a1");
let a2=document.querySelector("#a2");
let a3=document.querySelector("#a3");
let a4=document.querySelector("#a4");
a1.addEventListener("click",function(){
    a1.style.color="aqua";
    a2.style.color="#f1f1f1";
    a3.style.color="#f1f1f1";
    a4.style.color="#f1f1f1";
})
a2.addEventListener("click",function(){
    a2.style.color="aqua";
    a1.style.color="#f1f1f1";
    a3.style.color="#f1f1f1";
    a4.style.color="#f1f1f1";
})
a3.addEventListener("click",function(){
    a3.style.color="aqua";
    a1.style.color="#f1f1f1";
    a2.style.color="#f1f1f1";
    a4.style.color="#f1f1f1";
})
a4.addEventListener("click",function(){
    a4.style.color="aqua";
    a1.style.color="#f1f1f1";
    a2.style.color="#f1f1f1";
    a3.style.color="#f1f1f1";
})
// ********** CONTACT-US  **********
// let envelope=document.querySelector(".fa-envelope");
// let twitter=document.querySelector(".fa-twitter");
// let phone=document.querySelector(".fa-phone");
// let conA1=document.querySelector("#conA1");
// let conA2=document.querySelector("#conA2");
// let conA3=document.querySelector("#conA3");
// let words1=document.querySelector("#words1");
// let words2=document.querySelector("#words2");
// let words3=document.querySelector("#words3");
// let wordA1=document.querySelector("#wordA1");
// let wordA2=document.querySelector("#wordA2");
// let wordA3=document.querySelector("#wordA3");
// conA1.addEventListener("click",function(){
//     conA1.style.display="none";
//     words1.style.display="block";
//     wordA1.style.display="block";

// })
// wordA1.addEventListener("click",function(){
//     wordA1.style.display="none";
//     words1.style.display="none";
//     conA1.style.display="block";

// })
// conA2.addEventListener("click",function(){
//     conA2.style.display="none";
//     words2.style.display="block";
//     wordA2.style.display="block";

// })
// wordA2.addEventListener("click",function(){
//     wordA2.style.display="none";
//     words2.style.display="none";
//     conA2.style.display="block";

// })
// conA3.addEventListener("click",function(){
//     conA3.style.display="none";
//     words3.style.display="block";
//     wordA3.style.display="block";

// })
// wordA3.addEventListener("click",function(){
//     wordA3.style.display="none";
//     words3.style.display="none";
//     conA3.style.display="block";

// })
$("document").ready(function(){
    $("#conA1").click(function(){
        $("#words1").slideToggle();
    })
    $("#conA2").click(function(){
        $("#words2").slideToggle();
    })
    $("#conA3").click(function(){
        $("#words3").slideToggle();
    });
    $(".date-website p").click(function(){
        $(".footter-about p").hide();
        $(".footter-about i").slideToggle(2000);
    })
})
// ********** SEARCH SCROLL  **********
window.addEventListener("scroll",search);
function search(){
    let search=document.querySelector(".search");
    if(window.scrollY>=100){
        search.style.opacity="1";
        search.style.transform="scale(1)";
    }
    else{
        search.style.opacity="0";
        search.style.transform="scale(0)";
    }
}
window.addEventListener("scroll",fruits);
function fruits(){
    let fruits=document.querySelector(".fruits");
    if(window.scrollY>=180){
        fruits.style.opacity="1";
        fruits.style.transform="scale(1)";
    }
    else{
        fruits.style.opacity="0";
        fruits.style.transform="scale(0)";
    }
}
window.addEventListener("scroll",contact);
function contact(){
    let con=document.querySelector(".contact-us");
    if(window.scrollY>=580){
        con.style.opacity="1";
        con.style.transform="scale(1)";
    }
    else{
        con.style.opacity="0";
        con.style.transform="scale(0)";
    }
}
window.addEventListener("scroll",footter);
function footter(){
    let fot=document.querySelector(".footter");
    if(window.scrollY>=880){
        fot.style.opacity="1";
        fot.style.transform="scale(1)";
    }
    else{
        fot.style.opacity="0";
        fot.style.transform="scale(0)";
    }
}
$("document").ready(function(){
    $(".serach-input input").keyup(function(){
        var x=$(this).val().toLowerCase();
        $(".fruits, .fruits-type").hide();
        $(".fruits, .fruits-type").each(function(){
            var y=$(this).text().toLowerCase();
            if(y.indexOf(x)!=-1){
                $(this).show();
            }
        })
    })
});
