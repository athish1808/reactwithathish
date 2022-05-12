import React from 'react'

function Props() {
  return (
    <div>
      <Name name ="Athish"/>
    </div>
  )
}

function Name(props){
    return(
        <div>
            <h1>Hi, <p className='athish' style={{color:'blue'}}>{props.name}</p> Special offers!</h1>
        </div>
    )
}

export default Props