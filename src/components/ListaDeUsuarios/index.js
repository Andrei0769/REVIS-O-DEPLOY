// src/components/ListaDeJogadores/index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function ListaDeJogadores() {
    const [jogadores, setJogadores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carregarJogadores = async () => {
            setLoading(true);
            try {
                console.log("Iniciando busca de jogadores...");
                const response = await axios.get("http://localhost:8080/jogadores");
                console.log("Dados recebidos:", response.data);
                setJogadores(response.data);
            } catch (error) {
                console.error("Erro na busca:", error);
                alert("Erro ao buscar jogadores: " + error.message);
            } finally {
                setLoading(false);
            }
        };
        carregarJogadores();
    }, []);

    if (loading) {
        return <div>Carregando jogadores...</div>;
    }

    return (
        <div>
            <h2>Lista de Jogadores</h2>
            <ul id="listaJogadores" className="lista-jogadores">
                {jogadores.length === 0 ? (
                    <li>Nenhum jogador encontrado.</li>
                ) : (
                    jogadores.map((jogador) => (
                        <li key={jogador.id}>
                            <strong>Nome:</strong> {jogador.nome}<br />
                            <strong>Sexo:</strong> {jogador.sexo}<br />
                            <strong>Idade:</strong> {jogador.idade}<br />
                            <strong>Altura:</strong> {jogador.altura} m<br />
                            <strong>Peso:</strong> {jogador.peso} kg<br />
                            <strong>Posição:</strong> {jogador.posicao}<br />
                            <strong>Número da Camisa:</strong> {jogador.numeroCamisa}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default ListaDeJogadores;
