import React from "react";
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
  /* identical to box height, or 171% */

  /* Gray 5 */

  color: "#E0E0E0",
};
var footerLargeTextStyle = {
  position: "static",
  left: "0%",
  right: "0%",
  top: "0%",
  bottom: "57.14%",
  fontWeight: "bold",
  fontSize: 18,
  /* identical to box height, or 171% */

  /* Gray 5 */

  color: "#FFFFFF",
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
            <div className="col">
              <h4>THICC MEMES INC</h4>
              <ui className="list-unstyled">
                <li style={footerNormalTextStyle}>
                  Copyright © 2021 keevi.io.
                </li>
                <li style={footerNormalTextStyle}>All rights reserved</li>
              </ui>
            </div>
            {/* Column2 */}
            <div className="col" style={footerLargeTextStyle}>
              <h4>Resources</h4>
              <ui className="list-unstyled" style={footerNormalTextStyle}>
                <li>Learn</li>
                <li>Launch Legends</li>
                <li>Website Builders</li>
                <li>Community</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col" style={footerLargeTextStyle}>
              <h4>Products</h4>
              <ui className="list-unstyled" style={footerNormalTextStyle}>
                <li>Video Editor</li>
                <li>Screen Recorder</li>
                <li>Video Cutter</li>
                <li>Add Subtitles to Video</li>
                <li>All Tools</li>
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
