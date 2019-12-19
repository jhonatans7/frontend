import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [nome, setNome] = useState('');

    async function handleSubmit(event){
      event.preventDefault();
  
      const response = await api.post('/sessions', {nome});
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');
      
    }

    return (
    <>
        <p>
            Agende um horário
        </p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome *</label>
            <input 
            type="nome" 
            id="nome" 
            placeholder="Insira o nome" 
            value={nome}
            onChange={event => setNome(event.target.value)}
            />

            <button className="btn" type="submit">Agendar</button>
        </form>
    </>
    )
}