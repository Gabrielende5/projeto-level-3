import React from 'react'
import trash from '../../svgs/trash.svg'
import edit from '../../svgs/edit.png'
import {FaTrash} from 'react-icons/fa'
import {BiSolidAddToQueue} from 'react-icons/bi'
import "./Note.css"

function Note({n,abrirOModal}) {
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
                <div><FaTrash  color='red' size={30} /></div>
                <div onClick={()=>abrirOModal()}><BiSolidAddToQueue color='green' size={30}/></div>
            </div>
        </div>
       
        </div>
  )
}

export default Note