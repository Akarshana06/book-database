// import React from 'react';
import './AddBookForm.css';

 function AddBookForm (){
    return(
        <div>
            <form>
                <label>
                    <h2>Title</h2>
                    <input type="text" required placeholder='Enter your title name' />
                </label>
                <label>
                    <h2>Description</h2>
                    <textarea type="text" required placeholder='Enter the description' />
                </label>
                <label>
                    <h2>Author</h2>
                    <input type="text" required placeholder='Enter your Author' />
                </label>
                <label>
                    <h2>Cover Image URL</h2>
                    <input type="text" required placeholder='Enter the url of image' />
                </label>
            </form>
        </div>
    )
}
export default AddBookForm