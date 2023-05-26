import Link from 'next/link'

interface UserMenuListProps {
  authorId: string
}
const UserMenuList = ({ authorId }: UserMenuListProps) => {
  return (
    <Link href={`/users/${authorId}`}>
      <li>작성자 정보</li>
    </Link>
  )
}

export default UserMenuList
