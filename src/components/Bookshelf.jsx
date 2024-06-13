import { useState } from 'react';


export default function Bookshelf () {
    // console.log(props)

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBook] = useState({title: '', author: ''})

      const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.id] : event.target.value })
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({title: '', author: ''}) //reset form 
        console.log(books) //display data from form 
      }
      

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" id="title" onChange={handleInputChange} value={newBook.title}/>

                <label htmlFor="author">Author</label>
                <input type="text" placeholder="Author" id="author" onChange={handleInputChange} value={newBook.author}/>

                <button type="submit">Add Book</button>
            </form>

        </div>
        <div className="bookCardsDiv">
                {books.map((book, index) => 
                    <div className="bookCard" key={index}>

                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                    </div>
                
                )}
            </div>
        </div>
    )

  }




