import dbconfig from '../config/db';

class DBClient {
  constructor(schema, modelName, listProjection) {
    this.schema = new dbconfig.Schema(schema);
    this.model = dbconfig.model(modelName, this.schema);
    this.listProjection = listProjection;
  }
  async query(query, projection = {}, options = {}) {
    return await this.model.find(query, projection, options);
  }
  async queryOne(query, projection = {}, options = {}) {
    return await this.model.findOne(query, projection, options);
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
    return await this.model.deleteOne(query, (err, obj) => {
      if (err)
        throw err;
      console.log("Document deleted");
    });
  }
}


export default DBClient;