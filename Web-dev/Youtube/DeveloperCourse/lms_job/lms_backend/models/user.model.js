const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
        },
        userImage: {
            type: String,
            default:
                'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Picture.png',
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, 'Email  is required'],
            unique: [true, 'Email  already Exists'],
            index: true,
        },
        mobile: {
            type: String,
            required: [true, 'Mobile is required'],
            unique: [true, 'Mobile already  Exists'],
            index: true,
        },
        password: {
            type: String,
            selected: false,
            required: [true, 'Password is required'],
        },
        roles: {
            type: String,
            lowercase: true,
            default: 'user',
        },
        professions: {
            type: String,
            required: [true, 'Professions is required'],
        },
        isBlocked: {
            type: Boolean,
            default: false,
        },
        passwordChangedAt: {
            Type: Date,
        },
        passwordResetToken: {
            type: String,
        },
        passwordResetExpires: {
            Type: Date,
        },
        stripeAccountId: {
            type: String,
        },
        stripeSeller: {},
        stripeSession: {},
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJWTToken = async function () {
    return await jwt.sign(
        { id: this._id, roles: this.roles, isBlocked: this.isBlocked },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d',
        }
    );
};

userSchema.virtual('userName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model('User', userSchema);
