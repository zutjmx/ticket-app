import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json({ error: "Failed to fetch tickets" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const ticketData = body.formData || body; // Use formData if available, otherwise use the body directly
    const newTicket = await Ticket.create(ticketData);
    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json({ error: "Failed to create ticket" }, { status: 500 });
  }
}
