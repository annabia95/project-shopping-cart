require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1 - Implemente um teste que verifique se fecthProducts é uma função', async () => {
    await expect(typeof fetchProducts).toBe('function');
  })

  it('2 - Com o argumento "computador", a função fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('3 - Com o argumento "computador", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  })

  it('4 - O retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const returnFunction = await fetchProducts ('computador');
    expect(returnFunction).toEqual(computadorSearch);
  })

  it('5 - Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
