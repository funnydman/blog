import getFetchData from "../helpers/getFetchData";
import {PublicApi} from "../api/api";

export function getPostLists() {
    return getFetchData(PublicApi.posts);
}

export function getPostDetail(id) {
    return getFetchData(PublicApi.posts + id);
}