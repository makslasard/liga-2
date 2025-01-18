import { AppBar, Button, Toolbar } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <Button variant={'outlined'}>Логин</Button>
          <Button variant={'outlined'}>Выйти</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
