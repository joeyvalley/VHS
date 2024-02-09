export default function Artist({ artist, URL }) {
  return (
    <div className="artist-container">
      <div className="artist-img-container">
        <img src={`/assets/${URL}`} alt={artist} />
      </div>
      <h2>{artist}</h2>
    </div>
  )
}