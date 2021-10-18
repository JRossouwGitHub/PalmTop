import * as React from 'react'
import stylesPortfolio from '../styles/Portfolio.module.css'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PortfolioCard = ({src, alt, company, link}) => {
    const [open, setOpen] = React.useState(false)

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={stylesPortfolio.container}>
            {isMobile ? (<>
                <a className={stylesPortfolio.link} href={link} target='_blank'>
                    <div className={stylesPortfolio.img}>
                        <Image
                            src={src}
                            alt={alt}
                            width={350}
                            height={175}
                            />
                    </div>
                    <h3>{company}</h3>
                </a>
            </>) : (<>
                {open ? (<>
                    <div className={stylesPortfolio.enlarge} onClick={() => setOpen(!open)}>
                        <div className={stylesPortfolio.enlargeImg}>
                            <Image
                                src={src}
                                alt={alt}
                                width={1400}
                                height={700}
                                />
                        </div>
                    </div>
                </>) : null}
                <div className={stylesPortfolio.img}>
                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={200}
                        onClick={() => setOpen(!open)}
                        />
                </div>
                <a className={stylesPortfolio.link} href={link} target='_blank'><h3>{company}</h3></a>
            </>)}
        </div>
    )
}

export default PortfolioCard
