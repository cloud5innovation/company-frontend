//eslint-disable jsx-a11y/alt-text
import React from 'react';
import { 
    Wrapper, 
    Container, 
    CardContent, 
    SmallImageCard, 
    SmallCardDes,
    DarkTitle,
    Button,
    SmallWhiteTitle, 
} from './../../../Global_Styles/global-styles';

const Marketing= () => {
    return (
        <Wrapper column  style={{zIndex: '2', marginTop: '4rem'}}>
            <DarkTitle left smallFont pad>DIGITAL MARKETING</DarkTitle>
            {/* <LightText left style={{width: '82%'}}>
                Our job is to ensure the highest quality product, and a seamless 
                design that will showcase your company brand the way it deserves to be showcased.
            </LightText> */}

            <Container cards mobile>
                <CardContent white outline shadow shrink>
                    <SmallImageCard src={require('./../../../assets/Marketing/cosmetic surgeon.jpg')} alt='seo cosmetic surgeon'/>
                   
                        <SmallCardDes>
                            SEO for Plastic Surgeon Office
                        </SmallCardDes>
                
                    <Button href='/plastic-surgean-casestudy'><SmallWhiteTitle>VIEW RESULTS</SmallWhiteTitle></Button>
                </CardContent>
                {/* <CardContent white outline shadow shrink>
                    <SmallImageCard src={require('./../../../assets/Marketing/Gaming-wandermonkey-feature-image.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            Marketing for Audio Game
                        </SmallCardDes>
                </CardContent> */}

                <CardContent white outline shadow shrink>
                    <SmallImageCard src={require('./../../../assets/Marketing/eye clinic.jpg')} alt='eye clinic seo'/>
                        <SmallCardDes>
                            SEO for Eye Doctor's Office
                        </SmallCardDes>
                        <Button href='/plastic-surgean-casestudy'><SmallWhiteTitle>VIEW RESULTS</SmallWhiteTitle></Button>

                </CardContent>

                <CardContent white outline shadow shrink>
                    <SmallImageCard src={require('./../../../assets/Marketing/funkmeyers_brand.png')} alt='social media management for funkmeyers'/>
                        <SmallCardDes>
                        Social Media Management Funkmeyers Rec Room following
                        </SmallCardDes>
                </CardContent>

                {/* <CardContent white outline shadow margin style={{zIndex: 100}}>
                    <SmallImageCard src={require('./../../../assets/Marketing/cosmetic surgeon.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            Infulencer Campaign for Luxxly Co.
                        </SmallCardDes>
                </CardContent> */}

            </Container>
             {/* <div className='box'></div> */}
         </Wrapper>
    )
};

export default Marketing;


