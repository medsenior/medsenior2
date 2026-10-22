'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  HeartPulse,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/5511925004271?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20consultor%20sobre%20o%20conv%C3%AAnio%20MedS%C3%AAnior.'

const bannerImages = ['/elderly-banner.png', '/medsenior-hero.png']

const benefits = [
  {
    icon: HeartPulse,
    title: 'Cuidado que acompanha',
    text: 'Planos pensados para cada momento da sua vida, com atendimento próximo e humanizado.',
  },
  {
    icon: Stethoscope,
    title: 'Rede de excelência',
    text: 'Profissionais e serviços de saúde selecionados para você ter mais tranquilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Mais segurança',
    text: 'Conte com orientação clara e suporte para cuidar do que realmente importa.',
  },
]

const healthPlans = [
  { name: 'Plano Essencial', description: 'Cuidado para sua rotina com acolhimento e praticidade.', features: ['Consultas e acompanhamento', 'Rede de atendimento selecionada', 'Orientação de saúde'], highlight: false },
  { name: 'Plano Completo', description: 'Mais cobertura e tranquilidade para viver bem.', features: ['Tudo do Plano Essencial', 'Exames e prevenção', 'Atendimento especializado'], highlight: true },
  { name: 'Plano Personalizado', description: 'Uma opção sob medida para suas necessidades.', features: ['Análise individual de perfil', 'Suporte para escolher sua cobertura', 'Atendimento consultivo'], highlight: false },
]

const services = [
  ['Acompanhamento próximo', 'Orientação para cuidar da saúde com mais autonomia e tranquilidade.'],
  ['Prevenção e bem-estar', 'Conteúdos e ações para você manter uma rotina mais saudável.'],
  ['Rede de atendimento', 'Suporte para encontrar o atendimento adequado quando precisar.'],
  ['Atendimento humanizado', 'Uma equipe preparada para ouvir, acolher e orientar você.'],
]

const faqs = [
  ['Para quem são os planos MedSênior?', 'Nossos planos são pensados para oferecer atenção e cuidado integral, com opções que se adaptam às diferentes fases da vida. Fale com nosso time para conhecer a opção ideal para você.'],
  ['Como faço uma cotação?', 'É simples: clique em qualquer botão de WhatsApp nesta página e fale com um consultor. Vamos entender suas necessidades e apresentar as melhores opções.'],
  ['Posso incluir minha família?', 'Sim. Nossa equipe pode explicar as possibilidades para você e sua família, de acordo com o perfil e a região de atendimento.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [securityOpen, setSecurityOpen] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % bannerImages.length), 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf7] text-[#18352d]">
      <div className="top-strip">
        <div className="container flex items-center justify-center gap-2 px-5 py-2 text-center text-xs font-medium tracking-wide text-white/90 sm:text-sm">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Atendimento oficial MedSênior • Fale com um consultor pelo WhatsApp</span>
        </div>
      </div>

      <header className="relative z-20 border-b border-[#dce9df] bg-white/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-5 lg:h-24">
          <a href="#inicio" aria-label="MedSênior - início" className="flex items-center">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medsenior-961tfHH8YE9RqVpE6bYjMp1vrJMAm7.jpg" alt="Logo MedSênior" className="h-14 w-auto object-contain sm:h-16" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#beneficios">Por que MedSênior</a>
            <a className="nav-link" href="#planos">Planos</a>
            <a className="nav-link" href="#duvidas">Dúvidas</a>
            <a className="button-primary px-5 py-3 text-sm" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com consultor <ArrowRight className="h-4 w-4" /></a>
          </nav>
          <button className="rounded-xl p-2 text-[#176c4d] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-[#dce9df] bg-white px-5 py-4 lg:hidden" aria-label="Navegação móvel">
          <div className="container flex flex-col gap-4">
            <a className="nav-link" href="#beneficios" onClick={() => setMenuOpen(false)}>Por que MedSênior</a>
            <a className="nav-link" href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
            <a className="nav-link" href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
            <a className="button-primary justify-center" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com consultor <ArrowRight className="h-4 w-4" /></a>
          </div>
        </nav>}
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container relative grid items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow"><Sparkles className="h-4 w-4" /> Cuidado que faz diferença</div>
            <h1>Saúde para viver <span>bem todos os dias.</span></h1>
            <p className="hero-copy">Na MedSênior, você encontra um jeito mais próximo, seguro e completo de cuidar da sua saúde — com pessoas que entendem o que você precisa.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary px-6 py-4" href={whatsappUrl} target="_blank" rel="noreferrer">Quero falar com um consultor <ArrowRight className="h-5 w-5" /></a>
              <a className="button-secondary px-6 py-4" href="#beneficios">Conheça a MedSênior</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#59786b]">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#76b82a]" /> Atendimento humanizado</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#76b82a]" /> Orientação especializada</span>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="hero-card-image" role="img" aria-label="Pessoa sorrindo recebendo atendimento de saúde" />
              <div className="hero-card-content">
                <div className="flex items-center gap-3"><span className="icon-badge"><HeartPulse className="h-5 w-5" /></span><div><p className="text-sm font-semibold text-[#18352d]">Seu cuidado em boas mãos</p><p className="mt-0.5 text-xs text-[#6b887c]">Atenção em cada detalhe</p></div></div>
                <div className="mt-5 h-px bg-[#e2eee5]" />
                <p className="mt-4 text-sm leading-6 text-[#59786b]">Um plano de saúde pensado para você viver com mais leveza, autonomia e bem-estar.</p>
              </div>
            </div>
            <div className="floating-stat"><ShieldCheck className="h-5 w-5 text-[#76b82a]" /><span><strong>Confiança</strong><small>em cada atendimento</small></span></div>
          </div>
        </div>
      </section>

      <section className="story-banner story-banner-raised" aria-label="Cuidado e bem-estar na melhor idade"><div className="story-banner-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,67,48,.95) 0%, rgba(10,67,48,.78) 38%, rgba(10,67,48,.15) 76%, rgba(10,67,48,.22)), url('${bannerImages[activeBanner]}')` }} /><div className="story-banner-content"><div className="eyebrow eyebrow-light">Viver bem é o nosso propósito</div><h2>Mais momentos para aproveitar.</h2><p>Um cuidado próximo para você seguir fazendo o que ama, com tranquilidade e qualidade de vida.</p><a className="button-light mt-6" href={whatsappUrl} target="_blank" rel="noreferrer">Conheça nossas opções <ArrowRight className="h-5 w-5" /></a><div className="banner-dots" aria-label="Selecionar imagem do banner">{bannerImages.map((_, index) => <button key={index} className={`banner-dot ${activeBanner === index ? 'active' : ''}`} onClick={() => setActiveBanner(index)} aria-label={`Mostrar imagem ${index + 1}`} aria-current={activeBanner === index} />)}</div></div></section>

      <section id="beneficios" className="container px-5 py-20 lg:py-28">
        <div className="section-heading"><div className="eyebrow">Uma nova forma de cuidar</div><h2>Mais que um plano.<br /><span>Uma parceria para a vida.</span></h2><p>Você merece contar com um cuidado que olha para o todo. Na MedSênior, saúde é presença, acolhimento e qualidade.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="benefit-card"><span className="icon-badge"><Icon className="h-6 w-6" /></span><h3>{title}</h3><p>{text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Saiba mais sobre ${title}`}>Saiba mais <ArrowRight className="h-4 w-4" /></a></article>)}</div>
      </section>

      <section className="services-section"><div className="container px-5 py-20 lg:py-24"><div className="section-heading"><div className="eyebrow">Cuidado completo</div><h2>Opções para cuidar de você <span>por inteiro.</span></h2><p>Mais atenção em cada etapa, com soluções pensadas para tornar sua jornada de saúde mais simples.</p></div><div className="services-grid mt-12">{services.map(([title, text], index) => <article className="service-item" key={title}><span className="service-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="service-arrow" aria-hidden="true" /></article>)}</div></div></section>

      <section id="planos" className="plans-section"><div className="container px-5 py-20 lg:py-28"><div className="section-heading"><div className="eyebrow">Conheça nossas opções</div><h2>Um plano para cada <span>momento da vida.</span></h2><p>Converse com um consultor e encontre a cobertura que combina com a sua rotina e seus objetivos.</p></div><div className="plans-grid mt-12">{healthPlans.map((plan) => <article className={`health-plan ${plan.highlight ? 'health-plan-featured' : ''}`} key={plan.name}>{plan.highlight && <div className="plan-badge">Mais escolhido</div>}<h3>{plan.name}</h3><p className="plan-description">{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><ShieldCheck className="h-4 w-4" />{feature}</li>)}</ul><a className={plan.highlight ? 'button-primary mt-7 w-full justify-center' : 'button-outline mt-7 w-full justify-center'} href={whatsappUrl} target="_blank" rel="noreferrer">Falar com consultor <ArrowRight className="h-4 w-4" /></a></article>)}</div></div></section>

      <section id="duvidas" className="container px-5 py-20 lg:py-28"><div className="section-heading"><div className="eyebrow">Estamos aqui para ajudar</div><h2>Dúvidas frequentes</h2></div><div className="mx-auto mt-10 max-w-3xl divide-y divide-[#dce9df] border-y border-[#dce9df]">{faqs.map(([question, answer], index) => <div key={question}><button className="faq-button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={`h-5 w-5 transition-transform ${openFaq === index ? 'rotate-180 text-[#76b82a]' : ''}`} /></button>{openFaq === index && <p className="faq-answer">{answer}</p>}</div>)}</div></section>

      <footer className="border-t border-[#dce9df] bg-white"><div className="container flex flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medsenior-961tfHH8YE9RqVpE6bYjMp1vrJMAm7.jpg" alt="Logo MedSênior" className="h-12 w-auto object-contain" /><div className="h-8 w-px bg-[#dce9df]" /><p className="text-xs leading-5 text-[#6b887c]">Cuidar é estar presente.<br />Atendimento oficial MedSênior.</p></div><p className="text-xs text-[#6b887c]">CNPJ 31.466.949/0001-05<br /><span>© {new Date().getFullYear()} MedSênior. Todos os direitos reservados.</span></p></div></footer>

      <a className="help-button" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="help-pulse" /><MessageCircle className="h-5 w-5" /><span>Posso ajudar?</span></a>

      {securityOpen && <div className="security-overlay" role="dialog" aria-modal="true" aria-labelledby="security-title"><div className="security-modal"><div className="security-icon"><ShieldCheck className="h-7 w-7" /></div><p className="security-kicker">Aviso importante</p><h2 id="security-title">Sua segurança em primeiro lugar</h2><p>Este é um canal oficial de atendimento MedSênior. Não solicitamos senhas, códigos de confirmação ou dados bancários por WhatsApp.</p><p className="mt-3 text-xs text-[#6b887c]">CNPJ 31.466.949/0001-05</p><button className="button-primary mt-6 w-full justify-center" onClick={() => setSecurityOpen(false)}>Entendi, continuar <ArrowRight className="h-4 w-4" /></button><button className="security-whatsapp" onClick={() => window.open(whatsappUrl, '_blank')}>Falar com o canal oficial <MessageCircle className="h-4 w-4" /></button></div></div>}
    </main>
  )
}
