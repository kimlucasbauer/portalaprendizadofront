import carro from './../imagens/Loading.png';
import pista from './../imagens/FundoLoading.png';

function Loading() {
    return (
        <>
                <img src={carro} className="App-logo" alt="carro"/>
                <img src={pista} className="Fundo-Loading" alt="pista" />
        </>
    );
}

export default Loading;