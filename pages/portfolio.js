import styles from '../styles/Layout.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const portfolio = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Meta title='PalmTop | Portfolio' />
            <div className={styles.root}>
                <div className={styles.container}>
                    <h1>Portfolio</h1>
                </div>
                {isMobile ? null : <Footer />}
            </div>
        </>
    )
}

export default portfolio
