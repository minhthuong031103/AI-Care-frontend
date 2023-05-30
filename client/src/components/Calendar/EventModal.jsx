import React, { useContext, useState } from "react";
import GlobalContext from "../../assets/context/GlobalContext";
import { AiOutlineClose} from 'react-icons/ai'
import { BsEmojiHeartEyes, BsEmojiLaughing, BsEmojiSmile, BsEmojiAngry, BsEmojiFrown } from 'react-icons/bs'
import { FaRegSadCry } from 'react-icons/fa'



const iconClasses = [
  BsEmojiHeartEyes,
  BsEmojiLaughing,
  BsEmojiSmile,
  BsEmojiAngry,
  BsEmojiFrown,
  FaRegSadCry,
];

const labelsClasses = [
  "pink",
  "yellow",
  "blue",
  "red",
  "purple",
  "gray",
];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );
   const [isChecked, setIsChecked] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-3/4 border border">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-black font-bold text-xl">
            Hôm nay của bạn thế nào?
          </span>
          <div>
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-blue-500 hover:text-blue-600">
                <AiOutlineClose className="text-xl"/>
              </span>
            </button>
          </div>
        </header>
        <div className="p-3 ">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Tiêu đề"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-black">
              Thời gian
            </span>
            <p className="text-gray-600">{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-black">
              Mô tả
            </span>
            <input
              type="text"
              name="description"
              placeholder="Viết ra dòng cảm xúc"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-black">
              Emoji
            </span>
            <div className="flex gap-x-2">
            {labelsClasses.map((lblClass, i) => {
              const Icon = iconClasses[i];
              return (
                <span
                  key={i}
                  onClick={() => {
                    setSelectedLabel(lblClass);
                    setIsChecked(true); // Đánh dấu là đã chọn
                  }}
                  className={`bg-${lblClass}-500 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                    isChecked && selectedLabel === lblClass ? "border-2 border-black" : ""
                  }`} // Thêm lớp CSS "border-black" khi đã chọn
                >
                  <span className="text-white text-sm">
                    <Icon />
                  </span>
                </span>
              );
            })}
          </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5 gap gap-4">
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-blue-500 hover:text-blue-600 cursor-pointer ml-"
              >
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                >
                  Xoá
                </button>
              </span>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Lưu
          </button>
        </footer>
      </form>
    </div>
  );
}