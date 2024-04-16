import { Works } from "@/ui";
import { screen, render } from "@testing-library/react";

const TITLE_ATTR = "Works";
const SECTION_TITLE = "WORKS";

describe("Organisms: <Works />", () => {
  test("renders", () => {
    render(<Works />);

    expect(screen.getByTitle(TITLE_ATTR)).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    render(<Works />);

    expect(screen.getByTitle(TITLE_ATTR)).toMatchSnapshot();
  });

  test("contains a section title", () => {
    render(<Works />);

    expect(screen.queryByRole("heading")).toBeInTheDocument();
  });

  test("displays the correct section title", () => {
    render(<Works />);

    expect(screen.queryByRole("heading")?.textContent).toBe(SECTION_TITLE);
  });
});
