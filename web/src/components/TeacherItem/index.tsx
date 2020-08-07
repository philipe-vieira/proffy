import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/43797851?s=460&u=1189bf04e5005e8e4c7842755dc6bea1431ecac3&v=4"
          alt="Philipe vieira"
        />
        <div>
          <strong>Philipe Vieira</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> Apaixonado por explodir coisas em laboratório e por mudar a vida
        das pessoas através de experiências. Mais de 200.000 pessoas já passaram
        por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 20,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
