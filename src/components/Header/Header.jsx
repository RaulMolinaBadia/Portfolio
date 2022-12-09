import { MenuBar } from '../MenuBar/MenuBar'
// import { Title } from '../Title/Title'
import { Image } from '../Image/Image'
import './styles.css'

export const Header = () => {
  return (
    <header className='containerHeader'>
      <Image link='/vite.svg'></Image>
      {/* <Title title='DjRaulito' /> */}
        <MenuBar/>
    </header>
  )
}
