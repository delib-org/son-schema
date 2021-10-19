"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Statement = new mongoose_1.Schema({
    conversationId: String,
    parentsId: [String],
    kidsId: [String],
    ownerId: String,
    text: String,
    scoringByOthers: [{
            type: String,
            agragatedValue: Number,
            voters: [{
                    ownerId: String,
                    statmentId: String,
                    score: Number
                }]
        }],
    voteOn: [{
            statmentId: String,
            type: String,
            score: Number // value the user gave upon this spesific type of value
        }]
});
exports["default"] = Statement;
