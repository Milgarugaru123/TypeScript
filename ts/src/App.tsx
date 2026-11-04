// import { useState } from "react";
import Button from "./Button";
import Square from "./Square";
// import type TTest from "./typeof";

function App() {
  // const [num, setNum] = useState(TTest[]);

  return (
    <div className={`flex flex-col gap-2 items-center`}>
      <div className={`flex justify-center gap-2 mt-5`}>
        <Button backgroundColor="Primary" borderRadius="Hard" />
        <Button backgroundColor="Secondary" borderRadius="Hard" />
        <Button backgroundColor="Secondary" borderRadius="Circle" />
      </div>
      <Square />
    </div>
  );
}

export default App;
