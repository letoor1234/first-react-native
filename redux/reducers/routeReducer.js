let initialState = {
    path: "/"
};

const routeReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return state
        case 'HOME':
            console.log("workin")
            return {
                path: "/home"
            }
        case 'NOTIFIATION':
            return {
                path: "/notifications"
            }
        case 'SEARCH':
            return {
                path: "/search"
            }
        case 'SETTINGS':
            return {
                path: "/settings"
            }
        default:
            return state
    }
}

export default routeReducer