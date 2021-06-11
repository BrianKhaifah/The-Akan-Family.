function akan(){
    function akanFunction(){
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let date = document.getElementById("date").value;
        let gender = document.getElementById("gender").value;

        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let maleNames = ["Kwase","Kwadwo","Kwabena","Kwaku","Yaw","Kofe","Kwame"]
        let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

        let dateString = month + "#" + day + "#" + year;
        let birthDate = new Date(dateString);
        let currentDate = birthDate.getDay();
        if (day <= 0 || day > 31) {
            alert("Please Enter a valid Date..!!")
        }
        else if ( month < 1 || month > 12 || month ==2 && day > 29){
            alert("Invalid Month")
        }
        else if ( year <= 0 || year > 2050){
            alert("Please Enter a Valid Year..!!")
        }
        else if ( gender.length === 0){
            alert("Please Select your Gender ")
        }
    }
}