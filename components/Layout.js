import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from './ScrollToTop'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Layout = (props) => {
    return (
        <>
            <NavBar />
            <ScrollToTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
            <main>{ props.children }</main>
            <Footer />
        </>
    )
}

export default Layout
