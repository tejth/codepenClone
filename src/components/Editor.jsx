import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import React from "react";
import { Box, styled } from "@mui/material";
import { Close, CloseFullscreen } from "@mui/icons-material";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
`;

function Editor() {
  return (
    <>
      <Box>
        <Header>
          <Heading>
            <Box
              component="span"
              style={{
                background: "red",
                height: 20,
                width: 20,
                display: "flex",
                placeContent: "center",
                borderRadius: 5,
                marginRight: 5,
                paddingBottom: 2,
              }}
            >
              /
            </Box>
            HTML
          </Heading>
          <CloseFullscreen />
        </Header>
        <ControlledEditor />
      </Box>
    </>
  );
}

export default Editor;
