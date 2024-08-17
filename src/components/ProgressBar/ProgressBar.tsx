import styles from "./ProgressBar.module.css";

type Props = {
    max: number;
    step: number;
    onChange: (event:any) => void;
    value: number;
}

export default function ProgressBar({ max, value, step, onChange }:Props) {
  return (
    <input
	    className={styles.styledProgressInput} // Применение стилей к ползунку
	    type="range" // Тип элемента - ползунок
	    min="0" // Минимальное значение ползунка
	    max={max} // Максимальное значение, зависит от длительности аудио
	    value={value} // Текущее значение ползунка
	    step={step} // Шаг изменения значения
	    onChange={onChange} // Обработчик события изменения
	  />
  );
}