import React,{useState,useEffect} from 'react';
import {CssBaseline,Grid} from '@material-ui/core'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import {getPlacesData} from './api/index'
const App = ()=>{
  const [places,setPlaces] =useState([]);
  const [childclicked,setchildClicked]= useState(null)
  const [isLoading, setisLoading] =useState(false)

  const [coordinates, setCoordinates]=useState({lat :0,lng:0})
  const [bounds,setBounds] = useState({})
  useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitudes,longitudes}})=>{
   setCoordinates({lat:latitudes,lng:longitudes});
})
  },[])
  useEffect(()=>{
    setisLoading(true)
    console.log(coordinates,bounds)

    getPlacesData(bounds.sw,bounds.ne)
    .then((data)=>{
      console.log(data)
      setPlaces(data)
      setisLoading(false)
    })

  },[coordinates,bounds]);
    return (
        <>
          <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12}  md={4}>
          <List  places={places}
           childclicked={childclicked}
           isLoading ={isLoading}
          />

            </Grid>
            <Grid item xs={12}  md={4}>
              <Map
              setCoordinates ={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setchildClicked={setchildClicked}
              />

            </Grid>


        </Grid>
        </>
    );
}
export default  App;

