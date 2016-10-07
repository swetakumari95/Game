$(document).ready(function(){
    
    //computing position of target ang source
    var $target_height = $("#target").height();
    var $target_width = $("#target").width();
    var $source_height = $("#source").height();
    var $source_width = $("#source").width();
    
    //alert("target "+$target_height+" " +$target_width);
    //alert("source "+$source_height+" "+$source_width);
    
    //set random position for target
    $("#target").css({
        'left': Math.random()* 90 + '%',
        'top': Math.random()* 90 + '%'
    });
    
    var $target_height = $("#target").height();
    var $target_width = $("#target").width();
    
    //alert("target_new "+$target_height+" "+$target_width);
});