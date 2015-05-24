'use strict';

var Sequelize = require("sequelize");

module.exports = {
    fields: {
        version: {
            type: Sequelize.BIGINT,
            defaultValue: 0
        }
    },
    options: {
        /* general options for all tables */
    }
};