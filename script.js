const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
const startBtn = document.getElementById('start')
const themeBtn = document.getElementById('themeBtn')
const themeIcon = document.getElementById('themeIcon');

let secondsCount = 1
let minuteCount = 1
let hourCount = 1
let timerId ;

const timer =()=>{

   timerId = setInterval(()=>{

        //seconds functionality
            seconds.innerHTML = `${secondsCount++} `
            if(secondsCount===60){
             secondsCount = 0
            }
            if(secondsCount==0){
                 minutes.innerText = `${minuteCount++}`
               }
                // minutes and hours functionality
                if(minuteCount===60){
                    minuteCount =+1
                    hours.innerHTML = 1
                    hours.innerHTML = `${hourCount++} `
                 }
        },1000)
}

startBtn.addEventListener('click',()=>{
timer()
}) 

//reset button functionality
resetBtn.addEventListener('click',()=>{
    window.location.reload()
    console.log('reset successfull')
    
})

//stop functionality
stopBtn.addEventListener('click',()=>{
    clearInterval(timerId)
    console.log('stop button pressed')
    
})

let light = true
themeBtn.addEventListener('click',()=>{
    console.log('theme btn clicked')
if(light){
    document.body.classList.add('darkMode')
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
    localStorage.setItem('light',themeIcon)
    light = false
}
else{
    localStorage.getItem('light',themeIcon)
    themeIcon.classList.remove('fa-sun')
    themeIcon.classList.add('fa-moon')
    document.body.classList.remove('darkMode')
    document.body.classList.add('lightMode')
    
    light = true
}
})



