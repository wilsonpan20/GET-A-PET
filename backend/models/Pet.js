const mongoose = require('../db/conn');

const {Schema} = mongoose;

const Pet = mongoose.model(
    'Pet',
    new Schema({
        name:{
            type:String,
            require:true,
        },
        age:{
            type:NUmber,
            require:true,
        },
        images:{
            type:Array,
            require:true,
        },
        avalible:{
            type:Boolean,
        },
        user:Object,
        adopter:Object,
    },
    {timestamps:true},
    )
)