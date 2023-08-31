import React from 'react'

function Form() {
  return (
    <form className='form'>
        <h1>Adicionar anotação</h1>
        <label htmlFor="title">Titulo</label>
        <input type='text' placeholder='Titulo da Anotação' name='title' id='title'></input>
        <label htmlFor="description">Descrição</label>
        <input type='text' placeholder='Descrição da Anotação' name='description' id='description' ></input>
        <button>Cadastrar</button>
    </form>
  )
}

export default Form