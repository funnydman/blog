import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostListView from '../views/postList';
import PostDetailView from '../views/postDetail';

const mapStateToProps = state => ({
    fetchPostsStatus: state.PostReducer.fetchPostsStatus,
    fetchBlogPosts: state.PostReducer.fetchBlogPosts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: id => {
        dispatch(fetchPosts(id));
    }
});

export const PostList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListView);

export const PostDetail = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailView);
