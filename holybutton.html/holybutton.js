let count = 0; 

function change_text(){
    var audio = document.getElementById("audio");
    count++
    document.getElementById("counter").innerHTML = "Times Clicked:" + count;
    if(count == 100){
        document.getElementById("paragraph").innerHTML = "You have brought so many holiness around the World!!!";
    } else if(count == 75){
        document.getElementById("paragraph").innerHTML = "Your are the new Rabbi of the Mormon Church";
    } else if(count == 50){
        document.getElementById("paragraph").innerHTML = "Hinduism is the Pope's new favorite religion";
    } else if(count == 25){
        document.getElementById("paragraph").innerHTML = "The Holy Roman Empire actually won the Crusades!";
    }


    if(count%20 == true){
        audio.play();
    }
}