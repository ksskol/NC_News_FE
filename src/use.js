export function formatDate(date) {
    return date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  }
  
 export function formatTime(time) {
    return time.slice(11, 16);
  }