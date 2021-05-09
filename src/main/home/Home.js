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

// Dummt data for question
const Question = [
  {
    id: 0,
    question: "How do i add text to GIFs?",
    answer:
      "Adding text to GIF using Keevi is an easy 3-step process: \n1. Upload the GIF or small video \n2.  Resize video if need be. Then add text and edit it to meet your taste.  \n 3. Save and share your video.",
  },
  {
    id: 1,
    question: "Can i add animated text to GIF?",
    answer: "",
  },
  {
    id: 2,
    question: "How do i label GIF?",
    answer: "",
  },
  {
    id: 3,
    question: "Does Keevi work the same as the Ezgif add text function?",
    answer: "",
  },
  {
    id: 4,
    question: "How do i edit GIF text?",
    answer: "",
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
    };
  }
  // getCamer func
  getCamera = async (constraints) => {
    let that = this;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        console.log("mediaStream", mediaStream);
        that.setState({
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
  // Main render
  render() {
    let constraints = {
      video: { width: 500, height: 300 },
    };
    let audioConstraints = {
      audio: true,
    };
    return (
      <div className="container" style={{ marginBottom: 40 }}>
        <div className="centered">
          <h1>
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
                this.getCamera(constraints);
                this.setState({
                  microphoneSec: false,
                  audioPermission: true,
                });
              }}
              variant="outline-primary"
            >
              Webcam Test
            </Button>
            <Button
              onClick={() => {
                this.getAudio(audioConstraints);
                this.setState({
                  microphoneSec: true,
                  cameraSec: false,
                  videoPermisson: true,
                });
              }}
              variant="dark"
            >
              Microphone Test
            </Button>
          </div>
          {!this.state.audioPermission && !this.state.audioWorking && (
            <div
              class="container h-100 col-5"
              style={{
                marginTop: 100,
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

          {!this.state.videoPermisson && !this.state.cameraWorking && (
            <div
              class="container h-100 col-5"
              style={{
                marginTop: 100,
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

          {this.state.cameraWorking && (
            <div style={{ paddingTop: 40 }}>
              <video></video>
            </div>
          )}
          {this.state.cameraWorking && (
            <div className="centered">
              <h4>{"Your webcam is working!"}</h4>
            </div>
          )}
          {this.state.audioWorking && (
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
              <div class="col-md-4 card text-center" style={{ borderWidth: 0 }}>
                <img src={demoImg} class="demo" />
                <div class="card-txt">
                  <h2>1. Choose layout</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                    ipsa quia quos eveniet asperiores.
                  </p>
                </div>
              </div>
              <div class="col-md-4 card text-center" style={{ borderWidth: 0 }}>
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
              <div class="col-md-4 card text-center" style={{ borderWidth: 0 }}>
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
