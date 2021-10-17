import styles from '../styles/Layout.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Meta title='PalmTop | Contact' />
            <div className={styles.root}>
                <div className={styles.container}>
                    <h1>Contact</h1>
                </div>
                {isMobile ? null : <Footer />}
            </div>
        </>
    )
}

export default contact
