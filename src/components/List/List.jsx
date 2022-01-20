import React, {useState,useEffect,createRef}from 'react'
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from  '@material-ui/core';
import useStyle from './style'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
const List = ({places,childclicked,isloading})=>{
    const classes = useStyle()
    const [type,setType]= useState('restaurants')
    const [rating,setRating]= useState('')
    const [elRefs,setElrefs]= useState([])

    useEffect(()=>{
        const refs = Array(places?.length).fill().map((_,i)=>elRefs[i]||createRef())
        setElrefs(refs)


    },[places])
    return  (
        
        <div className = {classes.container}>
            <Typography varient = 'h4'> Hotels, Restaurants and Attraction around you</Typography>
            {isloading?(
                <div className = {classes.loading}> <CircularProgress size = '5rem' /></div>
            )}:(
                <>
            <FormControl className={classes.formControl}>
           <InputLabel>Type</InputLabel>
           <Select value ={type} onChange={ (e)=>setType(e.target.value)}>
               <MenuItem value ="restaurants">Restaurants</MenuItem>
               <MenuItem value ="hotels">Hotels</MenuItem>
               <MenuItem value ="attraction">Attraction</MenuItem>
           </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
           <InputLabel>Rating</InputLabel>
           <Select value ={rating} onChange={ (e)=>setRating(e.target.value)}>
               <MenuItem value ={0}>Restaurants</MenuItem>
               <MenuItem value ={3}>Hotels</MenuItem>
               <MenuItem value ={4}>Above 4.0</MenuItem>
               <MenuItem value ={ 4.5}>Above 4.5</MenuItem>
           </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                   <Grid item key ={i} xs ={12}> 
                        place ={place}
                        selected={Number(childClicked)=== i}
                        refProp=(elrefs[i])

                   <PlaceDetails place = {place}/>
                   </Grid>
                )

                )}

            </Grid>
            </>

        </div>
        
    )
};
 export default List;
