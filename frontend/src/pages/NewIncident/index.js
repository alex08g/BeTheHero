import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import LogoImg from '../../assets/logo.svg';

import './styles.css';

export default () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();

  const history = useHistory();

  const ongId = localStorage.getItem('OngID');

  const handleNewIncident = async e => {
    e.preventDefault();
    
    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Ocorreu um erro na criação do caso. Tente Novamente!')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be THe Hero"/>

          <h1>Cadastra Novo Caso</h1>
          <p>Descreav o caso detalhadamente para encontrar um herói para resolver isso.</p>
          
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Decrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button">Cadastrar</button> 
        </form>
      </div>
    </div>
  );
}
