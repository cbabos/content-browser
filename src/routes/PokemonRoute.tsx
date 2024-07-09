import { useLoaderData, useNavigate } from 'react-router-dom';
import { tPokemon } from '../typedefs/ItemDescriptor';

const PokemonRoute = () => {
    const pokemon: tPokemon = useLoaderData() as tPokemon;
    const navigate = useNavigate();
    const onBack = () => {
        navigate(-1);
    }

    return (
        <div className="detailView">
            <h1>{pokemon.name}</h1>
            <button onClick={onBack}>Back</button>
            <code>{JSON.stringify(pokemon, null, " ")}</code>
        </div>
    );
};

export default PokemonRoute;