import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CustomIconButton from "./components/CustomIconButton/CustomIconButton";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <img src={"./photo.jpg"} className="profile-pic" alt="profile" />
        <h4 style={{ marginBottom: "-20px" }}>Hello, I&apos;m</h4>
        <h1 className="hover-text">Tanish Garg</h1>

        {/* Buttons */}
        <div className="btn-child-container">
          <Button
            icon="file_download"
            title="Download CV"
            downloadPath={"./resume.pdf"}
          />
          <Button icon="person" title="About Me" onClick={openModal} />
        </div>

        {/* Icon Buttons */}
        <div className="icon-buttons">
          <CustomIconButton
            icon="./linkedin.png"
            link="https://linkedin.com/in/tnshgarg"
          />
          <CustomIconButton
            icon="./instagram.png"
            link="https://instagram.com/thetanishgarg"
          />
          <CustomIconButton
            icon="./communication.png"
            link="mailto:businesswithtanishgarg@gmail.com"
          />
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="About Me"
          className="modal"
          overlayClassName="overlay"
        >
          <button className="close-button" onClick={closeModal}>
            X
          </button>

          <div className="modal-content">
            <h2>About Me</h2>
            <div className="resume-section">
              <h3>Experience</h3>
              <ul>
                <li>Software Developer at Unipe - Aug 2022-Feb 2024</li>
                <li>
                  Mobile App Developer at Binaryveda Solutions - May 2022-Aug
                  2022
                </li>
                <li>
                  Web Development Intern at FartMagazine - Dec 2021-Feb 2022
                </li>
                <li>
                  Mobile Development Intern at Shellcode Solutions - Nov
                  2021-Dec 2021
                </li>
              </ul>
            </div>

            <div className="resume-section">
              <h3>Education</h3>
              <ul>
                <li>
                  B.Tech in Computer Science - Rishihood University (2024)
                </li>
                <li>Delhi Public School - Kaithal (2022)</li>
              </ul>
            </div>

            <div className="resume-section">
              <h3>Achievements</h3>
              <ul>
                <li>Youtube - 26k Subscribers</li>
                <li>Linkedin - 3k Followers</li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
