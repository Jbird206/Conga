import $ from 'jquery';
import './styles.css';
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import { WeatherService } from './weather-service.js';
import { GifService } from './gif-service.js';
import './../src/styles.css';

$(document).ready(function () {
$("#gifNamed").click(function () {
  const name = $("#namedGif").val();
  $("#namedGif").val("");

  (async () => {
    let gifService = new GifService();
    const gifResponse = await gifService.getGifByName(name);
    getElements(gifResponse);
  })();
//img.src = content.data[0].images.downsized.url;
  function getElements(gifResponse) {
    if (gifResponse) {
      $(".showGif").html(`<a href='${gifResponse.content.data[0].images.downsized.url}`);

    } else {
      $(".showGif").text(`There was an error handling your request.`);
    }
  }
});
});