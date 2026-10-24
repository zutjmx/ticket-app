import mongoose, {Schema} from "mongoose";
import { React } from "react";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    }, 
    { timestamps: true }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;