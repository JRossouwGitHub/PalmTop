import styles from '../styles/Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            {isMobile ? (<>
                <footer className={styles.footerM}>
                    <br />
                    &copy; Copyright 2021, PalmTop.
                    <br /> <br />
                    <a href="https://www.facebook.com/PalmTop-101941725590593" target="_blank">
                        <FacebookIcon className={styles.icon} fontSize='large' />
                    </a>
                </footer>
            </>) : (<>
                <footer className={styles.footer}>
                    &copy; Copyright 2021, PalmTop.
                    <br /> <br />
                    <a href="https://www.facebook.com/PalmTop-101941725590593" target="_blank">
                        <FacebookIcon className={styles.icon} fontSize='large' />
                    </a>
                </footer>
                </>)
            }
        </div>
    )
}

export default Footer