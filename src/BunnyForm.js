import React, { useState } from "react";
import store from "./store";

function BunnyForm() {
  const [bunName, setBunName] = useState("");
  const [bunType, setBunType] = useState("");

  function handleSubmit(e) {
    console.log("helloooooooooo");
    e.preventDefault();
    store.dispatch({
      type: "bunAdded",
      payload: { bunName: bunName, bunType: bunType }
    });
    setBunName("");
    setBunType("");
  }

  return (
    <div>
      <p>Bunny form</p>
      <form>
        <input
          type="text"
          value={bunName}
          onChange={e => setBunName(e.target.value)}
          placeholder="Bun Name"
        />
        <input
          type="text"
          value={bunType}
          onChange={e => setBunType(e.target.value)}
          placeholder="Bun Type"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BunnyForm;
