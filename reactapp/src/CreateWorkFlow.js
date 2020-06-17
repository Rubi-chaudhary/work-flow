import React, { useState } from 'react'
import './App.css';
import TaskContainer from './TaskContainer';


const CreateWorkFlow = props => {
    const [taskCount, setTaskCount] = useState(1)
    const addNode = () => setTaskCount(taskCount => taskCount + 1)
    const deleteNode = () => setTaskCount(taskCount => taskCount - 1)

    const task = <TaskContainer onClick={deleteNode} taskCount={taskCount}></TaskContainer>;
    const tasks = Array(taskCount).fill(task);

    const contain = {
        display: "flex",
        width: "100%",
        height: "20%",
        marginTop: "0%",
    }
    const input = {
        width: "25%",
        marginLeft: "1%",
        marginTop: "2%",
        marginBottom: "2%",
    }
    const button_div = {
        marginLeft: "35%",
        marginTop: "2%",
        display: "flex",
    }
    const shuffle = {
        // marginLeft: "35%",
        marginTop: "0%",
        background: "#8f53d0",
        width: "120px",
        marginBottom: "4%",
        color: "white",
        border: "none",
        borderRadius: "5px",
    }
    const delete_flow = {
        marginLeft: "3%",
        background: "red",
        width: "120px",
        marginBottom: "4%",
        color: "white",
        marginTop: "0%",
        border: "none",
        borderRadius: "5px",
    }
    const add_node = {
        marginLeft: "3%",
        background: "#32cd329e",
        width: "120px",
        marginBottom: "4%",
        color: "white",
        marginTop: "0%",
        border: "none",
        borderRadius: "5px",
    }
    const save = {
        marginLeft: "3%",
        background: "blue",
        width: "120px",
        marginBottom: "4%",
        color: "white",
        marginTop: "0%",
        border: "none",
        borderRadius: "5px",
    }

    return (
        <>
            <div style={contain} className="container">
                <input style={input} type="text" placeholder="WORKFLOW NAME"></input>
                <div style={button_div}>
                    <button style={shuffle} >Shuffle</button>
                    <button style={delete_flow} onClick={deleteNode}>X Delete</button>
                    <button style={add_node} onClick={addNode}>+ Add Node</button>
                    <button style={save} >Save</button>
                </div>
            </div>
            <div style={{ display: "flex" }}>{tasks}</div>
            {/* {task && <TaskContainer></TaskContainer>} */}
        </>
    )
}

export default CreateWorkFlow