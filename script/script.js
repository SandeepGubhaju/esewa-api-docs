// function contentHide(){
//     var x=document.querySelectorAll(".content-para1")
//     if(x.style.display==="none"){
//         x.style.display="block";
//     }else{
//         x.style.display="none"
//     }
// }

$(document).ready(function(){
    $("h4").click(function(){
        $(".content-para1").toggle();
    });
    
});

$(document).ready(function(){
    $("h6").click(function(){
        $(".content-para2").toggle();
    });
    
});

$(document).ready(function(){
    $("h6").click(function(){
        $(".content-para3").toggle();
    });
    
});

$(document).ready(function(){
    $("h4").click(function(){
        $(".epay-content-para").toggle();
    });
    
});