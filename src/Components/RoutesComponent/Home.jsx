import {useFetchData} from "../CustomHooks/FetchData.jsx";
import {PostsWrapper} from "../PostsWrapper.jsx";
import {Spinner} from "../Utilities/Spinner.jsx";
import {Alert} from "../Utilities/Alert.jsx";

export default function Home() {

    const [loading, data, error] = useFetchData('https://jsonplaceholder.typicode.com/posts?_limit=12')


    if (loading) return (
        <div className={'container'}>
            <div className=" row align-items-center justify-content-center m-5">
                <Spinner/>
            </div>
        </div>
    )

    if (error) return (
        <div className={'container'}>
            <div className=" row align-items-center justify-content-center m-5">
                <Alert message={error}/>
            </div>
        </div>
    )


    return (
        <>

            <div className="container">
                <h1 className={'col-9 p-2 mt-3'} > Bienvenu sur mon Blog - Esdras Florian   </h1>

                <div className="row align-items-center justify-content-center mb-3">
                    
                    {data && <PostsWrapper posts={data} />}
                </div>

            </div>




         </>

    )
}