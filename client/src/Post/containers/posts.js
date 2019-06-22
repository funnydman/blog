import {connect} from 'react-redux'
import {fetchPosts} from "../actions/posts";
import PostListView from "../views/postList";


const mapStateToProps = (state) => {
    return {
        fetchPostsStatus: state.PostReducer.fetchPostsStatus,
        fetchBlogPosts: state.PostReducer.fetchBlogPosts

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
};

const PostList = connect(mapStateToProps, mapDispatchToProps)(PostListView);

export default PostList;
