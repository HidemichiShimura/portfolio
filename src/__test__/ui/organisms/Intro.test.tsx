import { Intro } from "@/ui";
import { screen, render } from "@testing-library/react";

const TEXT =
  "I am a self-taught web developer with a strong background in modern frontend and backend skills with experiences as a system admin for servers and networks. I have a strong passion for problem-solving and am always eager to assist my team members. I thrive in fast-paced environments with new challenges. Mutual assistance is my top priority.";

describe("Organisms: <Intro />", () => {
  test("renders", () => {
    render(<Intro />);

    expect(screen.queryByTitle("Intro")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    render(<Intro />);

    expect(screen.queryByTitle("Intro")).toMatchSnapshot();
  });

  test("displays my description text", () => {
    render(<Intro />);

    expect(screen.queryByText(TEXT)).toBeInTheDocument();
  });
});
