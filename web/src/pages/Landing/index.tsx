import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then((res) => {
      const { total } = res.data
      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          className="hero-image"
          src={landingImg}
          alt="Plataforma de estudos"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já atualizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
