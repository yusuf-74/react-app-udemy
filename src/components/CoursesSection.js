import React from "react";
import Container from "./CoursesContainer";

function Section() {
  return (
    <div className="courses_secondary_container">
            <article>
              <h2 className="head_line">
                Expand your career opportunities with Python
              </h2>
              <p className="short_explination">
                Take one of Udemy’s range of Python courses and learn how to
                code using this incredibly useful language. Its simple syntax
                and readability makes Python perfect for Flask, Django, data
                science, and machine learning. You’ll learn how to build
                everything from games to sites to apps. Choose from a range of
                courses that will appeal to
              </p>
             
              <a className="hover_black" href="/">
                <div className="explore"><span>Explore</span></div>
              </a>
            </article>

      <Container></Container>
    </div>
  );
}

export default Section;