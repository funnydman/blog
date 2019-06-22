import dispatchFetch from '../../Helper/fetch';

export function setPostStatus(status) {
    return {
        type: 'SET_POSTS_STATUS',
        status
    };
}

export function setPostFetch(posts) {
    return {
        type: 'SET_BLOG_POSTS',
        posts
    };
}

export function fetchPosts(id) {
    return function(dispatch) {
        dispatch(setPostStatus('STARTING'));
        const fetchConfig = {
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            method: 'get',
            successStatusCode: 200,
            successCallback: res => {
                dispatch(setPostFetch(res.data));

                dispatch(setPostStatus('FINISHED'));
            },
            errorCallback: res => {
                console.error(res);
            }
        };

        dispatchFetch(fetchConfig);
    };
}
