import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../global.style'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const SearchInput = styled.input`
    width: 70%;
    font-size: 15px;
    height: 25px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #EDEDED;
    outline: none;
    
    input {
        font-family:'FontAwesome';
    }
`

export const SearchIcon = styled.i`
    color: #707070;
    background-color: #EDEDED;
    font-size: 18px;
    margin-right: 0.2rem;
`

export const SearchBtn = styled.button`
    font-size: 12px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    justify-content: flex-end;
    border: none;
    background-color:#51BBB9;
    border-radius: 3px;
    color: white;
    padding: 6px 20px;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: #FF8985;
        color: #707070;
        cursor: pointer;
    }
`

export const SearchBar = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto 0.5rem auto;
    padding-left: 0.5rem;
    width: 70%;
    border: solid 1px #51BBB9;
    border-radius: 5px;
    background-color: #EDEDED;
    
`

export const Line = styled.div`
    margin: 1rem auto;
    padding: auto;
    width: 80%;
    height: 2px;
    background-color: #707070;
`

export const DropDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20%;
    margin: 0;
    
`

function SearchPost() {

    const [Category, setCategory] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const [Label, setLabel] = useState();

    const handleLabelChange = (event) => {
        setLabel(event.target.value);
    };

    return (
        <>
        <GlobalStyle/>
        <Line/>
        <SearchBar>
            <SearchIcon className='fas fa-search'/>
            <SearchInput placeholder='Search Title'/>
            <SearchBtn>Search</SearchBtn>
        </SearchBar>
        <DropDownContainer>
            <FormControl style={{minWidth: 100}}>
            <InputLabel id="subject" >Category</InputLabel>
                <Select
                labelId="subject"
                id="subject-select"
                value={Category}
                onChange={handleCategoryChange}
                >
                <MenuItem value={1}>Categoryt1</MenuItem>
                <MenuItem value={2}>Categoryt2</MenuItem>
                <MenuItem value={3}>Categoryt3</MenuItem>
                <MenuItem value={4}>Categoryt4</MenuItem>
                <MenuItem value={5}>Categoryt5</MenuItem>
                <MenuItem value={6}>Categoryt6</MenuItem>
                <MenuItem value={7}>Categoryt7</MenuItem>
                <MenuItem value={8}>Categoryt8</MenuItem>
                <MenuItem value={9}>Categoryt9</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{minWidth: 100}}>
            <InputLabel id="subject" >Label</InputLabel>
                <Select
                labelId="subject"
                id="subject-select"
                value={Label}
                onChange={handleLabelChange}
                >
                <MenuItem value={1}>Label1</MenuItem>
                <MenuItem value={2}>Label2</MenuItem>
                <MenuItem value={3}>Label3</MenuItem>
                <MenuItem value={4}>Label4</MenuItem>
                <MenuItem value={5}>Label5</MenuItem>
                <MenuItem value={6}>Label6</MenuItem>
                <MenuItem value={7}>Label7</MenuItem>
                <MenuItem value={8}>Label8</MenuItem>
                <MenuItem value={9}>Label9</MenuItem>
                </Select>
            </FormControl>
        </DropDownContainer>
        <Line/>
        </>
    )
}

export default SearchPost
