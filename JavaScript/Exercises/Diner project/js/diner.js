/**
 * Variable that contains all the menu info
 */
const menu = {
    main: {
        entrees: [
            { name: 'Entremeses', price: 2.54 }, 
            { name: 'Pasta', price: 5.5 },
            { name: 'Pate', price: 3 },
            { name: 'Gambas', price: 6.8 }
        ],
    },
    sides: {
        dishes: [
            { name: 'Patatas', price: 3 },
            { name: 'Migas', price: 2.5 },
            { name: 'Palitos', price: 1.5 },
            { name: 'Ensalada', price: 4.6 }
        ]
    }
};

/**
 * Variable that stores the products a user
 * is going to take
 */
var order = {
    entree: null,
    sides: [],
    cost : 0
};

/**
 * Cerates the containers for the entrees
 * @returns {String} with entrees info
 */
function fentrees() {
    let ent = '<div class="entrees"><h3>Entrees</h3>';
    menu.main.entrees.forEach(element => {
        ent += `<div class="dish"> ${element.name} ${'    '} ${addBtn("entrees", element.name, element.price)}</div>`;
    });
    ent += '</div><br><br>'
    return ent;
}
    
/**
 * Creates the containers for the side dishes
 * @returns {String} with sides info
 */
function sDishes() {
    let ent = '<div class="sdishes"><h3>Side Dishes</h3>';
    menu.sides.dishes.forEach(element => {
        ent += `<div class="dish"> ${element.name} ${'    '}  ${addBtn("sides", element.name, element.price)} </div>`;
    });
    ent += '</div><br><br>'
   return ent;
}

/**
 * Creates a button to add productos
 * @param {String} menu 
 * @param {String} name 
 * @param {Int} price 
 * @returns {String} with the button
 */
function addBtn(menu, name, price) {
    return `<button onclick="add('${menu}', '${name}', '${price}')"> Add </button>`;
}

/**
 * Creates a button to delete productos
 * @returns {String} with the button
 */
function delBtn() {
    return `<button onclick="del()"> Delete </button>`;
}

function add(menu, name, price) {
    addProduct(menu, name, price);
    showTotalCost();
    showChosenProducts();
}

function del() {
    delProduct();
    showTotalCost();
    showChosenProducts();
}

/**
 * Add a product to the order
 * @param {String} menu 
 * @param {String} name 
 * @param {int} price
 */
function addProduct(menu, name, price) {
    let rand = 0;

    switch (menu) {
        case 'entrees': 
            if (order.entree === null) {
                Object.assign(order, { entree: { name: name, price: price }});
            } else {
                alert('You already have an entree dish');
                return;
            }
        break;
        case 'sides':
            if (order.sides.length < 2) {
                order.sides.push({ name: name, price: price });
                //Comentario sobre el producto
            } else {
                alert('You already have two side dishes');
                return;
            }
        break;
        default:
            alert('Wrong dish name');
            return;
        break;
    }

    order.cost += parseFloat(price);

    rand =  parseInt(Math.random() * 4) + 1;
    if (rand <= 3) {
        alert(commentary(menu, name));
    } else {
        alert(randomComm());
    }
}

/**
 * Deletes a product from the order
 */
function delProduct() {
    let elm = "";
    let price = 0;
    let menu = chooseMenuType().toLowerCase();    

    switch (menu) {
        case 'entrees':
            price = order.entree.price; 
            Object.assign(order, { entree: null});
        break;
        case 'sides':
            elm = chooseProduct(order.sides);
            for (let i = 0; i < order.sides.length; i++) {
                if (order.sides[i].name.toLowerCase() == elm.toLowerCase()) {
                    price = order.sides[i].price;
                    order.sides.splice(i, 1);
                }
            }
        break;
        default: 
            alert('Wrong menu type');
            return;
        break;
    }

    order.cost -= parseFloat(price);
}

/**
 * Allows to choose between the different menus
 * @returns {String} with the chosen menu name
 */
function chooseMenuType() {
    return prompt(`From which menu do you want to delete a product?\n Entrees - Sides`, 'Menu');
}

/**
 * Allows to choose between the different products
 * @param {Array} products 
 * @returns {String} with the chosen product name
 */
function chooseProduct(products) {
    let elms = "";
    
    if (products.length > 0) {
        products.forEach(element => {
            elms += `${element.name}   `;
        });
        return prompt(`Which product do you want to delete?\n ${elms}`, 'Product');
    } else {
        alert('You have not chosen side dishes');
    }
}

/**
 * Generates comments for the different choices
 * @param {String} menu 
 * @param {String} name 
 * @returns {String} with the commentary
 */
function commentary(menu, name = '') {
    let com = "";

    switch (menu) {
        case 'entrees':
            com = entreeCommentary(name);
        break;
        case 'sides':
            com = sidesCommentary(name);
        break;
        default:
            com = defCommentary();
        break;
    }

    return com;
}

/**
 * Gives a product based commentary
 * @param {String} name 
 * @returns {String} with the commentary
 */
function entreeCommentary(name) {
    let com = "";

    switch (name) {
        case 'Entremeses':
            com = 'I reccomend you to better choose Pasta';
        break;
        case 'Pasta':
            com = 'Really good choice\n I also recommend you our Pate';
        break;
        case 'Pate':
            com = 'If you are a fan of Pates this is a good selection';
        break;
        case 'Gambas':
            com = 'Under the sea they came. To your plate they go ;)';
        break;
        default:
            com = 'You always choose the best';
        break;
    }

    return com;
}

/**
 * Gives a product based commentary
 * @param {String} name 
 * @returns {String} with the commentary
 */
function sidesCommentary(name) {
    let com = "";

    switch (name) {
        case 'Patatas':
            com = 'Nice fried chips always fit';
        break;
        case 'Migas':
            com = 'Oooh you have chosen some good Andalusian Migas';
        break;
        case 'Palitos':
            com = 'Delecious cheese sticks are always the best choice';
        break;
        case 'Ensalada':
            com = 'I see you are a healthy one';
        break;
        default:
            com = 'You always choose the best';
        break;
    }

    return com;
}

/**
 * Gives a random commentary 
 * @return {String} the random commentary
 */
function randomComm() {
    let com = "";
    let rand = parseInt(Math.random() * 4) + 1;

    switch (rand) {
        case 1:
            com = 'Our chef is the best one';
        break;
        case 2:
            com = 'Most dishes are vegetarian';
        break;
        case 3:
            com = 'Our prices can not be compared to other restaurants';
        break;
        case 4:
            com = 'Our best wishes for your meal';
        break;
        default:
            com = 'Enjoy your meal';
        break;
    }

    return com;
}

/**
 * Displays the chosen dishes
 */
function showChosenProducts() {
    let ent = '';
    
    if (order.entree !== null) {
        ent += `<div class="dish"> ${order.entree.name}</div>`;
    }

    order.sides.forEach(element => {
        ent += `<div class="dish"> ${element.name}</div>`;
    });
    
    document.querySelector('.dishes').innerHTML = ent;
}

/**
 * Shows the total cost on screen
 */
function showTotalCost() {
    document.querySelector('.cost').innerHTML = `Total cost: ${order.cost} €`;
}

/**
 * Loads the content into the browser when the 
 * window loads
 */
window.onload = () => {
    let ent = '<div class="main">';
    ent += fentrees();
    ent += sDishes();
    ent += '<div class="eat"> <h3>Selected dishes</h3> <div class="dishes"></div>'
    ent += '<div class="cost">Total cost: 0 €</div><br><br>'
    ent += delBtn();
    ent += '</div>';
    document.querySelector('#menu').innerHTML = ent;
}