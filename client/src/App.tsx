import { Container, Toolbar } from '@mui/material'
import FormLink from './components/FormLink'
import LinksTable from './components/LinksTable'

const App = () => {

  return (
    <Container>
      <Toolbar />
      <FormLink />
      <LinksTable />
    </Container>
  )
}

export default App
