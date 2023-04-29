import React from "react";

const Container = (props) => {
  return (
    <div
      className={`py-10 shadow-black m-auto 2xl:w-[1400px] lg:w-[1150px] px-40 bg-white shadow-xs dark:bg-neutral-700 ${
        props.className ? props.className : ""
      } `}
    >
      {props.children}
    </div>
  );
};

export default Container;
