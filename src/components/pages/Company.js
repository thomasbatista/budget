import styles from './Home.module.css'

function Company() {
    return (
        <div className={styles.home_container}>
            <h1>Sobre a Empresa</h1>
            <p>Conheça mais sobre nosso projeto</p>
            
            <div>
                <h2>Quem Somos</h2>
                <p>
                    Somos uma equipe dedicada a criar soluções inovadoras para gerenciamento de orçamentos e projetos.
                </p>

                <h2>Nossa Missão</h2>
                <p>
                    Facilitar o gerenciamento de projetos e orçamentos para pequenas e médias empresas.
                </p>

                <h2>Valores</h2>
                <p>
                    Comprometimento, inovação e excelência em tudo o que fazemos.
                </p>
            </div>
        </div>
    )
}

export default Company