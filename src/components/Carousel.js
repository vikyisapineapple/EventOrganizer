import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel showThumbs= {false} autoPlay axis='horizontal' interval={2000}>
        <div>
        <img src = {require("../assets/image1.jpg")} width = "100" height="200"/>
        </div>
        <div>
        <img src = {require("../assets/image1.jpg")}  width = "100" height="200"/>
        </div>
        <div>
        <img src = {require("../assets/image1.jpg")}  width = "100" height="200"/>
        </div>  
    </Carousel>
);
