/* ==========================================================================
   INTERATIVE SCRIPTS: TURING — ANÁLISE ESTRATÉGICA DE IA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollFeatures();
  initCardGlowEffect();
});

/**
 * Lógica do Light / Dark Mode
 */
function initTheme() {
  const toggleBtn = document.querySelector('.theme-toggle-btn');
  if (!toggleBtn) return;

  // Carrega tema salvo ou assume 'dark' como padrão
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

/**
 * Funcionalidades atreladas ao Scroll:
 * 1. Barra de progresso de leitura
 * 2. Destaque ativo no Sumário (TOC)
 */
function initScrollFeatures() {
  const progressBar = document.querySelector('.progress-bar');
  const tocLinks = document.querySelectorAll('#TableOfContents a');
  const headings = Array.from(document.querySelectorAll('.article-content h2, .article-content h3'));

  // Função executada no scroll
  const onScroll = () => {
    const winScroll = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Atualizar Barra de Progresso
    if (progressBar) {
      if (totalHeight > 0) {
        const scrolled = (winScroll / totalHeight) * 100;
        progressBar.style.width = scrolled + '%';
      } else {
        progressBar.style.width = '0%';
      }
    }

    // 2. Atualizar Destaque do TOC
    if (tocLinks.length > 0 && headings.length > 0) {
      let activeHeading = null;
      const offset = 140; // Navbar + folga
      
      // Encontra o cabeçalho ativo: o último que passou da linha de corte (offset) do topo do viewport
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= offset) {
          activeHeading = heading;
        } else {
          break; // Os cabeçalhos seguintes estão abaixo da linha de corte
        }
      }

      // Se nenhum passou da linha de corte, ativa o primeiro
      if (!activeHeading) {
        activeHeading = headings[0];
      }

      if (activeHeading) {
        const id = activeHeading.getAttribute('id');
        tocLinks.forEach(link => {
          const href = link.getAttribute('href');
          // Decodifica a URI do href para lidar corretamente com acentos (ex: %C3%A7%C3%A3o -> ção)
          if (decodeURIComponent(href) === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }
  };

  // Registra o listener e executa uma vez no início
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Efeito dinâmico de brilho (glow) que acompanha o cursor nos cartões
 */
function initCardGlowEffect() {
  const cards = document.querySelectorAll('.article-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // coordenada x dentro do card
      const y = e.clientY - rect.top;  // coordenada y dentro do card
      
      // Define propriedades customizadas CSS no elemento
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * Função utilitária para copiar link e mostrar feedback visual
 */
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = 'Copiado!';
    btnElement.style.borderColor = 'var(--accent)';
    btnElement.style.color = 'var(--accent)';
    
    setTimeout(() => {
      btnElement.innerHTML = originalText;
      btnElement.style.borderColor = '';
      btnElement.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Falha ao copiar link: ', err);
  });
}
