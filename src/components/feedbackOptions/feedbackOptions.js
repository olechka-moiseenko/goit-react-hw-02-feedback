import style from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="controls">
      {options.map((option) => (
        <button
          key={option}
          name={option}
          type="button"
          className={style.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
