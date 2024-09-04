import './log.css';

function Log() {
    const handleLogin = () => {
        // Lógica de login
    };

    return (
        <>
            
            <div id="direita">
                <p>Login</p>
                <form id="form">
                    <div id="inputinhos">
                        <div className="input-box">
                            <img src="img/EMAIL.png" alt="email" />
                            <input name="email" type="text" placeholder="E-mail" required />
                        </div>
                        <div className="input-box">
                            <img src="img/CNPJ.png" alt="cnpj" />
                            <input name="cnpj" type="text" maxLength="15" placeholder="CNPJ" required />
                        </div>
                        <div className="input-box">
                            <img src="img/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha" required />
                        </div>
                    </div>
                    <div id="btn">
                        <a href="../login/login.html">Esqueceu a senha?</a>
                        <br />
                        <br />
                        <br />
                        <button onClick={handleLogin} type="submit">Login</button>
                        <a href="../Cadastro/cadastro.html">Não possui uma conta?</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Log;