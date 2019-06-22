import dispatchFetch from '../../Helper/fetch';

export const setPostStatus = status => ({
    type: 'SET_POSTS_STATUS',
    status
});

export const setPostFetch = posts => ({
    type: 'SET_BLOG_POSTS',
    posts
});

export const fetchPosts = id => {
    return dispatch => {
        dispatch(setPostStatus('STARTING'));
        const fetchConfig = {
            url: `https://jsonplaceholder.typicode.com/posts/${id || ''}`,
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
};
