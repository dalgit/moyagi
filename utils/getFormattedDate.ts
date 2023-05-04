import moment from 'moment'

const getFormattedDate = (date: Date) => {
  const currentTime = moment()
  const targetTime = moment(date)
  const differenceTime = currentTime.diff(targetTime)
  const duration = moment.duration(differenceTime)

  if (duration.asSeconds() < 60) {
    return `${Math.round(duration.asSeconds())}초 전`
  }

  if (duration.asMinutes() < 60) {
    return `${Math.round(duration.asMinutes())}분 전`
  }

  if (duration.asHours() < 24) {
    return `${Math.round(duration.asHours())}시간 전`
  }

  return `${Math.round(duration.asDays())}일 전`
}

export default getFormattedDate
