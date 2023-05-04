import styled from 'styled-components'
import Date from './Date'
import Status from './Status'

interface RegistrationHeaderProps {
  name: string
  date: Date
  status: string
}

const RegistrationHeader = ({
  name,
  date,
  status,
}: RegistrationHeaderProps) => {
  return (
    <>
      <RegistrationHeaderLayout>
        <h3>{name}</h3>
        <Wrapper>
          <Status status={status} />
          <Date date={date} />
        </Wrapper>
      </RegistrationHeaderLayout>
    </>
  )
}

export default RegistrationHeader

const RegistrationHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 11px;
`
