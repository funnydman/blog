import getFetchData from "./getFetchData";
import {publicAPI} from "../api/publicAPI";

export function getPostLists() {
    return getFetchData(publicAPI.posts);
}

export function getPostDetail(id) {
    return getFetchData(publicAPI.posts + id);
}