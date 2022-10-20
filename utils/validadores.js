const validarNome = (nome) => {
    return nome?.toSting().length > 2;
}

const validarEmail = (email) => {
    const emailStr = email?.toString();
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.');
}

const validarSenha = (senha) => {
    return senha?.toString().length > 6;
}

const validarconfirmacaoSenha = (senha, confirmacao) => {
    return validarSenha(senha) && senha === confirmacao;
}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarconfirmacaoSenha
}