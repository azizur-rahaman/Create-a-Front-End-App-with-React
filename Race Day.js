let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = false;
let runnerAge = 18;

if(runnerAge > 18 && earlyRegistration){
    raceNumber += 1000;
}


if(runnerAge > 18 && earlyRegistration){
    console.log(`Runner with age ${runnerAge} and early registration will start 9:30 am.}`);  
}else if(runnerAge > 18 && !earlyRegistration){
    console.log(`Runner with age ${runnerAge} and late registration will start 11:00 am.}`);
}else if(runnerAge < 18){
    console.log(`Runner with age ${runnerAge} will start 12:30 pm.}`);
}else {
    console.log('Please see the registration desk.');
}