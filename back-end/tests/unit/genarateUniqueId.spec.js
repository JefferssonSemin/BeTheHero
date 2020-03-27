const genarateUniqueId = require('../../src/utils/generationUniqueId');

describe('Generate Unique ID', ()=>{
  it('should generate an unique ID', ()=>{
    const id = genarateUniqueId();

    expect(id).toHaveLength(8);
  })
})