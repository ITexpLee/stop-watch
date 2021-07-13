//Specifying the background size according to the device.

var width = window.screen.availWidth;
var height = window.screen.availHeight;
document.body.style.backgroundSize = width + "px" + '  ' + height + "px";

//Using Jquery according to project

$(document).ready(function(){
    //variables
         var mode = false; //App mode [We can use 0 for false and 1 for true]
         var timecounter = 0; //time counter      
         var lapcounter = 0; //Lap counter
         var action;         //Var for set interval
         var lapNumber = 0;
         
    //Minute,seconds and centiseconds for Lap and time
         var timeMinutes,timeSeconds,timeCentiseconds;
         var lapMinutes,lapSeconds,lapCentiseconds;
        
    //Click on start button
        $('#startbutton').click(function(){
            //mode on
            mode = true;
        //show stop and lap button
            showHide(['#stopbutton','#lapbutton'],['#startbutton','#resumebutton','#resetbutton']);
        //Start counter
            startAction();
            
        });
    
    
    
    //click on stop button 
        $('#stopbutton').click(function(){
            //show resume button and reset button
                showHide(['#resumebutton','#resetbutton'],['#stopbutton','#lapbutton']);
            //stop counter
                clearInterval(action);
        
        });    
    
    //click on resume button 
        $('#resumebutton').click(function(){
            //show resume button and reset button
                showHide(['#stopbutton','#lapbutton'],['#resumebutton','#resetbutton']);
            //start counter
                startAction();      //if we call the function containing the set interval again it will start again.
        
        });    
    
    //click on reset button 
        $('#resetbutton').click(function(){
            
            //Reload the page
            window.location.reload();
        });
    
    //If we click on lap button
        $('#lapbutton').click(function(){
            
            //if mode is on 
                if(mode){
                    //Stop the action
                    clearInterval(action);
                    //Reset lap and print lap details
                    lapcounter = 0;
                    addLap();
                    //Start the counter again
                    startAction();
                }
        
        });
    
    //functions
         //Show and hide function
            function showHide(arr1,arr2){
                for(i=0;i<arr1.length;i++){
                    $(arr1[i]).show();
                }
                for(i=0;i<arr2.length;i++){
                    $(arr2[i]).hide();
                }
            }
        
        //Start the counter
            function startAction(){
                action = setInterval(function(){
                    timecounter++;
                    if(timecounter == 100*60*100){
                        timecounter = 0;
                    }
                    lapcounter++;
                    if(lapcounter == 100*60*100){
                        lapcounter = 0;
                    }
                    updatetime();
                },10);
            }

    //Storing the appropriate value in variables
            function updatetime(){      
                //10 millisecond is 1 centisecond. Thus 100 centisecond is 1 second.
                timeMinutes = Math.floor(timecounter/6000);
                timeSeconds = Math.floor(timecounter%6000/100);
                timeCentiseconds = (timecounter%6000)%100;
                    $('#timeminute').text(format(timeMinutes));
                    $('#timesecond').text(format(timeSeconds));
                    $('#timecentisecond').text(format(timeCentiseconds));
                 
                //lap time
                lapMinutes = Math.floor(lapcounter/6000);
                lapSeconds = Math.floor(lapcounter%6000/100);
                lapCentiseconds = (lapcounter%6000)%100;
                    $('#lapminute').text(format(lapMinutes));
                    $('#lapsecond').text(format(lapSeconds));
                    $('#lapcentisecond').text(format(lapCentiseconds));
            }
        
    //function to format number 
            function format(number){
                    if(number<10){
                    return '0' + number;
                    }
                else{
                    return number;
                }
            }     
    
    //Add lap details inside the lap box
        function addLap(){
            lapNumber++ 
            var myLapDetails = '<div class="lap">' +
                                    '<div class="laptimetitle">' +
                                        'Lap' + lapNumber + 
                                    '</div>' +
                                    '<div class="laptime">' +
                                        '<span>' + format(lapMinutes) + '</span>:' +
                                        '<span>' + format(lapSeconds) + '</span>:' +
                                        '<span>' + format(lapCentiseconds) + '</span>' +
                                    '</div>' +
                               '</div>';
            $(myLapDetails).appendTo('#laps');
            
            
        }
}); 