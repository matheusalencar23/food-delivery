import "./style.scss";
import Star from "../../components/Icons/Star";
import React from "react";

interface Props {
  rating: number;
}

export default function Rating(props: Props) {
  function renderStars(): React.ReactNode[] {
    let stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<Star />);
    }
    return stars;
  }

  return (
    <div className="rating">
      <span>{props.rating}</span>
      {renderStars().map((el, i) => (
        <React.Fragment key={i}>{el}</React.Fragment>
      ))}
    </div>
  );
}
