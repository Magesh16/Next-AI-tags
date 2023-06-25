import { Schema, model, models } from 'mongoose'

const newPostSchema = new Schema({
    userId :{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt : {
        type: String,
        required: [true, 'Some Context is required!!']
    },
    tag:{
        type:String,
        require: [true, 'tag is required']
    }
})

const Prompt = models.Prompt || model('Prompt', newPostSchema);
export default Prompt;