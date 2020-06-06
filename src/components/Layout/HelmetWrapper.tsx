import React from "react";
import { Helmet } from "react-helmet";

interface HelmetWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function HelmetWrapper(props: HelmetWrapperProps) {
  const { title, description, children } = props;

  return (
    <div>
      <Helmet title={title} meta={[
        { name: "description", content: description },
        { name: "theme-color", content: "#2E3032" }
      ]} />
      {children}
    </div>
  );
}
