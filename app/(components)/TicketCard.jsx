import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StatusDisplay from "./StatusDisplay"

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Título del Ticket</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        Esta es la descripción del ticket. 
        Aquí se puede escribir información detallada sobre el problema o la solicitud que se está reportando.
      </p>
      <div className="grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="my-1 text-xs">17/10/2026 16:35</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>      
    </div>
  )
}

export default TicketCard