



$(window).scroll(function(){
    if(this.scrollY>20){
        $(".navbar").addClass("sticky");
    }
    else{
        $(".navbar").removeClass("sticky");
    }
})

//toggle menu/navbar script
$(".menu-btn").click(function(e){
    $(".navbar .menu").toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})



