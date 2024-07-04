export type tListItem = {
    id: number,
    name: string
}

export type tPokeList = {
    content: tPokeListItem[]
};

export type tPokeListItem = {
    name: string,
    url: string
};


export type tPokeApiList = {
    count: number,
    next: string,
    previous: string,
    results: tPokeListItem[]
}

type tUrlOnly = {
    url: string
}

type tNameUrl = tUrlOnly & {
    name: string
}

type tFlavorTextEntry = {
    flavor_text: string,
    language: tNameUrl,
    version: tNameUrl,
}

type tGenera = {
    genus: string,
    language: tNameUrl,
}

type tNameEntry = {
    language: tNameUrl,
    name: string,
}

type tPalParkEntry = {
    area: tNameUrl,
    base_score: number,
    rate: number
};

type tPokeDexEntry = {
    entry_number: number,
    pokedex: tNameUrl,
}

type tVariete = {
    is_default: boolean,
    pokemon: tNameUrl,
}

export type tPokemon = {
    base_happiness: number,
    capure_rate: number,
    color: tNameUrl,
    egg_groups: tNameUrl[],
    evolution_chain: tUrlOnly,
    evolves_from_speices: tNameUrl[],
    flavor_text_entries: tFlavorTextEntry[],
    form_descriptions: string[],
    forms_switchable: boolean,
    gender_rate: 1,
    genera: tGenera[],
    generation: tNameUrl,
    growth_rate: tNameUrl,
    habitat: tNameUrl,
    has_gender_differences: boolean,
    hatch_counter: 20,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    name: string,
    names: tNameEntry[],
    order: number,
    pal_park_encounters: tPalParkEntry[],
    pokedex_numbers: tPokeDexEntry,
    shape: tNameUrl,
    varietes: tVariete[]
}