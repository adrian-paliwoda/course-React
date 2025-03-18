import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header({numberElementsInCart = 0, title = "React Food"}) {

    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant'/>
            <h1>{title}</h1>
        </div>
        <nav>
            <Button textOnly>Card ({numberElementsInCart})</Button>
        </nav>
    </header>)
}