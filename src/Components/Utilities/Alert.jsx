export function Alert({type="info", message }) {
    return (
        <>

            <div className={'alert   my-4   alert-' + type} role="alert">
                {message}
            </div>

        </>
    )
}