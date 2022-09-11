import React from 'react'

export default function Alert(props) {

    const capitalised = (word)=>{
        
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalised(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}
