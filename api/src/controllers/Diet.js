const { Diet } = require('../db');

const getDiets = async (req, res) => {
    try {
        const diet = await Diet.findAll();
        //obtiene un array con los tipos de dieta y lo aplana al nivel 1.
        const types = diet.map(type => type.type).flat(); 
        //elimina los elementos repetidos del arreglo.
        const result = types.filter((item,index)=>{
            return types.indexOf(item) === index;
          })
        res.send(result)
    } catch (error) {
        res.status(400).send('Something went wrong with the DB')
    }
}

module.exports = {
    getDiets,
}