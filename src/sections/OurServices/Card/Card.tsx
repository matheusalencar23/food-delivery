import "./style.scss";

interface Props {
  img: string;
  alt: string;
  title: string;
  description: string;
}

export default function Card(props: Props) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.img} alt={props.alt} />
      </div>
      <p className="card__title">{props.title}</p>
      <span className="card__details">{props.description}</span>
    </div>
  );
}
