import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md h-3/4">
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
