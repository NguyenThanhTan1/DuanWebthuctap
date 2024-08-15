    const User = require('../models/user');

    const userController = {
        // GET ALL USERS
        getAllUsers: async (req, res) => {
            try {
                const users = await User.find();
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },

        //DELETE USERS
        deleteUser: async (req, res) => {
            try {
                const user =  User.findById(req.params.id);
                if (!user) return res.status(404).json({ message: 'User not found' });
                res.status(200).json("Delete success");
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },
    }

module.exports = userController;