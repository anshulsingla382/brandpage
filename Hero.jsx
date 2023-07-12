import React from "react";
const Hero=()=>{
    return(
<main className="hero container">
    <div className="hero-content">
        <h1> YOUR FEET DESERVE THE BEST </h1>
        <p> 
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
    <div className="hero-btn">
        <button> shop now </button>
        <button className="secondary-btn"> category </button>
    </div>
    <div className="shopping">
        <p> Now available on </p>
        <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo"/>
            <img src="/images/flipkart.png" alt="flipkart-logo"/>
        </div>
    </div>
    </div>
    <div className="hero-image"> 
    <img src="/images/shoe_image.png" alt="shoe"/>
     </div>
</main>
    )
};
export default Hero;