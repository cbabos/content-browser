import { useState } from "react";

type tSearchProps = {
    searchFn: (newQueryString: string) => void
}

function SearchForm({searchFn}: tSearchProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(ev.target.value);
    }

    const clickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        ev.stopPropagation();

        searchFn(inputValue);
    }

    return (
        <form className="search-form">
            <input data-testid="search-input" type="text" name="searchString" placeholder="What are you looking for?" onChange={handleInputChange} value={inputValue} />
            <button data-testid="search-button" onClick={clickHandler}>Search</button>
        </form>
    );
}

export default SearchForm;