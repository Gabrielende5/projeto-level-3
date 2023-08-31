import React from 'react'
import "./Modal.css"
import {AiFillCloseCircle} from 'react-icons/ai'
function Modal(props) {
  return (
    <div className='fundo'>
      <div className="closeModal" onClick={()=> props.fecharOModal()}>
        <AiFillCloseCircle size={40} color='white'/>
      </div>
      <div>
        <form className='form'>
          <label htmlFor="title">Titulo</label>
          <input type='text' placeholder='Titulo da Anotação' name='title' id='title'></input>
          <label htmlFor="description">Descrição</label>
          <input type='text' placeholder='Descrição da Anotação' name='description' id='description' ></input>
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Modal