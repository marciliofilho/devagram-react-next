const validarNome = (nome) => {
    return nome?.toSting().length > 2;
}

const validarEmail = (email) => {
    const emailStr = email?.toSting();
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.');
}

const validarSenha = (senha) => {
    return senha?.toSting().length > 3;
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