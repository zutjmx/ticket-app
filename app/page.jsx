import TicketCard from "./(components)/TicketCard"
import Swal from 'sweetalert2';

const getTickets = async () => {
  try {
    Swal.fire({
      title: 'Cargando tickets...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await fetch('http://localhost:3000/api/Tickets', { cache: 'no-store' });
    const data = await res.json();
    Swal.close();
    return data;
  } catch (error) {
    Swal.close();
    console.error("Error fetching tickets:", error);
    return { error: "Failed to fetch tickets" };
  }
}

const Dashboard = async () => {

  const tickets = await getTickets();

  console.log('tickets: ', tickets);

  const uniqueCategories = [...new Set(tickets.map(ticket => ticket.category))];
  console.log('uniqueCategories: ', uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
          <div className="mb-4" key={categoryIndex}>
            <h2 key={categoryIndex} className="text-2xl font-bold mb-4">{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              {tickets.filter(ticket => ticket.category === uniqueCategory).map((ticket, ticketIndex) => (
                <TicketCard id={ticketIndex} key={ticketIndex} ticket={ticket} />
              ))}
            </div>
          </div>
        ))}        
      </div>
      
    </div>
  )
}

export default Dashboard