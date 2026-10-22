import TicketForm from "@/app/(components)/TicketForm"

const TicketPage = async ({ params }) => {
  const { id } = await params

  return (
    <TicketForm/>
  )
}

export default TicketPage