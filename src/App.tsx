import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/529848031616';

const navItems = [
  { label: 'Capacidades', href: '#capabilities' },
  { label: 'Plataforma hotelera', href: '#platform' },
  { label: 'Cómo trabajamos', href: '#approach' },
  { label: 'Confianza', href: '#trust' },
];

const capabilities = [
  {
    number: '01',
    title: 'Comunicaciones',
    description: 'Equipos y sistemas que mantienen conectadas las conversaciones de la operación.',
    type: 'communication' as const,
  },
  {
    number: '02',
    title: 'IT',
    description: 'Infraestructura tecnológica pensada para acompañar el ritmo real de cada espacio.',
    type: 'it' as const,
  },
  {
    number: '03',
    title: 'Seguridad electrónica',
    description: 'Capas de protección integradas con criterio, continuidad y atención al entorno.',
    type: 'security' as const,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Entender el entorno',
    description: 'Escuchamos cómo se mueve la operación antes de proponer tecnología.',
  },
  {
    number: '02',
    title: 'Diseñar la conexión',
    description: 'Traducimos necesidades concretas en una solución integral y legible.',
  },
  {
    number: '03',
    title: 'Acompañar la operación',
    description: 'Dejamos una base clara para que sus equipos puedan trabajar con confianza.',
  },
];

function ArrowIcon(): ReactElement {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 18 18" fill="none">
      <path d="M3 15 15 3M6 3h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

function BrandMark(): ReactElement {
  return (
    <span className="brand-mark" aria-label="TH Empresarial">
      <span className="brand-mark__symbol">TH</span>
      <span className="brand-mark__name">Empresarial</span>
    </span>
  );
}

function SignalConsole(): ReactElement {
  return (
    <div className="console-stage" role="img" aria-label="Consola visual para gestionar solicitudes de una habitación de hotel">
      <span className="console-orbit console-orbit--outer" />
      <span className="console-orbit console-orbit--inner" />
      <span className="console-crosshair console-crosshair--top" />
      <span className="console-crosshair console-crosshair--side" />

      <div className="signal-console">
        <div className="console-frame">
          <div className="console-frame__rail" />
          <div className="console-header">
            <span className="console-header__brand">TH / HOTEL SIGNAL</span>
            <span className="console-header__status"><i /> Sistema conectado</span>
          </div>

          <div className="console-screen">
            <div className="console-screen__topline">
              <span>ROOM CONSOLE</span>
              <span>304 / SUITE</span>
            </div>
            <div className="console-screen__main">
              <div className="room-identity">
                <span className="room-identity__eyebrow">GUEST SIGNAL</span>
                <strong>304</strong>
                <span>Solicitud en curso</span>
              </div>
              <div className="console-pulse" aria-hidden="true">
                <span className="console-pulse__core" />
                <span className="console-pulse__ring console-pulse__ring--one" />
                <span className="console-pulse__ring console-pulse__ring--two" />
              </div>
            </div>
            <div className="console-route" aria-hidden="true">
              <span className="console-route__line console-route__line--one" />
              <span className="console-route__line console-route__line--two" />
              <span className="console-route__line console-route__line--three" />
              <span className="console-node console-node--guest" />
              <span className="console-node console-node--platform" />
              <span className="console-node console-node--team" />
            </div>
            <div className="console-screen__footer">
              <span>GUEST</span>
              <span>PLATFORM</span>
              <span>TEAM</span>
            </div>
          </div>

          <div className="console-requests">
            <span className="console-requests__label">ACTIVE REQUESTS</span>
            <div className="console-request">
              <span className="console-request__signal" />
              <span>Servicio de habitación</span>
              <span className="console-request__room">304</span>
            </div>
            <div className="console-request console-request--muted">
              <span className="console-request__signal" />
              <span>Alimentos y bebidas</span>
              <span className="console-request__room">208</span>
            </div>
          </div>
        </div>

        <div className="console-label console-label--top">
          <span className="console-label__index">SIGNAL / 01</span>
          <strong>La habitación<br />también comunica.</strong>
        </div>
        <div className="console-label console-label--bottom">
          <span className="console-label__dot" />
          <span>Request flow / live</span>
        </div>
      </div>
    </div>
  );
}

type CapabilityType = 'communication' | 'it' | 'security';

interface CapabilityGlyphProps {
  type: CapabilityType;
}

function CapabilityGlyph({ type }: CapabilityGlyphProps): ReactElement {
  if (type === 'communication') {
    return (
      <svg aria-hidden="true" className="capability-glyph" viewBox="0 0 48 48" fill="none">
        <path d="M24 11v26M14 17v14M34 17v14M8 22v4M40 22v4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (type === 'it') {
    return (
      <svg aria-hidden="true" className="capability-glyph" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="12" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M18 36h12M24 30v6M16 18h16M16 23h7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="capability-glyph" viewBox="0 0 48 48" fill="none">
      <path d="M24 9 37 14v9c0 8-5.4 13.1-13 16-7.6-2.9-13-8-13-16v-9l13-5Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m18 24 4 4 8-9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function App(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);
  const toggleMenu = (): void => setIsMenuOpen((open) => !open);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-link" href="#top" onClick={closeMenu}>
            <BrandMark />
          </a>

          <nav
            id="primary-navigation"
            className="primary-navigation"
            aria-label="Navegación principal"
            data-open={isMenuOpen}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <ArrowIcon />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-controls="primary-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={toggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__rule" /> Integración tecnológica / Riviera Maya</p>
            <h1 id="hero-title">Más <em>claridad</em><br /> para cada operación.</h1>
            <p className="hero__lead">
              Conectamos comunicación, IT y seguridad electrónica para que la experiencia del huésped y el trabajo de sus equipos fluyan mejor.
            </p>
            <div className="hero__actions">
              <a className="button button--signal" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Hablar por WhatsApp <ArrowIcon />
              </a>
              <a className="text-link" href="#platform">
                Ver la plataforma <span>↓</span>
              </a>
            </div>
            <div className="hero__index" aria-label="Áreas de integración">
              <span><b>01</b> Comunicación</span>
              <span><b>02</b> IT</span>
              <span><b>03</b> Seguridad</span>
            </div>
          </div>

          <div className="hero__visual">
            <SignalConsole />
          </div>

          <div className="hero__side-note">Tecnología que se siente<br /><strong>en cada detalle.</strong></div>
          <div className="hero__scroll-note"><span /> Desplazar para explorar</div>
        </section>

        <section id="capabilities" className="capabilities section-shell" aria-labelledby="capabilities-title">
          <div className="section-intro">
            <p className="section-index">02 / Capacidades integrales</p>
            <h2 id="capabilities-title">Una lectura<br /><em>completa</em> del entorno.</h2>
            <p>
              La solución correcta no vive en una sola caja. Vive en cómo las piezas se entienden entre sí.
            </p>
          </div>

          <div className="capabilities__body">
            <div className="capability-list">
              {capabilities.map((capability) => (
                <article className="capability-row" key={capability.number}>
                  <span className="capability-row__number">{capability.number}</span>
                  <CapabilityGlyph type={capability.type} />
                  <div className="capability-row__copy">
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                  <span className="capability-row__arrow"><ArrowIcon /></span>
                </article>
              ))}
            </div>

            <aside className="capabilities__aside">
              <span className="aside-tag">TH / SYSTEM NOTE</span>
              <p>Diseñamos tecnología con el contexto de la operación siempre a la vista.</p>
              <span className="aside-line" />
              <span className="aside-coordinate">Riviera Maya / Hospitality</span>
            </aside>
          </div>
        </section>

        <section id="platform" className="platform-section" aria-labelledby="platform-title">
          <div className="section-shell platform-section__inner">
            <div className="platform-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__rule" /> Plataforma hotelera / Signal 01</p>
              <h2 id="platform-title">Comunicación para hoteles, <em>sin fricción.</em></h2>
              <p className="platform-copy__lead">
                Una plataforma que convierte la pantalla en la habitación en un punto de servicio claro para el huésped y para cada equipo del hotel.
              </p>
              <p className="platform-copy__detail">
                Desde alimentos y bebidas hasta room service y otros servicios del área del hotel, cada solicitud encuentra un camino visible.
              </p>
              <a className="button button--outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Conocer la plataforma por WhatsApp <ArrowIcon />
              </a>
            </div>

            <div className="platform-board" role="img" aria-label="Flujo de solicitud desde la habitación hasta el equipo del hotel">
              <div className="platform-board__topline">
                <span>ROOM / REQUEST FLOW</span>
                <span><i /> ACTIVE</span>
              </div>
              <div className="platform-screen">
                <div className="platform-screen__header">
                  <span className="platform-screen__mark">TH</span>
                  <span>Guest interface</span>
                  <span className="platform-screen__room">304</span>
                </div>
                <div className="platform-screen__body">
                  <span className="platform-screen__eyebrow">Solicitud enviada desde habitación</span>
                  <strong>¿Qué necesitas?</strong>
                  <div className="request-chips">
                    <span>Alimentos y bebidas</span>
                    <span>Room service</span>
                    <span>Otros servicios</span>
                  </div>
                </div>
                <div className="platform-screen__footer">
                  <span className="platform-screen__status"><i /> Enrutada al equipo</span>
                  <span>02 / 03</span>
                </div>
              </div>
              <div className="platform-flow">
                <div className="platform-flow__step">
                  <span className="platform-flow__node">01</span>
                  <strong>Huésped</strong>
                  <span>Solicita</span>
                </div>
                <span className="platform-flow__connector" aria-hidden="true" />
                <div className="platform-flow__step platform-flow__step--active">
                  <span className="platform-flow__node">02</span>
                  <strong>Plataforma</strong>
                  <span>Ordena</span>
                </div>
                <span className="platform-flow__connector" aria-hidden="true" />
                <div className="platform-flow__step">
                  <span className="platform-flow__node">03</span>
                  <strong>Equipo</strong>
                  <span>Responde</span>
                </div>
              </div>
              <span className="platform-board__corner platform-board__corner--one" />
              <span className="platform-board__corner platform-board__corner--two" />
            </div>
          </div>
        </section>

        <section id="trust" className="trust-section section-shell" aria-labelledby="trust-title">
          <div className="trust-section__header">
            <p className="section-index">04 / Confianza de canal</p>
            <h2 id="trust-title">Respaldo para<br /><em>avanzar</em> con certeza.</h2>
            <p>Trabajamos con referencias de canal reconocidas para acercar tecnología confiable a la operación.</p>
          </div>

          <div className="partner-grid">
            <article className="partner-card partner-card--syscom">
              <div className="partner-card__topline"><span>CHANNEL REFERENCE / 01</span><span>MX</span></div>
              <div className="partner-card__lockup">SYSCOM</div>
              <p>Distribuidor autorizado de Syscom</p>
              <a href="https://www.syscom.mx/quienes-somos" target="_blank" rel="noreferrer" aria-label="Syscom — quiénes somos">
                Ver referencia oficial <ArrowIcon />
              </a>
            </article>
            <article className="partner-card partner-card--hikvision">
              <div className="partner-card__topline"><span>CHANNEL REFERENCE / 02</span><span>GLOBAL</span></div>
              <div className="partner-card__lockup">Hikvision</div>
              <p>Hikvision Partner</p>
              <a
                href="https://www.hikvision.com/en/Partners/channel-partners/hik-partner-pro/"
                target="_blank"
                rel="noreferrer"
                aria-label="Hikvision Partner — sitio oficial"
              >
                Ver referencia oficial <ArrowIcon />
              </a>
            </article>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-title">
          <div className="section-shell approach-section__inner">
            <div className="approach-section__intro">
              <p className="section-index">05 / Cómo trabajamos</p>
              <h2 id="approach-title">La tecnología debe sentirse <em>clara.</em></h2>
              <p>
                Un buen sistema no añade ruido a la operación. Hace más visible lo importante y deja espacio para atender mejor.
              </p>
            </div>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li className="process-step" key={step.number}>
                  <span className="process-step__number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span className="process-step__mark">+</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-shell contact-section__inner">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__rule" /> Siguiente señal / Hablemos</p>
              <h2 id="contact-title">Hagamos que la operación<br /><em>se sienta conectada.</em></h2>
            </div>
            <a className="contact-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span>Iniciar conversación por WhatsApp</span>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__inner">
          <BrandMark />
          <p>Integración tecnológica para la Riviera Maya.</p>
          <p className="site-footer__legal">Las marcas mencionadas pertenecen a sus respectivos propietarios.</p>
          <span className="site-footer__year">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
