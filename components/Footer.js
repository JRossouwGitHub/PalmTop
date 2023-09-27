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
                    &copy; Copyright 2023, PalmTop.
                    <br /> <br />
                    <a href="https://www.facebook.com/PalmTop-101941725590593" target="_blank">
                        <FacebookIcon className={styles.icon} fontSize='large' />
                    </a>
                </footer>
            </>) : (<>
                <footer className={styles.footer}>
                    &copy; Copyright 2023, PalmTop.
                    <br /> <br />
                    <a href="https://www.facebook.com/PalmTop-101941725590593" target="_blank">
                        <FacebookIcon className={styles.icon} fontSize='large' />
                    </a>
                </footer>
                </>)
            }
            <script type="text/javascript" src="https://analytics.palmtop.co.nz/js/bundle/analytics.min.1.0.0.js"></script>
        </div>
    )
}

export default Footer
