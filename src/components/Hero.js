import React from 'react'
import img from '../assets/img.png'
import {
    RecipeContainer, 
    RecipeTitle,
    RecipePara,
    RecipeContent,
    RecipeImage
} from './Hero.style'
const Hero = () => {
    return (
        <RecipeContainer>
            <RecipeContent>
                <RecipeTitle>Cook What You Crave!</RecipeTitle>
                <RecipePara>Find recipes that favours your taste and calms your hunger. <br/><br/> <b><i>Bon Appétit!</i></b> </RecipePara>

            </RecipeContent>
            <RecipeImage src={img}/>
        </RecipeContainer>
    )
}

export default Hero
