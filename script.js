const translations = {
  pt: {
    title: "Olá, eu sou Lucas Sahm",
    moreInfo: "Mais sobre mim ➡️",
    footer: "Site por Lucas Sahm — Desenvolvedor, Fotógrafo e Autor",
    aboutTitle: "Mais sobre mim",
    back: "⬅️ Voltar para a página inicial",
    about: `
      <h2>💼 Profissional de TI</h2>
      <p>Com formação em Análise e Desenvolvimento de Sistemas, Eletrônica e Automação Industrial, atuo na área de tecnologia há mais de 10 anos, com foco em automação, e suporte técnico. Durante esse período, desenvolvi expertise no atendimento direto a clientes da Alemanha, oferecendo soluções eficazes em um ambiente bilíngue. Sou fluente em alemão, com certificação nível B2 pelo Goethe-Institut, o que me permite atuar com naturalidade e precisão em contextos técnicos e culturais internacionais.</p>

      <h2>📷 Fotógrafo</h2>
      <p>Através da lente, procuro mais do que imagens — busco histórias, expontaneade e verdades. Cada clique é uma tentativa de eternizar o que se sente, não apenas o que se vê.</p>

      <h2>📖 Autor</h2>
      <p>Na escrita, encontrei liberdade para explorar as linhas invisíveis que conectam escolhas e emoções. <em>Entre as Linhas do Destino</em> é um convite à introspecção — uma narrativa sobre encontros, mudanças e possibilidades.</p>

	  <h2>📻 Radioamadorismo</h2>
      <p>Sou radioamador classe C desde 2021, com indicativo PU5AAE. Embora ainda atue pouco, possuo um HT e planejo expandir minha participação, especialmente em modos digitais, assim que tiver oportunidade de adquirir um rádio base. É um hobby em desenvolvimento que desejo explorar mais no futuro.</p>

      <h2>🎧 Inspirações</h2>
      <p>Som hi-fi, rock no vinil, pores do sol na montanha, café com código, o silêncio após o clique do obturador.</p>
    `
  },
  en: {
    title: "Hi, I'm Lucas Sahm",
    moreInfo: "More about me ➡️",
    footer: "Site by Lucas Sahm — Developer, Photographer, and Author",
    aboutTitle: "More about me",
    back: "⬅️ Back to home",
    about: `
      <h2>💼 IT Professional</h2>
      <p>With degrees in Systems Analysis, Electronics and Industrial Automation, I’ve been working in technology for over 10 years, focusing on automation and technical support. I’ve developed strong experience serving clients in Germany. I’m fluent in German (Goethe-Institut B2 certified), which allows me to work smoothly in international technical and cultural contexts.</p>

      <h2>📷 Photographer</h2>
      <p>Through the lens, I seek more than just images — I look for stories, spontaneity, and truths. Each click is an attempt to eternalize what is felt, not just what is seen.</p>

      <h2>📖 Author</h2>
      <p>In writing, I found the freedom to explore the invisible threads that connect choices and emotions. <em>Between the Lines of Destiny</em> is an invitation to introspection — a narrative about encounters, change, and possibility.</p>

	  <h2>📻 Ham Radio</h2>
      <p>I've been a Class C ham radio operator since 2021, with the callsign PU5AAE. While I’m not very active yet — currently using only an HT — I plan to invest in a base station and explore digital modes when the opportunity arises. It’s a hobby in progress that I look forward to developing further.</p>

      <h2>🎧 Inspirations</h2>
      <p>Hi-fi sound, rock on vinyl, mountaintop sunsets, coffee with code, the silence after the shutter click.</p>
    `
  }
};

let lang = new URLSearchParams(window.location.search).get("lang") || "pt";

function toggleLanguage() {
  lang = lang === "pt" ? "en" : "pt";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.location.href = url.toString();
}

function updatePageContent() {
  const t = translations[lang];

  const titleEl = document.getElementById("title");
  const moreBtn = document.getElementById("more-info-btn");
  const footerEl = document.getElementById("footer");
  const aboutTitle = document.getElementById("about-title");
  const aboutContent = document.getElementById("about-content");
  const backBtn = document.getElementById("back-btn");

  if (titleEl) titleEl.textContent = t.title;
  if (moreBtn) {
    moreBtn.textContent = t.moreInfo;
    moreBtn.href = `sobremim.html?lang=${lang}`;
  }
  if (footerEl) footerEl.textContent = t.footer;
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
  if (aboutContent) aboutContent.innerHTML = t.about;
  if (backBtn) {
    backBtn.textContent = t.back;
    backBtn.href = `index.html?lang=${lang}`;
  }
}

updatePageContent();
