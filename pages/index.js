import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'
import { UploadImagem } from '../componentes/uploadImagem'

export default function Home() {
  const [Imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
      <h1>Olá Mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Abrir seletor de arquivos</button>
      <UploadImagem
        setImagem={setImagem}
        imagemPreview={Imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />

      <div style={{ width: 200 }}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('Botão clicado')} />
      </div>
    </>
  )
}
