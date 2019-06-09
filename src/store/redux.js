import { createStore } from 'redux';
import { defaultFAQ } from './defaultFAQ';

const initialState = {
    searchResults:[]
}
export const actions = {
    GET_RESULTES: 'GET_RESULTES'
};

//actions creator
/*
export const getResult = (keys) => ({
        type: actions.GET_RESULTES,
        keys
});
*/

export const getResult = (keys) => ({
    type: actions.GET_RESULTES,
    keys
});



const strStr = (haystack, needle) => {
    if (haystack === needle || needle === "") {
        return 0;
    }
    
    for (var i=0; i<=haystack.length-needle.length; i++) {
        var char = haystack[i];
        if (char === needle[0]) {
            if (check(haystack, i, needle)) {
                return i;
            }
        }
    }
    return -1;
};

const check = (haystack, i, needle) => {
    for (var j=0; j<needle.length; j++) {
        if (haystack[i] !== needle[j]) {
            return false;
        }
        i++;
    }
    return true;
}

const filterResults = (faq, keys) => {
    let results = [];
    for (let i of faq) {
        if (strStr(i.title, keys) > -1) {
            results.push({'title': i.title});
        }
    }
    return results
};

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.GET_RESULTES: 
            console.log()
            return {
                ...state,
                faq: filterResults(defaultFAQ, action.keys)
            };
        default:
            return state;
    } 
};

export default createStore(searchReducer, { faq: defaultFAQ });