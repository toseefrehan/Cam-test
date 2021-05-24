import React from "react";
import Logo from "../../assets/images/Union.png";
var style = {
  backgroundColor: "#000000",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  // position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};
var footerNormalTextStyle = {
  position: "static",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "57.14%",
  fontWeight: "normal",
  fontSize: 14,
  paddingTop: 10,
  /* identical to box height, or 171% */

  /* Gray 5 */

  color: "#828282",
};
var footerNormalKeeviSecTextStyle = {
  position: "static",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "57.14%",
  fontWeight: "normal",
  fontSize: 14,
  paddingTop: 10,
  /* identical to box height, or 171% */

  /* Gray 5 */

  color: "white",
};
var footerLargeTextStyle = {
  position: "static",
  left: "0%",
  right: "0%",
  textAlign: "left",
  top: "0%",
  bottom: "57.14%",
  fontWeight: "bold",
  fontSize: 18,
  paddingTop: 20,
  /* identical to box height, or 171% */

  /* Gray 5 */

  color: "#FFFFFF",
};

var listStyled = {
  paddingTop: 10,
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

function Footer({ children }) {
  console.log("children", children);
  return (
    <div>
      {/* <div style={phantom} /> */}
      <div bg="dark" variant="dark" style={style}>
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col" style={{ textAlign: "left", paddingTop: 20 }}>
              <div
                className="row"
                style={{ paddingLeft: 10, paddingBottom: 20 }}
              >
                <img src={Logo} style={{ height: 33, width: 33 }} />
                <h3
                  style={{
                    color: "white",
                    paddingLeft: 6,
                    textAlign: "center",
                  }}
                >
                  KEEVI
                </h3>
              </div>

              <ui className="list-unstyled">
                <li style={footerNormalKeeviSecTextStyle}>
                  Copyright © 2021 keevi.io.
                </li>
                <li style={footerNormalKeeviSecTextStyle}>
                  All rights reserved
                </li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col" style={footerLargeTextStyle}>
              <h4>Resources</h4>
              <ui className="list-unstyled" style={footerNormalTextStyle}>
                <li style={footerNormalTextStyle}>Learn</li>
                <li style={footerNormalTextStyle}>Launch Legends</li>
                <li style={footerNormalTextStyle}>Website Builders</li>
                <li style={footerNormalTextStyle}>Community</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col" style={footerLargeTextStyle}>
              <h4>Products</h4>
              <ui className="list-unstyled">
                <li style={footerNormalTextStyle}>Video Editor</li>
                <li style={footerNormalTextStyle}>Screen Recorder</li>
                <li style={footerNormalTextStyle}>Video Cutter</li>
                <li style={footerNormalTextStyle}>Add Subtitles to Video</li>
                <li style={footerNormalTextStyle}>All Tools</li>
              </ui>
            </div>
          </div>
          <hr />
          {/* <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved
              | Terms Of Service | Privacy
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
