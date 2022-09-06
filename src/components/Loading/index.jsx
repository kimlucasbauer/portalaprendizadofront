import carro from '../../imagens/Loading.png';
import pista from '../../imagens/FundoLoading.png';
import * as S from './styles';

function Loading({width, height}) {
    return (
        <S.LoadingContainer width={width} height={height}>
            <img src={carro} className="App-logo" alt="carro"/>
            <img src={pista} className="Fundo-Loading" alt="pista" />
        </S.LoadingContainer>
    );
}

export default Loading;