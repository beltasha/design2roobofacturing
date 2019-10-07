export const REVIEW_STATUS = {
  SIMULATION_POSITIVE: 'SIMULATION_POSITIVE',
  SIMULATION_NEGATIVE: 'SIMULATION_NEGATIVE',
  SIMULATION_REQUESTED: 'SIMULATION_REQUESTED',
  SOLVED: 'SOLVED',
  DRAFT: 'DRAFT',
}

export function reviewStatusToTitle(status) {
  switch(status) {
    case REVIEW_STATUS.SIMULATION_POSITIVE:
      return 'Simulation positive';
    case REVIEW_STATUS.SIMULATION_NEGATIVE:
        return 'Simulation negative';
    case REVIEW_STATUS.SIMULATION_REQUESTED:
      return 'Simulation requested';
    case REVIEW_STATUS.SOLVED:
      return 'Simulation finished';
    case REVIEW_STATUS.DRAFT:
      return 'Draft';
    default:
      return status;
  }
}

export function reviewStatusToClass(status) {
  switch(status) {
    case REVIEW_STATUS.SIMULATION_POSITIVE:
      return 'positive';
    case REVIEW_STATUS.SIMULATION_NEGATIVE:
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