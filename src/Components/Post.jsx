/* eslint-disable */
/**
 * Post card
 * @param {number} id
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @param {null} buttonLabel
 * @param {null} href
 * @returns {JSX.Element}
 * @constructor
 */
export function Post({id, image, title, description, buttonLabel=null, href=null}) {


   // console.log({ id, image, title, description, buttonLabel, href });
    const showButton = !!(href && buttonLabel)
    return (
        <>
            <div className="card m-2 col-5 col-lg-4 " key={id}>
                { image && <img src={image} className="card-img-top " alt="..."/>}
                <div className="card-body">
                    {title && <h5 className="card-title">{title}</h5>}
                    {description && <p className="card-text">{description}</p>}
                    { showButton && <a href={href} className="btn btn-primary">{buttonLabel}</a>}
                </div>
            </div>

        </>
    )
}