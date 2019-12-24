import React from "react";
import {Button} from "antd";

const ContribHubProjectsButton = (props) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Button onClick={() =>props.history.push("cprojects") } style={{margin:".5rem"}} type="primary">
      ContribHub Projects
    </Button>
  );
};

export default ContribHubProjectsButton;
