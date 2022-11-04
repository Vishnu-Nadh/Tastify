import React from "react";
import styles from "./Pagination.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({
  currentPage,
  totalPages,
  onClickPrevious,
  onClickNext,
}) => {
  return (
    <section className={styles.pagination}>
      {currentPage !== 1 && (
        <button
          className={styles.pagination__previous}
          onClick={onClickPrevious}
        >
          <span>{currentPage - 1}</span>
          <AiOutlineArrowLeft className={styles.pagination__icon} />
        </button>
      )}
      <div className={styles.pagination__current}>
        <span>{currentPage}</span>
      </div>
      {currentPage !== totalPages && totalPages !== 1 && (
        <button className={styles.pagination__next} onClick={onClickNext}>
          <AiOutlineArrowRight className={styles.pagination__icon} />
          <span>{currentPage + 1}</span>
        </button>
      )}
    </section>
  );
};

export default Pagination;
