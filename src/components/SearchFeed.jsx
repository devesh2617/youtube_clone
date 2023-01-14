import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const SearchFeed = () => {
   const {searchTerm} = useParams()
  
   const [videos, setVideos] = useState([]);

   useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
   }, [searchTerm])

  
  return (
    <Box minHeight='95vh'>
    <Typography variant='h4' fontweight='bold' mb={2} sx={{color:'white'}}>
    Search Results for <span style={{color:'#F31503'}}>
      {searchTerm}
    </span>
    </Typography>
    <Videos videos={videos} /> 
    </Box>
  )
}

export default SearchFeed