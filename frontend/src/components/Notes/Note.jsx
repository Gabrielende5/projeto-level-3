import React from 'react'
import trash from '../../svgs/trash.svg'
import edit from '../../svgs/edit.png'
import "./Note.css"

function Note({n}) {
  return (
    <div className='note'>
        <div>
            <h1>{n.title}</h1>
            <div className='desc'>{n.description}</div>
        </div>
        <div className='noteRodape'>
            <div className='dataNote'>
                {n.date}
            </div>
            <div className='div-svgs'>
                <div><img className="svgs" src={trash}/></div>
                <div><img className="svgs-edit" src={edit}/></div>
            </div>
        </div>
       
        </div>
  )
}

export default Note