import { useState } from "react";

export default function cursorE() {
  function onmousemove(e) {
    const { x, y } = useState({ x: e.screenX, y: e.screenY });
  }
  return <></>;
}
