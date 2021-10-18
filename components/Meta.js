import Head from 'next/head'

const Meta = ({title, description}) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Jacques Rossouw | PalmTop" />
            <meta name="description" content={description} />
            <link rel="stylesheet" href="./css/style.css" />
            <link rel="shortcut icon" href="../img/PalmTop Icon.png" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'PalmTop | Digital Solutions',
    description: 'PalmTop is a Digital Solutions company specializing in Web Design. Other services include Web/Email Host Management, Content Writing and Graphic Design.'
}

export default Meta
