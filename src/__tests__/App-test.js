import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

it("App displays header", async () => {
  render(<App />);

  const header = await screen.findByText(/Student Self-Service/);
  expect(header).toBeInTheDocument();
});
