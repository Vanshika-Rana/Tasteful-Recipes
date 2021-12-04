import styled from "styled-components";

export const RecipeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width:100%;
    height:80vh;
    @media (max-width: 768px) {
        height:100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    
`;
export const RecipeContent = styled.div`

    margin-right:10%;
    margin-left:15%;
    margin-bottom:1.8rem;
    text-align:left;
    display:flex;
    flex-direction:column;
    @media (max-width: 1024px) {
        margin-right:0;
        margin-left:5%;
        margin-bottom:1.8rem;
        display:flex;
        flex-direction:column;
    }
    
`;
export const RecipeTitle = styled.h1`
    color:#393A3F;
    font-size:5rem;
    font-weight:bold;
    font-family: 'Playfair Display', serif;
    margin-bottom:2rem;
    line-height:1;
    @media (max-width: 768px) {
        font-size:3rem;
    }
    @media (max-width: 1024px) {
        font-size:2.5rem;
    }
        
        

`;

export const RecipePara = styled.p`
    color:#393A3F;
    font-size:1.4rem;
    font-weight:300;
    margin-right:1.2rem;
    font-family: 'Poppins', sans-serif;
    line-height:1.3;
    @media (max-width: 768px) {
        font-size:1.2rem;

    }
    @media (max-width: 1024px) {
        font-size:1.1rem;
    }


`;
export const RecipeImage = styled.img`
    margin-right:10%;
    width:60vw;
    height:75vh;
   margin-bottom:5%;
    
    @media (max-width: 1024px) {
        width:80%;
        height:50%;
        margin-bottom:0;
    }
`;