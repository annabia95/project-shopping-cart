require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('1 - Implemente um teste que verifique se fecthItem é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  })

  it('2 - Com o argumento "MLB1615760527", a função fetch deve ser chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('3 - Com o argumento "MLB1615760527", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  })

  it('4 - O retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const returnFunction = await fetchItem ('MLB1615760527');
    expect(returnFunction).toEqual(item);
  })

  it('5 - Ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
