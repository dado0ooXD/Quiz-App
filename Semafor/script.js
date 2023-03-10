function red(){
    document.querySelector("#crveno").style.backgroundColor = "red"
    document.querySelector("#zuto").style.backgroundColor = "transparent"
    document.querySelector("#zeleno").style.backgroundColor = "transparent"
    setTimeout(function(){
yellowToGreen()
    },4000)
}


function yellow(){
    document.querySelector("#zuto").style.backgroundColor = "yellow"
    document.querySelector("#crveno").style.backgroundColor = "transparent"
    document.querySelector("#zeleno").style.backgroundColor = "transparent"
}


function green(){
    document.querySelector("#zeleno").style.backgroundColor = "lime"
    document.querySelector("#zuto").style.backgroundColor = "transparent"
    document.querySelector("#crveno").style.backgroundColor = "transparent"
    setTimeout(function(){
        yellowToRed()
            },3000)
}


function yellowToRed(){
    document.querySelector("#zuto").style.backgroundColor = "yellow"
    document.querySelector("#zelena").style.backgroundColor = "transparent"
    document.querySelector("#crvena").style.backgroundColor = "transparent"
    setTimeout(function(){
red()
    },3000)
}


function yellowToGreen(){
    document.querySelector("#zuto").style.backgroundColor = "yellow"
    document.querySelector("#zeleno").style.backgroundColor = "transparent"
    document.querySelector("#crveno").style.backgroundColor = "red"
    setTimeout(function(){
green()
    },3000)
}

red()

