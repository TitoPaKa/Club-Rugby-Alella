const CLUB_DATA = {
  nom: 'Club Rugby Alella',
  email: 'info@clubrugbyalella.cat',
  telefon: '+34 600 123 456',
  adreca: 'Camp Municipal d\'Alella, Alella',
  horariGeneral: 'Dilluns a divendres, 17.30 h – 22.00 h',
};

const NAV_LINKS = [
  ['Inici', '/'],
  ['El Club', '/club/'],
  ['Equips', '/equips/'],
  ['Escoleta', '/escoleta/'],
  ['Socis', '/socis/'],
  ['Sponsors', '/sponsors/'],
  ['Contacte', '/contacte/'],
  ['Àrea privada', '/area-privada/'],
];

function renderHeader() {
  const mount = document.querySelector('[data-site-header]');
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <div class="container">
        <div class="header-inner">
          <a class="brand" href="/">Club Rugby Alella</a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mainNav">Menú</button>
        </div>
        <nav id="mainNav" class="main-nav" aria-label="Navegació principal">
          ${NAV_LINKS.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>
      </div>
    </header>
  `;

  const path = window.location.pathname;
  mount.querySelectorAll('.main-nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if ((href !== '/' && path.startsWith(href)) || (href === '/' && path === '/')) {
      a.classList.add('active');
    }
  });

  const toggle = mount.querySelector('.nav-toggle');
  const nav = mount.querySelector('#mainNav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function renderFooter() {
  const mount = document.querySelector('[data-site-footer]');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <section>
          <h3>${CLUB_DATA.nom}</h3>
          <p class="small">Projecte esportiu i comunitari amb base al Maresme. Aquesta primera versió del web integra part pública i entrada a l\'àrea privada d\'Escoleta.</p>
          <p class="small">${CLUB_DATA.adreca}<br>${CLUB_DATA.telefon}<br><a href="mailto:${CLUB_DATA.email}">${CLUB_DATA.email}</a></p>
        </section>
        <section>
          <h3>Navegació</h3>
          <p class="small"><a href="/">Inici</a><br><a href="/club/">El Club</a><br><a href="/equips/">Equips</a><br><a href="/escoleta/">Escoleta</a><br><a href="/area-privada/">Àrea privada</a></p>
        </section>
        <section>
          <h3>Legal</h3>
          <p class="small"><a href="/legal/politica-privacitat/">Política de privacitat</a><br><a href="/legal/politica-cookies/">Política de cookies</a><br><a href="/legal/avis-legal/">Avís legal</a><br><a href="/club/#codi-etic">Codi ètic</a><br><a href="/legal/registre-menor/">Informació de registre de menors</a></p>
        </section>
      </div>
    </footer>
  `;
}

function renderContactBlocks() {
  document.querySelectorAll('[data-club-contact]').forEach((el) => {
    el.innerHTML = `${CLUB_DATA.adreca} · ${CLUB_DATA.telefon} · ${CLUB_DATA.email}`;
  });

  document.querySelectorAll('[data-club-hours]').forEach((el) => {
    el.textContent = CLUB_DATA.horariGeneral;
  });
}

renderHeader();
renderFooter();
renderContactBlocks();
