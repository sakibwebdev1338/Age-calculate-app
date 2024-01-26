
let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];

let calculateAge = document.getElementById("calculate");

let result = document.getElementById("result");



function getDaysInMonth(year , month){

    return new Date(year, month , 0).getDate();
}

calculateAge.addEventListener('click',() => {
    if(userInput.value == ""){
        alert("please enter your birth date");
    }else{
        
        let birthDate =  new Date(userInput.value);
        let birthDateYear =  birthDate.getFullYear();
        let birthDateMonths = birthDate.getMonth()+ 1;
        let birthDateDays = birthDate.getDate();
        
        let today = new Date();

        let currentYear = today.getFullYear();
        let currentMonths = today.getMonth()+ 1;
        let currentDays = birthDate.getDate();

        let age = currentYear - birthDateYear ;
        if(currentMonths >= birthDateMonths){
            ageWithMonth = currentMonths - birthDateMonths;
        }else{
            age--;
            ageWithMonth = 12 + currentMonths - birthDateMonths;
        }

        if(currentDays >= birthDateDays){
            ageWithDays = currentDays - birthDateDays;
        }else{
            ageWithMonth--;
            ageWithDays = getDaysInMOnth(birthDateYear,birthDateMonths) + currentDays - birthDateDays;
        }

        if(ageWithMonth < 0){
            ageWithMonth = 11;
            age--;
        }
        


        result.innerHTML = `Your are <span>${age}</span> year and <span>${ageWithMonth}</span> month old`;

        
    }

    function getDaysInMOnth(year, month){
        return new Date(year, month, 0).getDate();
    }



})  
 

   


    

