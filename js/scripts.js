$(document).ready(function(){
    $("#myCarousel").carousel({ interval:2000})  
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa fa-pause')){
            $("#myCarousel").carousel('pause')
            $("#carouselButton").children('span').removeClass('fa fa-pause')
            $("#carouselButton").children('span').addClass('fa fa-play')
        }else{
            
            $("#myCarousel").carousel('cycle')
            $("#carouselButton").children('span').removeClass('fa fa-play')
            $("#carouselButton").children('span').addClass('fa fa-pause') 
            
        }
    })
    $('#loginButton').click(function(){
        $("#loginModal").modal("show")
    })
    $('#reserveButton').click(function(){
        $("#reservationModal").modal("show")
    })
    
   
})