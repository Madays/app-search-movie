import PropTypes from 'prop-types'

function Card({movie}) {
  return (
    <div className="card" >
        <img src={movie.Poster} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Type}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired
}
export default Card
