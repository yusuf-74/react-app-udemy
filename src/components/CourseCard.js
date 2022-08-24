import React from "react";
const Course = (props) => {
  let obj = props["course"];
  return (
    <div className="card_container" key={obj["id"]}>
      <div className="course_photo">
        <img
          src={obj["image"]}
          alt={"Python Course" + obj["id"]}
          className="course-image"
        ></img>
      </div>
      <h3 className="course_decription">{obj["title"]}</h3>
      <p className="course_author">{obj["author"]}</p>
      <div className="rate">
        <span className="rate-number">{obj["rating"]} </span>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star-half-stroke"></i>
      </div>
      <div className="course_price">E£ {obj["price"]}</div>
    </div>
  );
};

export default Course;