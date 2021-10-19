"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Statement = new mongoose_1.Schema({
    conversationId: String,
    parentsId: [String],
    kidsId: [String],
    ownerId: String,
    text: String,
    scoring: [{
            type: String,
            agragatedValue: Number,
            voters: [{
                    ownerId: String,
                    statmentId: String,
                    value: Number
                }]
        }],
    voteOn: [{
            statmentId: String,
            type: String,
            value: Number // value the user gave upon this spesific type of value
        }]
});
exports["default"] = Statement;
