import React from 'react'
import ContactItem from '../components/ContactItem';
import HeaderChat from '../components/HeaderChat';

const Home = () => {
    return (
        <div class="container">
            <div class="home">
                <div class="home-inner">
                    <div className="chat-wrapper">
                        <HeaderChat />
                        <div class="chat-menu">
                            <div class="contact-block">
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                                <ContactItem />
                            </div>
                            <div className="chat-block">
                                sda
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;