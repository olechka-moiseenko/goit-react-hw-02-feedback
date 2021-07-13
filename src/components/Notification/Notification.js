import style from "./Notification.module.css";
export default function Notification({ message }) {
  return <p className={style.notification}>{message}</p>;
}
