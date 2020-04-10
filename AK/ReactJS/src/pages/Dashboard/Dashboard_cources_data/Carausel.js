import React from 'react';
import  './Carausel.scss';

const Subjectfirst = (props) => {
    const [selectedIdx, setSelectedIdx] = React.useState(0);
    const [slideOrder, setSlideOrder] = React.useState(['s4', 's5', 's1', 's2', 's3']);
    const [slideStyles, setSlideStyles] = React.useState({});
    const rotate = (slides) => {
      const [s1, s2, s3, s4, s5] = slides;
      setSlideStyles({
        [s1]: { transform: 'translateX(-40rem)', opacity: 0 },
        [s2]: { transform: 'translateX(-19rem)', opacity: 1 },
        [s3]: { transform: 'translateX(0)', opacity: 1 },
        [s4]: { transform: 'translateX(19rem)', opacity: 1 },
        [s5]: { transform: 'translateX(40rem)', opacity: 0 },
      });
      setSlideOrder(slides);
    };

    // rotate slides left by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [3, 4, 5, 1, 2]
    const rotateLeft = (spaces = 1) => {
      const s = slideOrder.map((_, i) => slideOrder[(i + spaces) % slideOrder.length]);
      setSelectedIdx((selectedIdx + spaces) % 5);
      rotate(s);
    };
  
    // rotate slides right by n spaces: e.g. 2 spaces - [1, 2, 3, 4, 5] -> [4, 5, 1, 2, 3]
    const rotateRight = (spaces = 1) => {
      const s = slideOrder.reduce((result, slide, i) => {
        result[(i + spaces) % slideOrder.length] = slide;
        return result;
      }, []);
  
      setSelectedIdx(4 - ((4 - selectedIdx + spaces) % 5));
      rotate(s);
    };
  
 
  
    return (
      <div className="carousel-wrap">
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={() => rotateLeft()}>
            <i className="carousel-btn__arrow left" />
          </button>
          <ul className="carousel-slide-list">
            {props.tile.map((slide, i) => (
              <CarouselSlideItem
                key={slide.id}
                slide={slide}
                style={slideStyles[`s${slide.id}`]}
                active={selectedIdx === i}
                className={`carousel-slide-item_1 s${slide.id}`}
              />
            ))}
          </ul>
          <button className="carousel-btn next-btn" onClick={() => rotateRight()}>
            <i className="carousel-btn__arrow right" />
          </button>
        </div>
      
      </div>
    );
  };
 const CarouselSlideItem = ({ slide, style, className, active }) => (
    <li className={className} style={style}>
      <div  className="carousel-slide-item__img-link" >
        <img
          src={`${process.env.PUBLIC_URL + 'assets/images/download.jpg'}`}
          className={active ? "active" : ""}
          alt={slide._id}
        />
      </div>
      <div className="carousel-slide-item__body_1">
        <h4>{slide.title}</h4>
        <p>{slide.description}</p>
      </div>
    </li>
  );
  export default Subjectfirst
  
 


  
 
  
  