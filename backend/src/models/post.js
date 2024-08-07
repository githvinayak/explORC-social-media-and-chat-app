import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxLength: 500,
    },
    image: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    replies: {
      type: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
          userProfilePic: {
            type: String,
          },
          username: {
            type: String,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
