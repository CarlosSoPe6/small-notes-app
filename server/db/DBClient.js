const dbconfig = require('../config/db');

class DBClient {
  constructor(schema, modelName, listProjection) {
    this.schema = new dbconfig.Schema(schema);
    this.model = dbconfig.model(modelName, this.schema, modelName);
    this.listProjection = listProjection;
  }
  async query(query, projection = {}) {
    const docs = await this.model.find(query, projection);
    return docs;
  }
  async queryOne(query, projection = {}, options = {}) {
    const doc = await this.model.findOne(query, projection, options);
    return doc;
  }
  async update(query, dataObject) {
    return await this.model.findOneAndUpdate(query, { $set: dataObject }, {
      new: true
    });
  }
  async create(document) {
    return await document.save();
  }
  async delete(query) {
    return await this.model.deleteOne(query);
  }
}


module.exports = DBClient;
