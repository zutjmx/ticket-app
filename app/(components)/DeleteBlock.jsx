"use client";

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

const DeleteBlock = ({ id }) => {

  const router = useRouter();

  const handleDelete = async () => {
    // Implement the delete functionality here
    console.log("Delete action triggered")

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("Deleting ticket with ID:", id);
        const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
          method: 'DELETE',
        });

        
        if (!response.ok) {
          Swal.fire(
            'Error!',
            'There was an error deleting your ticket.',
            'error'
          );
          console.error("Error deleting ticket");
        } else {
          Swal.fire(
            'Deleted!',
            'Your ticket has been deleted.',
            'success'
          );
          console.log("Ticket deleted successfully");
          router.refresh();
        }

      }
    });


  }

  return (
    <FontAwesomeIcon 
      icon={faX} 
      className="text-red-400 hover:cursor-pointer hover:text-red-200" 
      onClick={handleDelete} 
    />
  )
}

export default DeleteBlock