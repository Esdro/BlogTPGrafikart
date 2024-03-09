import {Modal} from "./Utilities/Modal.jsx";
import {useState} from "react";

export function EditPostModal({post, onClose}) {

    const [inputTitle, setInputTitle] = useState(post.title);
    const [inputDescription, setInputDescription] = useState(post.body);
    function handleSubmission(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("https://jsonplaceholder.typicode.com/posts/" + post.id, {
            method: "PUT",
            body: data,
        }).then(r => r.json()).then(r => {
            console.log(r)
           // onClose?.()
        }).catch(e => console.log(e));

    }

    return (
        <>
            <div className="container modal-lg">
                <div className="row">
                    <h1> Edition de {post.title}  </h1>
                    <Modal  onClose={onClose}>

                        <form className={'form vstack '} onSubmit={handleSubmission}>
                            <div className="form-group m-2">
                                <label htmlFor="title">Title</label>
                                <input type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} className="form-control" id="title"
                                       placeholder="Enter Title"/>
                            </div>
                            <div className="form-group  m-2">
                                <label htmlFor="body">Description</label>
                                <textarea  value={inputDescription} onChange={e => setInputDescription(e.target.value)} className="form-control" id="body" placeholder="Enter Body"/>
                            </div>
                            <div className=" mt-2 hstack gap-2 justify-content-end mb-2 ">
                                <button className={'btn btn-outline-danger'} onClick={onClose}  type="button"> Cancel </button>
                                <button className={'btn btn-outline-primary'}  type="submit">Update Post</button>
                            </div>
                        </form>


                    </Modal>
                </div>
            </div>


        </>
    )
}