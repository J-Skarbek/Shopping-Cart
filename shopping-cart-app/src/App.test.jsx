import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from 'vitest';
import App from './App';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: 'Main Page Heading' }).textContent).toMatch(/main page heading/i);
  });
});

describe('Footer Changes', () => {
  it('renders magnificent monkeys', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('renders radical rhions after button clicked', async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole('button', { name: 'Testing click Events' });

    await user.click(button);

    expect(screen.getByRole('heading', { name: 'Magnificent Monkeys' }).textContent).toMatch(/radical rhinos/i);
  });
})