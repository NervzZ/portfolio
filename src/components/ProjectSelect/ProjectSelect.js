import './ProjectSelect.css'
import React, {useEffect, useState} from "react";

const ProjectSelect = (props) => {

    const [currentProjectId, setCurrentProjectId] = useState(2)

    const textStyle = {
        fontSize: (props.viewSize.width / 50)
    }

    useEffect(() => {
        const id = props.currentImageIndex
        console.log(id)
        if (id < 3) { //W1
            setCurrentProjectId(0)
        } else if (id > 2 && id < 5) { //W2
            setCurrentProjectId(1)
        } else if (id > 4 && id < 8) { //W3
            setCurrentProjectId(2)
        }
        else if (id > 7 && id < 12) { //W4
            setCurrentProjectId(3)
        }
        else if (id > 11 && id < 16) { //W5
            setCurrentProjectId(4)
        } else { //W6
            setCurrentProjectId(5)
        }
    }, [props.currentImageIndex]); // Only re-run the effect if count changes
    const handleProjectChange  = (event) => {
        setCurrentProjectId(event.target.value)
        switch (event.target.value) {
            case "1":
                props.setImageIndex(3)
                return
            case "2":
                props.setImageIndex(5)
                return
            case "3":
                props.setImageIndex(8)
                return
            case "4":
                props.setImageIndex(12)
                return
            case "5":
                props.setImageIndex(16)
                return
            default:
                props.setImageIndex(0)
                return
        }
    }

    return (
        <select
            className="ProjectSelect"
            style={textStyle}
            onChange={handleProjectChange}
            value={currentProjectId}
        >
            <option value={0}>W1 - Comfort transit</option>
            <option value={1}>W2 - Old clothes new life</option>
            <option value={2}>W3 - Create like the gods</option>
            <option value={3}>W4 - Machine harmony</option>
            <option value={4}>W5 - Dog paradise</option>
            <option value={5}>W6 - Dreams Happen</option>
        </select>
    )
}

export default ProjectSelect
