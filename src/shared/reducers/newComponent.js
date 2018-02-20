import { NEWCOMP } from '../constants/constants';


export default function newComp(state = [], action) {
    switch (action.type) {
        case NEWCOMP:
            return {...state, mewComp: action.payload}
        default:
            return state;
    }
}

// const product = (state = [], action) => {
//     switch (action.type) {
//         case SINGLE_PRODUCT:
//             return {...state,  product: action.product};
//         // case REMOVE_PRODUCT:
//         //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
//         default:
//             return state
//     }
// }