$(document).ready(function(){
    
    //getting intial position of source
    var $initialSrc = $("#source").position();
    
    
    //set random position for target
    $("#target").css({
        'left': Math.random()* 90 + '%',
        'bottom': Math.random()* 80 + '%'
    });
    
    //calculates target's position
    var $targetPosn = $("#target").position();
    
    //finds current source position
    var $sourcePosn = $("#source").position();
    
    //moves source up, down, left and right on key press
    $(document).keydown(function(event){
        
        var key = event.which;
        if (key==37){
            //left key
            $("#source").animate({left: '-=10px'},50);
        }
        if (key==38){
            //up key
            $("#source").animate({top: '-=10px'},50);
        }
        if (key==39){
            //right key
            $("#source").animate({left: '+=10px'},50);
        }
        if (key==40){
            //down key
            $("#source").animate({top: '+=10px'},50);
        }
        
    });
});