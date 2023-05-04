import getFormattedDate from '@/utils/getFormattedDate'

interface DateProps {
  date: Date
}
const Date = ({ date }: DateProps) => {
  const FormattedDate = getFormattedDate(date)

  return <span>{FormattedDate}</span>
}

export default Date
