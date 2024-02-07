import Carousel from 'react-bootstrap/Carousel';
import '../App';
import './CarouselExample.css';
import React from 'react';
function DarkVariantExample() {
    return (

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="pizza.jpg" height="950" width="10%"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='title'>SAUSAGE INN</h1>
                    <p id='one'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="hmm.jpg" height="950" width="10%"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <div className="head">
                        <h1 className='title'>PEPPER SAUCE BURGER</h1>
                        <h5 id='one'>lorem ipsum</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="pizza22.jpg" height="950" width="10%"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className='alright' />
                    <h1 className='title'>SPICY PIZZA</h1>
                    <p id='one'>PrSDQ</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>

    );
}


export default DarkVariantExample;

