
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", ()=> {
    event.preventDefault()
    const linea1 = document.getElementById("linea1")
    const linea2 = document.getElementById("linea2")
    const linea3 = document.getElementById("linea3")
    const radio1= document.querySelector("#steps #radio2")
    const radio2 = document.querySelector("#steps #radio3")
    const radio3 = document.querySelector("#steps #radio4")
    //secondStem(linea2)
    let sumaContador = contador++
    if(sumaContador >= 2){
        sumaContador = 2
    } 
    //console.log(sumaContador)
    if(sumaContador === 0){
        firstStep(linea1, prevButton, radio1)
    }

    if(sumaContador === 1){
        secondStep(linea2, radio2)
    }

    if(sumaContador === 2){
        thirdStep(linea3, radio3, nextButton)
    }
    var contador = 0;
    console.log(returnHola(contador))
})
function returnHola(contador){
    let sumaContador = contador++
    if(sumaContador >= 2){
        sumaContador = 2
    } 
    return sumaContador
}




var restaContador2 = 1
prevButton.addEventListener("click", ()=> {
    
    event.preventDefault()
    const linea1 = document.getElementById("linea1")
    const linea2 = document.getElementById("linea2")
    const linea3 = document.getElementById("linea3")
    const radio1= document.querySelector("#steps #radio2")
    const radio2 = document.querySelector("#steps #radio3")
    const radio3 = document.querySelector("#steps #radio4")
    let restarContador = restaContador--
    if(restarContador <= -1){
        restaContador = -1
    }

    console.log(restaContador)
    if(restarContador === 1){
    linea3.style.backgroundColor = "#e0e0e0"
    prevButton.style.backgroundColor = "#3498db"
    prevButton.style.transition = "0.3s"
    linea3.style.transition = "0.3s"
    radio3.style.borderColor = "#e0e0e0"
    }

    if(restarContador === 0){
    linea2.style.backgroundColor = "#e0e0e0"
    prevButton.style.backgroundColor = "#3498db"
    prevButton.style.transition = "0.3s"
    linea2.style.transition = "0.3s"
    radio2.style.borderColor = "#e0e0e0"
    }
    if(restarContador === -1){
        linea1.style.backgroundColor = "#e0e0e0"
        prevButton.style.backgroundColor = "#e0e0e0"
        prevButton.style.transition = "0.3s"
        linea1.style.transition = "0.3s"
        radio1.style.borderColor = "#e0e0e0" 
        nextButton.style.backgroundColor = "#3498db"
    }
})
var restaContador = 1;



function firstStep(linea1, prevButton, element){
    linea1.style.backgroundColor = "#3498db"
    prevButton.style.backgroundColor = "#3498db"
    prevButton.style.transition = "0.3s"
    linea1.style.transition = "0.3s"
    element.style.borderColor = "#3498db"
}
function secondStep(linea2, radio2){
    linea2.style.backgroundColor = "#3498db"
    linea2.style.transition = "0.3s"
    radio2.style.borderColor = "#3498db"
}

function thirdStep(linea3, radio3, nextButton){
    linea3.style.backgroundColor = "#3498db"
    linea3.style.transition = "0.3s"
    radio3.style.borderColor = "#3498db"
    nextButton.style.backgroundColor = "#3498db"
    nextButton.style.transition = "0.3s"
    
}