export function reviewStatusToTitle(status) {
  switch(status) {
    case 'SIMULATION_POSITIVE':
      return 'Simulation positive';
    case 'SIMULATION_NEGATIVE':
        return 'Simulation negative';
    case 'SIMULATION_REQUESTED':
      return 'Simulation requested';
    case 'SIMULATION_FINISHED':
      return 'Simulation finished';
    case 'DRAFT':
      return 'Draft';
    default:
      return status;
  }
}

export function reviewStatusToClass(status) {
  switch(status) {
    case 'SIMULATION_POSITIVE':
      return 'positive';
    case 'SIMULATION_NEGATIVE':
        return 'negative';
    default:
      return '';
  }
}

export function getTimeInHumanFormat(stringDate) {
  // remove space in date before timezone offset
  const date = new Date(stringDate.replace(/\s/g, ''));

  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return date.toLocaleString();
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}