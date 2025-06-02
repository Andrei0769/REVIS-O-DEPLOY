import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; // Ajuste o caminho conforme necessário
import './styles.css';

const TelaInicial = () => {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <div className="logo-container">
                    <img 
                        src={logo}
                        alt="Logo" 
                        className={`logo`}
                    />
                </div>
                
                <h1 className="welcome-title">
                    Bem-vindo ao Andrei FC
                </h1>

                <div className="buttons-container">
                    <button 
                        className="welcome-button"
                        onClick={() => navigate('/cadastro')}
                    >
                        Cadastrar Jogador
                    </button>
                    <button 
                        className="welcome-button"
                        onClick={() => navigate('/jogadores')}
                    >
                        Ver Jogadores
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TelaInicial;