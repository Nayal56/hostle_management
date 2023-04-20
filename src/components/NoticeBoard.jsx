import React from "react";
import "../NoticeBoard.css";

const notices = [
  {
    id: 1,
    title: "Notice 1",
    description: "This is notice 1",
    file: "http://example.com/notice1.pdf",
  },
  {
    id: 2,
    title: "Notice 2",
    description: "This is notice 2",
    file: "http://example.com/notice2.pdf",
  },
  {
    id: 3,
    title: "Notice 3",
    description: "This is notice 3",
    file: "http://example.com/notice3.pdf",
  },
];

const NoticeBoard = () => {
  return (
    <div className="notice-board-container">
      <h2>Notice Board</h2>
      <div className="notice-board">
        {notices.map((notice) => (
          <div key={notice.id} className="notice">
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <a href={notice.file} download>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
