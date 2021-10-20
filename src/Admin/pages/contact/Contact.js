import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/message", {
        pseudo: name,
        email,
        message,
      });
      if (response) {
        toast.success("Message envoyé");
      }
    } catch (error) {
      toast.error("Error lors de l'envoie du message");
    }
  };
  return (
    <div className="containerContac">


      <div className="contactBody">


        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Envoyer un message</h2>

            <div className="inputBox+">
              <input
                className="innerContact"
                type="text"
                name=""
                required="required"
                placeholder="Nom et Prénom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inputBox+">
              <input
                className="innerContact"
                type="text"
                name=""
                required="required"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputBox+">
              <textarea
                className="innerContact"
                required="required"
                placeholder="Taper votre message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="inputBox+">
              {/* onClick={() => handleSend(params.row.id)} */}
              <input className="send" type="submit" name="" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;