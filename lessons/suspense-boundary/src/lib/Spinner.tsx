import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={`flex flex-1 justify-center items-center ${styles.fadeIn}`}>
      <div
        className="animate-spin inline-block rounded-full w-16 h-16 border-8 border-blue-500 border-t-transparent"
        role="status"
        aria-label="loading"
      />
    </div>
  );
};
