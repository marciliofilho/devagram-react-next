import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputPublico from "../inputPublico";
import Botao from "../botao";
import { validarEmail, validarSenha } from "../../utils/validadores";
import { StyleSheet, text, View, TextInput, TouchableOpacity } from "react-native";
import imagemMostrarSenha from "../../public/imagens/mostrarSenha.svg";

import imagemEnvelope from "../../public/imagens/envelope.svg";
import imagemChave from "../../public/imagens/chave.svg";
import imagemLogo from "../../public/imagens/logo.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePass, setHidePass] = useState(true);

    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="logotipo"
                    layout="fill"
                    className="logo"
                />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é inválido"
                        exibirMensagemValidacao={email && !validarEmail(email)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo={hidePass}
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Senha precisa ter pelo menos 6 caracteres"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                        secureTextEntry={true}


                    />

                    <Botao
                        texto="Login"
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro">Faça seu cadastro agora.</Link>
                </div>
            </div>
        </section>
    );
}