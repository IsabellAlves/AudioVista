import React from 'react';
import styles from '../styles/Components.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
function Registros({ registros }) {
    return (
        <div>
            <Navbar/>
            {registros.map((registro, index) => (
                <Link href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={registro.id}> <p>{registro.nome}</p> </div>
                </Link>
            ))}
            <Footer/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const registros = await repo;
    return {
        props: { registros }
    }
})
export default Registros;
