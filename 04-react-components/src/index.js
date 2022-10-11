import React from "react";
import ReactDom from "react-dom"
import App from "./App"

import name from "./ImportExport"
import {myName} from "./ImportExport"
import {myEmail} from "./ImportExport"
import {myPhone} from "./ImportExport"
// or 
// import * as ImportExports from "./ImportExport"

ReactDom.render(
  <>
    <App></App>
    <h2>{name()}</h2>
    <p>{myName()}</p>
    <p>{myEmail()}</p>
    <p>{myPhone()}</p>
  </>
  ,document.getElementById("root")
  )