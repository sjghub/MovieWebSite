import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [year, setYear] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setYear(json.data.movie.year);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      <h2>{year}</h2>
    </div>
  );
}
export default Detail;
