import { httpService } from "./baseHTTP"

export const getGif = async (name) => {
    const comments = await httpService(`search?q=${name}&api_key=NZD4q35yybBTl4d16vbBM9iXH6sGmSYs&limit=1`).then(response => response.data);
    return comments;
}