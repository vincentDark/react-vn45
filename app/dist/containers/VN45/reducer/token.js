export default function (store = '', action) {
    const { type } = action;
    switch (type) {
        case 'TOKEN_SAVE':
            return action.payload.items.csrf_token;
            break;
    
        default:
            return store;
            break;
    }
    
};