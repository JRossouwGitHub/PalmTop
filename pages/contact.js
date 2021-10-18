import * as React from 'react';
import styles from '../styles/Layout.module.css'
import stylesContact from '../styles/Contact.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Image from 'next/image'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    return (
        <>
            <Meta title='PalmTop | Contact' />
            <div className={styles.root}>
                <div className={styles.container}>
                    <h1 className={stylesContact.heading}>Contact Us</h1>
                    <Box sx={{ width: '100%' }}>
                        <Grid container className={stylesContact.grid}>
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesContact.item}>
                                <div>
                                    <h2 className={stylesContact.span}>Details</h2>
                                    <Typography>
                                        <span className={stylesContact.span}>Name:</span> Jacques Rossouw
                                        <br />
                                        <span className={stylesContact.span}>Mobile:</span> 022 306 2988
                                        <br />
                                        <br />
                                    </Typography>
                                    <Typography>
                                        <span className={stylesContact.span}>Email:</span> sales@palmtop.co.nz
                                        <br />
                                        <span className={stylesContact.span}>Location:</span> Hamilton, Waikato New Zealand
                                        <br />
                                        <br />
                                    </Typography>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201825.59017411724!2d175.1083056240301!3d-37.77773808225287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d227487a63621%3A0x500ef6143a29903!2sHamilton!5e0!3m2!1sen!2snz!4v1632628667038!5m2!1sen!2snz" width={isMobile ? "300" : "600"} height={isMobile ? "150" : "300"} style={{border: "2px solid #7114bc"}} allowFullScreen="" loading="lazy"></iframe>
                                    {isMobile ? (<><br /><br /></>) : null}
                                </div>
                            </Grid>
                            {isMobile ? <hr className={stylesContact.hr} /> : null}
                            <Grid item lg={6} md={6} sm={12} xs={12} className={stylesContact.item}>
                                <div className={stylesContact.formDiv}>
                                    <h2 className={stylesContact.span}>Or Send Us A Message</h2>
                                    <form
                                        id="form"
                                        action="https://formspree.io/f/moqyrowa"
                                        method="POST"
                                        className={stylesContact.form}
                                        onSubmit={() => {
                                            setTimeout(function(){
                                                setName('')
                                                setNumber('')
                                                setEmail('')
                                                setMessage('')
                                            }, 1000);
                                        }}
                                    >
                                        <input name="Name" placeholder="Name... (optional)" value={name} onChange={() => setName(event.target.value)} className={stylesContact.input} /><br />
                                        <input name="Number" type="number" placeholder="Number... (optional)" value={number} onChange={() => setNumber(event.target.value)} className={stylesContact.input} /><br />
                                        <input type="email" name="Email" placeholder="Email... (required)" value={email} onChange={() => setEmail(event.target.value)} className={stylesContact.input} required /><br />
                                        <textarea name="Message" placeholder="Message... (required)" value={message} onChange={() => setMessage(event.target.value)} className={stylesContact.textarea} required></textarea><br /><br />
                                        <Button className={stylesContact.button} type='submit'>Send</Button>
                                        {isMobile ? (<><br /><br /><br /><br /></>) : null}
                                    </form>
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

export default contact
