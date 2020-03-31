const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', ()=> {
  it('shoulf generate an unique ID', () => {
    const id = generateUniqueId();

    // Testando se id tem tamanho de 8 caracteres
    expect(id).toHaveLength(8);
  });
})