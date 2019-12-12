const mongoose = require('mongoose');
const personModel = require('../models/personModel');
const Post = mongoose.model("Person");

exports.list_all_persons =  (req, res) => {
    Post.find({}, (error, posts) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(posts);
        }
    })
};

exports.create_a_person = (req, res) => {
    let new_post = new Post(req.body);

    new_post.save((error, post) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur"});
        }
        else {
            res.status(200);
            res.json(post);
        }
    })
};

exports.get_a_person = (req, res) => {
    Post.findById(req.params.post_id, (error, post) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(post);
        }
    })
}

exports.update_a_person = (req, res) => {
    Post.findOneAndUpdate({_id: req.params.post_id}, req.body, {new: true}, (error, post) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else {
            res.status(200);
            res.json('Update successfully');
        }
    });
};

exports.delete_a_person = (req, res) => {
    Post.remove({_id: req.params.post_id}, (error) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Server error"});
        }else{
            res.status(200);
            res.json({message: 'Article supprimé'});
        }
    });
};