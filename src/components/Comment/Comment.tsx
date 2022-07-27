import "./style.scss";

interface Props {
  img: string;
  author: string;
  occupation: string;
  comment: string;
  imageLeft?: boolean;
}

export default function Comment(props: Props) {
  return (
    <div className="comment">
      {props.imageLeft && (
        <img src={props.img} alt="User-2" className="comment__image" />
      )}
      <div className="comment__data">
        <p className="comment__author">{props.author}</p>
        <span className="comment__occupation">{props.occupation}</span>
        <p className="comment__comment">"{props.comment}"</p>
      </div>
      {!props.imageLeft && (
        <img src={props.img} alt="User-2" className="comment__image" />
      )}
    </div>
  );
}
