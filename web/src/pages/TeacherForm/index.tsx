import React, { useState } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'

const TeacherForm: React.FC = () => {
  const [scheduleItems, setSchedulesItems] = useState([
    { week_day: 1, from: '', to: '' },
  ])

  function addNewScheduleItem() {
    setSchedulesItems([...scheduleItems, { week_day: 1, from: '', to: '' }])
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher este formulário de inscrição."
      />

      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>

            <Input label="Nome Completo" name="name" />
            <Input label="Avatar" name="avatar" />
            <Input label="WhatsApp" name="whatsapp" />
            <Textarea label="Biografia" name="bio" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação física', label: 'Educação física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Historia', label: 'Historia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Historia' },
                { value: 'Química', label: 'Química' },
              ]}
            />

            <Input label="Custo por sua hora/aula" name="cost" />
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
                <Input name="from" label="das" type="time" />
                <Input name="to" label="até" type="time" />
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
