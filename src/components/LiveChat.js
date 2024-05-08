import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
import { IoMdSend } from "react-icons/io";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

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
