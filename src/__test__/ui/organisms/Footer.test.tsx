import { Footer } from "@/ui";
import { render, screen } from "@testing-library/react";

const EMAIL = "hidemichi.shimura@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/hidemichi-shimura";
const COPYRIGHT_TEXT = "© 2024 Hidemimchi Shimura";

describe("Organisms: <Footer />", () => {
  test("renders", () => {
    render(<Footer />);

    expect(screen.queryByRole("contentinfo")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    render(<Footer />);

    expect(screen.queryByRole("contentinfo")).toMatchSnapshot();
  });

  test("has email and linkedin links", () => {
    render(<Footer />);

    const links = screen.queryAllByRole("link");

    links.forEach((link) => {
      const href = link.getAttribute("href");

      if (href?.startsWith("mailto:")) {
        expect(href).toBe(`mailto:${EMAIL}`);
      } else {
        expect(href).toBe(LINKEDIN);
      }
    });
  });

  test("has copyright notice", () => {
    render(<Footer />);

    expect(screen.queryByText(COPYRIGHT_TEXT)).toBeInTheDocument();
  });
});
