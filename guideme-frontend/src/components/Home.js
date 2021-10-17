import { useState } from "react";
import AddNewRest from "./restaurant/AddNewRest";
import { Link, Switch, Route } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/material";
import StyledButton from "./Layout/StyledButtons";
import ColorButton from "./Layout/ColorButton";


const Home = () => {

  return (
    <div>
        <Typography variant='h1' align='center' marginTop={5} >
          GuideMe
        </Typography>

        <Typography variant = 'subtitle1' align='center' paddingBottom={5}>
          A community-driven application to help you 
          find the best services in any place you go
        </Typography>
        
      <main>
        <StyledButton images={images}/>
          <Typography variant='h5' >
            Help our community to grow!
          </Typography>
          <br/>
          <ColorButton 
            component={Link}
            path='/new-restaurant'
            text = 'Add Restaurant'
            color='success'
          />
      </main>
    </div>
  )
}

const images = [
  {
    url: './food.jpg',
    title: 'Food',
    width: '34%',
    disabled: false
  },
  {
    url: './car.jpg',
    title: 'Car Rental (available soon)',
    width: '33%',
    disabled: true
  },
  {
    url: './hotel',
    title: 'Hotel (available soon)',
    width: '33%',
    disabled: true,
  }

];

export default Home;