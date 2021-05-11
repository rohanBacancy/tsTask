import { Badge,Card, InputBase, Paper, Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const SBottomNavigation = styled(BottomNavigation)`
    &&{
        background-color:#53354a;
        color:white;
    }
`

export const SBadge = styled(Badge)`
    &&{
        margin:0.6vw
    }
    & span{
        font-size: calc(0.90em + 1vmin);
        padding: calc(0.30em + 0.5vmin)
    }
`

export const SearchWrapperDiv = styled.div`
    &&{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:2vh;
        margin:3vh 5vw;
    }

`
export const SearchPaper = styled(Paper)`
    &&{
        padding: 2px 4px;
        display: flex;
        align-items: center;
        width: 400;
    }
`
export const SearchInputBase = styled(InputBase)`
    &&{
        margin-left:16px;
        flex:1;
    }
`

export const SMediaCard = styled(Card)`
    &&{
        background-color:#903749;
        color:#0ebbf4;
        max-height:580px;
        padding:4px;
        font-size:100px;
    }
`

export const SMedia = styled.img`
    &&{
        height:100%;
        width:100%;
        max-height:400px;
        overflow:scroll;
    }
`

export const SMediaTitle = styled(Typography)`
    &&{
        height:28px;
        overflow:hidden;
    }
`

export const SMediaDescription = styled(Typography)`
    &&{
        color:#37dd61;
        max-height:121px;
        overflow:auto;
    }
`

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2b2e4a;
    margin:0%;
    padding:0%;
  }
`

export const PaginationWrapper = styled.div`
    &&{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:2vh;
        margin-bottom:2vh;
    }
`

// export const SMediaCard = styled(Card)`
//     &&{

//     }
// `