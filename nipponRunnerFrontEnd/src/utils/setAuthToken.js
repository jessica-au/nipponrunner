import axios from 'axios';

//this utility will add the authorized user's json web token to the request header
//any routes that are protected will require the JWT in order to access them.

const setAuthToken = (token) => {
    //apply this token to every request header

    if(token){
        axios.defaults.headers.common['Authorization'] = token
        console.log(`>>>> headerz`)
        console.log(axios.defaults.headers.common)
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;