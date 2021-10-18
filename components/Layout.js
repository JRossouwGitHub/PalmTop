import styles from '../styles/Layout.module.css'
import NavBar from '../components/NavBar'
import Meta from '../components/Meta'
import ScrollToTop from './ScrollToTop'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Layout = (props) => {
    return (
        <>
            <Meta />
            <NavBar />
            <ScrollToTop {...props} className={styles.zindex}>
                <Fab className={styles.stt} color="inherit" size="large" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon fontSize='large' />
                </Fab>
            </ScrollToTop>
            <main>{ props.children }</main>
        </>
    )
}

export default Layout
