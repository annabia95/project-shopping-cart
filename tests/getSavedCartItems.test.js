const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('1 - Ao executar  getSavedCartItems o método localStorage.setItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('2 - Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('carItems');
  })
});
