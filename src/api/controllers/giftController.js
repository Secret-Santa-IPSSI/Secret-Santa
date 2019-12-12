const mongoose = require('mongoose');
const giftModel = require('../models/giftModel');
const Comment = mongoose.model("Gift");

exports.get_all_gifts = (req, res) => {
    Comment.find({post_id: req.params.post_id}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(posts);
        }
    })
}

exports.create_a_gift = (req, res) => {
    req.body.post_id = req.params.post_id;
    let new_comment = new Comment(req.body);

    new_comment.save((error, post) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(201);
            res.json(post);
        }
    })
}

exports.get_a_gift = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.update_a_gift = (req, res) => {
    Comment.findOneAndUpdate({_id: req.params.comment_id}, req.body, {new: true}, (error, comment) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.delete_a_gift = (req, res) => {
    Comment.remove({_id: req.params.comment_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({message: "Commentaires supprimé"});
        }
    })
}
