function displayHoursAndMinutes(number){
    var hours = Math.floor(number/60)
    var minutes = number % 60

    return hours + " hrs " + minutes + " min"
}

console.log(displayHoursAndMinutes(71))