import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Home.module.css'

function Contact() {
    const [contact, setContact] = useState({})

    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(contact)
    }

    return (
        <div className={styles.home_container}>
            <h1>Entre em Contato</h1>
            <p>Tem alguma dúvida? Entre em contato conosco!</p>
            
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    text="Nome" 
                    name="name" 
                    placeholder="Seu nome" 
                    handleOnChange={handleChange} 
                    value={contact.name || ''} 
                />
                
                <Input 
                    type="email" 
                    text="Email" 
                    name="email" 
                    placeholder="seu@email.com" 
                    handleOnChange={handleChange} 
                    value={contact.email || ''} 
                />
                
                <Input 
                    type="text" 
                    text="Assunto" 
                    name="subject" 
                    placeholder="Qual é o assunto?" 
                    handleOnChange={handleChange} 
                    value={contact.subject || ''} 
                />

                <SubmitButton text="Enviar" />
            </form>
        </div>
    )
}

export default Contact