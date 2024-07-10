const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // Check if username or email already exists
        const takenUserName = await User.findOne({ username });
        const takenEmail = await User.findOne({ email });

        if (takenUserName || takenEmail) {
            return res.status(403).json({ message: "Username or Email already taken" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user instance
        const newUser = new User({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

        return res.status(201).json({ message: "Successfully created new user" });

    } catch (error) {
        console.error("Error while registering new user", error.message);
        return res.status(400).json({ message: "Error while registering" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid email-ID or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid email-ID or password' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
