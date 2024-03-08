import {useFetchData} from "../CustomHooks/FetchData.jsx";
import {Spinner} from "../Utilities/Spinner.jsx";
import {Alert} from "../Utilities/Alert.jsx";
import { useDocumentTitle, useToggle } from "@uidotdev/usehooks";
import {Button} from "../Utilities/Button.jsx";

/**
 * Page qui affiche un article
 * @param {number} postId
 * @returns {JSX.Element}
 * @constructor
 */
export default function Article({postId}) {

     const [loading, data, error] = useFetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`)
const [editionMode, setEditionMode] = useToggle(false);

    useDocumentTitle(`Mon blog |  ${ data && data.title}`);

    if (loading) return (
        <div className=" row align-items-center justify-content-center m-5">
            <Spinner/>
        </div>
    )

    if (error) return (
        <div className=" row align-items-center justify-content-center m-5">
            <Alert message={error}/>
        </div>
    )

    return (
        <>
        <div className="container ">


            <div className="row align-items-center justify-content-center p-2">

                <h1> {data.title}  </h1>

                <img className={'img-thumbnail img-fluid card-img '} src={`https://picsum.photos/id/${data.id}/400/200`} alt=""/>

                <p className="content">
                    {data.body}
                </p>

            </div>

            <div className="row">
                <div className="edit-article">
                    <Button variant={'info'} onclick={setEditionMode}  > Editer l'article   </Button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <a className={'btn btn-outline-info btn-lg p-2 m-5'} href={`#post:${data.id > 1 ? data.id - 1 : 1}`}> Lire le précédent article </a>
                </div>
                <div className="col">
                    <a className={'btn btn-outline-secondary btn-lg p-2 m-5'} href={`#post:${data.id + 1}`}> Lire
                        le prochain article </a>
                </div>
            </div>
        </div>
        </>
    )
}