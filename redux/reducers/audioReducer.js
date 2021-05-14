let initialState = {
    uri: "",
    onPlay: false,
};

const routeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAY":
            return {
                uri: action.payload.uri,
                onPlay: true,
            };
        case "STOP":
            return {
                ...state,
                onPlay: false,
            };
        default:
            return state;
    }
};

export default routeReducer;
