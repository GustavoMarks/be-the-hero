import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Profile(){
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  useEffect(() => {
    api.get('/profile', { headers: { Authorization: ongId }}).then(res => {
      setIncidents(res.data);

    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      console.log(ongId);
      await api.delete(`/incidents/${id}`, { headers: { Authorization: ongId }});
      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch (err) {
      console.log(err);
      alert('Erro ao tentar deletar caso... Tente novamente.');

    }
  }

  function hadleLogout(){
    localStorage.removeItem('ongId');
    localStorage.removeItem('ongName');

    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt='Be The Hero'/>
        <span> Bem vinda, { ongName } </span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={hadleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1> Casos cadastrados </h1>

      <ul>
        
        {incidents.map(incident => (
        <li key={incident.id} >
          <strong>CASO:</strong>
          <p> { incident.title } </p>

          <strong> DESCRIÇÃO: </strong>
          <p> {incident.description} </p>

          <strong> VALOR: </strong>
          <p>
            {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}
          </p>

          <button type="button" onClick={() => handleDeleteIncident(incident.id)} >
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
        ))}
        
      </ul>
    </div>
  )
}