import React from 'react';
import Aux from './../../HOC/Aux';
import {
    Wrapper,
    ContentArea, 
    Header,
    LightOverlay, 
    DarkTitle, 
    LightText,
    HeaderImage,
    SmallSubTitle,
    ImageCard,
   SmallImageCard,
   CardDesLink,
   ThreeColumnGrid,
   CardContent,
} from './../../Global_Styles/global-styles';



const Portfolio = () => {
    return (
        <Aux>
            <Header>
                <HeaderImage src={require('./../../assets/portfolio_header.jpg')} alt='Our Portfolio'/>
            </Header>
                <Wrapper>
                    <ContentArea>
                        <header>
                            <DarkTitle>Portfolio</DarkTitle>
                        </header> 
                        <LightText style={{textAlign: 'center', width: '100%'}}>
                            We let our work speak for itself! Take a look at some of  
                            the projects we've completed for our clients.

                            {/* Cloud5 takes pride in the products that we build. 
                            We offer unlimited revisions in most cases because we value 
                            our client’s dreams and we want to make sure the quality of 
                            our work is presented successfully across the board. */}
                        </LightText>                    
                    </ContentArea>
                    
                    <ContentArea>
                        <header>
                            <DarkTitle>Marketing</DarkTitle>
                        </header>
                        <LightText >
                        Do you need marketing to grow your business? The answer is ALWAYS yes. 
                        Marketing can be anything from a tweet to deciding what to name a product. 
                        Cloud5 is dedicated to taking the crazy world of digital marketing and making it simple for you. 
                        You can stop focusing all your time on what to post, when to post it, and is it even reaching the right people? Our team of
                         strategists, SEO specialists, and social media managers are ready and prepared to take your vision and have your entire online presence match that. 
                         get more information on exactly how we can help you, keep scrolling. 
                         Check out our case studies bellow.                        
                         </LightText>

                         <SmallSubTitle>Social Media and SEO Case Studies</SmallSubTitle>
                         {/* <PortfolioCard> */}
                             <ContentArea horizontal >
                                 <CardContent>
                                    <SmallImageCard  about src={require('../../assets/eye_case_study.jpg')} alt='Eye doctor SEO case study'/>
                                    <CardDesLink href='https://docs.google.com/document/d/1Oh3L3_0HQoFjrBJwUjiG1Qq2vfAjrUWE9WkWASAk0yQ/edit'>SEO Case Study For Eye Doctor's Office</CardDesLink>
                                </CardContent>

                                <CardContent>
                                    <SmallImageCard about src={require('../../assets/plastic_surgery_casestudy.jpg')} alt='SEO case study: Plastic Surgeon Office'/>
                                    <CardDesLink href='https://docs.google.com/document/d/1Oh3L3_0HQoFjrBJwUjiG1Qq2vfAjrUWE9WkWASAk0yQ/edit'>SEO Case Study For Plastic Surgeon Office Office</CardDesLink>
                                </CardContent>
                             </ContentArea>
                        
                    </ContentArea>

                    <ContentArea>
                        <header>
                            <DarkTitle>Development</DarkTitle>
                        </header>
                        <LightText style={{width: '83%'}}>
                        At some Digital agencies, website development is a second thought. At Cloud5, we take pride in building websites that look good and perform even better. We turn your ideas and vision into reality. Our job is to insure the highest quality product, and a seamless design that will showcase your company brand the way it deserves to be showcased.                        
                         </LightText>
                         <ThreeColumnGrid>
                             <CardContent>
                                <ImageCard   src={require('../../assets/shopify_ex1.png')} alt='Luxxlyco'/>
                                <CardDesLink href='https://luxxlyco.com/'>Luxxlyco</CardDesLink>
                             </CardContent>

                                <CardContent>
                                <ImageCard  src={require('./../../assets/wordpress-ex1.png')} alt='WordPress Project: Full Scale Media'/>
                                <CardDesLink href='http://www.fullscalemedia.com/' >Full Scale Media</CardDesLink>
                                </CardContent>

                                <CardContent>
                                <ImageCard src={require('./../../assets/picadilly-group.png')}/>
                                <CardDesLink href='https://www.piccadillygroup.com/'>Piccadilly Group</CardDesLink>
                                </CardContent>
                         </ThreeColumnGrid>
                        
                    </ContentArea>

                    <ContentArea>
                        <header>
                            <DarkTitle>App Design and Development</DarkTitle>
                        </header>
                        <LightText style={{width: '83%'}}>
                            Our team can assist you in conceptualizing, developing, marketing, launching, and even managing your mobile app. 
                            What most people don’t realize is mobile app creation is like building a micro business that is going to have allot of moving parts like any business. By choosing Cloud5, you’re choosing a partner that understands not only the technical side of things, but also the business as well. 
                            We take you by the hand and help you build a masterpiece, and we assist in implementing multiple forms of monetization.                         
                        </LightText>
                         <ThreeColumnGrid>
                             <CardContent>
                                <ImageCard src={require('../../assets/Views/development/featured_client2.png')} alt='New Nation App'/>
                                <CardDesLink href='https://apps.apple.com/in/app/newsnation/id917219227'>News Nation</CardDesLink>
                             </CardContent>

                                <CardContent>
                                <ImageCard  src={require('./../../assets/Views/development/ezWayFinder.jpg')} alt='ezWayFinder App'/>
                                <CardDesLink href='ezWayFinder' >ezWayFinder</CardDesLink>
                                </CardContent>

                                <CardContent>
                                <ImageCard src={require('./../../assets/Views/development/ezDictate.png')}/>
                                <CardDesLink href='https://apps.apple.com/in/app/ezdictate/id527209658'>ezDictate</CardDesLink>
                                </CardContent>
                         </ThreeColumnGrid>
                        
                    </ContentArea>
                    {/* <Content>
                        <header>
                            <DarkTitle>Web Development</DarkTitle>
                        </header>
                        <LightText>
                        At some Digital agencies, website development is a second thought. At Cloud5, we take pride in building websites that look good and perform even better. We turn your ideas and vision into reality. Our job is to insure the highest quality product, and a seamless design that will showcase your company brand the way it deserves to be showcased.
                        </LightText>
                        <PortfolioCard>
                             <CardContent>
                             <AboutImage src={require('./../../assets/shopify_ex1.png' )} alt='Shopify Project: Luxxlyco'/>
                            <CardDesLink href='https://luxxlyco.com/'>Luxxlyco</CardDesLink>
                        </CardContent>

                                <CardContent>
                                <AboutImage src={require('./../../assets/wordpress-ex1.png')} alt='WordPress Project: Full Scale Media'/>
                                <CardDesLink href='http://www.fullscalemedia.com/' >Full Scale Media</CardDesLink>
                                </CardContent>

                                <CardContent>
                                <AboutImage src={require('./../../assets/picadilly-group.png')}/>
                                <CardDesLink href='https://www.piccadillygroup.com/' style={{width: '65%'}}>Piccadilly Group</CardDesLink>

                                </CardContent>

                         </PortfolioCard>
                    </Content> */}
                    {/* <TabComponent/> */}
                </Wrapper>
        </Aux>
    )
}

export default Portfolio;

