import "./App.css";

const WHATSAPP_NUMBER = "5579998807035";

const defaultWhatsappMessage =
  "Olá, quero solicitar um diagnóstico gratuito para minha empresa.";

function makeWhatsappLink(message = defaultWhatsappMessage) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const whatsappLink = makeWhatsappLink();

function trackWhatsappClick(location) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: location
    });
  }
}

function WhatsAppCTA({
  children,
  className = "primaryButton",
  message = defaultWhatsappMessage,
  eventLabel = "cta"
}) {
  return (
    <a
      className={className}
      href={makeWhatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsappClick(eventLabel)}
    >
      {children}
    </a>
  );
}

const painCards = [
  {
    icon: "△",
    title: "Anúncios sem direção",
    text: "Campanhas rodando sem oferta clara, público bem definido ou objetivo comercial."
  },
  {
    icon: "▣",
    title: "Leads sem qualidade",
    text: "Muitas mensagens curiosas e poucas conversas com intenção real de compra."
  },
  {
    icon: "◎",
    title: "Métricas no escuro",
    text: "Sem rastreamento, você não sabe qual anúncio, página ou canal gera resultado."
  },
  {
    icon: "✦",
    title: "Página que não vende",
    text: "O tráfego chega, mas a página não conduz o visitante para o WhatsApp."
  }
];

const structureCards = [
  {
    icon: "↗",
    title: "Campanhas estratégicas",
    text: "Meta Ads e Google Ads com foco em conversas, orçamento e oportunidade comercial."
  },
  {
    icon: "▧",
    title: "Landing page de conversão",
    text: "Página objetiva, rápida e preparada para levar o visitante ao WhatsApp."
  },
  {
    icon: "⚡",
    title: "Pixel e GA4",
    text: "Eventos configurados para medir cliques, origem do tráfego e ações importantes."
  },
  {
    icon: "◉",
    title: "Otimização contínua",
    text: "Ajustes em público, criativos, copy e verba com base no comportamento real."
  }
];

const processCards = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Analisamos seu negócio, oferta, público, concorrência e presença digital."
  },
  {
    step: "02",
    title: "Estrutura",
    text: "Criamos campanha, criativos, página, rastreamento e rota para WhatsApp."
  },
  {
    step: "03",
    title: "Otimização",
    text: "Acompanhamos os dados e ajustamos para melhorar o custo por conversa."
  }
];

const methodCards = [
  {
    step: "01",
    label: "Fase 01",
    title: "Posicionamento",
    text: "Definimos promessa, oferta e mensagem para atrair o cliente certo."
  },
  {
    step: "02",
    label: "Fase 02",
    title: "Aquisição",
    text: "Colocamos campanhas no ar para gerar conversas qualificadas."
  },
  {
    step: "03",
    label: "Fase 03",
    title: "Conversão",
    text: "Ajustamos página, atendimento e dados para aumentar oportunidades."
  }
];

const proofStats = [
  {
    value: "R$ 13,16",
    label: "custo por conversa analisado",
    text: "Exemplo de leitura usada para entender se a campanha está saudável."
  },
  {
    value: "1,67%",
    label: "CTR acompanhado",
    text: "Ajuda a identificar se criativo, promessa e público estão respondendo."
  },
  {
    value: "GA4 + Pixel",
    label: "eventos rastreados",
    text: "Cliques no WhatsApp, origem do tráfego e ações importantes da página."
  }
];

const audienceGood = [
  "Negócios locais que querem gerar mais conversas pelo WhatsApp",
  "Empresas que já vendem, mas não têm previsibilidade",
  "Clínicas, lojas, prestadores de serviço e negócios com ticket saudável",
  "Empresas que valorizam dados, atendimento e melhoria contínua"
];

const audienceBad = [
  "Quem quer apenas impulsionar post sem estratégia",
  "Quem não acompanha os contatos recebidos",
  "Quem não quer medir dados nem melhorar o processo",
  "Quem espera venda sem oferta, atendimento e estrutura comercial"
];

const pricingPlans = [
  {
    name: "Essencial Local",
    description:
      "Para negócios locais que querem começar com tráfego pago estruturado e foco em conversas pelo WhatsApp.",
    price: "R$497",
    period: "primeiro mês • depois R$597/mês",
    badge: "Entrada",
    highlighted: false,
    buttonText: "Quero começar",
    features: [
      "Campanha principal focada em WhatsApp",
      "Configuração inicial dos anúncios",
      "Criativos iniciais para teste",
      "Acompanhamento das principais métricas",
      "Otimizações durante o mês",
      "Relatório mensal simples",
      "Recomendações de melhoria"
    ]
  },
  {
    name: "Crescimento",
    description:
      "Para empresas que querem previsibilidade, análise de dados e melhorias constantes na aquisição.",
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
      "Melhoria mensal em página ou seção estratégica",
      "Recomendações para aumentar conversão"
    ]
  },
  {
    name: "Scale",
    description:
      "Para negócios com ticket maior, mais verba de mídia ou necessidade de funil completo.",
    price: "Sob diagnóstico",
    period: "projeto personalizado",
    badge: "Avançado",
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

const faqItems = [
  {
    question: "A verba dos anúncios está inclusa?",
    answer:
      "Não. A verba de mídia é paga diretamente para Meta Ads ou Google Ads. O valor dos planos cobre estratégia, configuração, gestão, criativos, análise e otimização."
  },
  {
    question: "Preciso ter site para começar?",
    answer:
      "Não necessariamente. Podemos começar com uma landing page simples ou ajustar uma página existente para direcionar o visitante ao WhatsApp."
  },
  {
    question: "Em quanto tempo aparecem os primeiros dados?",
    answer:
      "Geralmente os primeiros sinais aparecem nos primeiros dias de campanha. A otimização real acontece após analisar cliques, conversas, criativos, público e custo por oportunidade."
  },
  {
    question: "Vocês garantem vendas?",
    answer:
      "Não prometemos venda garantida. O trabalho é construir uma estrutura melhor para gerar oportunidades. O resultado também depende de oferta, preço, atendimento e processo comercial."
  },
  {
    question: "Vocês fazem os criativos?",
    answer:
      "Sim. Os planos incluem criativos iniciais para teste. No plano Crescimento há mais variações e melhoria contínua com base nos dados."
  }
];

function Header() {
  return (
    <header className="header">
      <a href="#topo" className="brand" aria-label="Scale Hub">
        <img src="/logo-scalehub.png" alt="Logo Scale Hub" className="brandLogo" />

        <span>
          <strong>Scale Hub</strong>
          <small>Tráfego Pago & Aquisição</small>
        </span>
      </a>

      <nav className="nav">
        <a href="#dores">Dores</a>
        <a href="#metodo">Método</a>
        <a href="#dados">Dados</a>
        <a href="#planos">Planos</a>
      </nav>

      <WhatsAppCTA className="headerButton" eventLabel="header">
        Diagnóstico gratuito
      </WhatsAppCTA>
    </header>
  );
}

function MiniDashboard() {
  return (
    <div className="dashboardCard">
      <div className="dashboardTop">
        <div>
          <span className="dashboardStatus"></span>
          <span>Painel de campanha</span>
        </div>
        <strong>EXEMPLO</strong>
      </div>

      <div className="statsGrid">
        <div className="statBox">
          <small>Investimento</small>
          <strong>R$ 248,00</strong>
          <span>monitorado</span>
        </div>

        <div className="statBox">
          <small>Custo por conversa</small>
          <strong>R$ 15,42</strong>
          <span>em análise</span>
        </div>

        <div className="statBox">
          <small>Taxa de resposta</small>
          <strong>17,7%</strong>
          <span>oportunidade</span>
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
          <span>Campanha</span>
          <span>Criativo</span>
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

function ProofSection() {
  return (
    <section className="section proofSection">
      <div className="proofIntro">
        <span>Prova de controle</span>
        <h2>
          Não é só colocar anúncio no ar. É saber <strong>o que está acontecendo.</strong>
        </h2>
      </div>

      <div className="proofGrid">
        {proofStats.map((item) => (
          <article className="proofCard" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  function getPlanMessage(planName) {
    return `Olá, quero saber mais sobre o plano ${planName} da Scale Hub.`;
  }

  return (
    <section className="pricingSection section" id="planos">
      <div className="pricingIntro">
        <span>Planos e investimento</span>

        <h2>
          Escolha o ponto de partida para gerar mais <strong>conversas comerciais.</strong>
        </h2>

        <p>
          Comece com uma estrutura simples ou avance para um acompanhamento mais completo.
          Se tiver dúvida, o diagnóstico indica o melhor caminho.
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

            <WhatsAppCTA
              className={`pricingButton ${plan.highlighted ? "pricingButtonFeatured" : ""}`}
              message={getPlanMessage(plan.name)}
              eventLabel={`pricing_${plan.name.toLowerCase().replaceAll(" ", "_")}`}
            >
              {plan.buttonText}
            </WhatsAppCTA>
          </article>
        ))}
      </div>

      <div className="planNote">
        <strong>Importante:</strong> a verba de anúncio não está inclusa. Site completo,
        e-commerce, gestão diária de redes sociais e atendimento comercial são serviços separados
        ou definidos no diagnóstico.
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section faqSection">
      <SectionTitle
        eyebrow="Dúvidas comuns"
        title={"Antes de contratar, é importante ter <strong>clareza.</strong>"}
        text="Uma campanha saudável depende de anúncio, página, dados, oferta e atendimento funcionando juntos."
      />

      <div className="faqGrid">
        {faqItems.map((item) => (
          <article className="faqItem" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
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
              Mais orçamentos pelo WhatsApp com <strong>tráfego pago estruturado</strong>
            </h1>

            <p>
              Criamos campanhas, criativos, landing pages e rastreamento para sua empresa
              gerar conversas com intenção de compra e depender menos de indicação,
              sorte ou impulsionamento aleatório.
            </p>

            <div className="heroActions">
              <WhatsAppCTA className="primaryButton" eventLabel="hero_primary">
                Quero diagnóstico gratuito
              </WhatsAppCTA>

              <a className="secondaryButton" href="#planos">
                Ver planos
              </a>
            </div>

            <div className="heroNumbers">
              <div>
                <strong>Meta Ads</strong>
                <span>campanhas para WhatsApp</span>
              </div>

              <div>
                <strong>LP</strong>
                <span>página com foco em conversão</span>
              </div>

              <div>
                <strong>GA4</strong>
                <span>eventos e dados rastreados</span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <MiniDashboard />
          </div>
        </section>

        <section className="trustStrip">
          <div>
            <strong>Campanha</strong>
            <span>Estratégia, segmentação e oferta</span>
          </div>

          <div>
            <strong>Criativo</strong>
            <span>Peças iniciais para testar resposta</span>
          </div>

          <div>
            <strong>Página</strong>
            <span>Rota clara para o WhatsApp</span>
          </div>

          <div>
            <strong>Dados</strong>
            <span>Pixel, GA4 e métricas de decisão</span>
          </div>
        </section>

        <section className="section" id="dores">
          <SectionTitle
            eyebrow="O problema"
            title={"O problema não é anunciar. <br/>É anunciar <strong>sem sistema.</strong>"}
            text="Muitos negócios investem em tráfego, mas não sabem o que está funcionando. Sem rastreamento, página preparada e análise, o investimento vira tentativa e erro."
          />

          <div className="grid cardsGrid">
            {painCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="section darker">
          <SectionTitle
            eyebrow="A solução"
            title={"A Scale Hub estrutura sua aquisição do anúncio até a <strong>conversão.</strong>"}
            text="Conectamos tráfego, página, rastreamento e otimização para transformar atenção em oportunidades reais de venda."
          />

          <div className="grid cardsGrid">
            {structureCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <ProofSection />

        <section className="section" id="metodo">
          <SectionTitle
            eyebrow="Como funciona"
            title={"Um processo simples, <br/><strong>estratégico e mensurável.</strong>"}
            text="Você não precisa entender tudo sobre anúncios. Precisa de uma estrutura clara, acompanhamento e melhoria contínua."
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
            text="Primeiro alinhamos a oferta. Depois ativamos campanhas. Por fim, otimizamos com base em dados reais."
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
            <WhatsAppCTA
              className="smallButton"
              message="Olá, quero entender o método da Scale Hub para gerar mais conversas pelo WhatsApp."
              eventLabel="method"
            >
              Conhecer o método no WhatsApp
            </WhatsAppCTA>
          </div>
        </section>

        <section className="section darker" id="dados">
          <SectionTitle
            eyebrow="Métricas que importam"
            title={"Não trabalhamos no <strong>escuro.</strong>"}
            text="Acompanhamos os sinais que ajudam a decidir o que manter, pausar, melhorar ou testar novamente."
          />

          <div className="dataGrid">
            <article className="dataCard dataCardFeatured">
              <div className="dataHeader">
                <h3>Eventos rastreados</h3>
                <span>+</span>
              </div>

              <div className="metricRows">
                <div>
                  <span>Visualização da página</span>
                  <strong>view_lp</strong>
                </div>
                <div>
                  <span>Clique no WhatsApp</span>
                  <strong>lead</strong>
                </div>
                <div>
                  <span>Visualização dos planos</span>
                  <strong>view_pricing</strong>
                </div>
                <div>
                  <span>CTA final</span>
                  <strong>click_cta</strong>
                </div>
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
                Conversas
                <span></span>
                Oportunidades
              </div>
            </article>

            <article className="dataCard">
              <div className="dataHeader">
                <h3>Relatório mensal</h3>
                <span>+</span>
              </div>

              <ul className="checkList">
                <li>O que funcionou</li>
                <li>O que precisa melhorar</li>
                <li>Próximos testes</li>
                <li>Recomendações comerciais</li>
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

            <article className="audienceCard audienceCardDark">
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

        <FAQSection />

        <section className="section finalCta" id="contato">
          <div>
            <span>Diagnóstico gratuito</span>

            <h2>
              Quer saber se tráfego pago faz sentido para o <strong>seu negócio agora?</strong>
            </h2>

            <p>
              Vamos analisar sua oferta, presença digital e rota de conversão para indicar
              o melhor caminho para gerar conversas qualificadas.
            </p>

            <WhatsAppCTA className="primaryButton" eventLabel="final_cta">
              Solicitar diagnóstico no WhatsApp
            </WhatsAppCTA>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerBrand">
          <a href="#topo" className="brand">
            <img src="/logo-scalehub.png" alt="Logo Scale Hub" className="brandLogo" />
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
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>

      <WhatsAppCTA className="stickyMobileCta" eventLabel="sticky_mobile">
        Falar no WhatsApp
      </WhatsAppCTA>
    </div>
  );
}

export default App;