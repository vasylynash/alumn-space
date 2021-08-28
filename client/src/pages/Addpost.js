import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Addpost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body };

        setIsPending(true);

        //Add the mutation method here to send the new post to the db

        //Then when added setPending back to false and
        //use the useHistory to send user back to homepage

        //setIsPending(false);
        //history.push('/');
    }

    return ( 
        <div>
            <Header />
        <div className="addpost">
            <h3>Add a New Post</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    required value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                { !isPending && <button>Add Post</button> }   
                { isPending && <button disabled>Adding post...</button> }  
            </form>
            <Link to="/home">
                <button>
                    Back to Homepage
                </button>
            </Link>
        </div>
        </div>
     );
}
 
export default Addpost;