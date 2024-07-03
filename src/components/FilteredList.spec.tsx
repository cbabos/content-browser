import { cleanup, render, screen } from '@testing-library/react';
import mockData from '../../mocks/mock.json';
import FilteredList from './FilteredList';

describe('FilterdList', () => {
    afterEach(() => {
        cleanup();
    })

    it('should render the date after applying incoming searchQuery as a filter', () => {
        const searchQuery = "lorem";
        const emptySearchQuery = "";
        render(<FilteredList searchQuery={searchQuery} content={mockData} />);

        const items = screen.getAllByRole('article');
        expect(items.length).toBe(2);
    });
});