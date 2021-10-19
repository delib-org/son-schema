import {Schema} from 'mongoose';

const Statement = new Schema({
    conversationId:String, // The ID of the conversation
    parentsId:[String], // id references
    kidsId:[String], // id references
    ownerId:String, // id reference
    text:String,
    scoringByOthers:[{
       
        type:String, // type refernce
        agragatedValue:Number,
        voters:[{
            ownerId:String, // id reference
            statmentId: String, // id reference
            score:Number
        }]
    }],     
    voteOn:[{
        statmentId:String, // id reference to the statment which was voted on
        type:String, // type ref
        score:Number // value the user gave upon this spesific type of value
    }]
})

export default Statement;