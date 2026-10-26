const StatusDisplay = ({ status }) => {

  const getColorClass = (status) => {
    let colorClass = 'inline-block rounded-full px-2 py-1 text-xs font-semibold '; // Default color class
    switch (status.toLowerCase()) {
      case 'completed':
        return colorClass + 'bg-green-200 text-green-800';
      case 'in progress':
        return colorClass + 'bg-blue-200 text-blue-800';
      case 'not started':
        return colorClass + 'bg-yellow-200 text-yellow-800';
      default:
        return colorClass + 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <span className={getColorClass(status)}>
        {status}
    </span>    
  )
}

export default StatusDisplay