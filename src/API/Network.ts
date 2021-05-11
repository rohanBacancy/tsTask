import axios from 'axios';
export const getReq = ( url:string ) =>
{
    console.log("Making req to " + url);
    return axios.get( url )
    .then( res => res.data )
    .catch( err => {throw new Error(JSON.parse(err.request.response).errorMessage);} )
}

export const postReq = ( url:string ) =>
{
    console.log("Making req to " + url);
    return axios.post( url )
    .then( res => res.data.data )
    .catch( err => {throw new Error(JSON.parse(err.request.response).errorMessage);} )
}
