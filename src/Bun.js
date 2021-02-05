import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Bun({ data }) {
  console.log("data", data);
  const bunList = useSelector(state => state.bunList);
  const { bunName } = useParams();
  const bun = data.find(p => p.bunName === bunName);
  const [bunnyName, setBunnyName] = useState(bunName);

  useEffect(() => {
    console.log("updating document title to ", bun.bunName);
    document.title = `${bun.bunName}`;
  });

  return (
    <div>
      <p>Bun info:</p>
      {bun.bunName} - {bun.bunType}
    </div>
  );
}

export default Bun;
