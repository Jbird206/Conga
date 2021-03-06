import $ from "jquery";
import "./styles.css";
import "bootstrap";
import "./../src/styles.css";
// import "./../src/light-theme.css";
import "./../src/gifscript.js";
import "./../src/collapse.js";
import "./../src/clock.js";
import "./../src/adrsbook.js";
import "./../src/app.js";
//import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherService } from "./weather-service.js";
// import {app} from "/.app.js";

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const city = $("#location").val();
    $("#location").val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(".showHumidity").text(
          `The humidity in ${city} is ${response.main.humidity}%`
        );
        $(".showTemp").text(
          `The temperature in Fahreinheit is ${(
            (response.main.temp - 273.15) * (9 / 5) +
            32
          ).toFixed(1)} degrees with ${response.weather[0].description}`
        );
      } else {
        $(".showHumidity").text(`There was an error handling your request.`);
        $(".showTemp").text(`Please check your inputs and try again!`);
      }
    }




    });
  });

