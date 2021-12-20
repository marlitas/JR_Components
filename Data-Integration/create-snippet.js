//This snippet can be placed in a controller to easily create a new document in a MongoDB collection. 
//The schema for the user follows a standard MongoDB/Mongoose schema setup.

//Require model needed to create new document.
const User = require('../models/user');

//Modify snippet as needed according to schema and 201 response needs
// Create new user => /users/new
exports.newUser = async (req, res, next) => {
    const user = await User.create(req.body);
    //Serialization based on JSON:API specifications
    res.status(201).json({
        data: {
            'type': 'user',
            'id': user._id,
            'attributes': {
                'name': user.name,
                'age': user.age,
                'hobby': user.hobby,
                'surgeon': user.surgeon,
                'dateAdded': user.dateAdded
            }
        }
    })
}