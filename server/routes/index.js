var express = require('express');
var router = express.Router();
var Human = require('../models/humans');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET all humans
router.get('/humans', function(req, res, next) {
  Human.find(function (err, data){
    if (err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//GET single human
router.get('/animals/:id', function(req, res, next){
  Human.findById(req.params.id, function (err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
  res.render('index', { title: 'Express' });
});

//POST all humans
router.post('/humans', function(req, res){
  newHuman = new Human({
    name: req.body.name,
    age: req.body.age,
    ethnicity: req.body.ethnicity
  });
  newHuman.save(function(err, data){
    if (err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//PUT single human
router.put('/human/:id', function(req, res) {
  var update = {
    name: req.body.name,
    age: req.body.age,
    ethnicity: req.body.ethnicity
  };
  Human.findByIdAndUpdate(req.params.id, update, function(err, data){
    if (err){
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//DELETE single human
router.delete('/human/:id', function(req, res, next){
  Human.findByIdAndRemove(req.params.id, function (err, data){
    if (err){
    res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;