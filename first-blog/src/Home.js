import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id); //vrnem new filtered array based on original array
      setBlogs(newBlogs); //blogu nastavim novo vrednost, če je id enak id-ju v tabeli se zbriše
    }

    useEffect(() => {
      fetch('http://localhost:8000/blogs')  //promise... ko se to zgodi bo sprožlo funkcijo then
          .then(res => {
            console.log(res);
            if (!res.ok) {
              setIsLoading(false);
              throw Error('Could not Fetch the data for that resource.');
            }
            return res.json();
          })
          .then((data) => {
            setBlogs(data);
            setIsLoading(false);
          })
          .catch(err => {   //catcha kakršenkoli network error
            setError(err.message);
          })
    }, []);



    return (
      <div className="home">
        { error && <div>{error}</div> }
        { isLoading && <div>Loading data from server...</div> }
        <BlogList blogs={blogs} title="All blogs:" handleDelete={handleDelete}/>
      </div>
    );
  }
   
  export default Home;