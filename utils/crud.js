async function readAll(model) {
    const data = await model.find({});
    
    return data;
}

async function create(model, queryQata) {
    const data = await model.create(queryQata);
    
    return data;
}

module.exports = {
    create,
    readAll
}