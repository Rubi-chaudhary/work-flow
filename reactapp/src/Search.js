import React, { useState } from 'react'
import './App.css';
import Background from './icon/searchicon.png';
import CardContaner from './CardContaner'
import CreateWorkFlow from './CreateWorkFlow'

const Search = props => {
    const [createWork, setCreateWork] = useState(false);
    const [dropdownValue, setDropdownVal] = useState("ALL")

    const [search, setSearch] = useState("");
    var handleChange = handleChange = (event) => {
        setDropdownVal(event.target.value)
        // console.log("Drop");
        //console.log(dropdownValue)
    }

    var createWorkFlow = createWorkFlow = () => {

        console.log("%c CREATE", 'background:green')
        setCreateWork(true)
        console.log(createWork)
    }
    const style = {
        backgroundImage: `url(require("./icon/searchicon.png"))`,
        marginTop: "2%",
        marginLeft: "2%",
        borderRadius: "25px"
    }
    const contain = {
        width: "100%",
        height: "20%",
        marginTop: "1%",
    }
    const para = {
        marginLeft: "2%",
        fontSize: "x-small"
    }
    const divStyle = {
        display: "flex"
    }
    const but = {
        height: "min-content",
        marginLeft: "2%",
        marginTop: "2%",
    }
    const createButton = {
        height: "52%",
        background: "limegreen",
        color: "white",
        marginTop: "8%",
        width: "302%",
        marginLeft: "1%",
        border: "none",
        borderRadius: "5px",
    }
    const para2 = {
        fontSize: "x-small"
    }

    const divStyle2 = {
        display: "flex",
        marginLeft: "28%"
    }

    const label = {
        width: "258",
        marginTop: "17",
        fontSize: "x-small",
    }

    const select = {
        width: "25%",
        marginLeft: "2%",
        height: "343%",
        marginTop: "3%",
        WebkitAppearance: "none",
    }
    return (
        <>{

            !createWork ? <div>
                <div style={contain} className="container">
                    <div style={divStyle}>
                        <div style={{ width: "30%" }}>
                            <p style={para}>Search workflows based on workflow name</p>
                            <div style={divStyle}>
                                <input style={style} placeholder="Search workflows" onChange={({ target }) => setSearch(target.value)}></input>
                                {/* <button style={but} >Filter</button> */}
                                <select value={dropdownValue} style={select} onChange={handleChange} >
                                    <option>Filter</option>
                                    <option>ALL</option>
                                    <option>COMPLETED</option>
                                    <option>PENDING</option>
    ...
</select>
                            </div>
                        </div>
                        <p style={para2}>Filter is a drop down that has 3 options <br></br>1. ALL display all workflows <br></br>2. COMPLETED : displays only completed workflow<br></br> 3: PENDING: displays only pending workflows</p>
                        <div style={divStyle2}>
                            <label style={label}>Create a new workflow </label>
                            <button style={createButton} onClick={createWorkFlow}>+ Create Work Flow</button>
                        </div>
                    </div>
                </div>
                <div><CardContaner search={search} dropdownValue={dropdownValue}></CardContaner></div>
            </div>
                : <CreateWorkFlow></CreateWorkFlow>


        }
        </>
    )
}
export default Search