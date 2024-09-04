import Header from "../Components/login/header";
import Left_panel from "../Components/login/left-panel";
import Log from "../Components/login/log";
import '../Components/login/login.css'

function Login(){

    return (
        <div>
            <Header />
            <div id="conteudo">
                <Left_panel />
                <Log />
            </div>
        </div>
    )
}
export default Login;