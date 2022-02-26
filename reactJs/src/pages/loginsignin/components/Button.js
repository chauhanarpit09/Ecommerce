import React from 'react'

const outStyle={
  display: 'flex',
  flexDirection: 'column'
}
const btnStyle={
  margin: '8px 10px',
  padding:'10px',
  border: 'none',
  borderRadius:'3px',
  cursor: 'pointer',
  backgroundColor:'#2662ff',
  color: '#fff'
}


export default function Button({ button_title,onClick }) {
  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={onClick}/>
    </div>
  )
}
