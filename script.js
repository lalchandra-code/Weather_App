const apiKey="3430f8ccff035e3449c7b4026ace9022";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");

const searchBtn=document.querySelector(".search button");
const weatherCheck=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    // console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";


    if(data.weather[0].main==="Clouds"){
        weatherCheck.src="images/cloudy.png";
    }
    else if(data.weather[0].main==="Rain"){
        weatherCheck.src="images/rainy.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        weatherCheck.src="images/drizzle.png";
    }
    else if(data.weather[0].main==="Clear"){
        weatherCheck.src="images/sunny.jpg";
    }
    else if(data.weather[0].main==="Mist"){
        weatherCheck.src="images/mist.jpg";
    }
    else if(data.weather[0].main==="Haze"){
        weatherCheck.src="images/mist.jpg";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";



    }

    



}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
// checkWeather(bangolre);
