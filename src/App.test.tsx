import { render } from "@testing-library/react";
import App from "./App";

test("render base test", () => {
  const { container } = render(<App />);
  const color = "#2C272E";
  expect(container.firstChild).toHaveStyle(`background-color: ${color}`);
});
