import React, {useState, createContext, useMemo} from 'react';

export const Context = createContext();

const FiltersProviders = (props) => {

    const categories = ["Women", "Men", "Kids", "Accessories"];
    const filters = ['Top', 'Bottom', 'Jacket'];
    const [category, setCategory] = useState();
    const updateCategory = cat => setCategory(cat);

    const value = useMemo(() => {
        return {
            categories,
            filters,
            updateCategory
        };
    }, []);

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default FiltersProviders;

