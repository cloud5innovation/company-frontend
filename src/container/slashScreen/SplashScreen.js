import React from 'react';
import Overlay from './../Overlay'
// import {  HomeWrapper, Tag, TagLineContent} from './../../Global_Styles/global-styles';
import { HomeWrapper} from './splashScreen-styles';
import './splashScreen.css'
const LandingPage = () => {
    return (
    <HomeWrapper>
            <div className='cf'>
                {/* <LazyLoad
                    debounce={false}
                    offsetVertical={800}
                > */}
                <img className="bottom" src={require("./../../assets/austin-skyline.png" )} alt='Austin Skyline'/>
                {/* </LazyLoad>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={800}
                > */}
                    <img className="top" src={require("./../../assets/future-cityscape.png" )} alt='Future City'/>
                {/* </LazyLoad> */}
                <Overlay/>
            </div> 
        {/* <Tag>
            <TagLineContent>We Build</TagLineContent>
            <TagLineContent bottom id='bottom'></TagLineContent>
            <h4 className='content_body'>

                
            </h4>
            <a href='/contact' className='content_cta-btn'>Let's Get Started</a>

        </Tag> */}

        <header className='content'>
            <h1 className='content_title'>Cloud5 Innovation <br/> <span className='content_tag'>Creating the future.</span></h1>
            <h4 className='content_body'>
            Welcome to the first, and the only <br/> Digital Innovation Agency in the world. 
            <br/>Let’s build something amazing together.
            </h4>
            <a href='/contact' className='content_cta-btn'>Let's Get Started</a>
        </header>

    </HomeWrapper>
    )
}


export default LandingPage;


