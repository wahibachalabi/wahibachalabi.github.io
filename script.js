$(document).ready(function(){

    $(".html").animate({
        width:"90%"
    },1500);

    $(".css").animate({
        width:"85%"
    },1500);

    $(".js").animate({
        width:"80%"
    },1500);

    $(".react").animate({
        width:"75%"
    },1500);
    $(".jquery").animate({width:"85%"},1500);
    $(".github").animate({width:"90%"},1500);

    $("#contactForm").submit(function(e){

        e.preventDefault();

        let name=$("#name").val();
        let email=$("#email").val();
        let message=$("#message").val();

        if(name==="" || email==="" || message===""){

            alert("Tous les champs sont obligatoires");

            return;
        }

        let regex=/^\S+@\S+\.\S+$/;

        if(!regex.test(email)){

            alert("Email invalide");

            return;
        }

        alert("Message envoyé avec succès !");

    });

});