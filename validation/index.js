const { body } = require('express-validator');

exports.userValidators = [
    body('Name')
        .isLength({ min: 2 })
        .withMessage('the name must to be minimum 2 simbols'),
    body('ID', 'The ID must to be minimum 5 numbers')
        .isLength({ min: 5 })
        .isNumeric()
        .trim(),
    body('IP')
        .isIP()
        .withMessage('Please enter IP')
        .trim(),
    body('Phone', 'The Phone must to be minimum 9 numbers')
        .isNumeric({ no_symbols: false })
        .isLength({ min: 9 })
        .withMessage('the Phone must to be minimum 9 numbers')
        .trim(),
]