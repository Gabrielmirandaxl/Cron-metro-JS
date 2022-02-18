let horas = document.querySelector('.horas')
let minutos = document.querySelector('.minutos')
let segundos = document.querySelector('.segundos')
let milissegundos = document.querySelector('.milissegundos')
let buttonStart = document.querySelector('#start')
let buttonPausar = document.querySelector('#pausar')
let buttonReset = document.querySelector('#reset')

let tens = 0 // (tempo)
let segs = 0 //(segundos)
let mins = 0 //(minutos)
let hr = 0 //(hora)

buttonStart.addEventListener('click', startt )
buttonPausar.addEventListener('click', pausar)
buttonReset.addEventListener('click', reset)


function startt(){
    tempo = setInterval(function(){
        tens++
        milissegundos.innerHTML = `${tens}<sup>ms</sup>`

            //adicione o 0 se milissegundos <=9
           if(tens <= 9){
            milissegundos.innerHTML = `0${tens}<sup>ms</sup>`
        }  

           if(tens === 60){
               segs++
               tens = 0
               segundos.innerHTML = `${segs}:`         
           }

           //adicione o 0 se segundos <=9
           if(segs <= 9){
            segundos.innerHTML = `0${segs}:`
        }

           if(segs === 60){
            mins++
            segs = 0
            minutos.innerHTML = `${mins}:`
        }

        //adicione o 0 se minutos <=9
        if(mins <= 9){
            minutos.innerHTML = `0${mins}:`
        }

        if(mins === 60){
            hr++
            mins = 0
            horas.innerHTML = `${hr}:`
        }

        //adicione o 0 se horas <=9
        if(hr <= 9){
            horas.innerHTML = `0${hr}:`
        }   
    }, 10)
}

function pausar(){
    clearInterval(tempo) // pausa o setinterval
}

function reset(){    
    
    // para o setinterval para zerar, se não ele só vai ficar reniciando.
    clearInterval(tempo) 

    //escreve no <span> 
    horas.innerHTML = `00:` 
    minutos.innerHTML = `00:`
    segundos.innerHTML = `00:`
    milissegundos.innerHTML = `00`
    

    //zera a hora, os minutos, os segundos e milissegundos.
    hr = 0 
    tens = 0
    segs = 0
    mins = 0
   

}