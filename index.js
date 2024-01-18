const form = document.getElementById("stepForm")
form.addEventListener("submit", ()=> {
    const linea1 = document.getElementById("linea1")
    const linea2 = document.getElementById("linea2")
    const linea3 = document.getElementById("linea3")
    const radio1= document.querySelector("#steps #radio2")
    const radio2 = document.querySelector("#steps #radio3")
    const radio3 = document.querySelector("#steps #radio4")
    const nextButton = document.getElementById("nextButton")
    const prevButton = document.getElementById("prevButton")
    event.preventDefault()
    const progressId = createProgressId()
    if(progressId === "0"){
    editProgressStepStyle(radio1, linea1)
    colorEnPasoIntermedio(nextButton, prevButton)
    cambiarCursoraNormal(nextButton)
    }
    if(progressId === "1"){
        editProgressStepStyle(radio2, linea2)
        colorEnPasoIntermedio(nextButton, prevButton)
        cambiarCursoraNormal(nextButton)
    }
    if(progressId === "2"){
        editProgressStepStyle(radio3, linea3)
        cambiarColorButton(nextButton, prevButton)
        cambiarCursorANoDrop(nextButton)
        cambiarCursoraNormal(prevButton)
    }
})
function colorEnPasoIntermedio(nextButton, prevButton){
    nextButton.style.backgroundColor = "#2CDA9D";
    prevButton.style.backgroundColor = "#2CDA9D";
}

function cambiarColorButton(nextButton, prevButton){
    nextButton.style.backgroundColor = "#e0e0e0";
    prevButton.style.backgroundColor = "#2CDA9D";
}
function devolverColorButton(nextButton, prevButton){
    nextButton.style.backgroundColor = "#2CDA9D";
    prevButton.style.backgroundColor = "#e0e0e0";
}
function cambiarCursoraNormal(element){
    element.style.cursor = "pointer";
}
function cambiarCursorANoDrop(element){
    element.style.cursor = "no-drop";
}

function createProgressId(){
    const oldProgressId = localStorage.getItem("Progress-id") || "-1"
    if(oldProgressId === "2"){
        sumProgressId = JSON.parse(oldProgressId) + 0;
        console.log("El id ha llegado a 2")
    } else {
        sumProgressId = JSON.parse(oldProgressId) + 1;
        console.log("Sumando..." + sumProgressId)
    }
    localStorage.setItem("Progress-id", JSON.stringify(sumProgressId))

    return localStorage.getItem("Progress-id")
}

    const prev = document.getElementById("prevButton")
    const linea1 = document.getElementById("linea1")
    const linea2 = document.getElementById("linea2")
    const linea3 = document.getElementById("linea3")
    const radio1= document.querySelector("#steps #radio2")
    const radio2 = document.querySelector("#steps #radio3")
    const radio3 = document.querySelector("#steps #radio4")
    const nextButton = document.getElementById("nextButton")
    const prevButton = document.getElementById("prevButton")
prev.addEventListener("click", ()=> {
    const restProgressId = createRestProgressId()
    console.log("Restando..." + restProgressId)
    if(restProgressId === "1"){
        editProgressStepStyleWhithRest(radio3, linea3)
        colorEnPasoIntermedio(nextButton, prevButton)
        cambiarCursoraNormal(prevButton)
        cambiarCursoraNormal(nextButton)
        //editProgressStepStyle(radio2, linea2)
    }
    if(restProgressId === "0"){
        editProgressStepStyleWhithRest(radio2, linea2)
        colorEnPasoIntermedio(nextButton, prevButton)
        cambiarCursoraNormal(prevButton)
        cambiarCursoraNormal(nextButton)
    }
    if(restProgressId === "-1"){
        editProgressStepStyleWhithRest(radio1, linea1)
        devolverColorButton(nextButton, prevButton)
        cambiarCursorANoDrop(prevButton)

    }

})

function createRestProgressId(){
    const oldProgressId = JSON.parse(localStorage.getItem("Progress-id") || "-1");
    if(oldProgressId <= -1){
        sumProgressId = JSON.parse(oldProgressId) - 0; 
    } else {
        sumProgressId = JSON.parse(oldProgressId) - 1; 
    }
    localStorage.setItem("Progress-id", JSON.stringify(sumProgressId))
    return localStorage.getItem("Progress-id")

}

function editProgressStepStyle(radio, linea){
        linea.style.backgroundColor = "#2CDA9D"
        //prevButton.style.backgroundColor = "#3498db"
        //prevButton.style.transition = "0.3s"
        linea.style.transition = "0.7s"
        radio.style.borderColor = "#2CDA9D"
    }

    function editProgressStepStyleWhithRest(radio, linea){
        linea.style.backgroundColor = "#e0e0e0"
        //prevButton.style.backgroundColor = "#3498db"
        //prevButton.style.transition = "0.3s"
        linea.style.transition = "0.7s"
        radio.style.borderColor = "#e0e0e0"
    }
