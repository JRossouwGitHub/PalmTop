import styles from '../styles/Layout.module.css'
import stylesPortfolio from '../styles/Portfolio.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import PortfolioCard from '../components/PortfolioCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ElectricAir from '../img/ElectricAir.PNG'
import Autopoint from '../img/Autopoint.png'
import TLC from '../img/TLCElectrical.PNG'

const portfolio = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Meta title='PalmTop | Portfolio' />
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={stylesPortfolio.container}>
                        <h1 className={stylesPortfolio.heading}>Portfolio</h1>
                        <p>PalmTop's Website Design Portfolio</p>
                        {isMobile ? <p>Tap on the company to view the website!</p> : <p>Click on an image to enlarge it, or click on the company name to view the website!</p>}
                    </div>
                    <Box sx={{ width: '100%' }}>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={12} xs={12}> 
                                <PortfolioCard src={ElectricAir} alt={'Electric Air Img'} company={'Electric Air'} link={'https://www.electricair.co.nz'} />
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12}> 
                                <PortfolioCard src={Autopoint} alt={'Autopoint Hamilton Img'} company={'Autopoint Hamilton'} link={'https://www.autopointnz.com'} />
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12}> 
                                <PortfolioCard src={TLC} alt={'TLC Electrical Img'} company={'TLC Electrical'} link={'https://www.tlcelectrical.co.nz'} />
                            </Grid>
                        </Grid>    
                    </Box>
                </div>
                {isMobile ? null : <Footer />}
            </div>
        </>
    )
}

export default portfolio
