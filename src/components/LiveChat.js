import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { IoMdSend } from "react-icons/io";
import mock_data from "../utils/mock_data.json"

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      const randomIndex = Math.floor(Math.random() * mock_data.length);
      const randomMessage = mock_data[randomIndex];

      dispatch(
        addMessage({
          name: randomMessage.name,
          message: randomMessage.message,
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full flex p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(addMessage({
            name: "Priyanshu",
            message: liveMessage,
          }));

          setLiveMessage("");
        }}
      >
        <input
          className="w-full px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2">
          <IoMdSend />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
