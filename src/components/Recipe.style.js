import styled from 'styled-components';

export const SearchContainer = styled.div`
    width:100%;
    min-height:100vh;
    
`;
export const SearchForm = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:50px;
`;
export const SearchInput = styled.input`
    width:30%;
    height:50px;
    border:none;
    border-radius:5px;
    padding:0 20px;
    font-size:20px;
    color:#333;
    background-color:#E1E1E1;
    margin-right:15px;
    &:focus{
        outline:#F6836B solid 2px;
    }
    @media (max-width:768px){
        width:60%;
        font-size:15px;
        margin-left:10px;
    }

`;
export const SearchButton = styled.button`
    width:100px;
    height:50px;
    border:none;
    border-radius:5px;
    font-size:20px;
    color:#fff;
    cursor:pointer;
    background-color:#F6836B;
    &:focus{
        outline:none;
    }
    @media (max-width:768px){
        width:30%;
        font-size:15px;
        margin-right:10px;
    }
`;
export const RecipeList = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-gap:20px;
    width:100%;
    margin-top:50px;

`;