import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1", {
    className: "title"
}, "Heading 1");
const heading2 = React.createElement("h1", {
    className: "title"
}, "heading 2");
const container = React.createElement("div", {
    className: "container"
}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(container);