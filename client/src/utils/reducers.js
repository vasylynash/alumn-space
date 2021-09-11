import { UPDATE_KEYWORD, UPDATE_CATEGORY, UPDATE_LABEL } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        
        case UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        case UPDATE_CATEGORY: 
            return {
                ...state,
                category: action.payload
            }
        case UPDATE_LABEL: 
            return {
                ...state,
                label: action.payload
            }  
        default:
            return state;
            
    }
}