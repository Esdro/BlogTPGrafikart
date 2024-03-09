import {useEffect, useRef} from "react";

/**
 * Native dialog modal
 * @param children
 * @param  onClose
 * @returns {JSX.Element}
 * @constructor
 */
export function Modal({children, onClose}) {


    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal()
    })

    const handleClose = (e) => {
        e.preventDefault()
        onClose?.()
    }

    return <dialog
    ref={dialogRef}
    className={' md-custom '}
    onClose={handleClose}
    onCancel={handleClose}>
        {children}
    </dialog>
}