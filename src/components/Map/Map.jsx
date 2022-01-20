import React from 'react'
import GoogleMapReact from 'google-map-react';
import{Paper,Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './style';
const Map = ({setCoordinates,setBounds,coordinates,place, setchildClicked})=>{
    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    return (
        <div className ={classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys={{key :'AIzaSyBBT3xuFMRs2QIjdY2KJ7KqWwWQOQOC'}}
             defaultCenter={coordinates}
             defaultZoom={14}
             margin = {[ 50,50,50,50] }
             option={''}
             onchange={(e)=>{
                 setCoordinates({lat:e.center.lat,lng: e.center.lng})
                 setCoordinates({ne:e.marginBounds.ne,sw: e.marginBounds.sw})
             }}
             onChildClick={(child)=>{setchildClicked(child)}}

            >
                {place?.map((place,i)=>(
                    <div
                      className={classes.markerContainer} 
                      lat= {Number(place.latitude)}
                      lng ={Number(place.longitude)}
                      key ={i}
                      >
                          {
                              !isDesktop?(
                                  <LocationOnOutlinedIcon color ="primary" fontSize ="large"/>
                              ):(
                                  <Paper elevation={3} className={classes.paper} >
                                      <Typography className = {classes.Typography} varient ="subtitle2" gutterBottom>
                                    
                                          {
                                              place.name
                                          }
                                          <img className ={classes.ponter}
                                          src =
                                        {place.photo?place.photo.images.large.url:'https://www.food.com'}

                                          alt ={place.name}
                                          
                                          />
                                          <Rating size ="small" value ={Number(place.rating)} readOnly/>
                                      </Typography>
                                      </Paper>

                              )
                          }
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    )
};
 export default Map;
