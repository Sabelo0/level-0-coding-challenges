function displayHoursAndMinutes(number){
    let hours = Math.floor(number/60)
    let minutes = number % 60
    let finalTime = ""

    if (hours === 1 && minutes === 1 ){
        finalTime =  hours + " hour, " + minutes + " minute"
    }else if( minutes === 1 ){
        finalTime = hours + " hours, " + minutes + " minute"
    }else if(hours===1){
        finalTime = hours + " hour, " + minutes + " minutes"
    }else{
        finalTime = hours + " hours, " + minutes + " minutes"
    }

    
    return finalTime
}

console.log(displayHoursAndMinutes(61))