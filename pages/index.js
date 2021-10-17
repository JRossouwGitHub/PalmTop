import styles from '../styles/Layout.module.css'
import stylesIndex from '../styles/Index.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Image from 'next/image'
import Button from '@mui/material/Button';
import WebDesignImg from '../img/webdesign.jpg'
import HostingImg from '../img/hosting.jpg'
import MarketingImg from '../img/marketing.jpg'
import SupportImg from '../img/support.jpg'

const index = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={stylesIndex.content}>
                {isMobile ? (<>
                    <Box sx={{ width: '100%' }}>
                        <Grid container className={stylesIndex.grid}>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Image
                                    src={WebDesignImg}
                                    alt="Web Design Img"
                                    width={320}
                                    height={213}
                                    />
                            </Grid>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h5'>
                                    Want a modern, responsive website?
                                    <br />
                                    We can build a website that's right for you!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaBM} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container spacing={0}>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Image
                                    src={HostingImg}
                                    alt="Hosting Img"
                                    width={320}
                                    height={213}
                                    />
                            </Grid>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h5'>
                                    Want hands free host management?
                                    <br />
                                    Let us take care of it for you!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaBM} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container className={stylesIndex.grid}>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Image
                                    src={MarketingImg}
                                    alt="Marketing Img"
                                    width={320}
                                    height={213}
                                    />
                            </Grid>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h5'>
                                    Want to get your name out there?
                                    <br />
                                    Take a look at our Advertising service!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaBM} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container spacing={0}>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Image
                                    src={SupportImg}
                                    alt="Support Img"
                                    width={320}
                                    height={213}
                                    />
                            </Grid>
                            <Grid item sm={12} xs={12} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h5'>
                                    Want a support team that cares?
                                    <br />
                                    Let us know how we can support your needs!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaBM} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </>) : (<>
                    <Box sx={{ width: '100%' }}>
                        <Grid container className={stylesIndex.grid}>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h4'>
                                    Want a modern, responsive website?
                                    <br />
                                    We can build a website that's right for you!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaB} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Image
                                    src={WebDesignImg}
                                    alt="Web Design Img"
                                    width={640}
                                    height={426}
                                    />
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container spacing={0}>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Image
                                    src={HostingImg}
                                    alt="Hosting Img"
                                    width={640}
                                    height={426}
                                    />
                            </Grid>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h4'>
                                    Want hands free host management?
                                    <br />
                                    Let us take care of it for you!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaB} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container className={stylesIndex.grid}>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h4'>
                                    Want to get your name out there?
                                    <br />
                                    Take a look at our Advertising service!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaB} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Image
                                    src={MarketingImg}
                                    alt="Marketing Img"
                                    width={640}
                                    height={426}
                                    />
                            </Grid>
                        </Grid>
                        <hr className={stylesIndex.hr} />
                        <Grid container spacing={0}>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Image
                                    src={SupportImg}
                                    alt="Support Img"
                                    width={640}
                                    height={426}
                                    />
                            </Grid>
                            <Grid item lg={6} md={6} className={stylesIndex.gridItem}>
                                <Typography className={stylesIndex.text} variant='h4'>
                                    Want a support team that cares?
                                    <br />
                                    Let us know how we can support your needs!
                                    <br /><br />
                                    <Link href='/services'>
                                        <Button className={stylesIndex.ctaB} variant='filled' color='inherit'>See More</Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </>)}
                </div>
            </div>
            {isMobile ? null : <Footer />}
        </div>
    )
}

export default index
