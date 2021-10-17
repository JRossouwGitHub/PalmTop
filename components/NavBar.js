import styles from '../styles/NavBar.module.css';
import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import Footer from '../components/Footer';
import PalmTopLogo from '../img/palmtopv3.png';

const NavBar = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List className={styles.linkM}>
                <Link href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeRoundedIcon className={styles.linkM} color="inherit" />
                        </ListItemIcon>
                        <ListItemText primary="Home" color="inherit" />
                    </ListItem>
                </Link>
                <Link href="/services">
                    <ListItem button>
                        <ListItemIcon>
                            <BuildRoundedIcon className={styles.linkM} color="inherit" />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItem>
                </Link>
                <Link href="/portfolio">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeRepairServiceRoundedIcon className={styles.linkM} color="inherit" />
                        </ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </Link>
                <Link href="/contact">
                    <ListItem button>
                        <ListItemIcon>
                            <PermPhoneMsgRoundedIcon className={styles.linkM} color="inherit" />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </Link>
          </List>
          <Divider />
          <Footer />    
        </Box>
    );

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className={styles.navbar} color='inherit'>
                    <Toolbar id="back-to-top-anchor">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer('left', true)}
                    >
                        {isMobile ? (<><MenuRoundedIcon fontSize="large" color="inherit" /></>) : null}
                    </IconButton>
                    <Link href="/">
                        <a className={styles.logo}>
                            <Image
                            src={PalmTopLogo}
                            alt="PalmTop Logo"
                            width={200}
                            height={100}
                            />
                        </a>
                    </Link>
                    {!isMobile ? (<>
                        <Stack spacing={4} direction="row" className={styles.link}>
                            <Link href="/">
                                <Button variant='text' color='inherit' className={styles.button}>
                                    Home
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant='text' color='inherit' className={styles.button}>
                                    Services
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant='text' color='inherit' className={styles.button}>
                                    Portfolio
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant='text' color='inherit' className={styles.button}>
                                    Contact
                                </Button>
                            </Link>
                        </Stack>
                    </>) : null}
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </div>
    )
}

export default NavBar
