var myScore = 80;
var friendScore = 80;
if(myScore>=80){
    if(friendScore>=80){
        console.log("Let's go for a lunch")
    }
    else{
        if(friendScore<80 && friendScore>=60){
            console.log("Better luck next time")
        }
        else{
            if(friendScore<60 && friendScore>=40){
                console.log("Keep message unseen")
            }
            else{
                console.log("Block friend")
            }
        }
    }
}
else{
    console.log("Just keep sleeping")
}