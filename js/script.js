$(document).ready(function(){
    
    //getting intial position of source
    var $initialSrc = $("#source").position();
    var score = 0;
    var hit = 0;
    
    var startTime = 60;
    var countDown = setInterval(function (){
        $("#timer").html("TIMER : "+ startTime);
        if (startTime==0){
            clearInterval(countDown);
            $("#scoredialog").html("Your score is "+ score);
            if (score<=5){
                $("#comments").html("You can do much better! :/");
            }else if (score<=10){
                $("#comments").html("Great going, those evil piggies had it coming! :D");
            }else if (score<=15){
                $("#comments").html("Awesome! You've made the birds proud! :P");
            }else{
                $("#comments").html("Superb!You've saved the bird's, you're the hero! :)");
            }
            
            $(".box").removeClass("hide");
            $("#replay").click(function(){
                $(".box").addClass("hide");
            });
        }
        startTime--;
    }, 1000);
    
    //calls main function
    main();
    
    //set random position for target
    function randomTargetPosition(){
        $("#target").css({
            'left': Math.random()* 90 + '%',
            'bottom': Math.random()* 80 + '%'
        });
    };
    
    function detectKeyPress($targetPosn, event){
        
        //moves source up, down, left and right on key press
        $(document).keydown(function(event){
            
            var key = event.which;
            if (key==37){
                //left key
                $("#source").animate(
                    {left: '-=10px'},
                    {duration : 50,
                    progress: function(){
                        //checks for colission in each and every frame of movement
                        var $targetPosn = $("#target").position();
                        var $sourcePosn = $("#source").position();
                        if (Math.abs($targetPosn.top-$sourcePosn.top)<=50 && Math.abs($targetPosn.left-$sourcePosn.left)<=50 && hit==0){
                            hit=1;
                            //increase score
                            score += 1;
                            $('#score').html("SCORE : "+ score);
                            
                        }else if (hit==1){
                            hit=0;
                            main();
                        }
                    }}
                );
            }
            if (key==38){
                //up key
                $("#source").animate(
                    {top: '-=10px'},
                    {duration : 50,
                    progress: function(){
                        //checks for colission in each and every frame of movement
                        var $targetPosn = $("#target").position();
                        var $sourcePosn = $("#source").position();
                        if (Math.abs($targetPosn.top-$sourcePosn.top)<=50 && Math.abs($targetPosn.left-$sourcePosn.left)<=50 && hit==0){
                            hit=1;
                            //increase score
                            score += 1;
                            $('#score').html("SCORE : "+ score);
                            
                        }else if (hit==1){
                            hit=0;
                            main();
                        }
                    }}
                );
            }
            if (key==39){
                //right key
                $("#source").animate(
                    {left: '+=10px'},
                    {duration : 50,
                    progress: function(){
                        //checks for colission in each and every frame of movement
                        var $targetPosn = $("#target").position();
                        var $sourcePosn = $("#source").position();
                        if (Math.abs($targetPosn.top-$sourcePosn.top)<=50 && Math.abs($targetPosn.left-$sourcePosn.left)<=50 && hit==0){
                            hit=1;
                            //increase score
                            score += 1;
                            $('#score').html("SCORE : "+ score);
                            
                        }else if (hit==1){
                            hit=0;
                            main();
                        }
                    }}
                );
            }
            if (key==40){
                //down key
                $("#source").animate(
                    {top: '+=10px'},
                    {duration : 50,
                    progress: function(){
                        //checks for colission in each and every frame of movement
                        var $targetPosn = $("#target").position();
                        var $sourcePosn = $("#source").position();
                        if (Math.abs($targetPosn.top-$sourcePosn.top)<=50 && Math.abs($targetPosn.left-$sourcePosn.left)<=50 && hit==0){
                            hit=1;
                            //increase score
                            score += 1;
                            $('#score').html("SCORE : "+ score);
                        }else if (hit==1){
                            hit=0;
                            main();
                        }
                    }}
                );
            }
        });
    };
    
    function main(){
        
        
    
        randomTargetPosition();
        
        //calculates target's position
        var $targetPosn = $("#target").position();

        //finds current source position
        var $sourcePosn = $("#source").position();

        detectKeyPress($targetPosn, event);   
        
    }
    
});