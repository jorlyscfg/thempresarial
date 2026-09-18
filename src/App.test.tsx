import type { ComponentType } from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

type AppModule = {
  default: ComponentType;
};

const appModules = import.meta.glob('./App.tsx', { eager: true }) as Record<string, AppModule>;

const loadApp = (): ComponentType | null => {
  return appModules['./App.tsx']?.default ?? null;
};

afterEach(cleanup);

describe('TH Empresarial landing page', () => {
  test('presents an evidence-led service offer and conversion path', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /comunicación, IT y seguridad electrónica/i,
    );
    expect(
      screen.getByText(/empresa integradora de equipos y sistemas de comunicación, IT y seguridad electrónica/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /control de acceso y barreras/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /videoporteros/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /videovigilancia/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /infraestructura y conectividad/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /energía solar/i })).toBeInTheDocument();
    expect(screen.getByText(/Acceso electrónico \/ referencia visual/i)).toBeInTheDocument();
    expect(screen.getAllByText(/alimentos y bebidas/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/room service/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Distribuidor autorizado de Syscom/i)).toBeInTheDocument();
    expect(screen.getByText(/Hikvision Partner/i)).toBeInTheDocument();

    const whatsappLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(whatsappLinks.length).toBeGreaterThanOrEqual(4);
    whatsappLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://wa.me/529848031616');
    });

    expect(screen.getByRole('link', { name: /Syscom/i })).toHaveAttribute(
      'href',
      'https://www.syscom.mx/quienes-somos',
    );
    expect(screen.getByRole('link', { name: /Hikvision Partner/i })).toHaveAttribute(
      'href',
      'https://www.hikvision.com/en/Partners/channel-partners/hik-partner-pro/',
    );
  });

  test('uses the authentic logo and the supplied service imagery', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    const logos = screen.getAllByRole('img', { name: 'Logotipo de TH Empresarial' });
    expect(logos.length).toBeGreaterThanOrEqual(2);
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', '/assets/th-empresarial/th-empresarial-logo.png');
    });

    const suppliedAssets = [
      {
        name: /accesos electrónicos sin contacto/i,
        src: '/assets/th-empresarial/access-control-reference.jpeg',
      },
      {
        name: /videoporteros modulares Hikvision/i,
        src: '/assets/th-empresarial/video-doorphones-reference.jpeg',
      },
      {
        name: /kit de videovigilancia HD/i,
        src: '/assets/th-empresarial/video-surveillance-kit.jpg',
      },
      {
        name: /barrera vehicular/i,
        src: '/assets/th-empresarial/vehicle-barrier-access.jpg',
      },
      {
        name: /equipo de grabación/i,
        src: '/assets/th-empresarial/surveillance-recorder.jpg',
      },
      {
        name: /gráfica de energía solar/i,
        src: '/assets/th-empresarial/solar-energy-reference.jpg',
      },
      {
        name: /montajes solares/i,
        src: '/assets/th-empresarial/solar-mounting-reference.jpg',
      },
    ];

    suppliedAssets.forEach(({ name, src }) => {
      expect(screen.getByRole('img', { name })).toHaveAttribute('src', src);
    });
  });

  test('does not publish the fabricated console or operational metrics', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    expect(
      screen.queryByText(/TH\s*\/\s*HOTEL SIGNAL|Signal 01|Signal \/ 03|active requests|request flow|ROOM CONSOLE|304|208|Sistema conectado/i),
    ).not.toBeInTheDocument();
  });

  test('opens and closes the mobile navigation from its accessible button', async () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    const menuButton = screen.getByRole('button', { name: /abrir menú/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: /navegación principal/i })).toHaveAttribute(
      'data-open',
      'true',
    );

    fireEvent.click(screen.getByRole('button', { name: /cerrar menú/i }));

    expect(screen.getByRole('button', { name: /abrir menú/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
