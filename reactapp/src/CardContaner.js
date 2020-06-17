import React, { useState, useEffect } from 'react'
import './App.css'
import Card from './Card'

const CardContaner = props => {
    const [cardMembers, setCardMember] = useState([
        { title: "WORKFLOW1", status: "COMPLETED", color: "green" },
        { title: "WORKFLOW2", status: "PENDING", color: "grey" },
    ])

    const search = () => {
        var filtered = cardMembers.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(props.search)));
        setCardMember(filtered)
    }

    useEffect(() => {
        const filtered = cardMembers.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(props.dropdownValue)));
        console.log("filtered")
        console.log(filtered)
        console.log("Behavior when the component receives new state or props.");
        if (filtered.length == 1) {
            console.log("IFF")
            setCardMember(filtered)
        }
        if (props.search !== "") {
            search();
        }
    }, [props.dropdownValue, props.search]);

    const container = {
        display: "flex",
        width: "100%",
        marginTop: "-4%",
    }
    const deleteCard = () => {
        console.log("dlete card")

        var indexes = [0];
        var arr = cardMembers.filter(function (value, index) {
            return indexes.indexOf(index) != -1;
        })
        console.log("arr")
        console.log(arr)
        setCardMember(arr)

    }
    return (
        <div style={container} className="container">
            {cardMembers.map((cardMember, index) => (
                <Card
                    key={index}
                    index={index}
                    cardMember={cardMember}
                    onClick={deleteCard}
                />
            ))}
            {/* <button onClick={(e)=>{deleteCard(e=0)}}>Delete</button> */}
        </div>
    )
}
export default CardContaner