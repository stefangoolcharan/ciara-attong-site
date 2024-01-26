import React from 'react';
import './Hero.css';
import '../style.css'


const Hero = () => {
    return (
        <section >
            <div className='hero-section'>
                <div id='words'>
                    <h1 className='title'>Author & Poet</h1>
                    <div className='quotes'>
                        <p>"As long as my heart is beating,<br /> it will feel the fullness of being alive." <br />
                            - Dark & Cold
                        </p>
                        <p>"These stars seem all the more knowing<br />- now that I've met you "<br />
                            - Soul Strings</p>
                    </div>
                    <a href='https://www.amazon.co.uk/?&linkCode=ll2&tag=operagx-def-sp-sd-uu-21&linkId=e3e8b7d13b979516e9713ff0c5a76ff7&ref_=as_li_ss_tl'><button className='red-btn'>VIEW BOOKS</button></a>
                </div>
                <div class="spacer layer1"></div>

            </div>

        </section>
    );
}

export default Hero;