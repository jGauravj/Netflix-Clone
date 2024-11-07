import { useEffect, useRef } from "react";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);

    // Clean up the event listener when component unmounts
    return () => currentRef.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-2 text-lg font-semibold">{title? title: "Popular on Netflix"}</h2>
      <div
        className=" flex gap-[10px] overflow-x-scroll card-list"
        ref={cardsRef}
      >
        {cards_data.map((card, index) => (
          <div key={index} className=" flex-shrink-0 relative">
            <img
              src={card.image}
              alt=""
              className="!w-60 rounded-md cursor-pointer"
            />
            <p className=" absolute bottom-[10px] right-[10px]">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
