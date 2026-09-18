import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/529848031616';
const BRAND_LOGO_SRC = '/assets/th-empresarial/th-empresarial-logo.png';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Referencia hotelera', href: '#hotel' },
  { label: 'Cómo trabajamos', href: '#approach' },
  { label: 'Confianza', href: '#trust' },
];

interface ServiceAsset {
  category: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const accessAsset: ServiceAsset = {
  category: 'Seguridad electrónica',
  title: 'Accesos sin contacto',
  caption: 'Imagen de referencia del material proporcionado.',
  src: '/assets/th-empresarial/access-control-reference.jpeg',
  alt: 'Accesos electrónicos sin contacto con equipos de control',
  width: 960,
  height: 500,
};

const serviceGallery: readonly ServiceAsset[] = [
  {
    category: 'Control de acceso',
    title: 'Barreras vehiculares',
    caption: 'Acceso vehicular · imagen de referencia.',
    src: '/assets/th-empresarial/vehicle-barrier-access.jpg',
    alt: 'Barrera vehicular en un acceso',
    width: 468,
    height: 585,
  },
  {
    category: 'Comunicación',
    title: 'Videoporteros modulares',
    caption: 'Referencia de producto Hikvision.',
    src: '/assets/th-empresarial/video-doorphones-reference.jpeg',
    alt: 'Videoporteros modulares Hikvision',
    width: 1200,
    height: 984,
  },
  {
    category: 'Videovigilancia',
    title: 'Kit de videovigilancia HD',
    caption: 'Gráfica de producto del material proporcionado.',
    src: '/assets/th-empresarial/video-surveillance-kit.jpg',
    alt: 'Kit de videovigilancia HD',
    width: 2048,
    height: 1152,
  },
  {
    category: 'Infraestructura / IT',
    title: 'Equipo de grabación',
    caption: 'Puertos visibles: audio, alarma, VGA, HDMI, LAN, USB y AC.',
    src: '/assets/th-empresarial/surveillance-recorder.jpg',
    alt: 'Equipo de grabación con puertos de audio, alarma, VGA, HDMI, LAN, USB y AC',
    width: 2016,
    height: 1134,
  },
  {
    category: 'Energía solar',
    title: 'Sistemas solares',
    caption: 'Gráfica de energía solar de TH Empresarial.',
    src: '/assets/th-empresarial/solar-energy-reference.jpg',
    alt: 'Gráfica de energía solar de TH Empresarial',
    width: 640,
    height: 360,
  },
  {
    category: 'Energía solar',
    title: 'Montajes para paneles',
    caption: 'Referencia de montajes solares de aluminio anodizado.',
    src: '/assets/th-empresarial/solar-mounting-reference.jpg',
    alt: 'Montajes solares de aluminio anodizado',
    width: 552,
    height: 516,
  },
];

const serviceRows = [
  {
    number: '01',
    title: 'Control de acceso y barreras',
    description: 'Barreras vehiculares y accesos electrónicos para ordenar entradas, salidas y puntos de control.',
  },
  {
    number: '02',
    title: 'Accesos electrónicos sin contacto',
    description: 'El material proporcionado muestra lectores, controladoras y alternativas biométricas de AccessPRO, Hikvision, Rosslare, ZKTeco, Suprema, Eldes e Idemia.',
  },
  {
    number: '03',
    title: 'Videoporteros',
    description: 'Videoporteros modulares Hikvision para comunicación visual en los accesos.',
  },
  {
    number: '04',
    title: 'Videovigilancia',
    description: 'Kits HD y equipos de grabación para conversar sobre una solución de seguridad electrónica.',
  },
  {
    number: '05',
    title: 'Infraestructura y conectividad',
    description: 'Equipos, cableado y conexiones que ayudan a articular comunicación, IT y seguridad electrónica.',
  },
  {
    number: '06',
    title: 'Comunicación e integración',
    description: 'Una lectura integral de los sistemas para que cada pieza responda al contexto de la operación.',
  },
  {
    number: '07',
    title: 'Energía solar',
    description: 'El material incluye paneles, inversores y referencias de montaje para soluciones de energía solar.',
  },
] as const;

const processSteps = [
  {
    number: '01',
    title: 'Compartir el entorno',
    description: 'Cuéntenos qué necesita resolver: acceso, comunicación, IT, videovigilancia o energía solar.',
  },
  {
    number: '02',
    title: 'Ordenar prioridades',
    description: 'La conversación parte de los espacios, equipos y necesidades que sí importan en su operación.',
  },
  {
    number: '03',
    title: 'Recibir orientación',
    description: 'Use WhatsApp para abrir una conversación concreta sobre el alcance de su proyecto.',
  },
] as const;

function ArrowIcon(): ReactElement {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 18 18" fill="none">
      <path d="M3 15 15 3M6 3h9v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

interface BrandMarkProps {
  loading?: 'eager' | 'lazy';
}

function BrandMark({ loading = 'eager' }: BrandMarkProps): ReactElement {
  return (
    <span className="brand-mark">
      <img
        className="brand-mark__logo"
        src={BRAND_LOGO_SRC}
        alt="Logotipo de TH Empresarial"
        width="400"
        height="400"
        loading={loading}
        decoding="async"
      />
    </span>
  );
}

interface AssetImageProps {
  asset: ServiceAsset;
  className?: string;
  priority?: boolean;
}

function AssetImage({ asset, className, priority = false }: AssetImageProps): ReactElement {
  return (
    <img
      className={className}
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

function ExternalArrow(): ReactElement {
  return <ArrowIcon />;
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
              <ExternalArrow />
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
            <p className="eyebrow">
              <span className="eyebrow__rule" /> Soluciones tecnológicas de la Riviera Maya
            </p>
            <h1 id="hero-title">
              Comunicación, <em>IT</em> y seguridad electrónica.
            </h1>
            <p className="hero__lead">
              TH Empresarial es una empresa integradora de equipos y sistemas de comunicación, IT y seguridad electrónica en la Riviera Maya.
            </p>
            <div className="hero__actions">
              <a className="button button--signal" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Solicitar orientación por WhatsApp <ExternalArrow />
              </a>
              <a className="text-link" href="#services">
                Ver servicios <span>↓</span>
              </a>
            </div>
            <div className="hero__proof" aria-label="Enfoque de servicio">
              <span><b>01</b> Ver lo que se necesita</span>
              <span><b>02</b> Conectar sistemas</span>
              <span><b>03</b> Cuidar la operación</span>
            </div>
          </div>

          <div className="hero__visual">
            <figure className="hero-media">
              <div className="hero-media__image">
                <AssetImage asset={accessAsset} priority />
              </div>
              <figcaption>
                <span>Acceso electrónico / referencia visual</span>
                <span>Referencia visual</span>
              </figcaption>
            </figure>
            <div className="hero-media__brand">
              <img
                src={BRAND_LOGO_SRC}
                alt="Logotipo de TH Empresarial"
                width="400"
                height="400"
                loading="eager"
                decoding="async"
              />
              <div>
                <strong>TH Empresarial</strong>
                <span>Soluciones tecnológicas de la Riviera Maya</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-shell" aria-labelledby="services-title">
          <div className="section-heading section-heading--wide">
            <p className="section-index">01 / Servicios y soluciones</p>
            <h2 id="services-title">
              Una oferta concreta, <em>en imágenes.</em>
            </h2>
            <p>
              El material proporcionado permite reconocer las áreas que TH Empresarial comunica: acceso, videovigilancia, comunicación, infraestructura, IT y energía solar.
            </p>
          </div>

          <div className="services__layout">
            <div className="service-list">
              {serviceRows.map((service) => (
                <article className="service-row" key={service.number}>
                  <span className="service-row__number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-row__mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <aside className="service-note">
              <span className="service-note__label">Criterio de lectura</span>
              <p>La tecnología se entiende mejor cuando se ve en el espacio donde tendrá que funcionar.</p>
              <span className="service-note__line" />
              <span className="service-note__caption">Imágenes de referencia del material proporcionado.</span>
            </aside>
          </div>

          <div className="service-gallery" aria-label="Galería de servicios y productos de referencia">
            {serviceGallery.map((asset, index) => (
              <figure className={`gallery-item gallery-item--${index + 1}`} key={asset.src}>
                <div className="gallery-item__image">
                  <AssetImage asset={asset} />
                </div>
                <figcaption>
                  <span>{asset.category}</span>
                  <strong>{asset.title}</strong>
                  <small>{asset.caption}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="hotel" className="hotel-reference" aria-labelledby="hotel-title">
          <div className="section-shell hotel-reference__inner">
            <div className="hotel-reference__copy">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__rule" /> Referencia de flujo hotelero
              </p>
              <h2 id="hotel-title">
                Cuando la operación necesita <em>un camino claro.</em>
              </h2>
              <p className="hotel-reference__lead">
                Las capturas suministradas muestran un flujo de atención para solicitudes de alimentos y bebidas, room service y otros servicios del área del hotel.
              </p>
              <p className="hotel-reference__note">
                Se presenta como referencia de trabajo, no como un producto propiedad de TH ni como evidencia de una instalación. No publicamos sus datos operativos.
              </p>
              <a className="button button--outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Conversar sobre su operación por WhatsApp <ExternalArrow />
              </a>
            </div>

            <ol className="reference-flow">
              <li>
                <span className="reference-flow__number">01</span>
                <div>
                  <strong>Huésped</strong>
                  <span>Elige una necesidad</span>
                </div>
              </li>
              <li>
                <span className="reference-flow__number">02</span>
                <div>
                  <strong>Servicio</strong>
                  <span>Alimentos, bebidas o room service</span>
                </div>
              </li>
              <li>
                <span className="reference-flow__number">03</span>
                <div>
                  <strong>Equipo</strong>
                  <span>Recibe el contexto para responder</span>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="approach" className="approach-section section-shell" aria-labelledby="approach-title">
          <div className="approach-section__intro">
            <p className="section-index">02 / Cómo iniciar</p>
            <h2 id="approach-title">
              Primero el contexto. <em>Después la tecnología.</em>
            </h2>
            <p>
              Una conversación útil empieza por el lugar, los equipos y la necesidad concreta. Así se evita proponer una solución desconectada de la operación.
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
              </li>
            ))}
          </ol>
        </section>

        <section id="trust" className="trust-section section-shell" aria-labelledby="trust-title">
          <div className="trust-section__header">
            <p className="section-index">03 / Referencias autorizadas</p>
            <h2 id="trust-title">
              Canales para avanzar <em>con certeza.</em>
            </h2>
            <p>
              La identidad comercial de TH Empresarial comunica estas dos referencias. Las marcas pertenecen a sus respectivos propietarios.
            </p>
          </div>

          <div className="partner-grid">
            <article className="partner-card partner-card--syscom">
              <span className="partner-card__index">01</span>
              <strong>SYSCOM</strong>
              <p>Distribuidor autorizado de Syscom</p>
              <a
                href="https://www.syscom.mx/quienes-somos"
                target="_blank"
                rel="noreferrer"
                aria-label="Syscom — referencia oficial"
              >
                Ver referencia oficial <ExternalArrow />
              </a>
            </article>
            <article className="partner-card partner-card--hikvision">
              <span className="partner-card__index">02</span>
              <strong>Hikvision</strong>
              <p>Hikvision Partner</p>
              <a
                href="https://www.hikvision.com/en/Partners/channel-partners/hik-partner-pro/"
                target="_blank"
                rel="noreferrer"
                aria-label="Hikvision Partner — referencia oficial"
              >
                Ver referencia oficial <ExternalArrow />
              </a>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-shell contact-section__inner">
            <div>
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__rule" /> Siguiente paso
              </p>
              <h2 id="contact-title">
                Cuéntenos qué necesita <em>conectar.</em>
              </h2>
              <p>
                Comparta el contexto de su espacio y conversemos sobre comunicación, IT, seguridad electrónica o energía solar.
              </p>
            </div>
            <a className="contact-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <span>Escribir por WhatsApp</span>
              <ExternalArrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell site-footer__inner">
          <BrandMark loading="lazy" />
          <p>Soluciones tecnológicas de la Riviera Maya.</p>
          <p className="site-footer__legal">Imágenes de referencia del material proporcionado. Las marcas pertenecen a sus respectivos propietarios.</p>
          <span className="site-footer__year">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
