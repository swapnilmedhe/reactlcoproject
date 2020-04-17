import React from 'react';
import BackgroundImage from 'gatsby-background-image';


function HeroSection( { class1, title ,subtitle ,img}) {
    return (
        <BackgroundImage className={class1} fluid={img}>
           
            <div>
                <h1 className="text-white text-center display-4">{title}</h1>
                <h4 className="text-warning">{subtitle}</h4>
            </div>
        </BackgroundImage>
    )
}

export default HeroSection;
