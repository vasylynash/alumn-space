import React, { useState, useContext } from 'react';

export const SearchContext = React.createContext();

export const useSearch = () => useContext(SearchContext);

export default function SearchProvider({ children }) {
    const initialState = {
        keyword: '',
        category: '',
        label: ''
    };
    const [formData, setFormData] = useState(initialState);

    return (
        <SearchContext.Provider value={{formData, setFormData}}>
            { children }
        </SearchContext.Provider>
    )
}