import React, { useState } from 'react'
import Search from './Search'
import CardContaner from './CardContaner'

const FirstPage = props => {
    console.log("Fisrt pages")
    return (
        <div>
            <Search></Search>
            {/* <CardContaner></CardContaner> */}
        </div>
    )
}
export default FirstPage