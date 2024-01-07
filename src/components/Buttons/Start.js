import './Start.css';

const Start = (props) => {

    const startStyle = {
        top: (props.viewSize.height / 2) - 20
    }

    return (
        <div
            className="startButton"
            style={startStyle}
        >
            Explore
        </div>
    )
}

export default Start;
