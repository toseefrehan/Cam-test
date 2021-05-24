import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import plus from "../../../assets/images/Plus.png";
import Minus from "../../../assets/images/Minus.png";
import "../component/styles/Home.css";
class QuestionSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false,
    };
  }
  // User click on plus button
  imageClick = () => {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  };
  render() {
    console.log("value", this.props);
    return (
      <div className={"container"}>
        <div
          style={{
            marginTop: 20,
            border: "1px solid rgba(0, 0, 0, 0.05)",
            marginRight: 20,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <div className={"row"}>
            <img
              src={this.state.showAnswer ? Minus : plus}
              style={{ height: 20, width: 20 }}
              onClick={() => this.imageClick()}
            />
            <h6 style={{ paddingLeft: 25 }}>{this.props.value.question}</h6>
          </div>
          {this.state.showAnswer && (
            <div
              className="question-Section"
              style={{
                // background: "red",
                marginLeft: 100,
                paddingLeft: 24,
                marginTop: 20,
              }}
            >
              <p>{this.props.value.answer}</p>
              {this.props.value.list &&
                this.props.value.list.map((i, j) => {
                  return <p>{i && i.value}</p>;
                })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default QuestionSec;
