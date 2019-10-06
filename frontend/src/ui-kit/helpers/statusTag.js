export const STATUSES = {
  IN_REVIEW: 'IN_REVIEW',
  REVIEW_FINISHED: 'REVIEW_FINISHED',
}

export function getTagTitle(type) {
  switch(type) {
    case STATUSES.IN_REVIEW:
      return 'In Review';
    case STATUSES.REVIEW_FINISHED:
      return 'Finished';
    default:
      return '';
  }
}

export function getTagColor(type) {
  switch(type) {
    case STATUSES.IN_REVIEW:
      return 'yellow';
    default:
      return 'white';
  }
}