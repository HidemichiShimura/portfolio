import { Skills } from "@/ui";
import { screen, render } from "@testing-library/react";

const TITLE_ATTR = "Skills";
const SECTION_TITLE = "SKILLS";

describe("Organisms: <Skills />", () => {
  test("render", () => {
    render(<Skills />);

    expect(screen.getByTitle(TITLE_ATTR)).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    render(<Skills />);

    expect(screen.getByTitle(TITLE_ATTR)).toMatchSnapshot();
  });

  test("contains a section title", () => {
    render(<Skills />);

    expect(screen.queryByRole("heading")).toBeInTheDocument();
  });

  test("displays the correct section title", () => {
    render(<Skills />);

    expect(screen.queryByRole("heading")?.textContent).toBe(SECTION_TITLE);
  });
});
