import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav text-default-text p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-default-text font-bold text-lg">
          <FontAwesomeIcon icon={faHome} className="icon" />
          
        </Link>

        <Link href="/TicketPage/new" className="text-default-text font-bold text-lg">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          
        </Link>
      </div>
      
      <div>
        <p className="text-default-text">zutjmx@gmail.com</p>
      </div>
    </nav>
  )
}

export default Nav