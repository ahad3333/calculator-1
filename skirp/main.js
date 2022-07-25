var result = document.getElementById("result")

var operate = function(value){
    result.value += value
}



var calculate = function(value){
    result.value = eval(value)
}

var clear = function(){
    result.value = ""
}
document.addEventListener( "keydown", function (value){
    if(value.key == `1`){
        operate(`1`)
    }
    else if(value.key ==`2`)
     operate(`2`)
     else if(value.key ==`3`)
     operate(`3`)
     else if(value.key ==`4`)
     operate(`4`)
     else if(value.key ==`5`)
     operate(`5`)
     else if(value.key ==`6`)
     operate(`6`)
     else if(value.key ==`7`)
     operate(`7`)
     else if(value.key ==`8`)
     operate(`8`)
     else if(value.key ==`9`)
     operate(`9`)
     else if(value.key ==`*`)
     operate(`*`)
     else if(value.key ==`/`)
     operate(`/`)
     else if(value.key ==`.`)
     operate(`.`)
     else if(value.key ==`-`)
     operate(`-`)
     else if(value.key ==`+`)
     operate(`+`)
     else if(value.key ==`=`)
      calculate(result.value)
     else if(value.key ==`c`)
     clear()

})