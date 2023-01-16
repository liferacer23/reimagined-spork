/**
 * Returns a filled star element.
 * @return {!React.ReactElement}
 */
function FilledStar() {
  return <div className="Star Star-filled" />;
}

/**
 * Returns an empty star element.
 * @return {!React.ReactElement}
 */
function EmptyStar() {
  return <div className="Star" />;
}

/**
 * Renders a 5-star rating element.
 * @param {number} rating - The number of stars that should be filled.
 * @return {!React.ReactElement}
 */
export function Stars({ numStars }) {
  const totalStars = 5;
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < numStars) {
      stars.push(<FilledStar key={i} />);
    } else {
      stars.push(<EmptyStar key={i} />);
    }
  }
  return <div className="Stars">{stars}</div>;
}
