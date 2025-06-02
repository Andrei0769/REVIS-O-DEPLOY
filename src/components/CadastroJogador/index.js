return (
    <div className="form-container">
        <h1 className="titulo-principal">Cadastro de Jogador</h1>
        
        <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
        </div>

        <div className="form-group">
            <label htmlFor="sexo">Sexo</label>
            <select
                id="sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                required
            >
                <option value="">Selecione</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </select>
        </div>

        {/* Repita o padrão para os outros campos */}

        <div className="button-container">
            <button type="submit" className="button-primary">
                Cadastrar Jogador
            </button>
            <button type="button" className="button-secondary" onClick={navegarParaListagem}>
                Ver Jogadores Cadastrados
            </button>
        </div>
    </div>
);