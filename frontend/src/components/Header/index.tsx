import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo21"/>
                    <h1>RCMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/ramon-waterkemper-casagrande-4b622123b/" target="_blank">@Ramon_Casagrande</a> </p>
            </div>
        </header>

    )
}

export default Header