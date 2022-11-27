const Tag = ({precio, bpm, genre}) => {
  return <div className="card__tag">
          <span >{precio}</span>
          <span >{bpm}</span>
          <span >{genre}</span>
          </div>
}

export default Tag;