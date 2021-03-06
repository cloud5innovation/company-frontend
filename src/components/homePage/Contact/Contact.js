import React from 'react';
import ContactForm from './../../../container/Forms/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
    Wrapper, 
    Container, 
    DarkTitle,
    AddressContainer,
    SmallCardDes,
} from '../../../Global_Styles/global-styles';

const SpecialProjects = () => {
    return (
        <Wrapper column blue>
            <header>
                <SmallCardDes small style={{margin: '2rem 0 0 0'}}>Get In Touch</SmallCardDes>
                <DarkTitle style={{width: '100%', margin: '0'}}>WE WANT TO MEET YOU</DarkTitle>
            </header>
                <Container contact   around top style={{padding: '0', width: '80%'}}>
                    <AddressContainer>
                        <a a href="mailto:support@cloud5hub.io.com" className='contact'>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />

                            <SmallCardDes>

                                contact@cloud5hub.io</SmallCardDes>
                        </a>
                        <address className='contact'>
                        <FontAwesomeIcon className='icon' icon={faMapMarkerAlt}/>

                            <SmallCardDes>

                                701 Brazos St. 
                                Austin, TX 78701
                            </SmallCardDes>
                        </address>
                            <a a href='tel:8554774825' className='contact'> 
                            <FontAwesomeIcon className='icon' icon={faPhone}/>

                            <SmallCardDes >

                                (855) 477-4825
                            </SmallCardDes></a>
                    </AddressContainer>
                    <ContactForm/>
                </Container>
        </Wrapper>
    )
};

export default SpecialProjects;