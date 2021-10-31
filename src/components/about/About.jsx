import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>obrkn</span>
              </h3>
              <p>
                　大学時代は地質学を専攻していたため、新卒ではセメント会社に入社し、鉱山運営全般に関わる仕事をしてしました。<br/>
                　業務の中で、ExcelVBAでファイルの転記作業を自動化するプログラムを自作して、プログラミングに魅了されました。<br/>
                　その後、転職活動をするなかで、コードを書くエンジニアの仕事がしたいと思い、2020年4月よりエンジニアとしてのキャリアをスタートしました。
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What is my skill level?</h3>
              <p className="desc">
                　業務では、Ruby on RailsとReact（JavaScript）を書いている時間が大半です。
                たまに、AWSやReactNativeを触ることがあります。<br/>
                　個人では、Golang、React（TypeScript）、インフラはAWS、Firebaseを使うことが多いです。<br/>
                　エディターは、Visual Studio CodeにNeovimのプラグインを入れています。
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  もっと詳しく
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/about/about.jpeg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/img/about/about.jpeg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <span>鉱山管理 5年<br/>+<br/>プログラミング 1.5年</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
