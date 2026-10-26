import Ticket from "@/app/(models)/Ticket";
import {NextResponse} from "next/server";

export async function GET({ params }) {
    try {
        const { id } = params;
        const ticket = await Ticket.findById(id);
        return NextResponse.json(ticket, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching ticket" }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        const deletedTicket = await Ticket.findByIdAndDelete(id);

        if (!deletedTicket) {
            return NextResponse.json({ message: "Ticket not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Ticket deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting ticket:", error);
        return NextResponse.json({ message: "Error deleting ticket", error }, { status: 500 });        
    }
}
