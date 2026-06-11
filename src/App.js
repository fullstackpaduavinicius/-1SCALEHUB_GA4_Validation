import "./App.css";

const WHATSAPP_NUMBER = "5579999999999";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20diagn%C3%B3stico%20para%20minha%20empresa.`;

const painCards = [
  {
    icon: "△",
    title: "Impulsionamento sem estratégia",
    text: "Seu dinheiro vai para anúncios soltos, sem segmentação, oferta ou intenção clara."
  },
  {
    icon: "▣",
    title: "Mensagens desqualificadas",
    text: "Você recebe contatos curiosos demais e poucos clientes realmente prontos para comprar."
  },
  {
    icon: "◎",
    title: "Falta de controle sobre métricas",
    text: "Sem saber o que funciona, você ajusta campanhas no escuro."
  },
  {
    icon: "✦",
    title: "Páginas que não convertem",
    text: "Tráfego chega, mas a página não conduz o visitante para uma ação."
  },
  {
    icon: "◈",
    title: "Decisões baseadas em achismo",
    text: "Ajustes feitos pelo feeling, sem leitura de dados reais."
  },
  {
    icon: "▤",
    title: "Dependência apenas do orgânico",
    text: "Crescimento lento, imprevisível e difícil de escalar."
  }
];

const structureCards = [
  {
    icon: "↗",
    title: "Campanhas no Meta Ads e Google Ads",
    text: "Criamos campanhas com estratégia, segmentação e foco em conversas qualificadas."
  },
  {
    icon: "▧",
    title: "Landing pages com foco em conversão",
    text: "Páginas rápidas, objetivas e pensadas para transformar visitantes em oportunidades."
  },
  {
    icon: "⚡",
    title: "Rastreamento com Pixel e GA4",
    text: "Eventos e conversões medidos para entender o que realmente gera resultado."
  },
  {
    icon: "◒",
    title: "Análise de público e comportamento",
    text: "Entendemos quem responde melhor aos anúncios e como melhorar a abordagem."
  },
  {
    icon: "◉",
    title: "Otimização contínua",
    text: "Ajustes semanais com base em dados, criativos e custo por oportunidade."
  },
  {
    icon: "▱",
    title: "Relatórios claros e acionáveis",
    text: "Você entende o que aconteceu, o que melhorou e quais serão os próximos passos."
  }
];

const processCards = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Analisamos seu negócio, oferta, público e presença digital."
  },
  {
    step: "02",
    title: "Estrutura",
    text: "Criamos a base da campanha, página, eventos e comunicação."
  },
  {
    step: "03",
    title: "Ativação",
    text: "Colocamos os anúncios no ar e acompanhamos os primeiros sinais."
  },
  {
    step: "04",
    title: "Otimização",
    text: "Melhoramos público, criativos, copy e orçamento com base nos dados."
  }
];

const methodCards = [
  {
    step: "01",
    label: "Fase 01",
    title: "Posicionamento",
    text: "Clareza da oferta, público, promessa e mensagem para atrair o cliente certo."
  },
  {
    step: "02",
    label: "Fase 02",
    title: "Aquisição",
    text: "Campanhas estruturadas para gerar conversas com intenção, não apenas cliques."
  },
  {
    step: "03",
    label: "Fase 03",
    title: "Conversão",
    text: "Páginas, atendimento e processo comercial alinhados para fechar mais vendas."
  }
];

const audienceGood = [
  "Negócios locais que querem gerar mais conversas pelo WhatsApp",
  "Empresas que já vendem, mas não têm previsibilidade",
  "Clínicas, lojas, prestadores de serviço e negócios com ticket médio saudável",
  "Empresas que querem profissionalizar sua aquisição de clientes",
  "Negócios com orçamento para investir de forma estratégica"
];

const audienceBad = [
  "Quem procura curiosos",
  "Quem não quer medir dados",
  "Quem não acompanha leads",
  "Quem não valoriza clareza, atendimento e processo comercial"
];

const pricingPlans = [
  {
    name: "Essencial Local",
    description:
      "Para negócios locais que querem começar a anunciar com estrutura profissional e foco em conversas pelo WhatsApp.",
    price: "R$497",
    period: "no primeiro mês • depois R$597/mês",
    badge: null,
    highlighted: false,
    buttonText: "Quero começar",
    features: [
      "Configuração da campanha",
      "Criação dos anúncios e criativos",
      "Gestão dos anúncios",
      "Otimizações durante o mês",
      "Acompanhamento das principais métricas",
      "Relatório mensal simples",
      "Foco em gerar conversas qualificadas"
    ]
  },
  {
    name: "Crescimento",
    description:
      "Para empresas que querem mais previsibilidade, análise de dados e melhorias constantes na estrutura de aquisição.",
    price: "R$997",
    period: "por mês",
    badge: "Mais indicado",
    highlighted: true,
    buttonText: "Quero crescer com estratégia",
    features: [
      "Tudo do plano Essencial",
      "Planejamento mensal de campanha",
      "Mais variações de criativos",
      "Análise de funil e conversão",
      "Eventos e acompanhamento com GA4",
      "Melhorias mensais em página ou seção estratégica",
      "Recomendações para aumentar conversão"
    ]
  },
  {
    name: "Scale",
    description:
      "Para negócios com ticket maior, maior volume de vendas ou necessidade de uma estrutura mais completa de crescimento.",
    price: "Sob diagnóstico",
    period: "",
    badge: null,
    highlighted: false,
    buttonText: "Solicitar diagnóstico",
    features: [
      "Estratégia personalizada",
      "Múltiplas campanhas",
      "Funil completo de aquisição",
      "Landing pages estratégicas",
      "Análise avançada de dados",
      "Acompanhamento mais próximo",
      "Plano de crescimento por etapas"
    ]
  }
];

function Header() {
  return (
    <header className="header">
      <a href="#topo" className="brand" aria-label="Scale Hub">
        <span className="brandIcon">S</span>
        <span>
          <strong>Scale Hub</strong>
          <small>Tráfego Pago & Aquisição</small>
        </span>
      </a>

      <nav className="nav">
        <a href="#dores">Dores</a>
        <a href="#metodo">Método</a>
        <a href="#dados">Dados</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="headerButton" href={whatsappLink} target="_blank" rel="noreferrer">
        Solicitar diagnóstico
      </a>
    </header>
  );
}

function MiniDashboard() {
  return (
    <div className="dashboardCard">
      <div className="dashboardTop">
        <div>
          <span className="dashboardStatus"></span>
          <span>Visão geral da campanha</span>
        </div>
        <strong>AO VIVO</strong>
      </div>

      <div className="statsGrid">
        <div className="statBox">
          <small>Investimento</small>
          <strong>R$ 248,00</strong>
          <span>+18%</span>
        </div>

        <div className="statBox">
          <small>Custo por lead</small>
          <strong>R$ 15,42</strong>
          <span>−12%</span>
        </div>

        <div className="statBox">
          <small>Taxa de resposta</small>
          <strong>17,7%</strong>
          <span>+9%</span>
        </div>
      </div>

      <div className="chart">
        <div style={{ height: "38%" }}></div>
        <div style={{ height: "52%" }}></div>
        <div style={{ height: "46%" }}></div>
        <div style={{ height: "63%" }}></div>
        <div style={{ height: "55%" }}></div>
        <div style={{ height: "72%" }}></div>
        <div style={{ height: "66%" }}></div>
        <div style={{ height: "82%" }}></div>
        <div style={{ height: "88%" }}></div>
      </div>

      <div className="dashboardFooter">
        <div>
          <small>Conversas qualificadas</small>
          <strong>7</strong>
        </div>

        <div className="miniTags">
          <span>Campanha 1</span>
          <span>Campanha 2</span>
          <span>Reteste</span>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="sectionTitle">
      <span>{eyebrow}</span>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {text && <p>{text}</p>}
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <article className="card">
      <span className="cardIcon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PricingSection() {
  function getPlanLink(planName) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Olá, quero saber mais sobre o plano ${planName} da Scale Hub.`
    )}`;
  }

  return (
    <section className="pricingSection section" id="planos">
      <div className="pricingIntro">
        <span>Planos e investimento</span>

        <h2>
          Planos para negócios que querem vender mais com{" "}
          <strong>anúncios.</strong>
        </h2>

        <p>
          Escolha o ponto de partida ideal. Se não souber qual plano faz
          sentido, solicite um diagnóstico.
        </p>
      </div>

      <div className="pricingGrid">
        {pricingPlans.map((plan) => (
          <article
            className={`pricingCard ${plan.highlighted ? "pricingCardFeatured" : ""}`}
            key={plan.name}
          >
            {plan.badge && <div className="pricingBadge">{plan.badge}</div>}

            <div className="pricingCardHeader">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>

            <div className="pricingDivider"></div>

            <div className="pricingPrice">
              <strong>{plan.price}</strong>
              {plan.period && <span>{plan.period}</span>}
            </div>

            <ul className="pricingFeatures">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a
              className={`pricingButton ${
                plan.highlighted ? "pricingButtonFeatured" : ""
              }`}
              href={getPlanLink(plan.name)}
              target="_blank"
              rel="noreferrer"
            >
              {plan.buttonText}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app" id="topo">
      <Header />

      <main>
        <section className="hero section">
          <div className="heroContent">
            <div className="breadcrumb">
              <span></span>
              Sistema de aquisição para negócios locais
            </div>

            <h1>
              Transformamos anúncios em <strong>conversas reais</strong> para negócios locais
            </h1>

            <p>
              Criamos páginas, campanhas e rastreamento para sua empresa gerar clientes com mais previsibilidade e depender menos da indicação ou impulsionamento aleatório.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href={whatsappLink} target="_blank" rel="noreferrer">
                Solicitar diagnóstico
              </a>

              <a className="secondaryButton" href="#metodo">
                Ver como funciona
              </a>
            </div>

            <div className="heroNumbers">
              <div>
                <strong>+1.2K</strong>
                <span>Cliques mensais</span>
              </div>

              <div>
                <strong>17,7%</strong>
                <span>Taxa média de resposta</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Dados rastreados</span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <MiniDashboard />
          </div>
        </section>

        <section className="section" id="dores">
          <SectionTitle
            eyebrow="O problema"
            title={"O problema não é anunciar. <br/>É anunciar <strong>sem sistema.</strong>"}
            text="Muitos negócios investem em anúncios, mas não sabem exatamente o que está funcionando. Sem rastreamento, página preparada e análise de dados, o investimento vira tentativa e erro."
          />

          <div className="grid cardsGrid">
            {painCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            eyebrow="A solução"
            title={"A Scale Hub estrutura sua aquisição do anúncio até a <strong>conversão.</strong>"}
            text="Nosso processo conecta tráfego, página, rastreamento e análise para transformar atenção em oportunidades reais de venda."
          />

          <div className="grid cardsGrid">
            {structureCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="section darker" id="metodo">
          <SectionTitle
            eyebrow="Como funciona"
            title={"Um processo simples, <br/><strong>estratégico e mensurável.</strong>"}
          />

          <div className="processGrid">
            {processCards.map((item) => (
              <article className="processCard" key={item.title}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle
            eyebrow="Método Scale Hub"
            title={"Nosso método de <strong>crescimento</strong>"}
            text="A Scale Hub trabalha com um método próprio para organizar aquisição, conversão e melhoria contínua. Primeiro posicionamos a oferta, depois ativamos campanhas e otimizamos com base em dados."
          />

          <div className="methodGrid">
            {methodCards.map((item) => (
              <article className="methodCard" key={item.title}>
                <div>
                  <span>{item.step}</span>
                  <small>{item.label}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="center">
            <a className="smallButton" href="#contato">
              Conhecer o método completo
            </a>
          </div>
        </section>

        <section className="section" id="dados">
          <SectionTitle
            eyebrow="Métricas que importam"
            title={"Não trabalhamos no <strong>escuro.</strong>"}
            text="Todo investimento é acompanhado por estrutura de dados. Veja o tipo de visibilidade que entregamos em cada projeto."
          />

          <div className="dataGrid">
            <article className="dataCard">
              <div className="dataHeader">
                <h3>Eventos rastreados</h3>
                <span>+</span>
              </div>

              <div className="metricRows">
                <div><span>View content</span><strong>12.430</strong></div>
                <div><span>Lead</span><strong>1.184</strong></div>
                <div><span>Iniciar WhatsApp</span><strong>456</strong></div>
                <div><span>Conversas qualificadas</span><strong>89</strong></div>
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>Funil de conversão</h3>
                <span>+</span>
              </div>

              <div className="funnel">
                <div>
                  <span style={{ width: "94%" }}></span>
                  <small>Impressões</small>
                </div>
                <div>
                  <span style={{ width: "72%" }}></span>
                  <small>Cliques</small>
                </div>
                <div>
                  <span style={{ width: "54%" }}></span>
                  <small>Conversas</small>
                </div>
                <div>
                  <span style={{ width: "38%" }}></span>
                  <small>Oportunidades</small>
                </div>
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>Custo por conversa</h3>
                <span>+</span>
              </div>

              <div className="lineChart">
                <i style={{ height: "36%" }}></i>
                <i style={{ height: "48%" }}></i>
                <i style={{ height: "42%" }}></i>
                <i style={{ height: "58%" }}></i>
                <i style={{ height: "51%" }}></i>
                <i style={{ height: "72%" }}></i>
                <i style={{ height: "66%" }}></i>
              </div>

              <div className="legend">
                <span></span>
                Meta
                <span></span>
                Conversas qualificadas
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>Relatório de desempenho</h3>
                <span>+</span>
              </div>

              <div className="metricRows">
                <div><span>Total investido</span><strong>R$ 248,00</strong></div>
                <div><span>CPC médio</span><strong>R$ 1,52</strong></div>
                <div><span>Taxa resposta</span><strong>17,7%</strong></div>
                <div><span>Melhor campanha</span><strong>Oferta direta</strong></div>
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>Páginas criadas para conversão</h3>
                <span>+</span>
              </div>

              <div className="pagePreview">
                <div></div>
                <span></span>
                <span></span>
                <strong></strong>
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>GA4 integrado à aquisição</h3>
                <span>+</span>
              </div>

              <ul className="checkList">
                <li>Eventos de clique no WhatsApp</li>
                <li>Origem do tráfego por campanha</li>
                <li>Páginas com melhor resposta</li>
                <li>Dados para otimização contínua</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <SectionTitle
            eyebrow="Para quem é"
            title={"Para quem a <strong>Scale Hub</strong> é indicada?"}
          />

          <div className="audienceGrid">
            <article className="audienceCard">
              <h3>É para você se:</h3>

              <ul>
                {audienceGood.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="audienceCard">
              <h3>Não é para você se:</h3>

              <ul>
                {audienceBad.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <PricingSection />

        <section className="section finalCta" id="contato">
          <div>
            <h2>
              Quer saber se tráfego pago faz sentido para o <strong>seu negócio agora?</strong>
            </h2>

            <p>
              Solicite um diagnóstico inicial. Vamos analisar sua presença digital, sua oferta e entender quais estratégias fazem sentido para gerar conversas qualificadas.
            </p>

            <a className="primaryButton" href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar diagnóstico no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <a href="#topo" className="brand">
            <span className="brandIcon">S</span>
            <span>
              <strong>Scale Hub</strong>
              <small>Tráfego Pago & Aquisição</small>
            </span>
          </a>

          <p>Aquisição, dados e conversão para negócios locais.</p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#dores">Dores</a>
          <a href="#metodo">Método</a>
          <a href="#dados">Dados</a>
          <a href="#planos">Planos</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;