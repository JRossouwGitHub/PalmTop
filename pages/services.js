import * as React from 'react'
import styles from '../styles/Layout.module.css'
import stylesServices from '../styles/Services.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const services = () => {
    const [webdesign, setWebdesign] = React.useState(false)
    const [hosting, setHosting] = React.useState(false)
    const [writing, setWriting] = React.useState(false)
    const [graphics, setGraphics] = React.useState(false)
    const [marketing, setMarketing] = React.useState(false)
    const [support, setSupport] = React.useState(false)

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Meta title='PalmTop | Services' />
            <div className={styles.root}>
                <div className={styles.container} style={{textAlign: 'center'}}>
                    <h1 className={stylesServices.heading}>Services</h1>
                    <p style={{marginLeft: '2%', marginRight: '2%'}}>PalmTop is a Digital Solutions company specializing in Web Design</p>
                    <p style={{marginLeft: '2%', marginRight: '2%'}}>Other services include Web/Email Host Management, Content Writing and Graphic Design done by 3rd Party New Zealand based sources</p>
                    <Box sx={{ width: '100%' }}>
                        <Grid container className={stylesServices.grid}>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={webdesign ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <BrushRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Web Design</h3>
                                    <div className={stylesServices.container}>
                                        <div className={webdesign ? stylesServices.descE : stylesServices.desc}>
                                            <h4>Types of websites we do:</h4>
                                            <ul>
                                                <li>Vanilla</li>
                                                <li>WordPress</li>
                                            </ul>
                                            <br />
                                            <h4>Vanilla</h4>
                                            <p>This means we code everthing ourself from a blank document.</p>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>React/Next</li>
                                                <li>HTML5/CSS/JavaScript</li>
                                                <li>Responsive Design</li>
                                                <li>Custom Pages/Interactions</li>
                                                <li>Emails from Web (3rd Party Service)</li>
                                                <li>Potential for other plugins</li>
                                            </ul>
                                            <br />
                                            <h4>WordPress</h4>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>WordPress Services</li>
                                                <li>WordPress Plugins (per subscription)</li>
                                                <li>WordPress Design Limitations</li>
                                            </ul>
                                            <br />
                                            <p>No matter what the choice is, with our level expertise, we know you'll love the final look and feel of your website!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setWebdesign(!webdesign)}>{webdesign ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={hosting ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <StorageRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Web {'&'} Email Host Management</h3>
                                    <div className={stylesServices.container}>
                                        <div className={hosting ? stylesServices.descE : stylesServices.desc2}>
                                            <h4>Hosting Services:</h4>
                                            <ul>
                                                <li>Website (3rd Party Service)</li>
                                                <li>Email (3rd Party Service)</li>
                                            </ul>
                                            <p>We can manage any or all of these services for you.</p>
                                            <br />
                                            <h4>Website</h4>
                                            <p>We take care of uploading your website and keep an eye on it for you.</p>
                                            <br />
                                            <h4>Email</h4>
                                            <p>We manage your Email Accounts.</p>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>Setup</li>
                                                <li>Add/Remove Emails</li>
                                            </ul>
                                            <br />
                                            <p>Sit back while we take care of all the boring mangement stuff!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setHosting(!hosting)}>{hosting ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={writing ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <ArticleRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Content Writing</h3>
                                    <div className={stylesServices.container}>
                                        <div className={writing ? stylesServices.descE : stylesServices.desc}>
                                            <h4>We will create the text content for your website.</h4>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>Home Page</li>
                                                <li>About Page</li>
                                                <li>Stories</li>
                                                <li>Backgrounds</li>
                                            </ul>
                                            <br />
                                            <h4>Home/About Page</h4>
                                            <p>We fill your pages with information relevent to your business.</p>
                                            <br />
                                            <h4>Stories</h4>
                                            <p>For when you want to tell your, or your business' story to the world.</p>
                                            <br />
                                            <h4>Stories</h4>
                                            <p>Tell us about your origins and we will piece it all together.</p>
                                            <br />
                                            <p>Our top level Content Writer is eager to take on your story!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setWriting(!writing)}>{writing ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={graphics ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <LayersRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Graphic Design</h3>
                                    <div className={stylesServices.container}>
                                        <div className={graphics ? stylesServices.descE : stylesServices.desc}>
                                            <h4>We will create the graphic content for your website.</h4>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>Logos</li>
                                                <li>Icons</li>
                                                <li>Business Cards</li>
                                                <li>Document Headers</li>
                                            </ul>
                                            <br />
                                            <h4>Logos/Icons</h4>
                                            <p>Custom Designed to your idea or business.</p>
                                            <br />
                                            <h4>Business Cards</h4>
                                            <p>Small cards with your contact details.</p>
                                            <br />
                                            <h4>Document Headers</h4>
                                            <p>For official documents.</p>
                                            <br />
                                            <p>Tell us what your ideas are and see them come to life!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setGraphics(!graphics)}>{graphics ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={marketing ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <TrendingUpRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Advertising</h3>
                                    <div className={stylesServices.container}>
                                        <div className={marketing ? stylesServices.descE : stylesServices.desc}>
                                            <h4>Social Media Ads</h4>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>Facebook Page Setup</li>
                                                <li>Instagram Page Setup</li>
                                                <li>Facebook Ads</li>
                                                <li>Instagram Ads</li>
                                            </ul>
                                            <br />
                                            <h4>Facebook/Instagram Page Setup</h4>
                                            <p>We set up your social media pages on your behalf and hand them over upon completion.</p>
                                            <br />
                                            <h4>Facebook/Instagram Ads</h4>
                                            <p>We run ads on your behalf according to your budget, target and time specifications.</p>
                                            <br />
                                            <p>This is a great way to get your business out there, especially if you are a new/small business!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setMarketing(!marketing)}>{marketing ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12} className={support ? stylesServices.itemE : stylesServices.item}> 
                                <div className={stylesServices.card}>
                                    <div className={stylesServices.icon}>
                                        <ForumRoundedIcon fontSize='large' color='primary' />
                                    </div>
                                    <h3 className={stylesServices.title}>Support</h3>
                                    <div className={stylesServices.container}>
                                        <div className={support ? stylesServices.descE : stylesServices.desc}>
                                            <h4>Customer Service</h4>
                                            <p>This includes, but is not limited to:</p>
                                            <ul>
                                                <li>Initial Setup of Website/Emails</li>
                                                <li>Updates to Website/Emails</li>
                                                <li>Breakdowns</li>
                                                <li>Administration</li>
                                                <li>General Enquiries</li>
                                            </ul>
                                            <br />
                                            <h4>Initial Setup</h4>
                                            <p>We get you up and running with your Email Accounts.</p>
                                            <br />
                                            <h4>Updates</h4>
                                            <p>Make changes (within reason) to your Website's content or list of Email Accounts.</p>
                                            <br />
                                            <h4>Breakdowns</h4>
                                            <p>If any or all of your services are not working, we will get it sorted.</p>
                                            <br />
                                            <p>Our team is at the ready to Support all your needs!</p>
                                        </div>
                                    </div>
                                    <Button className={stylesServices.button} onClick={() => setSupport(!support)}>{support ? 'Read Less' : 'Read More'}</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                {isMobile ? null : <Footer />}
            </div>
        </>
    )
}

export default services
