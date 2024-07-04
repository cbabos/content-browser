import { cleanup, render, screen } from '@testing-library/react';
import mockData from '../../mocks/mock.json';
import FilteredList from './FilteredList';

describe('FilterdList', () => {
    afterEach(() => {
        cleanup();
    })

    it('should render the data after applying incoming searchQuery as a filter', () => {
        const searchQuery = "saur";
        const emptySearchQuery = "";
        render(<FilteredList searchQuery={searchQuery} content={mockData.results} />);

        const items = screen.getAllByRole('article');
        expect(items.length).toBe(3);
    });
});