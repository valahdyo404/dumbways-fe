import Avatar from "../../assets/avatar.png"
import Admin from "../../assets/admin.png"

export default function Message({ contact, user, messages, sendMessage }) {
  return (
    <>
      {contact ? (
        <>
          <div
            id="chat-messages"
            style={{ height: "80vh" }}
            className="overflow-auto px-3 py-2"
          >
            {messages.map((item, index) => (
              <div key={index}>
                <div
                  className={`d-flex py-1 ${
                    item.idSender !== user.id
                      ? "justify-content-start"
                      : "justify-content-end"
                  }`}
                >
                  {item.idSender !== user.id && (
                    <img
                      src={user.listAs === 1 ? Avatar : Admin}
                      className="rounded-circle me-2 mr-3 img-chat"
                      alt="bubble avatar"
                    />
                  )}
                  <div
                    className={
                      item.idSender !== user.id ? "chat-other" : "chat-me"
                    }
                  >
                    {item.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: "6vh" }} className="px-3">
            <input
              placeholder="Send Message"
              className="input-message px-4"
              onKeyPress={sendMessage}
            />
          </div>
        </>
      ) : (
        <div
          style={{ height: "89.5vh", color: "#d2d2d2" }}
          className="h4 d-flex justify-content-center align-items-center"
        >
          No Message
        </div>
      )}
    </>
  )
}
