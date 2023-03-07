import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
const CustomHeader = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flex-between">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flex-between">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">No chat selected</p>
        )}
      </div>
    </div>
  );
};
export default CustomHeader;
