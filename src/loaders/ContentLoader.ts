import { ActionFunction } from "react-router-dom";

async function loadApi(apiUrl: string) {
    let contents = [];
    try {
        contents = await fetch(apiUrl).then(result => result.json());
        cacheData(apiUrl, contents);
    } catch (err) {
        console.error(err);
    }
    return contents;
}

const getCachedData = (key: string) => {
    const localStorageData = localStorage.getItem(key);
    return localStorageData === null ? localStorageData : JSON.parse(localStorageData);
}

const cacheData = (key: string, value: object) => { 
    localStorage.setItem(key, JSON.stringify(value));
}

const getData = async (apiUrl: string) => {
    let content = getCachedData(apiUrl);

    if (content === null) {
        content = await loadApi(apiUrl);
    }

    return content;
}

export const contentLoader : ActionFunction = async ({params} ) => {
    const apiUrl: string = `https://pokeapi.co/api/v2/pokemon-species/${params.id}`;
    return await getData(apiUrl);
}

export async function contentsLoader() {
    const apiUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/?limit=50';
    return await getData(apiUrl);
}