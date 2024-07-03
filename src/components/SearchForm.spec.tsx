import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

describe("Content search form", () => {
  it("should accept user input and call the provided search function with the accepted input", () => {
    const searchFnMock = jest.fn();
    const exampleSearchPhrase = 'example';
    
    render(<SearchForm searchFn={searchFnMock} />);
    const inputField = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');
    userEvent.type(inputField, exampleSearchPhrase);
    searchButton.click();
    
    expect(searchFnMock).toBeCalledWith(exampleSearchPhrase);
  });
});