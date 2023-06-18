const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
            required: [true, 'Password is required'],
        },
        roles: {
            type: String,
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

module.exports = mongoose.model('User', userSchema);
