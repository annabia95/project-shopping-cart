const getCartItem = document.querySelector('.cart__items');
const bttnEmptyCart = document.querySelector('.empty-cart');
const getTotalPrice = document.querySelector('.total-price');
const loadingItem = document.querySelector('.loading');

function loadingAPI() {
  return loadingItem.remove();
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

/* Referências do parseFloat e do split: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat . https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
function someThePrice() {
  const itemsCart = getCartItem.childNodes;
  let sum = 0;
  itemsCart.forEach((price) => {
    const value = parseFloat(price.innerText.split('$')[1]);
    sum += value;
  });
  getTotalPrice.innerHTML = sum;
}

function cartItemClickListener(event) {
  event.target.remove();
  someThePrice();
  saveCartItems(getCartItem.innerHTML);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function createFetchProducts(productName) {
  const selectItems = document.querySelector('.items');
  const data = await fetchProducts(productName);
  data.results.forEach((item) => {
    const itemObject = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const callCreateElement = createProductItemElement(itemObject);
    selectItems.appendChild(callCreateElement);
  });
}

async function createCartProducts(ItemID) {
  const selectElementOl = document.querySelector('.cart__items');
  const data = await fetchItem(ItemID);
    const itemObjectCart = {
      sku: data.id,
      name: data.title,
      salePrice: data.price,
    };
    const callCreateCartProduct = createCartItemElement(itemObjectCart);
    selectElementOl.appendChild(callCreateCartProduct);
    someThePrice();
    saveCartItems(getCartItem.innerHTML);
}
 /* Após implementar a minha API de ItemID  e criar os componentes HTML do respectivo item, crio um evento para implementar as características do produto no carrinho de compras */
const bttnAddCart = () => {
  const selectBttn = document.querySelectorAll('.item__add');
  selectBttn.forEach((item) => {
    item.addEventListener('click', (event) => {
    const addItem = event.target.parentNode.firstChild.innerHTML;
    createCartProducts(addItem);
    });
  });
};
/* Para adicionar o evento de excluir o item após salvar, precisei implementar o evento novamente (Dica fornecida na monitoria do Douglas) */
function saveTheProducts() {
  getCartItem.innerHTML = getSavedCartItems();
}

getCartItem.addEventListener('click', cartItemClickListener);

/* Referência de localStorage.removeItem(): https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/removeItem */
function cleanCart() {
  getCartItem.innerHTML = '';
  localStorage.removeItem('cartItems');
}
bttnEmptyCart.addEventListener('click', cleanCart);

window.onload = () => {
  createFetchProducts('computador')
  .then(() => loadingAPI())
  .then(() => bttnAddCart())
  .then(() => someThePrice())
  .then(() => saveTheProducts());
};
