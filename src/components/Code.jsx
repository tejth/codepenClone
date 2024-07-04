import React from "react";
import Editor from "./Editor";

function Code() {
  return (
    <>
      <Editor heading="HTML" icon="/" color="#FF3C41" />
      <Editor heading="CSS" icon="*" color="#0EBEFF" />
      <Editor heading="JS" icon="{}" color="#FCD000" />
    </>
  );
}

export default Code;
