function incriptacion (mensaje){
    const letras = mensaje.split ("") // letras 0 ["e","l","i","a","n","a",]
   const newElement = letras.map((element)=>{
        if(element == "a") return "1"
        if(element == "b") return "2"
        if(element == "c") return "3"
        if(element == "d") return "4"
        if(element == "e") return "5"
        if(element == "f") return "6"
        if(element == "g") return "7"
        if(element == "h") return "8"
        if(element == "i") return "9"
        if(element == "j") return "10"
        if(element == "k") return "11"
        if(element == "l") return "12"
        if(element == "m") return "13"
        if(element == "n") return "14"
        if(element == "ñ") return "15"
        if(element == "o") return "16"
        if(element == "p") return "17"
        if(element == "q") return "18"
        if(element == "r") return "19"
        if(element == "s") return "20"
        if(element == "t") return "21"
        if(element == "u") return "22"
        if(element == "v") return "23"
        if(element == "w") return "24"
        if(element == "x") return "25"
        if(element == "y") return "26"
        if(element == "z") return "27"
        if(element == " ") return "28"
    })

    const newMensaje = newElement.join()
    return newMensaje

}


console.log(incriptacion ("abz "))


