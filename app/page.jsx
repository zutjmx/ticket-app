import TicketCard from "./(components)/TicketCard"

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', { cache: 'no-store' });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return { error: "Failed to fetch tickets" };
  }
}

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">        
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard