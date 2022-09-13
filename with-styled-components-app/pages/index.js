import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/**
 * Home is referenced to stylized webpage in import statements
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return <Title>My page</Title>
}
