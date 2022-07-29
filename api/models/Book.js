import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:[String],
    },
    description:{
        type:String,
    },
    photos:{
        type:[String],
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    author:{
        type:[String],
    },
    featured:{
        type:Boolean,
        default:false
    },
    bookNumber:[{
        ISBN: {type: Number, required: true},
        price: Number,
        unavailableDates: {type: [Date]} 
    }],

    },
)

export default mongoose.model("Book",BookSchema)