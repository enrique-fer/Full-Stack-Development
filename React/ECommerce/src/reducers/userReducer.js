import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    purchases: [],
    purchaseDetail: {
        _id: -1,
        total: 0,
        orderNumber: '',
        orderDate: null,
        creditCard: '',
        user: {
            name: '',
            shippingAddress: ''
        }
    },
    cartProducts: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTHENTICATE_USER:
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        case ADD_CART_PRODUCT:
            var exists = false;
            const newCP = action.payload;
            var cartProducts = [];
            state.cartProducts.map(cProduct => {
                if (cProduct.product._id == newCP._id){
                    exists = true;
                    cProduct.quantity += 1;
                }

                cartProducts.push(cProduct);
            })

            if (!exists) {
                cartProducts.push({
                    _id: state.cartProducts.length + 1,
                    product: newCP,
                    quantity: 1
                })
            } 

            return {
                ...state,
                cartProducts: cartProducts
            }
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        case SET_PURCHASE_DETAIL:
            let purchaseDetail = INITIAL_STATE.purchaseDetail;

            state.purchases.map(purchase => {
                if (purchase._id == action.payload) {
                    purchaseDetail = purchase;
                }
            })
        
            return {
                ...state,
                purchaseDetail
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        default:
            return state;
    }
}