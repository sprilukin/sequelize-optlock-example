var _ = require("underscore");

module.exports = function(sequelize, dialect) {
    var originalUpdateQuery = dialect.QueryGenerator.updateQuery;

    dialect.QueryGenerator.updateQuery = function(tableName, attrValueHash, where, options, attributes) {
        where = _.extend({}, where, {
            //update only entity where version is this.version - 1
            version: attrValueHash.version - 1
        });

        return originalUpdateQuery.call(this, tableName, attrValueHash, where, options, attributes);
    }
};