import React, { useState } from 'react'
import './Card.css'
// import './App.css';
const Card = props => {
    console.log("%c Props", 'background:red')
    console.log(props)
    const button = {
        marginTop: "12%",
        background: "white",
        fontSize: "small",
        width: "100%",
        textAlign: "left"
    }
    const label = {
        fontSize: "small",
        marginTop: "20%",
        color: "black",
        marginLeft: "4%",
    }
    const input = {
        // content: '✔',
        width: "11%",
        borderRadius: "25px",
        background: props.cardMember.color,
        marginTop: "17%",
        marginLeft: "45%",

    }
    const div = {
        backgroundColor: props.cardMember.color,
        marginTop: "17%",
        marginLeft: "45%",
    }
    const topright = {
        position: "absolute",
        marginLeft: "18%",
        marginTop: "-3%",
        fontSize: "10px",
        background: "red",
        color: "white"
    }
    return (
        <div className="card">
            <div className="cardcontainer">
                <button style={button}>{props.cardMember.title}</button>
                <div style={{ display: "flex", marginTop: "-8%" }}>
                    <label style={label}>{props.cardMember.status}</label>
                    <input style={input} className="input-checkmark"></input>
                    <button style={topright} onClick={props.onClick}>X</button>
                    {/* <div style={div} className="success-checkmark"></div> */}
                </div>
            </div>
        </div>
    )
}
export default Card