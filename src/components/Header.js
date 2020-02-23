import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/user-avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#contact" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi, I'm Klaus Azesberger. </strong><br />
                    Versatile Platform Engineer. <br />
                    I live in Austria. <br/>
                    Dad / Husband.<br/>
                    </h1>
                </div>
                <div>
                    | <a href="#main">home</a> |
                     <a href="#blog">blog</a> |
                     <a href="#dayjob">dayjob</a> |
                     <a href="#contact">contact</a> |
                </div>
                    {/* | <a href="#">home</a> | <a href="#">home</a> | <a href="#">home</a> | <a href="#">home</a> | */}
                <Footer />
            </header>
        )
    }
}

export default Header
