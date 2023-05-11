import style from './Header.module.scss'
import Image from 'next/image'
import Logo from '../../../icon/parking-area.png'
const header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a href=""><Image
                        src={Logo}
                        alt={''}
                        width={35}
                        height={35}
                    /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Boking</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">List Boking</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default header

