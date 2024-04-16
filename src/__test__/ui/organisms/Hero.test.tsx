import { Hero } from "@/ui";
import { screen, render } from "@testing-library/react";

const NAME = "Hidemichi Shimura";
const POSITION = "Web Developer";
const DESCRIPTION = "Challenge Seeker";

describe("Organisms: <Hero />", () => {
  test("renders", () => {
    render(<Hero />);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    render(<Hero />);

    expect(screen.getByTestId("hero")).toMatchSnapshot();
  });

  test("displays my name", () => {
    render(<Hero />);

    expect(screen.queryByText(NAME)).toBeInTheDocument();
  });

  test("displays my positon", () => {
    render(<Hero />);

    expect(screen.queryByText(POSITION)).toBeInTheDocument();
  });

  test("displays my description", () => {
    render(<Hero />);

    expect(screen.queryByText(DESCRIPTION)).toBeInTheDocument();
  });
});
