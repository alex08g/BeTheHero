const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
  index: async (req, res) => {
    const ongs = await connection('ongs').select('*');
    
    res.json(ongs);
  },
  store: async (req, res) => {
    const { name, email, whatsapp, city, UF } = req.body;
  
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      UF,
    });
  
    res.json({ id });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    
    await connection('ongs')
      .where('id', id)
      .delete();
    
    return res.status(201).send()
  }
}