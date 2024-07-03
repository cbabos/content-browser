import { tClickableItem } from '../typedefs/InteractionDescriptor';
import { tListItem } from '../typedefs/ItemDescriptor';

const ListItem = ({contentID, title, description, clickHandler}: tListItem & tClickableItem) => {
    const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation();
        ev.preventDefault();

        if (typeof clickHandler === 'function') {
            clickHandler(contentID);
        }
    }

    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onClick}>Show more</button>
        </article>
    );
}

export default ListItem;