const User = require("../models/user"); // Đảm bảo rằng tên model là 'User'
const bcrypt = require('bcrypt');

const authController = {
    // REGISTER 
    registerUser: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            // Kiểm tra đầu vào từ client
            if (!username || !email || !password) {
                return res.status(400).json({ message: "Username, email and password are required" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);   

            // create new user
            const newUser = new User({
                username,
                email,
                password: hashed,  // mã hóa mật khẩu
            }); 

            // save to DB
            const userr = await newUser.save();
            res.status(200).json(userr);
        } catch (err) {
            console.error("Error registering user:", err);
            res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }
    },

    //LOGIN 
    loginUser: async (req, res) => {
       try {
            const user = await User.findOne({username: req.body.username});
            if(!user) {
                res.status(404).json('Wrong username!');
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                 user.password
            );

            if(!validPassword) {
                res.status(404).json( 'Wrong password!');
            }

            const userWithoutPassword = { ...user._doc };
            delete userWithoutPassword.password;

            res.status(200).json(userWithoutPassword);

       } catch (error) {
            console.error("Lỗi đăng nhập người dùng:", error);
            res.status(500).json({ message: 'Lỗi server nội bộ', error: error.message });
       }
    },
};

module.exports = authController;
