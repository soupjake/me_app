import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface LinkButtonProps {
  className?: string;
  to: string;
  children: string;
}

export default function LinkButton(props: LinkButtonProps) {
  const { className, to, children } = props;

  return (
    <Button className={className} color="primary" component={Link} to={to}>
      {children}
    </Button>
  );
}
