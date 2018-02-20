import {UPDATE_NAME, CUSTOM, NEWCOMP} from '../constants/constants';
import Request from 'axios';

export function getName(id) {
    return async function (dispatch, getState) {
        let {data} = await getUserFromAPI(id);
        dispatch({type: UPDATE_NAME, payload: data});
    }
}

export function newComp(newComp) {
    return async function (dispatch, getState) {
        dispatch({type: NEWCOMP, payload: newComp});
    }
}

function getUserFromAPI(id) {
    return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

import {
    ALL_PRODUCTS,
    ADD_NEW_PRODUCT,
    SINGLE_PRODUCT,
    USER_PRODUCTS,
    CURRENT_USER,
    REMOVE_USER_PRODUCT,
    REMOVE_USER
} from '../constants/constants';

let nextProdId = 0;
export const addProduct = product => {
    return {
        type: ADD_NEW_PRODUCT,
        id: nextProdId++,
        product
    }
}

export const allProducts = (products, count) => {
    return {
        type: ALL_PRODUCTS,
        products,
        count
    }
};

export const singleProduct = (product) => {
    return {
        type: SINGLE_PRODUCT,
        product,
    }
};

export const userProducts = (userProducts) => {
    return {
        type: USER_PRODUCTS,
        userProducts
    }
};

export const currentUser = (currentUser) => {
    return {
        type: CURRENT_USER,
        currentUser
    }
};

export const removeUserProd = (id) => {
    return {
        type: REMOVE_USER_PRODUCT,
        id
    }
}

export const removeUser = (id) => {
    return {
        type: REMOVE_USER,
        id
    }
}