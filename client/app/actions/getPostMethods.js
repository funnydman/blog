import getFetchData from "../utils/getFetchData";

export function getPostLists() {
    return getFetchData('api/posts')
}

export function getPostDetail(id) {
    return getFetchData(`api/posts/${id}`)
}