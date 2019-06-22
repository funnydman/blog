const PostReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_POSTS_STATUS':
            return Object.assign({}, state, {
                fetchPostsStatus: action.status
            });
        case 'SET_BLOG_POSTS':
            return Object.assign({}, state, {
                fetchBlogPosts: action.posts
            });
        default:
            return state;
    }
};

export default PostReducer;
