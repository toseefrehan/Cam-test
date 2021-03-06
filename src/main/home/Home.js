import React, { Component } from "react";
import "./component/styles/Home.css";
// import "./styles/bootstrap.css";
import { Button } from "react-bootstrap";
import QuestionSec from "./component/QuestionSec";
import SearchIcon from "@material-ui/icons/Search";
import demoTwoImg from "../../assets/images/demo2.png";
import demoImg from "../../assets/images/demo.png";
import EllipseImg from "../../assets/images/Ellipse.png";
import MicImg from "../../assets/images/mic.png";
import VideoImg from "../../assets/images/video.png";
import YoutubeImg from "../../assets/images/Youtube.png";
import FacebookImg from "../../assets/images/Facebook.png";
import TwitterImg from "../../assets/images/Twitter.png";
import WhatsAppImg from "../../assets/images/WhatsApp.png";
import CamImgPrimary from "../../assets/images/videoprimary.png";
import MicImgPrimary from "../../assets/images/micprimary.png";
import AudioAnalyser from "./component/AudioAnalyser";
// Dummt data for question
const Question = [
  {
    id: 0,
    question: "How do i add text to GIFs?",
    answer: "Adding text to GIF using Keevi is an easy 3-step process:",
    list: [
      {
        id: 0,
        value: "1. Upload the GIF or small video",
      },
      {
        id: 1,
        value:
          "2. Resize video if need be. Then add text and edit it to meet your taste. ",
      },
      {
        id: 2,
        value: "3. Save and share your video.",
      },
    ],
  },
  {
    id: 1,
    question: "Can i add animated text to GIF?",
    answer: "",
    list: null,
  },
  {
    id: 2,
    question: "How do i label GIF?",
    answer: "",
    list: null,
  },
  {
    id: 3,
    question: "Does Keevi work the same as the Ezgif add text function?",
    answer: "",
    list: null,
  },
  {
    id: 4,
    question: "How do i edit GIF text?",
    answer: "",
    list: null,
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraSec: false,
      cameraWorking: false,
      audioWorking: false,
      microphoneSec: false,
      audioPermission: true,
      videoPermisson: true,
      audio: null,
      cameraOn: false,
    };
  }

  getMicrophone = async () => {
    try {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      this.setState({
        cameraWorking: false,
        audioWorking: true,
        audioPermission: true,
      });
      this.setState({ audio });
    } catch (e) {
      console.log("eeeeee", e);
      this.setState({
        audioPermission: false,
      });
    }
  };

  stopMicrophone = () => {
    this.state.audio.getTracks().forEach((track) => track.stop());
    this.setState({ audio: null });
  };

  toggleMicrophone = () => {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  };

  // getCamer func
  getCamera = async (constraints) => {
    let that = this;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        console.log("mediaStream", mediaStream);
        that.setState({
          cameraOn: true,
          cameraWorking: true,
          audioWorking: false,
          videoPermisson: true,
        });
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          console.log("eeeeee", e);
          video.play();
        };
      })
      .catch(function (err) {
        that.setState({
          videoPermisson: false,
          cameraOn: false,
        });
        console.log(err.name + ": " + err.message);
      });
  };
  // getAudio func
  getAudio = async (constraints) => {
    let that = this;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        console.log("mediaStream", mediaStream);
        that.setState({
          cameraWorking: false,
          audioWorking: true,
          audioPermission: true,
        });
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          console.log("eeeeee", e);
          video.play();
        };
      })
      .catch(function (err) {
        that.setState({
          audioPermission: false,
        });
        console.log(err.name + ": " + err.message);
      });
  };
  renderAudioTestSection = () => {
    return (
      <>
        <div class="row  justify-content-center ">
          <div class={"col-md-4 permission-denied "}>
            <h5 style={{ textAlign: "left" }}>
              {"Get started, it's as easy as..."}
            </h5>
            <ol
              className="listStyle"
              style={{
                textAlign: "left",
                paddingLeft: 20,
                paddingTop: 5,
              }}
            >
              <li>
                <span style={{ color: "black", fontSize: 16 }}>
                  Click the button to grant mic access.
                </span>
              </li>
              <li>
                <span style={{ color: "black", fontSize: 16 }}>
                  Make some noise!
                </span>
              </li>
              <li>
                <span style={{ color: "black", fontSize: 16 }}>
                  If you see the waveform move - you're good to go.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div
          class="row  justify-content-center "
          style={{}}
          onClick={() => {
            this.toggleMicrophone();
          }}
        >
          <div className={"col-md-4 box"} style={{ padding: 12 }}>
            <img src={MicImgPrimary} />
            <span style={{ paddingLeft: 20, color: "black", fontSize: 16 }}>
              Click here to Grant Mic Access
            </span>
            {/* {this.state.audio ? " Stop microphone" : "Start microphone"} */}
          </div>
        </div>
      </>
    );
  };

  renderVideoTestingSection = () => {
    let constraints = {
      video: { width: 500, height: 300 },
    };
    return (
      <>
        <div class="row  justify-content-center ">
          <div class={"col-md-4 permission-denied "}>
            <h5 style={{ textAlign: "left" }}>
              {"Get started, it's as easy as..."}
            </h5>
            <ol
              className="listStyle"
              style={{
                textAlign: "left",
                paddingLeft: 20,
                paddingTop: 5,
              }}
            >
              <li>
                <span style={{ color: "black", fontSize: 16 }}>
                  Click the button to grant cam access.
                </span>
              </li>
              <li>
                <span style={{ color: "black", fontSize: 16 }}>Smile!</span>
              </li>
              <li>
                <span style={{ color: "black", fontSize: 16 }}>
                  If you see movement - you're good to go.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div class="row  justify-content-center ">
          <div
            className={"col-md-4 box"}
            style={{ padding: 12 }}
            onClick={() => {
              this.getCamera(constraints);
            }}
          >
            <img src={CamImgPrimary} class="demo" />
            <span style={{ paddingLeft: 20, color: "black", fontSize: 16 }}>
              Click here to Grant Cam Access
            </span>
          </div>
        </div>
      </>
    );
  };
  // Main render
  render() {
    let constraints = {
      video: { width: 500, height: 300 },
    };
    let audioConstraints = {
      audio: true,
    };
    return (
      <div
        style={{ paddingBottom: 40, background: "#F7F7F7" }}
        className="body"
      >
        <div className="centered">
          <h1 style={{ fontFamily: "" }}>
            Test Your {this.state.microphoneSec ? "Microphone " : "Webcam "}
            Within Seconds
          </h1>
          <div
            style={{ paddingTop: 40, paddingBottom: 40 }}
            class="btn-group"
            role="group"
            aria-label="Basic example"
          >
            <Button
              onClick={() => {
                // this.getCamera(constraints);
                this.setState({
                  microphoneSec: false,
                  audioPermission: true,
                  webCambuttonClicked: true,
                  audioButtonClicked: false,
                  // webCambuttonClicked: true,
                  cameraOn: false,
                  audio: null,
                });
              }}
              variant={
                this.state.webCambuttonClicked ? "dark" : "outline-primary"
              }
            >
              Webcam Test
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  // microphoneSec: false,
                  // audioPermission: true,
                  webCambuttonClicked: false,
                  cameraWorking: false,
                  audioButtonClicked: true,
                  // cameraSec: false,
                  // cameraWorking: false,
                  // videoPermisson: true,
                });
                // this.toggleMicrophone();
              }}
              // onClick={this.toggleMicrophone}
              // onClick={() => {
              //   this.getAudio(audioConstraints);
              //   this.setState({
              //     microphoneSec: true,
              //     cameraSec: false,
              //     videoPermisson: true,
              //   });
              // }}
              variant={
                this.state.audioButtonClicked ? "dark" : "outline-primary"
              }
            >
              {this.state.audio ? "Stop microphone" : "Start microphone"}
            </Button>
          </div>
          {this.state.webCambuttonClicked &&
            !this.state.cameraOn &&
            !this.state.cameraWorking &&
            this.renderVideoTestingSection()}
          {this.state.audioButtonClicked &&
            !this.state.audio &&
            this.renderAudioTestSection()}
          {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ""}
          {!this.state.audioPermission && !this.state.audioWorking && (
            <div
              class="container h-100 col-5"
              style={{
                marginTop: 20,
                borderRadius: 10,
                paddingTop: 20,
                paddingBottom: 20,
                paddingRight: 40,
                paddingLeft: 40,
              }}
            >
              <div class="row  justify-content-center align-items-center">
                <div class={"col-md-8 txt-permission-denied "}>
                  <h4 style={{ textAlign: "left" }}>
                    {"Permission denied..."}
                  </h4>
                  <p style={{ textAlign: "left" }}>
                    No microphone is detected. Please check if your Mic is
                    correctly connected, or the ndrivers are properly installed
                    and updated.
                  </p>
                </div>
              </div>
            </div>
          )}

          {!this.state.videoPermisson &&
            !this.state.cameraWorking &&
            !this.state.audioButtonClicked && (
              <div
                class="container h-100 col-5"
                style={{
                  // marginTop: 20,
                  borderRadius: 10,
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingRight: 40,
                  paddingLeft: 40,
                }}
              >
                <div class="row  justify-content-center align-items-center">
                  <div class={"col-md-8 txt-permission-denied "}>
                    <h4 style={{ textAlign: "left" }}>
                      {"Permission denied..."}
                    </h4>
                    <p style={{ textAlign: "left" }}>
                      Click Grant Cam Acccess, then click the video camera icon
                      with the red X on the right side of the address bar.
                    </p>
                  </div>
                </div>
              </div>
            )}

          {/* {this.state.cameraWorking && (
            <div style={{ paddingTop: 40 }}>
              <video></video>
            </div>
          )} */}
          {this.state.cameraWorking && this.state.webCambuttonClicked && (
            <>
              <div style={{ paddingTop: 40 }}>
                <video></video>
              </div>
              <div className="centered">
                <h4>{"Your webcam is working!"}</h4>
              </div>
            </>
          )}
          {this.state.audioWorking &&
            this.state.audioButtonClicked &&
            this.state.audio && (
              <div className="centered">
                <h4>{"Your microphone is working!"}</h4>
              </div>
            )}
        </div>
        <section id="hero-section">
          <div class="container">
            <div class="row">
              <div class="col-md-8 txt-wraper">
                <p>
                  Need an easy way to record and <br />
                  share video content? Try Keevi.
                </p>
                <button class="btn btn-default">Start recording</button>
              </div>
              <div class="col-md-4 img-sec">
                <img src={demoTwoImg} class="demo img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section id="card-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1>How does it work?</h1>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-4 card text-center"
                style={{ borderWidth: 0, backgroundColor: "#F7F7F7" }}
              >
                <img src={demoImg} class="demo" />
                <div class="card-txt">
                  <h2>1. Choose layout</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    ipsa quia quos eveniet asperiores.
                  </p>
                </div>
              </div>
              <div
                class="col-md-4 card text-center"
                style={{ borderWidth: 0, backgroundColor: "#F7F7F7" }}
              >
                <img src={demoImg} class="demo" />
                <a href="">
                  <img src={EllipseImg} class="Ellipse" />
                </a>
                <a href="">
                  {" "}
                  <img src={MicImg} class="mic" />
                </a>
                <a href="">
                  <img src={VideoImg} class="video" />
                </a>
                <div class="card-txt">
                  <h2>2. Start recording</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    ipsa quia quos eveniet asperiores.
                  </p>
                </div>
              </div>
              <div
                class="col-md-4 card text-center"
                style={{ borderWidth: 0, backgroundColor: "#F7F7F7" }}
              >
                <img src={demoImg} class="demo" />
                <a href="#">
                  {" "}
                  <img src={YoutubeImg} class="Youtube" />
                </a>
                <a href="#">
                  {" "}
                  <img src={FacebookImg} class="Facebook" />
                </a>
                <a href="#">
                  <img src={TwitterImg} class="Twitter" />
                </a>
                <a href="#">
                  <img src={WhatsAppImg} class="WhatsApp" />
                </a>

                <div class="card-txt">
                  <h2>3. Review, edit & publish</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    ipsa quia quos eveniet asperiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"container"}>
          <div
            style={{ justifyContent: "space-between", alignItems: "center" }}
            className="row container justify-content-space-between align-items-center"
          >
            <h4>Question section</h4>
            <SearchIcon />
          </div>
        </div>
        {Question.map((item) => (
          <QuestionSec key={item.id} value={item} />
        ))}
      </div>
    );
  }
}

export default Home;
