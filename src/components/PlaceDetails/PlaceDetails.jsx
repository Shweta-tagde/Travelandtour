import React from 'react'
import { Box,Typography,Button,CardMedia,CardContent,CardAction,Chip, Icon,Card } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/LocationOn'
import Rating from '@material-ui/lab/Rating'
import useStyles from './style'
const PlaceDetails = ({place,selected,refProp})=>{
    const classes = useStyles();
    if(selected) refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"})
    // console.log(place)
    return (
     <Card elevation ={6}>
         <CardMedia 
         styles ={{ heights :350}}
         images ={place.photo?place.photo.images.large.url:'https://www.food.com'}
         title={place.name}
         />
         <CardContent>
             <Typography gutterBottom varient ='h5'>{ place.name}</Typography>
         <Box display='flex' justifyContent="space-between">
         <Rating  value ={Number(place.rating)} readOnly/>
  <Typography gutterBottom varient="subtitle1">out of{place._num_reviews}</Typography>
  </Box>
         <Box display='flex' justifyContent="space-between">
  <Typography varient="subtitle1">"price"</Typography>
  <Typography gutterBottom varient="subtitle1">{place.price_level}</Typography>
  </Box>
  <Box display='flex' justifyContent="space-between">
  <Typography gutterBottom varient="subtitle1">"Ranking"</Typography>
  <Typography gutterBottom varient="subtitle1">{place.ranking}</Typography>
</Box>
{place?.award?.map((award)=>(
<Box my={1} display="flex" justifyContent="space-between">
<img src={award.images.small} alt ={award.display_name}/>
<Typography varient ="subtitle2" color="textSecondary" > {award.display.name}</Typography>

</Box>
))}
{place?.cuisine?.map((name)=>(
    <Chip key={name} size ="small" label={name} className ={classes.chip}>

    </Chip>
))}
{place?.address && (
    <Typography gutterBottom varient ="subtitle2" color ="textSecondary" className ={classes.subtitle}>
        <locationOnIcon /> {place.address}

       
    </Typography>
)}
{place?.phone && (
    <Typography gutterBottom varient ="subtitle2" color ="textSecondary" className ={classes.subtitle}>
        <PhoneIcon /> {place.phone}

       
    </Typography>
)}
<CardAction>
    <Button size ="small" color ="primary" onclick = {()=>window.open(place.web_url,"_blank")}>
       Trip Advisor  
    </Button>
    <Button size ="small" color ="primary" onclick = {()=>window.open(place.website,"_blank")}>
       web  
    </Button>
</CardAction>
</CardContent>   

     </Card>
    )
};
 export default PlaceDetails;
