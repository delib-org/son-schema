import {Schema} from 'mongoose';

const Statement = new Schema({
    conversationId:String, // The ID of the conversation
    parentsId:[String], // id references
    kidsId:[String], // id references
    ownerId:String, // id reference
    text:String,
    evaluateByOthers:[{
       
        type:String, // type refernce. WRITEN IN CAPITAL LETTERS
        agragatedValue:Number,
        evaluators:[{
            ownerId:String, // id reference
            statmentId: String, // id reference
            score:Number
        }]
    }],     
    evaluate:[{
        statmentId:String, // id reference to the statment which was voted on
        type:String, // type of evaluation.WRITEN IN CAPITAL LETTERS
        score:Number, // value the user gave upon this spesific type of value
        units:String
    }]
})

export default Statement;