import React from 'react'
const HeaderChat = () => {
    return (
        <div className="chat-header">
            <div className="header-inner">
                <div class="contact-search">
                    <input type="text" name="search" id="search" placeholder="Find contact" autocomplete="off" />
                </div>
                <div className="header-block">
                    <div className="chat-info">
                        <div className="chat-img"></div>
                        <div className="chat-name">Someone</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderChat;


