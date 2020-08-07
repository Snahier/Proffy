export default function convertHourToMinutes(time: string) {
  const minutesPerHour = 60

  const [hour, minutes] = time.split(":").map(Number)

  const timeInMinutes = hour * minutesPerHour + minutes

  return timeInMinutes
}
