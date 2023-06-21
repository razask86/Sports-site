import axios from "axios";


// const BASE_URL='http://localhost:1337/api';
// const BASE_URL='https://tubeguruji-admin.herokuapp.com/api'
const BASE_URL='https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'

const getPost=axios.get(BASE_URL);
const getPostById=(id)=>axios.get(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`);

export default{
    getPost,
    getPostById
}
