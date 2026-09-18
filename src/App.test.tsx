import type { ComponentType } from 'react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
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
    expect(screen.getByRole('region', { name: /galería de control de acceso/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería de comunicación e IT/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería de videovigilancia/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /infraestructura e IT/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería de energía solar/i })).toBeInTheDocument();
    expect(screen.getByText(/Accesos electrónicos sin contacto/i)).toBeInTheDocument();
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
        name: /^Barrera vehicular en un acceso$/i,
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
      expect(screen.getByRole('img', { name, hidden: true })).toHaveAttribute('src', src);
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

  test('provides manual service-specific carousels with active slide feedback', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    const accessCarousel = screen.getByRole('region', { name: /galería de control de acceso/i });
    expect(within(accessCarousel).getByRole('button', { name: /imagen anterior/i })).toBeInTheDocument();
    expect(within(accessCarousel).getByRole('button', { name: /imagen siguiente/i })).toBeInTheDocument();
    expect(within(accessCarousel).getByRole('status')).toHaveAttribute('aria-live', 'polite');
    expect(within(accessCarousel).getByRole('img', { name: /barrera vehicular/i })).toHaveAttribute(
      'loading',
      'eager',
    );

    fireEvent.click(within(accessCarousel).getByRole('button', { name: /imagen siguiente/i }));

    expect(within(accessCarousel).getByRole('status')).toHaveTextContent(/2 de/i);
    expect(within(accessCarousel).getByRole('button', { name: /ver imagen 2 de/i })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(screen.getByRole('region', { name: /galería de comunicación e IT/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería de videovigilancia/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería de energía solar/i })).toBeInTheDocument();
  });

  test('explains Hotel Alert as a local request platform with supported capabilities', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    expect(screen.getByRole('heading', { name: /Hotel Alert/i })).toBeInTheDocument();
    expect(screen.getByText(/plataforma local de solicitudes hoteleras/i)).toBeInTheDocument();
    expect(screen.getByText(/tabletas de habitación/i)).toBeInTheDocument();
    expect(screen.getByText(/room service, alimentos y bebidas, limpieza, toallas, mantenimiento, desayunos y bebidas/i)).toBeInTheDocument();
    expect(screen.getByText(/ROOM, AREA y ADMIN/i)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js, React, TypeScript, SQLite y Socket\.IO/i)).toBeInTheDocument();
    expect(screen.queryByText(/SaaS|cloud|PMS|pagos|100% offline|latencia garantizada/i)).not.toBeInTheDocument();
  });

  test('does not publish unsupported Docker deployment wording', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    expect(screen.getByText(/Node\.js, React, TypeScript, SQLite y Socket\.IO/i)).toBeInTheDocument();
    expect(screen.queryByText(/Docker/i)).not.toBeInTheDocument();
  });

  test('gives carousel indicators a comfortable accessible hit area', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    const carousel = screen.getByRole('region', { name: /galería de control de acceso/i });
    const indicators = within(carousel).getAllByRole('button', { name: /ver imagen/i });

    expect(indicators.length).toBeGreaterThan(1);
    indicators.forEach((indicator) => {
      expect(indicator).toHaveAttribute('type', 'button');
    });

    const styles = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf8');
    const indicatorRule = styles.match(/\.carousel__indicator\s*\{[^}]*}/)?.[0] ?? '';
    const indicatorDotRule = styles.match(/\.carousel__indicator::before\s*\{[^}]*}/)?.[0] ?? '';

    expect(indicatorRule).toMatch(/min-width:\s*44px/);
    expect(indicatorRule).toMatch(/min-height:\s*44px/);
    expect(indicatorDotRule).toMatch(/width:\s*8px/);
    expect(indicatorDotRule).toMatch(/height:\s*8px/);

    indicators[1].focus();
    expect(indicators[1]).toHaveFocus();
    fireEvent.click(indicators[1]);
    expect(within(carousel).getByRole('status')).toHaveTextContent(/2 de/i);
  });

  test('keeps carousel controls keyboard reachable and gives the live region an accessible contract', () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    const carousel = screen.getByRole('region', { name: /galería de energía solar/i });
    expect(carousel).toHaveAttribute('tabindex', '0');

    fireEvent.keyDown(carousel, { key: 'ArrowRight' });

    expect(within(carousel).getByRole('status')).toHaveTextContent(/2 de/i);
    expect(within(carousel).getByRole('button', { name: /imagen anterior/i })).toHaveAttribute('type', 'button');
    expect(within(carousel).getByRole('button', { name: /imagen siguiente/i })).toHaveAttribute('type', 'button');
  });
});
