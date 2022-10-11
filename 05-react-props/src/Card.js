
function Card(props) {
    return (
    <>
        <div className='card'>
          <img src={props.imgSrc} alt='No img found' className='card_img'/>
          <div className='cardInfo'>
            <span className='card_genere'>{props.genere1}</span>
            <span className='card_genere'>{props.genere2}</span>
            <h2 className='card_title'>{props.title}</h2>
            <a href={props.targetURL} target="_blank"  className="card_button">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
    </>
    );
  }
  
  
  export default Card;
  