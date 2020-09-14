import React from 'react'
let logo = require('./logo2.png')

function Head(){
    return(
        <div className="head">
            
            <p className="head-text"><img src={logo} width="70px"/>MEMEFY.COM</p>
            <hr/>
        </div>
    )
}

export default Head;