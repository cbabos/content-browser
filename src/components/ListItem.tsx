import { tPokeListItem } from '../typedefs/ItemDescriptor';

const ListItem = ({name, url}: tPokeListItem) => {

    let idMatch = url.match(/\/(\d+)\/$/);
    let idOfPokemon = "";
    if (idMatch) {
        idOfPokemon = idMatch[1];
    }
    
    const link = `/pokemon/${idOfPokemon}`;

    return (
        <article>
            <h2>{name}</h2>
            <a href={link}>Show more</a>
        </article>
    );
}

export default ListItem;