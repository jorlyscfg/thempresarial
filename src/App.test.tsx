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
  test('presents the hospitality offer, conversion path, and partner proof', async () => {
    const App = loadApp();

    expect(App).not.toBeNull();
    if (!App) return;

    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/claridad/i);
    expect(screen.getByRole('heading', { name: /comunicación para hoteles/i })).toBeInTheDocument();
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
