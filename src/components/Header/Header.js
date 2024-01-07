import './Header.css';

const Header = (props) => {

    const headerTitleStyle = {
        fontSize: (props.viewSize.width / 50)
    }

    return (
        <div
            className="header"
            style={headerTitleStyle}
        >
            <div className="headerTitle">UEX'23 Portfolio</div>
        </div>
    )
}

export default Header;
