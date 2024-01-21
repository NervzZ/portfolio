import './Start.css'

const Start = (props) => {

    const startStyle = {
        height: (props.viewSize.width / 100) * 3.5,
        width: '12%',
        lineHeight: '165%',
        fontSize: Math.max(props.viewSize.width / 50, 14),
        top: (props.viewSize.height / 2) - 20
    }

    const handleClick = () => {
        props.onClick(false)
    }

    return (
        <div
            className="startButton"
            style={startStyle}
            onClick={handleClick}
        >
            <span>Explore</span>
        </div>
    )
}

export default Start
