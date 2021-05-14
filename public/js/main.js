const submit = document.getElementById('submission');
const cityName = document.getElementById('cityName');
const errShow=document.getElementById('errShow');

const weathercon=document.getElementById('weathercon');
const weather_mood=document.getElementById('weather_mood');
const city=document.getElementById('city');
const country=document.getElementById('country');
const temperature=document.getElementById('temperature');
const min_temp=document.getElementById('min_temp');
const max_temp=document.getElementById('max_temp');
var currDate = document.getElementById('date');

var weatherStatus="";

const hide=document.querySelector('.main_content');
const err=document.querySelector('.errorPart');

const show = async (event) => {
    event.preventDefault();

     let cityVal=cityName.value;
    if (cityVal=="") {
        errShow.innerHTML="Enter city name";
        hide.classList.add('hide_info');
        err.classList.remove('hide_err');

    }
    else {
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8cdcc862168871b11e00d081b8c3e0b9`
        errShow.innerHTML="";
        const response = await fetch(url);
        const data=await response.json();
      const arrData=[data];
       weather_mood.innerHTML=arrData[0].weather[0].main;
       weatherStatus=arrData[0].weather[0].main;
       console.log(weatherStatus);
       city.innerHTML=arrData[0].name;
       country.innerHTML=arrData[0].sys.country;
       temperature.innerHTML=arrData[0].main.temp;
       min_temp.innerHTML=arrData[0].main.temp_min;
       max_temp.innerHTML=arrData[0].main.temp_max;
       hide.classList.remove('hide_info');
       err.classList.add('hide_err');
let currDay = new Date();
var hours = currDay.getHours();
let period = "AM";
if (hours > 11)
    period = "PM";
        if (period == "PM" && hours > 18 || hours < 5 && period == "AM") {
            weathercon.innerHTML = "<i class='far fa-moon' style='color:#dbd781;'></i>";
        }
       else
            if (weatherStatus == "Rain" && hours > 6 && hours <= 18)
                weathercon.innerHTML = "<i class='far fa-cloud-sun-rain' style='color:#7e856e;'></i>";
      
      else
                if (weatherStatus == "Clouds") {
            weathercon.innerHTML = "<i class='fas fa-cloud-sun' style='color:#8e9b9e;'></i>";

        }
        else
            if (weatherStatus == "Sunny") {

                weathercon.innerHTML = "<i class='fas fa-sun' style='color:yellow;'></i>";
            }




        let dayArray = [
            "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
        ];
        let monArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"

        ]
        let day = dayArray[currDay.getDay()];
        var mon = monArray[currDay.getMonth()];
        var d = currDay.getDate();
        if (d < 10)
            d = "0" + d;


        if (hours > 11) {
            period = "PM";

            if (hours > 12) {
                hours -= 12;

            }

        }
        var min = currDay.getMinutes();
        if (min < 10)
            min = "0" + min;

        var year = currDay.getFullYear();




        currDate.innerHTML = `${day} | ${d} ${mon} ${year} | ${hours}:${min} ${period}`;
        }
        catch{
            errShow.innerHTML="Please Enter correct city Name";
        hide.classList.add('hide_info');
        err.classList.remove('hide_err');
         
        }
    }



}
submit.addEventListener('click', show);



