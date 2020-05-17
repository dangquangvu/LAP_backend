const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
let SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, "Địa chỉ email không hợp lệ"]
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    },
    // friend: {
    //     type: Object,
    //     default: []
    // },
    img: {
        type: String,
        default: ""
    },
    online: {
        type: Boolean,
        default: false
    }
}, { usePushEach: true });
UserSchema.index({ email: 1 }, { background: true });

UserSchema.pre("save", function(next) {
    var user = this;
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password).then(data => {
            return resolve(data);
        });
    });
};

module.exports = mongoose.model("Author", UserSchema);