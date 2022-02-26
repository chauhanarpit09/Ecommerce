import React from 'react'

const style={
  fontSize:'15px',
  marginBottom:'30px',
  color:'#a1b3d2',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function footer({content}) {
  return (
    <div className="footer" style={style}>
      {content}
    </div>
  )
}

