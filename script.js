
// Calculate the time elapsed from a given date to the current time and return it in a human-readable format (minutes, hours, or days).
const timeAgo = (timeStamp) => {
  const currentTime = new Date()
  const lastTime = new Date(timeStamp)

  const minutes = Math.floor((currentTime - lastTime) / 60000)
  const hours = Math.floor((currentTime - lastTime) / 3600000)
  const days = Math.floor((currentTime - lastTime) / 86400000)

  if (minutes < 60) {
    return `${minutes}m ago`
  } else if (hours < 24) {
    return `${hours}h ago`
  } else {
    return `${days}d ago`
  }
}