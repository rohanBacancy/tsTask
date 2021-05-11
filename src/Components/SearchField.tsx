import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {  IconButton } from '@material-ui/core';
import { SearchInputBase, SearchPaper, SearchWrapperDiv } from './StyledComponents/StyledComponents';

interface IProps{
    placeHolder: string,
    searchqry: string,
    setSearchqry: (qry:string) => void,
}

const SearchField:React.FC<IProps> = ({ placeHolder,searchqry,setSearchqry }) => {
    return (
        <SearchWrapperDiv>
        <SearchPaper component="form" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <SearchInputBase
                placeholder={placeHolder}
                value={searchqry}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchqry(e.target.value)}
            />
            <IconButton style={{padding:'10px'}} type="submit">
                <SearchIcon/>
            </IconButton>
        </SearchPaper>
        </SearchWrapperDiv>
    )
}

export default SearchField
