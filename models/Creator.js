import mongoose from 'mongoose';

const CreatorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model('Creator', CreatorSchema);