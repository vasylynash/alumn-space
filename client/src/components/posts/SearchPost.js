import React, { useState } from 'react';
import { SearchContext, useSearch } from '../../utils/SearchContext';
import styled from 'styled-components';
import GlobalStyle from '../global.style';
import { LoginBtn } from '../../pages/Landing';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useContext } from 'react';
import { UPDATE_KEYWORD, UPDATE_CATEGORY, UPDATE_LABEL, UPDATE_INPUT } from '../../utils/actions';
import { useReducer } from 'react';
import { reducer } from '../../utils/reducers';


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
    const searchContext = useSearch();
    const [ state, dispatch ] = useReducer(reducer, searchContext.formData);
    // console.log(state)
    // const [search, setSearch] = useState({});
    const searchQueryHandler = () => {
      searchContext.setFormData(state);
    };
    return (
        <>
        <GlobalStyle/>
        <Line/>
        <SearchBar>
            <SearchIcon className='fas fa-search'/>
            <SearchInput placeholder='Search Title' onChange={(e) => {
                return dispatch({
                    type: UPDATE_KEYWORD,
                    payload: e.target.value
                })   
            }}/>
            <SearchBtn onClick={searchQueryHandler}>Search</SearchBtn>
        </SearchBar>
        <DropDownContainer>
            <FormControl style={{minWidth: 100}}>
            <InputLabel id="subject" >Category</InputLabel>
                <Select
                labelId="subject"
                id="subject-select"
                // value={category}
                onChange={(e) => {
                    return dispatch({
                        type: UPDATE_CATEGORY,
                        payload: e.target.value
                    })
                }}
                >
                <MenuItem value={'Coding'}>Coding</MenuItem>
                <MenuItem value={'DataScience'}>Data Science</MenuItem>
                <MenuItem value={'UIUX'}>UI/UX</MenuItem>
                </Select>
            </FormControl>
            <FormControl style={{minWidth: 100}}>
            <InputLabel id="subject" >Label</InputLabel>
                <Select
                labelId="subject"
                id="subject-select"
                // value={label}
                onChange={(e) => {
                    return dispatch({
                        type: UPDATE_LABEL,
                        payload: e.target.value
                    })
                } }
                >
                <MenuItem value={'Help'}>Help</MenuItem>
                <MenuItem value={'SuccessStories'}>Success Stories</MenuItem>
                <MenuItem value={'Jobs'}>Jobs</MenuItem>
                <MenuItem value={'Discussion'}>Discussion</MenuItem>
                <MenuItem value={'NodeJS'}>NodeJS</MenuItem>
                <MenuItem value={'GraphQL'}>GraphQL</MenuItem>
                <MenuItem value={'MONGODB'}>MongoDB</MenuItem>
                <MenuItem value={'React'}>React</MenuItem>
                <MenuItem value={'CSS'}>CSS</MenuItem>
                <MenuItem value={'HTML'}>HTML</MenuItem>
                <MenuItem value={'HandleBars'}>HandleBars</MenuItem>
                <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
                </Select>
            </FormControl>
        </DropDownContainer>
        <Line/>
        </>
    )
}

export default SearchPost;
