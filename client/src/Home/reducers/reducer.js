const Home = (state = {}, action) => {
    switch (action.type) {
        case 'FIRST_STATE':
            return Object.assign({}, state, {
                field: 'first'
            });
        case 'SECOND_STATE':
            return Object.assign({}, state, {
                field: 'second'
            });
        default:
            return state;
    }
};

export default Home;
