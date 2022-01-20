 import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

 

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
export const getPlacesData = async (sw,ne)=>{
    try{
        //req
        const {data: {data}} = await axios.get(URL,
          {params:{
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
        
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '0161dab991mshe114e8f24a4fcbdp1e1903jsn2da9778fe251'
          }
        });

 return data;
    }
    catch (error){
        console.log(error)

    }
}