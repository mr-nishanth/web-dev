import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        //   onClick={() => onClick(index)} , the 2nd onClick came from the parent component
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rating > index ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};
export default Rating;
