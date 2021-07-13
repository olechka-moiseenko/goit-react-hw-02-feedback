import style from "./Section.module.css";

export default function Section({ title, children }) {
  return (
    <section className={style.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
