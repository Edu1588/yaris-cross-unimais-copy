import { FormEvent, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const ASSET_BASE = "https://unimaisveiculos.com.br/yariscross/assets";
const whatsappNumber = "551937271000";

const gallery = [
  { image: `${ASSET_BASE}/yaris-hero-exterior.jpg`, label: "Exterior XRX Hybrid" },
  { image: `${ASSET_BASE}/yaris-hero-interior.jpg`, label: "Cabine completa" },
  { image: `${ASSET_BASE}/yaris-carousel-seats.jpg`, label: "Bancos e acabamento" },
  { image: `${ASSET_BASE}/yaris-carousel-roof.jpg`, label: "Teto panorâmico" },
  { image: `${ASSET_BASE}/yaris-carousel-panel.jpg`, label: "Tecnologia a bordo" },
];

const technology = [
  {
    number: "01",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Full Hybrid Flex",
    description: "Motor elétrico e motor a combustão alternam ou trabalham juntos. Não usa tomada.",
  },
  {
    number: "02",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Toyota Safety Sense",
    description: "LTA ajuda a manter a faixa e o ACC ajusta a velocidade conforme o veículo à frente.",
  },
  {
    number: "03",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Visão panorâmica 360°",
    description: "Mais facilidade para estacionar e enxergar o entorno do veículo.",
  },
  {
    number: "04",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Monitor de ponto cego",
    description: "Alerta visual no retrovisor ajuda a identificar veículos fora do seu campo de visão.",
  },
  {
    number: "05",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Teto fixo de vidro",
    description: "Mais luz e amplitude, com cortina de acionamento elétrico.",
  },
  {
    number: "06",
    eyebrow: "TECNOLOGIA XRX HYBRID",
    title: "Porta-malas elétrico",
    description: "Abertura elétrica automática para colocar ou retirar a bagagem com mais praticidade.",
  },
];

const faqs = [
  {
    question: "Precisa carregar o Yaris Cross Hybrid na tomada?",
    answer: "Não. O sistema híbrido recupera energia durante o uso e gerencia o carregamento automaticamente.",
  },
  {
    question: "O veículo é zero km e modelo 2026?",
    answer: "Sim. Esta campanha apresenta o Toyota Yaris Cross XRX Hybrid ano/modelo 2026, zero km. Consulte a disponibilidade de cores.",
  },
  {
    question: "Posso colocar meu veículo na troca?",
    answer: "Sim. A equipe da Unimais pode avaliar seu usado e apresentar a composição da negociação.",
  },
  {
    question: "Existe opção de financiamento?",
    answer: "Sim. A simulação depende da entrada, prazo, instituição financeira e aprovação de crédito.",
  },
  {
    question: "Como funciona a garantia de até 10 anos?",
    answer: "A garantia Toyota pode ser estendida conforme as revisões e condições do programa. Fale com um especialista para confirmar a elegibilidade da unidade.",
  },
];

function buildWhatsAppMessage(name: string, phone: string, city: string, tradeIn: string) {
  const details = [
    "Olá! Vi a oferta do Toyota Yaris Cross XRX Hybrid 2026 por R$ 169.900 e quero saber mais.",
    name && `Nome: ${name}`,
    phone && `WhatsApp: ${phone}`,
    city && `Cidade: ${city}`,
    tradeIn && `Veículo na troca: ${tradeIn}`,
  ].filter(Boolean);
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(details.join("\n"))}`;
}

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", city: "", tradeIn: "sim" });

  const previousImage = () => setActiveImage((current) => (current - 1 + gallery.length) % gallery.length);
  const nextImage = () => setActiveImage((current) => (current + 1) % gallery.length);

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(buildWhatsAppMessage(form.name, form.phone, form.city, form.tradeIn), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="site-shell" id="inicio">
      <div className="top-ribbon">
        <div className="top-ribbon__inner">
          <span className="ribbon-item ribbon-item--strong"><span className="ribbon-dot" /> LOTE ESPECIAL</span>
          <span className="ribbon-item">10 unidades</span>
          <span className="ribbon-divider" />
          <span className="ribbon-item ribbon-item--strong"><span className="ribbon-dot" /> 2026 · 0 KM</span>
          <span className="ribbon-item">zero quilômetro</span>
          <span className="ribbon-divider" />
          <span className="ribbon-item ribbon-item--strong"><span className="ribbon-dot" /> PRONTA ENTREGA</span>
          <span className="ribbon-item">consulte as cores</span>
          <a className="ribbon-phone" href={`tel:+${whatsappNumber}`}><Phone size={13} /> (19) 3727-1000</a>
        </div>
      </div>

      <header className="main-header">
        <a className="brand" href="#inicio" aria-label="Unimais veículos início">
          <img src={`${ASSET_BASE}/unimais-logo-header.svg`} alt="Unimais veículos" />
        </a>
        <nav className="header-nav" aria-label="Navegação principal">
          <a href="#tecnologias">Tecnologias</a>
          <a href="#simular">Simular negociação</a>
        </nav>
        <a className="button button--green button--small" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
          Falar com especialista <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero__glow hero__glow--red" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero-copy">
          <div className="availability-pill"><span /> Lote limitado · consulte disponibilidade</div>
          <p className="eyebrow">Lançamento na Unimais <span>·</span> Top de linha</p>
          <h1 id="hero-title">Novo Toyota<br /><span>Yaris Cross</span><em>XRX Hybrid</em></h1>
          <p className="hero-subtitle">O SUV híbrido completo da Toyota, sem precisar carregar na tomada, com pronta entrega na Unimais.</p>
          <div className="price-block">
            <span className="price-label">Preço sugerido</span>
            <span className="old-price">R$ 189.990</span>
            <span className="price-caption">Por apenas</span>
            <strong>R$ 169.900</strong>
            <span className="price-note">à vista*</span>
          </div>
          <div className="hero-actions">
            <a className="button button--red" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Quero garantir o meu <ArrowUpRight size={17} /></a>
            <a className="button button--ghost" href="#simular">Simular negociação <ArrowRight size={17} /></a>
          </div>
          <div className="hero-metrics">
            <div><strong>Mais de R$ 20 mil</strong><span>de desconto</span></div>
            <div><strong>Até 17,9 km/l</strong><span>na cidade com gasolina</span></div>
            <div><strong>Até 10 anos</strong><span>de garantia Toyota*</span></div>
          </div>
        </div>

        <div className="hero-gallery">
          <div className="gallery-frame">
            <img key={gallery[activeImage].image} src={gallery[activeImage].image} alt={gallery[activeImage].label} />
            <div className="gallery-topline"><span className="gallery-index">0{activeImage + 1} / 0{gallery.length}</span><span>Imagens ilustrativas</span></div>
            <button className="gallery-arrow gallery-arrow--left" onClick={previousImage} aria-label="Ver foto anterior"><ChevronLeft size={20} /></button>
            <button className="gallery-arrow gallery-arrow--right" onClick={nextImage} aria-label="Ver próxima foto"><ChevronRight size={20} /></button>
            <div className="gallery-caption"><span>{gallery[activeImage].label}</span><span>Consulte as cores disponíveis</span></div>
          </div>
          <div className="gallery-thumbs" role="tablist" aria-label="Fotos do veículo">
            {gallery.map((item, index) => (
              <button key={item.image} className={index === activeImage ? "gallery-thumb is-active" : "gallery-thumb"} onClick={() => setActiveImage(index)} role="tab" aria-selected={index === activeImage}>
                <img src={item.image} alt="" />
              </button>
            ))}
          </div>
          <div className="hybrid-stamp"><span>FULL</span><strong>HYBRID</strong><small>FLEX</small></div>
        </div>
      </section>

      <section className="trust-band">
        <div className="trust-band__brand"><img src={`${ASSET_BASE}/unimais-logo-white.svg`} alt="Unimais" /><span>Confiança para escolher seu próximo Toyota.</span></div>
        <div className="trust-stat"><strong>+10 anos</strong><span>de mercado</span></div>
        <div className="trust-stat"><strong>+40 mil</strong><span>veículos negociados</span></div>
        <div className="trust-stat"><strong>5 lojas</strong><span>na região</span></div>
      </section>

      <section className="difference section-grid" id="oferta">
        <div className="section-intro">
          <p className="eyebrow">Por que essa oferta é diferente?</p>
          <h2>O topo de linha híbrido pelo preço de um SUV convencional.</h2>
          <p>Traga para sua rotina uma tecnologia híbrida de verdade, equipamentos de categoria superior e a confiança Toyota — agora com uma condição exclusiva da Unimais.</p>
        </div>
        <div className="economy-card">
          <div className="economy-card__top"><span>Economia imediata</span><Sparkles size={20} /></div>
          <div className="economy-line"><span>Preço sugerido XRX Hybrid</span><strong>R$ 189.990</strong></div>
          <div className="economy-line economy-line--highlight"><span>Preço Unimais</span><strong>R$ 169.900</strong></div>
          <div className="economy-total"><span>Você economiza</span><strong>R$ 20.090</strong></div>
          <p>Comparação com preço sugerido de lançamento da versão XRX Hybrid 2026.</p>
        </div>
      </section>

      <section className="technology-section" id="tecnologias">
        <div className="technology-section__header section-grid">
          <div><p className="eyebrow eyebrow--light">XRX Hybrid</p><h2>Completo onde<br /><span>realmente importa.</span></h2></div>
          <p>Uma experiência que combina eficiência, segurança e conforto em cada detalhe.</p>
        </div>
        <div className="technology-grid">
          {technology.map((item) => (
            <article className="tech-card" key={item.number}>
              <div className="tech-card__number">{item.number}</div>
              <div className="tech-card__content"><p>{item.eyebrow}</p><h3>{item.title}</h3><span>{item.description}</span><button>Ver funcionando <ArrowRight size={15} /></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="routine section-grid">
        <div className="routine-image"><img src={`${ASSET_BASE}/yaris-hero-interior.jpg`} alt="Interior do Toyota Yaris Cross XRX Hybrid" /><div className="image-label">Tecnologia que simplifica</div></div>
        <div className="routine-copy">
          <p className="eyebrow">Híbrido sem mudar sua rotina</p>
          <h2>Mais eficiência.<br /><span>Menos complicação.</span></h2>
          <p>Você abastece normalmente e o próprio carro gerencia a energia elétrica. Nada de procurar tomada ou instalar carregador em casa.</p>
          <ul>{["Central multimídia Toyota Play", "Apple CarPlay e Android Auto sem fio", "Ar-condicionado digital automático", "Acabamento exclusivo da versão XRX"].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
          <a className="text-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Tirar dúvidas com um especialista <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="lead-section" id="simular">
        <div className="lead-layout section-grid">
          <div className="lead-copy"><p className="eyebrow">Atendimento especializado</p><h2>Quer garantir<br /><span>uma unidade?</span></h2><p>Preencha os dados essenciais. Você será direcionado ao WhatsApp com a mensagem pronta para continuar a negociação.</p><div className="lead-note"><ShieldCheck size={20} /><span><strong>A Unimais também avalia seu usado.</strong><br />Informe seu veículo e receba uma proposta durante o atendimento.</span></div></div>
          <form className="lead-form" onSubmit={submitLead}>
            <div className="form-heading"><span>01</span><p>Comece sua simulação</p></div>
            <label>Seu nome<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Como podemos chamar você?" /></label>
            <label>WhatsApp<input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(19) 99999-9999" /></label>
            <label>Sua cidade<input required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} placeholder="Ex.: Campinas" /></label>
            <fieldset><legend>Possui veículo na troca?</legend><div className="radio-row"><label><input type="radio" name="tradeIn" checked={form.tradeIn === "sim"} onChange={() => setForm({ ...form, tradeIn: "sim" })} /> Sim</label><label><input type="radio" name="tradeIn" checked={form.tradeIn === "nao"} onChange={() => setForm({ ...form, tradeIn: "nao" })} /> Não</label></div></fieldset>
            <label className="check-row"><input type="checkbox" required /> <span>Concordo em receber contato da Unimais por telefone e WhatsApp sobre esta oferta.</span></label>
            <button className="button button--red button--full" type="submit">Continuar no WhatsApp <ArrowUpRight size={17} /></button>
            <small>Seus dados serão usados apenas para este atendimento.</small>
          </form>
        </div>
      </section>

      <section className="faq section-grid" id="duvidas">
        <div className="faq-heading"><p className="eyebrow">Dúvidas frequentes</p><h2>Antes de acelerar<br /><span>a conversa.</span></h2><a className="text-link" href={`tel:+${whatsappNumber}`}><Phone size={16} /> (19) 3727-1000</a></div>
        <div className="faq-list">{faqs.map((faq, index) => <div className={openFaq === index ? "faq-item is-open" : "faq-item"} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{faq.question}</span><ChevronDown size={20} /></button>{openFaq === index && <p>{faq.answer}</p>}</div>)}</div>
      </section>

      <footer className="footer"><div className="footer__inner"><div><img src={`${ASSET_BASE}/unimais-logo-white.svg`} alt="Unimais veículos" /><p>Seu próximo Toyota começa aqui.</p></div><a className="button button--green" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar com especialista</a></div><div className="footer__bottom"><span>© 2026 Unimais Veículos</span><span>Campanha sujeita à disponibilidade. Consulte condições.</span></div></footer>

      <a className="floating-whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
