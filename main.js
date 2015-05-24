'use strict';

var Expense = require("./model/Expense"),
    sequelize = require("./db/sequelize");


sequelize.sync()
    .then(function () {
        Expense
            .create({
                date: Date.now(),
                description: 'senior engineer',
                amount: 123.56
            }).then(function (employee) {
                Expense.find({where: {id: 1}}).then(function (expense) {
                    console.log("amount", expense.amount);

                    expense.updateAttributes({"amount": 10.2}).then(
                        function() {
                            Expense.find({where: {id: 1}}).then(function (expense) {
                                console.log("version", expense.version);
                            });
                        }
                    );
                });
            });

        //process.exit.bind(process, 0)
    }
);

//.update({
//    date: Date.now(),
//    description: 'senior engineer2',
//    amount: 123.56
//}, {
//    where: {
//        id: 1
//    }
//}).then(function (employee) {
//    console.log(arguments);
//});


/*Expense.findAll().then(function (expenses) {
 expenses.forEach(function (expense) {
 console.log(expense.dataValues.id, expense.dataValues.amount);
 });
 });*/

