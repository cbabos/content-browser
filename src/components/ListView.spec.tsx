import { render, screen } from "@testing-library/react";
import ListView from "./ListView";
import mockData from '../../mocks/mock.json';

describe("ListView example test", () => {
  test("renders heading", async () => {
    render(<ListView  content={mockData} />);
    expect(screen.getByRole("heading", { name: "Please find the latest below" })).toBeInTheDocument();
  });
});