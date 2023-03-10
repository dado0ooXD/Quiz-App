var goals = []
var seconds = 0
var minutes = 0

function getElements(){
    var min = document.querySelector("#min").value;
var player = document.querySelector("#score").value

var team = document.querySelector("#team").value

var goal = {
    min:min,
    player:player,
    team:team
}
goals.push(goal)
}

function clear1(){
    document.querySelector("#min").value = ""
    document.querySelector("#score").value = "" 
}

    var moroccoGoals = 0
    var franceGoals = 0

function display1(){
    var listOfGoalsHTMLElement = document.querySelector("#listOfGoals")
listOfGoalsHTMLElement.innerHTML = ""

franceGoals = 0;
moroccoGoals = 0;
goals.forEach(function(item,index){
    var goalElement = document.createElement("li")
    goalElement.textContent = item.min  + "'" + " " + item.player;
    listOfGoalsHTMLElement.appendChild(goalElement);


    if(item.team === "France"){
        goalElement.style = "text-align:right"
        franceGoals++
    
    }
    else{
       moroccoGoals++
       
    }
    

    if(franceGoals > moroccoGoals ){
        var franceRes = document.querySelector("#finally").textContent = "France leads"
        franceRes.style = "text-align:center; color:blue"
        document.querySelector("#finally").style = "color:blue"
        document.querySelector("#franceFlag").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AJlTOESYAGU16gpXefILNABnwlnA6AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
        document.querySelector("#moroccoFlag").src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
    }
    else if(franceGoals === moroccoGoals){
        var draw = document.querySelector("#finally").textContent = "DRAW"
        draw.style = "text-align:center; color:black"
        document.querySelector("#franceFlag").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AJlTOESYAGU16gpXefILNABnwlnA6AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
        document.querySelector("#moroccoFlag").src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
    }
   if(moroccoGoals> franceGoals){
    var moroccoRes = document.querySelector("#finally").textContent = "Morocco leads"
        moroccoRes.style = "color:red"
        document.querySelector("#finally").style = "text-align:center; color:red"
        document.querySelector("#moroccoFlag").src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"
        document.querySelector("#franceFlag").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AJlTOESYAGU16gpXefILNABnwlnA6AAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="
   }
})
document.querySelector("#marrocoScore").textContent = moroccoGoals
document.querySelector("#franceScore").textContent = franceGoals



}

function listOfGoal(){
    document.querySelector("#listOfGoals").style = "border:2px solid black; background-color:trasparent; border-radius:5px; font-weight:bold; font-size:15px; color:white"
}

setInterval(function(){
    seconds++
    if(seconds === 60){
        minutes++
        seconds = 0
    }
 if (minutes>9){
        minutes = minutes
    }
    else if(typeof minutes === "number"){
        minutes = "0" + minutes
    }
    if(seconds >9){
        seconds = seconds
    }
    else if(typeof seconds === "number"){
        seconds = "0" + seconds
    }
    if(minutes === 90){
            minutes = 90
            seconds = 0 + "0"
    }
   console.log(minutes)
    document.querySelector("#minutes").textContent = minutes + ":" + seconds
    document.querySelector("#minutes").style = "color:white; font-weight:bold; font-size:20px"
},100)



document.querySelector("#addGoal").addEventListener("click",function(){
    getElements()
clear1()
display1()
listOfGoal()
})

/// NE RADI

function finalResult(){
    console.log(franceGoals)
    console.log(moroccoGoals)
    if(franceGoals > moroccoGoals){
        document.querySelector("#finalResult").textContent = "France won"
    }
    else if(franceGoals < moroccoGoals){
        document.querySelector("#finalResult").textContent = "Morocco won"
    }

    else{
        document.querySelector("#finalResult").textContent = "Draw"

    }
}

document.querySelector("#frBtn").addEventListener("click", function(){
   finalResult()
   
})

