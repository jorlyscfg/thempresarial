import type { KeyboardEvent, ReactElement } from 'react';
import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/529848031616';
const BRAND_LOGO_SRC = '/assets/th-empresarial/th-empresarial-logo.png';

const navItems = [
  { label: 'Servicios', href: '#services' },
  { label: 'Hotel Alert', href: '#hotel' },
  { label: 'Cómo trabajamos', href: '#approach' },
  { label: 'Confianza', href: '#trust' },
];

interface ServiceAsset {
  title: string;
  caption: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServiceCarouselDefinition {
  id: string;
  number: string;
  title: string;
  description: string;
  tone: 'blue' | 'sky' | 'yellow' | 'ink';
  assets: readonly ServiceAsset[];
}

const serviceCarousels: readonly ServiceCarouselDefinition[] = [
  {
    id: 'access',
    number: '01',
    title: 'Control de acceso',
    description: 'Barreras, lectores y referencias de identificación para ordenar entradas, salidas y puntos de control.',
    tone: 'blue',
    assets: [
      {
        title: 'Barrera vehicular en un acceso',
        caption: 'Imagen de referencia · instalación de barrera vehicular.',
        src: '/assets/th-empresarial/vehicle-barrier-access.jpg',
        alt: 'Barrera vehicular en un acceso',
        width: 468,
        height: 585,
      },
      {
        title: 'Accesos electrónicos sin contacto',
        caption: 'Imagen de referencia del material proporcionado.',
        src: '/assets/th-empresarial/access-control-reference.jpeg',
        alt: 'Accesos electrónicos sin contacto con equipos de control',
        width: 960,
        height: 500,
      },
      {
        title: 'Barreras vehiculares CAME',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/barrier-came-reference.jpg',
        alt: 'Gráfica de barreras vehiculares CAME',
        width: 1200,
        height: 880,
      },
      {
        title: 'Barrera en poste de acceso',
        caption: 'Imagen de referencia · control vehicular instalado.',
        src: '/assets/th-empresarial/barrier-sensor-installation.jpg',
        alt: 'Barrera vehicular instalada en un poste de acceso',
        width: 960,
        height: 1280,
      },
      {
        title: 'Barrera vehicular instalada',
        caption: 'Imagen de referencia · componente instalado en sitio.',
        src: '/assets/th-empresarial/barrier-installation-detail.jpg',
        alt: 'Detalle de una barrera vehicular instalada',
        width: 648,
        height: 810,
      },
      {
        title: 'Acceso vehicular en vialidad',
        caption: 'Imagen de referencia · barrera en un carril de acceso.',
        src: '/assets/th-empresarial/barrier-lane-installation.jpg',
        alt: 'Barrera vehicular instalada en un carril de acceso',
        width: 894,
        height: 468,
      },
      {
        title: 'Reconocimiento facial sin contacto',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/facial-recognition-reference.jpg',
        alt: 'Gráfica de reconocimiento facial sin contacto',
        width: 600,
        height: 460,
      },
      {
        title: 'Gabinetes de barrera vehicular',
        caption: 'Imagen de referencia · componentes durante una instalación.',
        src: '/assets/th-empresarial/barrier-cabinet-installation.jpg',
        alt: 'Gabinetes de barrera vehicular durante una instalación',
        width: 894,
        height: 468,
      },
    ],
  },
  {
    id: 'communication',
    number: '02',
    title: 'Comunicación e IT',
    description: 'Videoporteros, equipos y conexiones que ayudan a articular comunicación, infraestructura y operación.',
    tone: 'sky',
    assets: [
      {
        title: 'Videoporteros modulares',
        caption: 'Referencia de producto Hikvision.',
        src: '/assets/th-empresarial/video-doorphones-reference.jpeg',
        alt: 'Videoporteros modulares Hikvision',
        width: 1200,
        height: 984,
      },
      {
        title: 'Equipos para infraestructura',
        caption: 'Imagen de referencia · equipos disponibles en punto de venta.',
        src: '/assets/th-empresarial/equipment-counter-reference.jpg',
        alt: 'Equipos de comunicación e infraestructura en punto de venta',
        width: 2016,
        height: 1512,
      },
      {
        title: 'Panel de control instalado',
        caption: 'Imagen de referencia · panel y cableado de una instalación.',
        src: '/assets/th-empresarial/security-panel-installation.jpg',
        alt: 'Panel de control y cableado instalado',
        width: 2048,
        height: 1152,
      },
    ],
  },
  {
    id: 'surveillance',
    number: '03',
    title: 'Videovigilancia',
    description: 'Kits, cámaras y equipos de grabación presentados como referencias para conversar sobre seguridad electrónica.',
    tone: 'ink',
    assets: [
      {
        title: 'Kit de videovigilancia HD',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/video-surveillance-kit.jpg',
        alt: 'Kit de videovigilancia HD',
        width: 1200,
        height: 1012,
      },
      {
        title: 'Equipo de grabación',
        caption: 'Puertos visibles: audio, alarma, VGA, HDMI, LAN, USB y AC.',
        src: '/assets/th-empresarial/surveillance-recorder.jpg',
        alt: 'Equipo de grabación con puertos de audio, alarma, VGA, HDMI, LAN, USB y AC',
        width: 2016,
        height: 1134,
      },
      {
        title: 'Seguridad al alcance de sus manos',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/ezviz-surveillance-reference.jpeg',
        alt: 'Gráfica de cámaras de videovigilancia EZVIZ',
        width: 940,
        height: 788,
      },
      {
        title: 'Cámara solar con alertas de voz',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/solar-camera-reference.jpeg',
        alt: 'Cámara de seguridad solar con alertas de voz',
        width: 924,
        height: 788,
      },
      {
        title: 'Cámaras de videovigilancia',
        caption: 'Gráfica de producto del material proporcionado.',
        src: '/assets/th-empresarial/camera-security-reference.jpeg',
        alt: 'Gráfica de cámaras de videovigilancia',
        width: 924,
        height: 788,
      },
      {
        title: 'Cámara C6T',
        caption: 'Ficha de producto del material proporcionado.',
        src: '/assets/th-empresarial/c6t-camera-reference.jpeg',
        alt: 'Ficha de producto de una cámara C6T',
        width: 940,
        height: 788,
      },
    ],
  },
  {
    id: 'solar',
    number: '04',
    title: 'Energía solar',
    description: 'Paneles, inversores, montajes y una instalación de referencia para revisar posibilidades de energía solar.',
    tone: 'yellow',
    assets: [
      {
        title: 'Energía solar',
        caption: 'Gráfica de energía solar de TH Empresarial.',
        src: '/assets/th-empresarial/solar-energy-reference.jpg',
        alt: 'Gráfica de energía solar de TH Empresarial',
        width: 640,
        height: 360,
      },
      {
        title: 'Montajes solares',
        caption: 'Referencia de montajes solares de aluminio anodizado.',
        src: '/assets/th-empresarial/solar-mounting-reference.jpg',
        alt: 'Montajes solares de aluminio anodizado',
        width: 552,
        height: 516,
      },
      {
        title: 'Instalación de panel solar',
        caption: 'Imagen de referencia · instalación de panel solar en poste.',
        src: '/assets/th-empresarial/solar-installation.jpg',
        alt: 'Instalación de un panel solar en un poste',
        width: 648,
        height: 810,
      },
    ],
  },
];

const capabilityRows = [
  {
    number: '01',
    title: 'Comunicaciones',
    description: 'Videoporteros y equipos para mantener claros los puntos de comunicación.',
  },
  {
    number: '02',
    title: 'Infraestructura e IT',
    description: 'Equipos, conexiones y cableado considerados dentro del contexto operativo.',
  },
  {
    number: '03',
    title: 'Control de acceso',
    description: 'Barreras, lectores y referencias de identificación para entradas y salidas.',
  },
  {
    number: '04',
    title: 'Seguridad electrónica',
    description: 'Videovigilancia y grabación como parte de una conversación de seguridad.',
  },
  {
    number: '05',
    title: 'Energía solar',
    description: 'Paneles, inversores y montajes solares para evaluar el siguiente paso.',
  },
  {
    number: '06',
    title: 'Operación hotelera',
    description: 'Hotel Alert como referencia de flujo local entre huéspedes y equipos operativos.',
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

interface ServiceCarouselProps {
  service: ServiceCarouselDefinition;
}

function ServiceCarousel({ service }: ServiceCarouselProps): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAsset = service.assets[activeIndex];
  const stageId = `${service.id}-carousel-stage`;

  const moveSlide = (direction: number): void => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0) return service.assets.length - 1;
      if (nextIndex >= service.assets.length) return 0;
      return nextIndex;
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveSlide(-1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveSlide(1);
    }
  };

  return (
    <section
      className={`service-carousel service-carousel--${service.tone}`}
      aria-label={`Galería de ${service.title}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="service-carousel__header">
        <span className="service-carousel__number">{service.number}</span>
        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>

      <div className="carousel__stage" id={stageId} aria-live="polite">
        {service.assets.map((asset, index) => (
          <figure
            className={`carousel__slide${index === activeIndex ? ' is-active' : ''}`}
            key={asset.src}
            aria-hidden={index === activeIndex ? undefined : true}
          >
            <div className="carousel__image-frame">
              <AssetImage asset={asset} priority={index === activeIndex} />
            </div>
            <figcaption>
              <span>Imagen de referencia</span>
              <strong>{asset.title}</strong>
              <small>{asset.caption}</small>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="carousel__footer">
        <div className="carousel__controls">
          <button
            type="button"
            className="carousel__control"
            aria-label={`Imagen anterior de ${service.title}`}
            aria-controls={stageId}
            onClick={() => moveSlide(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="carousel__control"
            aria-label={`Imagen siguiente de ${service.title}`}
            aria-controls={stageId}
            onClick={() => moveSlide(1)}
          >
            →
          </button>
        </div>

        <div className="carousel__status" role="status" aria-live="polite" aria-atomic="true">
          Imagen {activeIndex + 1} de {service.assets.length}: {activeAsset.title}
        </div>

        <div className="carousel__indicators" aria-label={`Imágenes de ${service.title}`}>
          {service.assets.map((asset, index) => (
            <button
              type="button"
              className="carousel__indicator"
              key={asset.src}
              aria-label={`Ver imagen ${index + 1} de ${service.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalArrow(): ReactElement {
  return <ArrowIcon />;
}

function App(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: globalThis.KeyboardEvent): void => {
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
        <div className="site-header__inner section-shell">
          <a className="brand-link" href="#top" onClick={closeMenu}>
            <BrandMark />
            <span className="brand-link__text">
              <strong>TH Empresarial</strong>
              <span>Soluciones tecnológicas</span>
            </span>
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
              WhatsApp <ExternalArrow />
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
              <span className="eyebrow__rule" /> Riviera Maya · integración tecnológica
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
          </div>

          <div className="hero__side" aria-label="Áreas de integración">
            <div className="hero__brand-panel">
              <BrandMark />
              <div>
                <span className="hero__panel-label">TH / 01</span>
                <strong>Ver. Conectar. Resolver.</strong>
                <span>Una lectura integral de cada espacio.</span>
              </div>
            </div>
            <ul className="hero__index-list">
              <li><span>01</span> Comunicación</li>
              <li><span>02</span> Infraestructura e IT</li>
              <li><span>03</span> Seguridad electrónica</li>
              <li><span>04</span> Energía solar</li>
            </ul>
          </div>
        </section>

        <section id="services" className="services section-shell" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-index"><span className="index-marker" /> 01 / Servicios</p>
            <div>
              <h2 id="services-title">
                Una oferta concreta, <em>en imágenes.</em>
              </h2>
              <p className="section-heading__lead">
                Material de referencia para reconocer las áreas que TH Empresarial comunica y conversar sobre el contexto real de cada proyecto.
              </p>
            </div>
          </div>

          <div className="capability-grid" aria-label="Capacidades integrales">
            {capabilityRows.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>

          <div className="service-carousels">
            {serviceCarousels.map((service) => (
              <ServiceCarousel key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section id="hotel" className="hotel-alert" aria-labelledby="hotel-title">
          <div className="section-shell">
            <div className="hotel-alert__topline">
              <p className="section-index section-index--light"><span className="index-marker" /> 02 / Operación hotelera</p>
              <span className="reference-label">Referencia funcional</span>
            </div>

            <div className="hotel-alert__grid">
              <div className="hotel-alert__copy">
                <h2 id="hotel-title">
                  Hotel Alert: <em>un camino claro</em> para cada solicitud.
                </h2>
                <p className="hotel-alert__lead">
                  Hotel Alert es una plataforma local de solicitudes hoteleras que conecta tabletas de habitación con equipos operativos.
                </p>
                <p>
                  Las solicitudes pueden abarcar room service, alimentos y bebidas, limpieza, toallas, mantenimiento, desayunos y bebidas.
                </p>
                <a className="button button--outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Conversar sobre Hotel Alert por WhatsApp <ExternalArrow />
                </a>
              </div>

              <div className="hotel-alert__details">
                <ol className="hotel-flow">
                  <li>
                    <span>ROOM</span>
                    <div>
                      <strong>El huésped solicita</strong>
                      <p>La tableta de habitación presenta un catálogo configurable para elegir una necesidad.</p>
                    </div>
                  </li>
                  <li>
                    <span>AREA</span>
                    <div>
                      <strong>El equipo recibe contexto</strong>
                      <p>La solicitud se enruta por área y muestra estados explícitos para orientar el avance.</p>
                    </div>
                  </li>
                  <li>
                    <span>ADMIN</span>
                    <div>
                      <strong>La operación conserva historial</strong>
                      <p>El registro auditable, la sincronización en tiempo real y la recuperación ante interrupciones mantienen el hilo de trabajo.</p>
                    </div>
                  </li>
                </ol>

                <div className="hotel-alert__capabilities">
                  <span>Vistas ROOM, AREA y ADMIN</span>
                  <span>Catálogos configurables</span>
                  <span>Estados explícitos</span>
                  <span>Historial auditable</span>
                </div>
              </div>
            </div>

            <div className="hotel-alert__technical">
              <span className="hotel-alert__technical-label">Despliegue local de referencia</span>
              <p>Node.js, React, TypeScript, SQLite y Socket.IO.</p>
              <small>Se presenta como referencia funcional, no como evidencia de una instalación específica.</small>
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section section-shell" aria-labelledby="approach-title">
          <div className="approach-section__intro">
            <p className="section-index"><span className="index-marker" /> 03 / Cómo iniciar</p>
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
            <p className="section-index"><span className="index-marker" /> 04 / Confianza</p>
            <h2 id="trust-title">
              Referencias para avanzar <em>con certeza.</em>
            </h2>
            <p>
              La identidad comercial comunica estas dos referencias autorizadas. Las marcas pertenecen a sus respectivos propietarios.
            </p>
          </div>

          <div className="partner-grid">
            <article className="partner-card partner-card--syscom">
              <span className="partner-card__index">01</span>
              <strong>SYSCOM</strong>
              <p>Distribuidor autorizado de Syscom</p>
              <a href="https://www.syscom.mx/quienes-somos" target="_blank" rel="noreferrer" aria-label="Syscom — referencia oficial">
                Ver referencia oficial <ExternalArrow />
              </a>
            </article>
            <article className="partner-card partner-card--hikvision">
              <span className="partner-card__index">02</span>
              <strong>Hikvision</strong>
              <p>Hikvision Partner</p>
              <a href="https://www.hikvision.com/en/Partners/channel-partners/hik-partner-pro/" target="_blank" rel="noreferrer" aria-label="Hikvision Partner — referencia oficial">
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
                Comparta el contexto de su espacio y conversemos sobre comunicación, IT, seguridad electrónica, energía solar u operación hotelera.
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
          <p>TH Empresarial · Soluciones tecnológicas de la Riviera Maya.</p>
          <p className="site-footer__legal">Imágenes de referencia del material proporcionado. Las marcas pertenecen a sus respectivos propietarios.</p>
          <span className="site-footer__year">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
