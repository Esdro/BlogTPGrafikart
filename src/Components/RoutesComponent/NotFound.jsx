// eslint-disable-next-line react/prop-types
export function NotFound({page}) {
    return (
        <>
       <div className="container">
           <div className="row p-5 m-4 align-items-center justify-content-center text-center">
               <div className="col-7">
                   <h1>Page Not Found</h1>

                   <div className="alert alert-danger">
                       Something went wrong. The page <strong>{page}</strong> was not found.
                   </div>
               </div>
           </div>
       </div>
        </>
    )
}