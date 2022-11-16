const express = require('express');
const router = express.Router();

// Load Topping model
const Topping = require('../../../models/Topping');

// @route GET api/toppings/test
// @description tests toppings route
// @access Public
router.get('/test', (req, res) => res.send('Topping route testing!'));

// @route GET api/toppings
// @description Get all toppings
// @access Public
router.get('/', (req, res) => {
  Topping.find()
    .then(toppings => res.json(toppings))
    .catch(err => res.status(404).json({ notoppingsfound: 'No toppings found' }));
});

// @route GET api/toppings/:id
// @description Get single Topping by id
// @access Public
router.get('/:id', (req, res) => {
  Topping.findById(req.params.id)
    .then(Topping => res.json(Topping))
    .catch(err => res.status(404).json({ notoppingfound: 'No Topping found' }));
});

// @route GET api/toppings
// @description add/save Topping
// @access Public
router.post('/', (req, res) => {
  Topping.create(req.body)
    .then(Topping => res.json({ msg: 'Topping added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Topping' }));
});

// @route GET api/toppings/:id
// @description Update Topping
// @access Public
router.put('/:id', (req, res) => {
  Topping.findByIdAndUpdate(req.params.id, req.body)
    .then(Topping => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/toppings/:id
// @description Delete Topping by id
// @access Public
router.delete('/:id', (req, res) => {
  Topping.findByIdAndRemove(req.params.id, req.body)
    .then(Topping => res.json({ mgs: 'Topping entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Topping exists' }));
});

module.exports = router;