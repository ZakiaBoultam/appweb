import io from "socket.io-client";
import { useState } from "react";
import Chat from '../Components/Chat';

const socket = io.connect("http://localhost:3001");

function Forum() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {isSidebarOpen && (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleSidebar}>
            Fermer
          </div>
          {/* Afficher le chat à l'intérieur du volet */}
          <Chat socket={socket} username={username} room={room} />
        </div>
      )}

      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Rejoindre Une Discussion</h3>
          <input
            type="text"
            placeholder="Votre Nom"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Salle à Rejoindre"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom} >Rejoindre Une Salle</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Forum;