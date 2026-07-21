import React from 'react'

type Props = {
varient?: String,
children: React.ReactNode,
style?: React.CSSProperties
}


export const Text: React.FC<Props> = ({ varient, children, style}) => {

if(varient ==='h1')return <h1 style= {style}>{children}</h1>
if(varient ==='p')return <p style= {style}>{children}</p>
if(varient ==='span')return <span style= {style}>{children}</span>

  return (
    <div style={style}>{children}</div>
  )
}
