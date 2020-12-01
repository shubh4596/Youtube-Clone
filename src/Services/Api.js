import axios from 'axios';
const KEY = "";

export const baseParams = {
    part: "snippet",
    maxResult: 10,
    key : KEY,
};

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
});

