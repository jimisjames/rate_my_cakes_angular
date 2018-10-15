
const mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    commenter_name: { type: String, minlength: 1 },
    comment: { type: String, minlength: 1 },
    rating: { type: Number, min: 1, max: 5 }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

var PostSchema = new mongoose.Schema({
    poster_name: { type: String, minlength: 1 },
    image: { type: String, minlength: 1 },
    description: { type: String, minlength: 1 },
    comments: [CommentSchema]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

mongoose.model('Comment', CommentSchema);
mongoose.model('Post', PostSchema);