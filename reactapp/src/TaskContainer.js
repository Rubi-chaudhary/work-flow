import React, { useState } from 'react'
import './Card.css'
const TaskContainer = ({ onClick, taskCount }) => {
    const [color, setColor] = useState("grey")
    var onClickTop = onClickTop = () => {
        console.log("onClick")
        setColor("green")
    }    
    //const deleteNode = () => props.setTaskCount(taskCount=>taskCount-1)
    const style_div = {
        height: "300px ",
        width: "15%",
    }
    const topright = {
        position: "absolute",
        marginLeft: "13%",
        marginTop: "-1%",
        fontSize: "10px",
        color: "red",
        borderRadius: "25px",
        height: "32px",
        background: { color },
        width: "32px",
    }
    var task = "Task"
    return (
        <div style={style_div} className="card">
            <div className="cardcontainer">
                <button style={topright} onClick={onClickTop}></button>
                <input style={{ width: "79%" }} type="text" placeholder={task}></input>
                <div>This Task items are completed. You can see the </div>
            </div>
        </div>
    )
}

export default TaskContainer