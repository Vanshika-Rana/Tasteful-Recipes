import React from 'react'
import {
    RecipeListItem,
    RecipeTitle,
    RecipeImage,
    RecipeLink,
    IngList,
    IngListItem
} from './SearchList.style'
const SearchList = ({title, ing, link, image}) => {
    return (
        <RecipeListItem>
            <RecipeTitle>{title}</RecipeTitle>            
            <RecipeImage src={image}/>
            <h3 >Ingredients</h3><br/>
            <IngList>
                {ing.map((ingredient, index) => {
                    return <IngListItem key={index}>{ingredient}</IngListItem>
                })}
            </IngList>
            <RecipeLink href={link} target="_blank">Recipe Here</RecipeLink>
        </RecipeListItem>
    )
}

export default SearchList
