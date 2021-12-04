import React, { useEffect } from 'react'
import { SearchContainer, 
    SearchForm,
    SearchInput,
    SearchButton,
    RecipeList,
} from './Recipe.style';
import SearchList from './SearchList';
const Recipe = () => {
    const APP_ID = '79804d9e';
    const APP_KEY = 'd5f78e2eb7a32219a50637f63ede9304';

    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('chicken');
    const [query, setQuery] = React.useState('chicken');


    useEffect(() => {
        getRecipes();
    }, [query]);

    
    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return (
        <SearchContainer>
            <SearchForm onSubmit={getSearch}>
                <SearchInput placeholder="Search for a recipe" value={search} onChange={updateSearch}/>
                <SearchButton>Search</SearchButton>
            </SearchForm>
            <RecipeList>
            {recipes.map(recipe => (
                <SearchList 
                title={recipe.recipe.label} 
                ing={recipe.recipe.ingredientLines} 
                link={recipe.recipe.url} 
                image={recipe.recipe.image}/>    
            ))}
            </RecipeList>
            
        </SearchContainer>
    )
}

export default Recipe
