async function readOneById(model, id, populateArg) {
    const data = await model.findById({}).populate(populateArg);
    
    return data;
}

async function readAll(model, populateArg) {
    const data = await model.find({}).populate(populateArg);
    
    return data;
}

async function create(model, queryQata) {
    const data = await model.create(queryQata);
    
    return data;
}

async function createMany(model, queryData){
    const data = await model.insertMany(queryData);
    return data;
}

async function update(model, filter, doc){
    const data = await model.updateOne(filter, doc)

    return data;
}

module.exports = {
    create,
    readAll,
    createMany,
    update,
    readOneById
}