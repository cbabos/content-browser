import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';
import { tListItem } from '../typedefs/ItemDescriptor';
import mockContent from '../../mocks/mock.json';

describe('Basic functionality of the list view', () => {
    it('should render an article with heading and a p with the description, also should have a Show more link', () => {
        const exampleItem : tListItem = mockContent[0];
        const clickHandler = () => {};

        render(<ListItem {...exampleItem} clickHandler={clickHandler} />);

        // Should have an article element
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();

        // Find the heading element by its role and assert its presence and content
        const headingElement: HTMLElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent(exampleItem.title);

        // Find the paragraph element by its text content and assert its presence
        const paragraphElement: HTMLElement = screen.getByText(exampleItem.description);
        expect(paragraphElement.tagName).toBe('P');
        expect(paragraphElement).toBeInTheDocument();

        // Should contain an A tag with the text of Show more
        const linkElement: HTMLElement = screen.getByText("Show more");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toBe('BUTTON');
    });

    it('should call the provided onClick method with the contentID', () => {
        const exampleItem : tListItem = mockContent[0];

        const clickFn = jest.fn();
        render(<ListItem {...exampleItem} clickHandler={clickFn} />);

        // Select the linkElement and click it
        const linkElement: HTMLElement = screen.getByText("Show more");
        linkElement.click();

        expect(clickFn).toBeCalledWith(exampleItem.contentID);
    })
})