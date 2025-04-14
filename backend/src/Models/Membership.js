import mongoose from "mongoose";

const generateMembershipID = () => {
    const fixedString = "BIBLIOTEK"; 
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return `${fixedString}${randomNumber}`;
};

const memberShipSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique:true
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        preference: {
            type: String,
            required: true,
            default: "Basic",
            enum: ["Basic", "Premium", "Elite"],
        },
        address: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: false,
        },
        membershipType: {
            type: String,
            required: false,
            enum: ["Free", "Paid", "Trial"],
            default: "Paid",
        },
        starting: {
            type: Date,
            default: Date.now,
        },
        ending: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Expired"],
        },
        booksBorrowed: {
            type: Number,
            default: 0,
        },
        maxBooksAllowed: {
            type: Number,
            required: true,
            default: function () {
                switch (this.preference) {
                    case "Basic":
                        return 3;
                    case "Premium":
                        return 5;
                    case "Elite":
                        return 10;
                    default:
                        return 3;
                }
            },
        },
        paymentStatus: {
            type: String,
            required: false,
            enum: ["Paid", "Pending", "Failed"],
            default: "Pending",
        },
        profilePicture: {
            type: String,
            required: false,
        },
        membershipFee: {
            type: Number,
            required: false,
        },
        updatedBy: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        renewalDate: {
            type: Date,
            required: false,
        },
    },
    { timestamps: true }
);

memberShipSchema.pre("save", function (next) {
    if (!this.membershipID) { 
        this.membershipID = generateMembershipID();
    }
    next();
});

const MemberShip = mongoose.models.MemberShip || mongoose.model("MemberShip", memberShipSchema);

export default MemberShip;
