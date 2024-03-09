/**
 *
 * @param {any} children
 * @param {"primary"| "secondary" | "info"|  "dark"  } variant
 * @returns {JSX.Element}
 * @constructor
 */
export function Button({ children, variant, onClick }) {
    return <button className={` btn btn-${variant} `} onClick={onClick} >
        {children}
    </button>
}