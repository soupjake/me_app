import React from "react";
import Paper from "@material-ui/core/Paper";
import useStylesBase from "../../styles/styles-base";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export default function TabPanel(props: TabPanelProps) {
  const classesBase = useStylesBase();
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && <Paper className={classesBase.cardPadding}>{children}</Paper>}
    </div>
  );
}
