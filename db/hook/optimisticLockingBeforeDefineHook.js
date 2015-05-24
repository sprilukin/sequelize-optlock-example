var deepExtend = require("deep-extend"),
    baseModelMixin = require("../../model/baseModelMixin");

module.exports = function(attributes, options) {

    //mix attributes which we want to be present in each entity
    deepExtend(attributes, baseModelMixin.fields);

    //mix options which we want to be present in each entity
    deepExtend(options, baseModelMixin.options);
};
