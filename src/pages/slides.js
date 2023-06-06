import React from "react";

function Slides({ slides }) {
  const slideData = [
    {
      id: 1,
      title: "Today is workout Day",
      text: "you made the day",
    },
    {
      id: 2,
      title: "Today is workout Day2",
      text: "you made the day2",
    },
    {
      id: 3,
      title: "Today is workout Day3",
      text: "you made the day3",
    },
    {
      id: 4,
      title: "Today is workout Day4",
      text: "you made the day3",
    },
    {
      id: 5,
      title: "Today is workout Day5",
      text: "you made the day5",
    },
  ];

  const NextSlide = () => {};
  const PrevSlide = () => {};
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>
        <button data-testid="button-next" className="small">
          Next
        </button>
      </div>
      {slideData.map((item) => {
        return (
          <>
            <div id="slide" className="card text-center">
              <h1 data-testid="title">{item.title}</h1>
              <p data-testid="text">{item.text}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Slides;
