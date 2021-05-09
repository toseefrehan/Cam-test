import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import plus from "../../../assets/images/Plus.png";
import Minus from "../../../assets/images/Minus.png";
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
          className={"row"}
          style={{
            marginTop: 20,
            border: "1px solid rgba(0, 0, 0, 0.05)",
            marginRight: 20,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <img
            src={this.state.showAnswer ? Minus : plus}
            style={{ height: 20, width: 20 }}
            onClick={() => this.imageClick()}
          />
          <h6 style={{ paddingLeft: 25 }}>{this.props.value.question}</h6>
          {this.state.showAnswer && (
            <div>
              <p>{this.props.value.answer}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default QuestionSec;
