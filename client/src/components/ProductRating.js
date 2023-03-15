import { Rating } from "@mui/material";
function ProductRating(ratings) {
  const ratingArray = ratings.rating;

  let sum = 0;
  ratingArray.forEach((rating) => {
    sum += rating.rating;
  });
  const finalValue = ratingArray.length > 0 ? sum / ratingArray.length : 0;

  return <Rating name="read-only" value={finalValue} readOnly />;
}

export default ProductRating;
