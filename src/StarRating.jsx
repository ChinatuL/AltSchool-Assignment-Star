function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */
  
  let arr = [];
  for (let i = 0; i < rating; i++) {
    arr.push(i);
  }

  return (
    <div className="star-wrapper">
      {arr.map((item, index) => (
        <img
          key={index}
          alt="star"
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
}

export default StarRating;
