export default function Message({ sender, text }) {
    return (
      <div className={`my-2 p-2 rounded ${sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"}`}>
        <p>{text}</p>
      </div>
    );
  }
  