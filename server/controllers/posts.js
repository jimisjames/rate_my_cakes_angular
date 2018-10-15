
/* var moment = require('moment'); */
var fs = require('fs');
const mongoose = require('mongoose'),
Comment = mongoose.model('Comment')
Post = mongoose.model('Post')


module.exports = {

    new: function(req, res) {
        var post = new Post({ poster_name: req.body.name, description: req.body.description, image: req.body.image });
        console.log(post)
        post.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "error", post: "not added"});
            } else {
                //console.log('successfully added a task!');
                res.json({message: "Success", post: "added"});
            }
        })
    },

    index: function(req, res) {
        Post.find({}, function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {

                res.json({message: "Success", posts: data});
            }
        })
    },

    comment: function(req, res, id){
        Comment.create(req.body, function(err, data){
            if (err) {
                console.log('something went wrong, comment not saved');
                res.json({message: "Error", error: err});
            } else {
                Post.findOneAndUpdate({_id: id}, {$push: {comments: data}}, function(err, data){
                    if (err) {
                        console.log('something went wrong, comment not saved to post');
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message: "Success", post: data});
                    }
                })
            }
        })
    },

    profile: function(req, res, id) {
        Post.findOne({ _id: id }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "error", post: err});
            } else {
                res.json({message: "Success", post: data});
            }
        })
    },

    findByPoster: function(req, res, name) {
        Post.find({ poster_name: {$regex: name, $options: "i"} }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "error", posts: err});
            } else {
                res.json({message: "Success", posts: data});
            }
        })
    }
};