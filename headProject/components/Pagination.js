import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Pagination = (props) => {
  const dispatch = useDispatch();
  const allDataQuestions = useSelector((state) => state.allDataQuestions);
  const setData = (i) => {
    dispatch({
      type: "pagination",
      dataPagination: i,
    });
  };

  let numberBtns = Math.floor(allDataQuestions.length / 2);
  allDataQuestions.length % 2 !== 0 ? numberBtns++ : numberBtns;

  let btns = [];

  for (let i = 0; i < numberBtns; i++) {
    btns.push(
      <Fragment key={i}>
        <input className="btn_pagination" type="button" defaultValue={i + 1} onClick={() => setData(i + 1)} />
      </Fragment>
    );
  }

  return btns;
};

export default Pagination;
