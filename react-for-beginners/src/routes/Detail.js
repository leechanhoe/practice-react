import { useEffect ,useState} from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState("".json);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
       getMovie();
    }, []);
    console.log(movie);
    return (
        loading ? <h1>Loading..</h1> :
        <div>
            <img src={movie.large_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description_full}</p>
            {movie.hasOwnProperty("genres") ?
            <ul>
            {movie.genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
            : null
            }
        </div>
    
    );
}

export default Detail;