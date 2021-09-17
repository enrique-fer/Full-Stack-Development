import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({ email, password }) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Max Nelson',
                address: '1234 I live here',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A35484553454',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 25.69,
                orderNumber: 'A35484854789',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Fersan Tontus',
                    shippingAddress: '5896 South State Street'
                }
            },
            {
                _id: 2,
                total: 58.14,
                orderNumber: 'A25896547825',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andre Alv',
                    shippingAddress: '5896 St Wine Street'
                }
            },
            {
                _id: 3,
                total: 45.2,
                orderNumber: 'A58745236985',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Ces Carr',
                    shippingAddress: '6969 Center State Street'
                }
            },
            {
                _id: 4,
                total: 12.3,
                orderNumber: 'A12357864126',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Reichel G',
                    shippingAddress: '1248 Norther AV'
                }
            },
            {
                _id: 5,
                total: 58,
                orderNumber: 'A15698645876',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Marian Stretall',
                    shippingAddress: '4568 Southern S AV'
                }
            },
            {
                _id: 6,
                total: 10.25,
                orderNumber: 'A45368795214',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Marital Slep',
                    shippingAddress: '4853 West State Street'
                }
            },
            {
                _id: 7,
                total: 8.02,
                orderNumber: 'A78512695522',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Benito Camelas',
                    shippingAddress: '1235 West State Street'
                }
            },
        ]
    })
}

export function addCartProduct(product) {
    product.imageUrl = 'http://via.placeholder.com/80x80';
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product:  {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    price : 1.99,
                    belongsTo: [ 0, 1 ],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {
                _id: 1,
                product:  {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',                price : 1.99,
                    belongsTo: [ 0, 5 ],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 3
            }

        ]
    })
}