import { useState } from 'react';
import Papa from 'papaparse';
import FilteredList from '../components/FilteredList';
import { tFilter } from '../typedefs/UtilityDescriptor';
import SearchForm from '../components/SearchForm';
import { Outlet, useLoaderData } from 'react-router-dom';
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

    const onDownloadCSV = () => { 
        const csvData = Papa.unparse(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `pokemon_species.csv`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    return (
        <>
            <div className="listView">
                <button onClick={onDownloadCSV}>Download full List</button>
                <SearchForm searchFn={updateSearchQuery} />
                <FilteredList content={data} searchQuery={filters.searchQuery} />
            </div>
            <div className="detailView">
                <Outlet />
            </div>
        </>

    );
};

export default ListViewRoute;