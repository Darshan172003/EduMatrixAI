import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: {
        public_id: string;
        url: string;
    },
    role: string;
    isVerified: boolean;
    courses: Array<{ courseId: string }>;
    comparePassword: (password: string) => Promise<boolean>;
    SignAccessToken: () => string;
    SignRefreshToken: () => string;
}

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: {
            validator: function (value: string) {
                return emailRegexPattern.test(value);
            }
        }
    },
    password: {
        type: String,
        // required: [true, "Please enter your password"],
        minlength: [6, "Your password must be longer than 6 characters"],
        select: false
    },
    avatar: {
        url: String,
    },
    role: {
        type: String,
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    courses: [
        {
            courseId: String,
        }
    ],
}, { timestamps: true });


// Hash Password Before Saving

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// sign access token
userSchema.methods.SignAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || "", {
        expiresIn: "5m",
    });
};

// sign refresh token
userSchema.methods.SignRefreshToken = function () {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN || "", {
        expiresIn: "3d",
    });
};



userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

const userModel: Model<IUser> = mongoose.model("User", userSchema);

export default userModel;