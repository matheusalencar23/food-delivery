import { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import "./style.scss";

interface Props {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  variant: "primary" | "secondary";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
  const type = props.type || "button";
  const onClick = props.onClick || (() => {});
  const styles = classNames("button", `button__${props.variant}`);

  return (
    <button type={type} onClick={onClick} className={styles}>
      {props.children}
    </button>
  );
}
