import React from "react";
import './LessonsListComponent.css'

function LessonsListComponent({ lessonNames, land }) {
  const landBackgrundImageLessonsList = {
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), url(${land.friendImage}), lightgray 50% / cover no-repeat`,
  };

  return (
    <div className="lessonsListContainer">
      <div className="chatContainer">
        <div className="chatHeader">
          <p className="chatHeaderText">Lessons list</p>
        </div>
        <div style={landBackgrundImageLessonsList} className="lessonsList">
          {lessonNames.map((lesson, index) => (
            <div key={index}>
              <p>
                {index + 1}. {lesson.lessonName}
              </p>
              <div style={{ paddingLeft: "10px" }}>
                {lesson.miniLessonsNames.map((miniLessonName, miniIndex) => (
                  <div key={miniIndex}>
                    {index + 1}.{miniIndex + 1} {miniLessonName}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LessonsListComponent;
