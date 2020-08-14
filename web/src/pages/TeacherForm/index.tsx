import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import api from '../../services/api'

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const [scheduleItems, setSchedulesItems] = useState([
    { week_day: '1', from: '08:00', to: '10:00' },
  ])
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  function addNewScheduleItem() {
    setSchedulesItems([
      ...scheduleItems,
      { week_day: '1', from: '08:00', to: '10:00' },
    ])
  }

  function setSchedulesItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })

    setSchedulesItems(updatedScheduleItems)
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault()

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedules: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!')
        history.push('/')
      })
      .catch((err) => {
        console.error(err)
        alert('Erro no cadastro!')
      })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher este formulário de inscrição."
      />

      <main>
        <form onSubmit={(event) => handleCreateClass(event)}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value)
              }}
            />
            <Input
              label="WhatsApp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value)
              }}
            />
            <Textarea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value)
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input
              type="number"
              label="Custo por sua hora/aula"
              name="cost"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div
                key={`${scheduleItem.week_day}_${index}`}
                className="schedule-item"
              >
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={(event) =>
                    setSchedulesItemValue(index, 'week_day', event.target.value)
                  }
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />{' '}
                <Input
                  type="time"
                  name="from"
                  label="das"
                  value={scheduleItem.from}
                  onChange={(event) =>
                    setSchedulesItemValue(index, 'from', event.target.value)
                  }
                />
                <Input
                  type="time"
                  name="to"
                  label="até"
                  value={scheduleItem.to}
                  onChange={(event) =>
                    setSchedulesItemValue(index, 'to', event.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante!
              <br />
              preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
