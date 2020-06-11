// export class GifService {
//   async getGifByName(name) {
//     try {
//       // let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=nydT33tIYBrmuNCtjIfmyzK5ITms8juz&q=${name}&limit=25&offset=0&rating=G&lang=en`);
//       let jsonifiedResponse;
//       if (response.ok && response.status == 200) {
//         jsonifiedResponse = await response.json();
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch (error) {
//       return false;
//     }
//   }
// }


  

