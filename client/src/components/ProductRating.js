import { Rating } from "@mui/material";
function ProductRating(ratings) {
  const ratingArray = ratings.rating;

  let sum = 0;
  ratingArray.forEach((rating) => {
    sum += rating.rating;
  });
  const finalValue = ratingArray.length > 0 ? sum / ratingArray.length : 0;

  return (
    <Rating
      name="half-rating-read"
      precision={0.5}
      value={finalValue}
      readOnly
    />
  );
}

export default ProductRating;
