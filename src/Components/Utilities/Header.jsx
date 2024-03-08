import {useToggle} from "../CustomHooks/Toggle.jsx";
import {activeClassIf} from "./ClassName.jsx";

export function Header({page}) {

    const [expanded, setExpanded] = useToggle(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mon Blog </a>
                    <button
                        onClick={setExpanded}
                        className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={expanded} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={"collapse navbar-collapse " + (expanded ? ' show' : '')}
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={activeClassIf(page === 'home', 'nav-link')} aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeClassIf(page === 'contact', 'nav-link')} href="#contact">Contact </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}