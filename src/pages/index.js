import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="itsame">
                        <header className="major">
                            <h2>Welcome to my Page!</h2>
                        </header>
                        {/* <p>
                            I've been working as a Platform Engineer at Bearingpoint GmbH (Graz/Austria) for the past 11 years (Although i was hired as a Java Developer back then).<br/>
                            At my dayjob I've been working with Kubernetes/Openshift since k8s v3.11-ish while still maintaining an older development platform based on Mesos. <br/>
                            I've always been very flexible in my skillset and that's probably the reason, why i kind of "stumbled" into this role - never regretted it though :-)
                            I like listening dev/k8s-podcasts (but also science-ish podcasts like an astronomy podcast or the fabulous <a href="https://ourludicrousfuture.com/">ourludicrousfuture.com</a>) a lot as i'm on a 40min commute.
                        </p> */}
                        <p>I've been working as a Platform Engineer at Bearingpoint GmbH (Graz/Austria) for the past 11 years (Although i was hired as a Java Developer back then).</p>
                        <p>At my dayjob I've been working with Kubernetes/Openshift since k8s v3.11-ish while still maintaining an older development platform based on Mesos.</p>
                        <p>I've always been very flexible in my skillset and that's probably the reason, why i kind of "stumbled" into this role - never regretted it though :-)</p>
                        <p>I like listening dev/k8s-podcasts (but also science-ish podcasts like an astronomy podcast or the fabulous <a href="https://ourludicrousfuture.com/">ourludicrousfuture.com</a>) a lot as i'm on a 40min commute.</p>
                        <ul className="actions">
                            {/* <li><a href="#" className="button">Dayjob</a></li>
                            <li><a href="#" className="button">I am the night</a></li>
                            <li><a href="#" className="button">Podcasts</a></li>
                            <li><a href="#" className="button">Family</a></li> */}
                            {/* <li><a href="#contact" className="button">Contact me</a></li> */}
                        </ul>
                    </section>

                    <section id="dayjob">
                        <h2>Dayjob</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="night">
                        <h2>During Nights</h2>
                    </section>

                    <section id="podcasts">
                        <h2>My Favorite Podcasts</h2>
                    </section>

                    <section id="family">
                        <h2>My Family &lt;3</h2>
                        <p>In a rather futile privacy driven intention (my wife is very active on facebook and instagram) I'm not gonna publish names or photos, just wanted to spread some love all over the internet *v* *v* *v* </p>
                    </section>

                    <section id="contact">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +43-664-8161963
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">klaus.azesberger@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex