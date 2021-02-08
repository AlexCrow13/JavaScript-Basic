const productsList = [
  {id: 1, title: 'Рубашка', price: 3000},
  {id: 2, title: 'Брюки', price: 4000},
  {id: 3, title: 'Куртка', price: 5000},
];

const renderProduct = (product, img = 'https://via.placeholder.com/150') =>{
  return `<div class = 'product-item', data-index='${product.id}'>
            <h2>${product.title}</h2>
            <img src="${img}" alt="150img">
            <p class = 'price'>${product.price}</p> 
            <button class = 'by-btn'>Добавить в корзину</button>
          </div>`
};

const renderProducts = (list) => {
  document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(product => renderProduct(product)).join(''));
};

renderProducts(productsList);

let products = document.querySelectorAll('.product-item'),
    buttons = document.querySelectorAll('.by-btn'),
    cartBtn = document.querySelector('.cart-btn');

function createCart(){
  let cart = document.createElement('div'),
      field = document.createElement('div'),
      heading = document.createElement('h2'),
      byBtn = document.createElement('button'),
      clearBtn = document.createElement('button'),
      closeBtn = document.createElement('button');

  cart.classList.add('cart', 'hidden');
  field.classList.add('cart-field');
  byBtn.classList.add('next');
  closeBtn.classList.add('close');
  clearBtn.classList.add('clear');

  heading.textContent = 'В корзине:';
  byBtn.textContent = 'Оформить';
  clearBtn.textContent = 'Очистить';
  closeBtn.textContent = 'Закрыть';

  console.log(cart);

  document.body.appendChild(cart);
  cart.appendChild(heading);
  cart.appendChild(field);
  cart.appendChild(byBtn);
  cart.appendChild(clearBtn);
  cart.appendChild(closeBtn);
  field.insertAdjacentHTML('afterend', `<p class = 'cart-price'>Товаров в корзине на: <span class = 'total-price'>0</span>  \u20BD </p>`);
}

createCart();

let cart = document.querySelector('.cart'),
    field = document.querySelector('.cart-field'),
    closeBtn = document.querySelector('.close'),
    clearBtn = document.querySelector('.clear');

function openCart(){
  cart.classList.add('block');
}
function closeCart(){
  cart.classList.remove('block');
}

cartBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);



const shoppingCart = [];

const countBasketPrice = (shoppingCart) =>{
  let totalCost = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
      totalCost += +shoppingCart[i];
    }
    return totalCost;
  };


buttons.forEach(function(item, i){
  item.addEventListener('click', () => {
    item.textContent = 'Добавлено';
    const itemPrice = item.parentNode.querySelector('.price').innerHTML;
    shoppingCart.push(itemPrice);
    let totalPrice = countBasketPrice(shoppingCart);
    let totalPriceText = document.querySelector('.total-price');
    totalPriceText.textContent = totalPrice;
    // let product = products[i].cloneNode(true);
    //     btn = product.querySelector('button');
    //     btn.remove();
    //     field.appendChild(product);
    field.insertAdjacentHTML('beforeend', `<div class = 'cart-item'>
                                            <img src="https://via.placeholder.com/50" alt="50img">
                                            <h3>${productsList[i].title}</h3>
                                            <span>${productsList[i].price}</span>
                                            </div>`)
  });
});


clearBtn.addEventListener('click', () => {
  shoppingCart.splice(0);
  let totalPriceText = document.querySelector('.total-price');
  totalPriceText.textContent = '0';
  let cartItems = document.querySelectorAll('.cart-item');
  cartItems.forEach(function(item){
    item.remove();
  });
});



