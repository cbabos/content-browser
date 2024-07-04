import { cleanup, render, screen } from '@testing-library/react';
import ListItem from './ListItem';
import { tListItem, tPokeListItem } from '../typedefs/ItemDescriptor';
import mockContent from '../../mocks/mock.json';

describe('Basic functionality of the list view', () => {
    afterEach(() => {
        cleanup();
    })

    it('should render an article with heading, also should have a Show more link', () => {
        const exampleItem : tPokeListItem = mockContent.results[0];

        render(<ListItem {...exampleItem} />);

        // Should have an article element
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();

        // Find the heading element by its role and assert its presence and content
        const headingElement: HTMLElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(exampleItem.name);


        // Should contain an A tag with the text of Show more
        const linkElement: HTMLElement = screen.getByText("Show more");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toBe('A');
        expect(linkElement.getAttribute('href')).toBe('/pokemon/1');
    });
})