import React from 'react';
import { render } from 'react-dom';
import Carousel from './components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PoojaCard from './components/PoojaCard/PoojaCard';

const App = () => (
    <div>
        <Carousel />
        <div style={{ marginTop: "20px" }} >
            <PoojaCard />
        </div>
    </div>
);

render(<App />, document.getElementById('root'));
