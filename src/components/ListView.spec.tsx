import { render, screen } from "@testing-library/react";
import ListView from "./ListView";

describe("ListView example test", () => {
  test("renders heading", async () => {
    render(<ListView />);
    expect(screen.getByRole("heading", { name: "Some example" })).toBeInTheDocument();
  });
});