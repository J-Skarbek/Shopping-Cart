import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../src/components/customButton";

describe("CustomButton", () => {
  it('should render a button with the text of "Test Mock Callback"', () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole('button', { name: 'Test Mock Callback'});

    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'Test Mock Callback'});

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it ('should not call the onClick function when it is not clicked', async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });

})
