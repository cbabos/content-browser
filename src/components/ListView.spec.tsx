import { cleanup, render, screen } from "@testing-library/react";
import ListView from "./ListView";
import mockData from '../../mocks/mock.json';

describe("ListView example test", () => {
  afterEach(() => {
    cleanup();
  })

  it("renders heading", () => {
    render(<ListView  content={mockData.results} />);
    expect(screen.getByRole("heading", { name: "PokeList", level: 1 })).toBeInTheDocument();
  });
});