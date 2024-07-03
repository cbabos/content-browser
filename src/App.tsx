import { useState } from 'react';
import './App.css';
import FilteredList from './components/FilteredList';
import { tFilter } from './typedefs/UtilityDescriptor';
import SearchForm from './components/SearchForm';

function App() {
  /** Mocks */
  const data = new Array(100).fill(1).map((item, index) => {
      return {
          contentID: index.toString(), 
          title: `Title #${index}`, 
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ipsum exercitationem nostrum dolorem cum? Quos, quasi dicta? Vel delectus, ab quia illo culpa corrupti beatae alias deserunt dignissimos quidem."
      }
  });

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
    <div className="App">
      <SearchForm searchFn={updateSearchQuery} />
      <FilteredList content={data} searchQuery={filters.searchQuery} />
    </div>
  );
}

export default App;
