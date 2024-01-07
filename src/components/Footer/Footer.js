import './Footer.css';

const Footer = (props) => {

    const headerTitleStyle = {
        fontSize: (props.viewSize.width / 50)
    }

    return (
        <div
            className="footer"
            style={headerTitleStyle}
        >
            <p className="footerContent">
                Author: Julien Jordan <br/>
                julien.jordan@epfl.ch
            </p>
        </div>
    )
}

export default Footer;
