import { useState } from 'react';


export default function Bookshelf () {
    // console.log(props)

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBook] = useState({})

      const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.id] : event.target.value })
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({}) //reset form 
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
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )

  }




