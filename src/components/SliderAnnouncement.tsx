"use client";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnnouncementStyle from "./../styles/header-style.module.css";

const Announcements = [
  { id: 1, content: "You can add another announcement here!" },
  { id: 2, content: "Spend $150 to get free shipping!" },
];

export default function SliderAnnouncement() {
  const [index, setIndex] = useState(0);

  setTimeout(() => {
    handleNextAnnouncement();
  }, 5000);

  function handleNextAnnouncement() {
    setIndex((nextIndex) => {
      if (index === Announcements.length - 1) return 0;
      return index + 1;
    });
  }

  function handlePrevAnnouncement() {
    setIndex((prevIndex) => {
      if (index === 0) return Announcements.length - 1;
      return index - 1;
    });
  }
  let announcements = Announcements[index];

  return (
    <div className={AnnouncementStyle["announcement"]}>
      <button
        className={AnnouncementStyle["control-btn"]}
        onClick={handlePrevAnnouncement}
      >
        <FaChevronLeft />
      </button>
      <p>{announcements.content}</p>
      <button
        className={AnnouncementStyle["control-btn"]}
        onClick={handleNextAnnouncement}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
