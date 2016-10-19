$(document).ready(function(){
    
    //setting the initial values
    var $initialSrc = $("#source").position();
    var score = 0;
    var hit = 0;
    var startTime = 60;
    
    //for timer, counts down from 60 to 0
    var countDown = setInterval(function (){
        
        //changes the time every second
        $("#timer").html("TIMER : "+ startTime);
        
        //gets player's attention, only 5 secs left
        if (startTime<=10){
            $("#timer").css({backgroundColor:"red", borderColor:"red"}).effect("pulsate",{times:1}, 1000);
        }
        
        //displays game over box if time=0
        if (startTime==0){
            
            //clears the count down
            clearInterval(countDown);
            
            //sets the score to be displayed
            $("#scoredialog").html("Your score is "+ score);
            
            //customized message according to the score
            if (score<=5){
                $("#comments").html("You can do much better! :/");
            }else if (score<=10){
                $("#comments").html("Great going, those evil piggies had it coming! :D");
            }else if (score<=15){
                $("#comments").html("Awesome! You've made the birds proud! :P");
            }else{
                $("#comments").html("Superb!You're the hero, but hope you didn't break your keyboard playing this! :P");
            }
            
            //allows the box to appear
            $(".box").removeClass("hide").slideUp(10).slideDown(1000);
            
            //hides the bird and pig from screen
            $("#source").addClass("hide");
            $("#target").addClass("hide");
            $("#timer").addClass("hide");
            $("#score").addClass("hide");
            
            //resets the game if replay button is clicked
            $("#replay").click(function(){
                
                //resets the defaults
                $(".box").addClass("hide");
                $("#source").removeClass("hide");
                $("#target").removeClass("hide");
                $("#timer").removeClass("hide");
                $("#score").removeClass("hide");
            });
        }
        //decreases the start time
        startTime--;
    }, 1000);
    
    //calls main function
    main();
    
    //sets random position for target
    function randomTargetPosition(){
        $("#target").css({
            'left': Math.random()* 90 + '%',
            'bottom': Math.random()* 80 + '%'
        });
    };
    
    //detects key press and moves the bird accordingly
    function detectKeyPress($targetPosn, event){
        
        //moves source up, down, left and right on key press
        $(document).keydown(function(event){
            
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            var $sourcePosn = $("#source").position();
            var stopAnimation = 0;
            
            if ($sourcePosn.left==0 || ($sourcePosn.left+50)==winWidth || $sourcePosn.top==0 || ($sourcePosn.top+50)==winHeight){
                $("#source").stop();
                stopAnimation = 1;
            }
            else{
                stopAnimation = 0;
            }
            
            var key = event.which;
            if (key==37){
                //left arrow is pressed
                $("#source").animate(
                    {left: '-=10px'},
                    {duration : 50,
                    progress: function(){
                        
                        //checks for collission in each and every frame of movement
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
                //up arrow is pressed
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
                //right arrow is pressed
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
                //down arrow is pressed
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
        
        //puts the target in random position on the screen
        randomTargetPosition();
        
        //calculates target's position
        var $targetPosn = $("#target").position();

        //finds current source position
        var $sourcePosn = $("#source").position();
        
        //detects ant keypress
        detectKeyPress($targetPosn, event);   
        
    }
    
});