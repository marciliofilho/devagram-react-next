import Image from 'next/image';
import imgHomeAtivo from '../../public/imagens/homeAtivo.svg';
import imgHomeCinza from '../../public/imagens/homeCinza.svg';
import imgPublicacaoAtivo from '../../public/imagens/publicacaoAtivo.svg';
import imgPublicacaoCinza from '../../public/imagens/publicacaoCinza.svg';
import imgUsuarioAtivo from '../../public/imagens/usuarioAtivo.svg';
import imgusuarioCinza from '../../public/imagens/usuarioCinza.svg';

export default function Navegacao({ className }) {
    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li>
                    <Image
                        src={imgHomeAtivo}
                        alt="ícone home"
                        width={20}
                        height={20}
                    />
                </li>

                <li>
                    <Image
                        src={imgPublicacaoCinza}
                        alt="ícone publicação"
                        width={20}
                        height={20}
                    />
                </li>

                <li>
                    <Image
                        src={imgusuarioCinza}
                        alt="ícone usuário"
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>
    );
}