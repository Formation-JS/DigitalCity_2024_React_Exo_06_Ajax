import { useCallback } from 'react';
import { useId } from 'react';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

    const formId = useId();
    const [query, setQuery] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if(query.trim()) {
            onSearch(query);
            setQuery('');
        }
    },[query]);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={formId+'query'}>Rechercher : </label>
            <input id={formId+'query'} type="text" 
                value={query} onChange={e => setQuery(e.target.value)}  />
            <button type="submit">Rechercher</button>
        </form>
    )
}

SearchBar.defaultProps = {
    onSearch: () => {}
};

export default SearchBar;