import { useState } from 'react';
import FilteredList from '../components/FilteredList';
import { tFilter } from '../typedefs/UtilityDescriptor';
import SearchForm from '../components/SearchForm';
import { useLoaderData } from 'react-router-dom';
import { tPokeApiList } from '../typedefs/ItemDescriptor';

const ListViewRoute = () => {
    const apiData: tPokeApiList = useLoaderData() as tPokeApiList;
    const data = apiData.results;

    // Real fn
    const [filters, setFilters] = useState<tFilter>({
        searchQuery: ""
    });

    const updateSearchQuery = (newSearchQuery: string) => {
        setFilters({
            ...filters,
            searchQuery: newSearchQuery
        });
    }

    return (
        <div className="listView">
            <SearchForm searchFn={updateSearchQuery} />
            <FilteredList content={data} searchQuery={filters.searchQuery} />
        </div>
    );
};

export default ListViewRoute;