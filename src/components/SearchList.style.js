import styled from 'styled-components';

export const RecipeListItem = styled.li`
margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const RecipeTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 10px;
    color: #393A3F;
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 0.5rem;

`;

export const RecipeImage = styled.img`
    width: 400px;
    height: 400px;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

`;

export const RecipeLink = styled.a`
    font-size: 1rem;
    margin: 0;
    padding: 10px;
    width:20%;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color:#fff;
    margin-bottom: 0.5rem;
    background-color: #F6836B;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: scale(0.9);
    }
    @media (max-width: 768px) {
        width: 50%;
    }

`;
export const IngList = styled.ol`
list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    text-align: center;
    
    padding: 0;
`;
export const IngListItem = styled.li`
    font-size: 1rem;
   
    margin-bottom: 0.5rem;
    color: #393A3F;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
`;

