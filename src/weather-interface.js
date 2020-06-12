import $ from "jquery";
import "./styles.css";
import "bootstrap";
import "./../src/styles.css";
import "./../src/gifscript.js";
import "./../src/collapse.js";
import "./../src/clock.js";
import "./../src/adrsbook.js";
//import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherService } from "./weather-service.js";
import { GifService } from "./../src/gif-service.js";
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
// import firebase from "./../src/firebase";

// const store = createStore(rootReducer);

// const rrfProps = {
//   firebase,
//   config: {
//         userProfile: "users"
//     },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById('root')
// )

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

    //promise all allows us to add promises
    Promise.all([WeatherService, GifService]).then(function (values) {
      console.log(values);

      ////////////////////////////////////////////////
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
            $(".showGif").html(
              `<img src=${gifResponse.content.data[0].images.downsized.url}`
            );
          } else {
            $(".showGif").text(`There was an error handling your request.`);
          }
        }
      });
    });
  });
});
