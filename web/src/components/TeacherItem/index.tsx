import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher {
  avatar: string
  bio: string
  cost: number
  id: number
  name: string
  subject: string
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const { avatar, bio, cost, id, name, subject, whatsapp } = teacher

  function createNewConnection() {
    api.post('connections', {
      user_id: id,
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora <strong>R$ {cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
