import * as React from 'react'
import styles from '../styles/Layout.module.css'
import stylesServices from '../styles/Services.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer'
import Meta from '../components/Meta'

const privacypolicy = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Meta title='PalmTop | Weather Or Not | Privacy Policy' />
            <div className={styles.root}>
                <div className={styles.container} style={{textAlign: 'center'}}>
                    <h1 className={stylesServices.heading}>Weather Or Not Privacy Policy:</h1>
                    <p style={{marginLeft: '2%', marginRight: '2%'}}>Weather Or Not does not and will not collect any private {"(media/audio/personal)"} information from the use of the application.</p>
                    <p style={{marginLeft: '2%', marginRight: '2%'}}>Weather Or Not may use app use frequency to send push notifications to your device based on your frequent use times.</p>
                </div>
                {isMobile ? null : <Footer />}
            </div>
        </>
    )
}

export default privacypolicy
