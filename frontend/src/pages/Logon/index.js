import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

export default function Logon(){
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt='Be The Hero'/>

        <form>
          <h1> Faça seu logon </h1>
          <input placeholder='Sua ID'/>
          <button className="button" type='submit'> Entrar </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E0204I"/>
            Não tenho conta
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes'/>
    </div>
  )
}