import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = ['../images/001.png', '../images/004.png', '../images/007.png', '../images/025.png', '../images/039.png'];

root.render(<Carousel images={images} />);
