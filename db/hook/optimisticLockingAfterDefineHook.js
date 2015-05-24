var deepExtend = require("deep-extend"),
    baseModelMixin = require("../../model/baseModelMixin");

module.exports = function(entity) {

    entity.addHook("beforeUpdate", function(instance, options, fn) {

        //get original instance version and increment it
        var version = parseInt(instance.get("version"), 10) + 1;

        instance.setDataValue("version", version);
        fn(null, instance);
    });
};
