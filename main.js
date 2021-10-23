AHHHHHH = ""

function preload()
{
 AHHHHHH = loadSound("shrek.mp3");
}

function setup()
{
    video = createCapture(VIDEO);
}

function play_song()
{
    AHHHHHH.play();
    AHHHHHH.setVolume(1);
    AHHHHHH.rate(1);
}





