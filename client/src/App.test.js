import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders oauth heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /hello oauth/i });
  expect(heading).toBeInTheDocument();
});
