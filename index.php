<!DOCTYPE html>
<html lang="en">

<head>
    <title>Stopwatch App</title>
    <meta charset="utf-8" />
    <meta name="author" content="anunay anand" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!--Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine|Hepta+Slab|Roboto|Bellota">
    <!--Google icons-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--font awesome 5 icons-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <!-- font awesome 4 icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--Personal Css file-->
    <link rel="stylesheet" href="styling.css" type="text/css">
</head>

<body>
    <!-- Title -->
    <div class="container-fluid">
        <div id="header">Stopwatch</div>

        <!-- Lap time -->
        <div id="lap"><span id="lapminute">00</span>:<span id="lapsecond">00</span>:<span id="lapcentisecond">00</span></div>

        <!-- Time -->
        <div id="time"><span id="timeminute">00</span>:<span id="timesecond">00</span>:<span id="timecentisecond">00</span></div>

        <!-- Controls -->

        <div class="row" id="controlscontainer">

            <div class="col-sm-2 offset-sm-4">
                <div id="startbutton" class="controls">Start</div>
                <div id="stopbutton" class="controls">Stop</div>
                <div id="resumebutton" class="controls">Resume</div>
            </div>


            <div class="col-sm-2">
                <div id="lapbutton" class="controls">Lap</div>
                <div id="resetbutton" class="controls">Reset</div>
            </div>

        </div>
        
        <!-- Laps -->
        <div id="laps"></div>
    </div>       
                    
    <!--Personal Js File-->
    <script src="script.js"></script>
</body>

</html>