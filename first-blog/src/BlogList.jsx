const BlogList = ({blogs, title, handleDelete}) => {   //props pomeni da bom dobil blogs iz home.jsx tuki in bom lahko uporablu
    //const blogs = props.blogs; 
    //const title = props.title;

    return (  
        <div className="home">
          <h1>{title}  </h1>
        {blogs.map((blog) => (  //loop čez seznam in outputa list
          <div className="blog-preview" key={blog.id}> {/*react rabi key, da tracka items vsak blog ima svoj ID*/}
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}.</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Post</button>
          </div>
        ))}
        </div>
    );
}
 
export default BlogList;