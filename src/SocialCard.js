import React from 'react'
function SocialCard() {
    return(
        <div className="card">
            <div className="name"> name: {props.name} </div>
            <div className="id">
                <img scr ={props.id}/>
            </div>
            
        </div>
    )
}
export default SocialCard