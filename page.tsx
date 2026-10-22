'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Check, Menu, ShieldAlert, X } from 'lucide-react'

const whatsapp = 'https://wa.me/5511925004271'
const message = (text: string) => `${whatsapp}?text=${encodeURIComponent(text)}`

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSecurityAlert, setShowSecurityAlert] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    { image: '/images/hero-care.png', eyebrow: 'Cuidado que acolhe', title: 'Saúde para viver bem todos os dias.', copy: 'Planos completos, atendimento próximo e uma rede preparada para cuidar de você.' },
    { image: '/images/hero-family.png', eyebrow: 'Mais tranquilidade para a família', title: 'Presença, proteção e confiança.', copy: 'Conte com uma experiência de cuidado pensada para acompanhar cada momento da sua vida.' },
    { image: '/images/hero-doctor.png', eyebrow: 'Atenção de verdade', title: 'Você no centro de cada cuidado.', copy: 'Profissionais preparados para ouvir, orientar e cuidar com carinho.' },
  ]

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((slide) => (slide + 1) % slides.length), 5500)
    return () => window.clearInterval(timer)
  }, [slides.length])

  const currentSlide = slides[activeSlide]

  return (
    <>
      {showSecurityAlert && (
        <div className="security-modal-backdrop" role="presentation">
          <section className="security-modal" role="alertdialog" aria-modal="true" aria-labelledby="security-alert-title">
            <button className="security-modal-close" onClick={() => setShowSecurityAlert(false)} aria-label="Fechar alerta de segurança"><X size={18} /></button>
            <div className="security-modal-icon"><ShieldAlert size={26} /></div>
            <h2 id="security-alert-title">Alerta de segurança</h2>
            <p>Para sua proteção, cuidado com golpes. A MEDSENIOR não solicita senhas, códigos de confirmação ou pagamentos por links não oficiais.</p>
            <p>Confirme sempre se está falando pelos canais oficiais. <strong>CNPJ: 31.466.949/0001-05</strong></p>
            <div className="security-modal-actions"><button className="button button-green" onClick={() => setShowSecurityAlert(false)}>Entendi</button></div>
          </section>
        </div>
      )}
      <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Atendimento especializado para a melhor idade</span>
          <a href="tel:+5511925004271">Central: (11) 92500-4271</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="MedSênior início"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medsenior-9CB0VA6DC8gxEMMiJpHROgf9w6PZcU.jpg" alt="MedSênior" width={185} height={95} className="brand-logo" /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={menuOpen ? 'nav-links mobile-open' : 'nav-links'} aria-label="Navegação principal">
            <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
            <a href="#unidades" onClick={() => setMenuOpen(false)}>Unidades</a>
            <a href="#noticias" onClick={() => setMenuOpen(false)}>Notícias</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Fale conosco</a>
          </nav>
          <a className="button button-small" href={message('Olá, gostaria de falar com um consultor MEDSENIOR.')} target="_blank" rel="noreferrer">Falar com um consultor</a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-image" style={{ backgroundImage: `url(${currentSlide.image})` }} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">{currentSlide.eyebrow}</p>
          <h1>{currentSlide.title}</h1>
          <p className="hero-copy">{currentSlide.copy}</p>
          <div className="hero-actions">
            <a className="button" href="#planos">Conheça nossos planos <ArrowRight size={17} /></a>
            <a className="button button-outline" href={message('Olá, gostaria de falar com um consultor MEDSENIOR.')} target="_blank" rel="noreferrer">Posso ajudar</a>
          </div>
          <div className="hero-dots" aria-label="Slides do banner">
            {slides.map((slide, index) => <button key={slide.image} className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Ir para slide ${index + 1}`} />)}
          </div>
        </div>
      </section>

      <section className="trust"><div className="container trust-grid"><div><Check /> <strong>Cuidado humanizado<span>em todas as fases</span></strong></div><div><Check /> <strong>Rede preparada<span>para você</span></strong></div><div><Check /> <strong>Atendimento próximo<span>e de confiança</span></strong></div></div></section>

      <section id="planos" className="section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-green">Escolha com tranquilidade</p><h2>Um plano que combina com a sua vida</h2><p>Conte com orientação personalizada para encontrar a melhor opção para você e sua família.</p></div><div className="cards">{['Plano Essencial','Plano Completo','Plano Familiar'].map((plan, index) => <article className="card" key={plan}><div className="card-mark">{index === 1 ? '✦' : '♥'}</div><h3>{plan}</h3><p>{['Proteção e cuidado para sua rotina, com uma rede de atendimento acolhedora.','Mais comodidade, benefícios e tranquilidade para cuidar da sua saúde.','Uma solução pensada para cuidar de quem você ama com segurança.'][index]}</p><a href={message(`Tenho interesse no ${plan}`)} target="_blank" rel="noreferrer">Conhecer esta opção <ArrowRight size={15} /></a></article>)}</div></div></section>

      <section id="unidades" className="section section-alt"><div className="container contact-box"><div><p className="eyebrow eyebrow-green">Estamos perto</p><h2>Encontre uma unidade MEDSENIOR</h2><p>Fale com nossa equipe para consultar a unidade mais próxima e conhecer nossa rede.</p></div><a className="button button-green" href={message('Gostaria de saber qual é a unidade mais próxima.')} target="_blank" rel="noreferrer">Posso ajudar <ArrowRight size={17} /></a></div></section>

      <section className="security"><div className="container security-inner"><ShieldAlert size={28} /><div><strong>Alerta de segurança</strong><p>A MEDSENIOR nunca solicita senhas, códigos de confirmação ou pagamentos por links não oficiais. Em caso de dúvida, fale conosco pelo WhatsApp oficial.</p></div><a href={message('Olá, gostaria de confirmar uma informação de segurança.')} target="_blank" rel="noreferrer">Verificar atendimento <ArrowRight size={15} /></a></div></section>

      <section id="noticias" className="section"><div className="container"><div className="section-heading"><p className="eyebrow eyebrow-green">Informação para cuidar melhor</p><h2>Conteúdos para o seu bem-estar</h2></div><div className="cards"><article className="card"><h3>Prevenção faz bem</h3><p>Pequenos cuidados fazem uma grande diferença na qualidade de vida.</p></article><article className="card"><h3>Vida ativa e saudável</h3><p>Confira dicas para manter uma rotina leve, ativa e prazerosa.</p></article><article className="card"><h3>Cuidado perto de você</h3><p>Conheça as facilidades de contar com a MEDSENIOR.</p></article></div></div></section>

      <section id="contato" className="section section-alt"><div className="container contact-box"><div><h2>Estamos aqui para ouvir você</h2><p>Central de atendimento: <strong>(11) 92500-4271</strong><br />Segunda a sexta, das 8h às 18h.</p></div><a className="button button-green" href={message('Olá, preciso de orientação sobre os planos MEDSENIOR.')} target="_blank" rel="noreferrer">Posso ajudar <ArrowRight size={17} /></a></div></section>

      <footer><div className="container footer-grid"><div><a className="brand brand-footer" href="#inicio">MED<span>SENIOR</span></a><p>Cuidado que acolhe, atendimento que entende e saúde para viver bem todos os dias.</p></div><div><h3>Central de atendimento</h3><a href="tel:+5511925004271">(11) 92500-4271</a><a href={whatsapp} target="_blank" rel="noreferrer">Falar com um consultor</a></div><div><h3>Acesso rápido</h3><a href="#planos">Conheça os planos</a><a href="#unidades">Encontre uma unidade</a><a href="#contato">Fale conosco</a></div></div><div className="container legal">© Copyright 2024 • Samedil - Serviços de Atendimento Médico S/A • CNPJ 31.466.949/0001-05</div></footer>
      <a className="floating-help" href={message('Olá, gostaria de falar com um consultor MEDSENIOR.')} target="_blank" rel="noreferrer" aria-label="Posso ajudar pelo WhatsApp"><span>◉</span>Posso ajudar <ArrowRight size={16} /></a>
      </main>
    </>
  )
}
