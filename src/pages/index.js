import Head from 'next/head';
import styles from '../styles/Components.module.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <div>
      <Navbar />
      <title>AudioVista</title>
      <article>
        <div className={styles.index}>
          <h2> O AudioVista é um portal onde pessoas com deficiência visual terão acesso a informações contidas em imagens por meio de audiodescrição.</h2>
          <h2>Estamos formando um grande grupo de colaboradores voluntários para criar objetos em audiodescrição.</h2>
          <div className={styles.anunc}>
            <h2>Clique no botão abaixo e acesse a nossa lista de objetos</h2>
            <a href='\registros'><div className={styles.button}><h1>Acessar</h1></div></a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
