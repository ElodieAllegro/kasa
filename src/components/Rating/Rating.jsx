import './rating.scss';
import RatingPink from '../../../public/assets/pinkStar.png';
import RatingGray from '../../../public/assets/grayStars.png';

const Rating = ({ rating }) => {
  const maxRating = 5;

  return (
    <div className="rating">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>
          <img
            src={index < rating ? RatingPink : RatingGray}  
            alt={index < rating ? "Étoile rose" : "Étoile grise"}
            className="star"
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;
