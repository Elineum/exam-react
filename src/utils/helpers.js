export function fieldId(field) {
  switch (field) {
    case "vote_avg":
      return (a, b) => (a[field] > b[field] ? -1 : 1);
    case "release":
      return (a, b) => (a[field] > b[field] ? -1 : 1);
    default:
      return (a, b) => (a[field] > b[field] ? 1 : -1);
  }
}
