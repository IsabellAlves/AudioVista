import Navbar from '@/components/Navbar';
import styles from '../../styles/Home.module.css';
import Footer from '@/components/Footer';
function Registros({ registro = {} }) {
    return (
        <div>
            <Navbar/>
            <p>{registro.nome}</p>
            <p>{registro.usuario}</p>
            <p>{registro.descricao}</p>
            <Footer/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const registro = await repo[context.params.id];
    return {
        props: { registro }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const registros = await repo;
    const paths = registros.map((registro, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Registros;
