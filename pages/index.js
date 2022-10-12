import Head from 'next/head'
import Image from 'next/image'
import Botao from '../componentes/botao'

export default function Home() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <div style={{ width: 200 }}>
        <Botao texto={'Login'} cor='invertido' manipularClique={() => console.log('Botão clicado')} />
      </div>
    </>
  )
}
