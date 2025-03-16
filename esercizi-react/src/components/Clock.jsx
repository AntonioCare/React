import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervall = setInterval(() => {
      console.log("Updating date...");
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervall);
    };
  }, []);
  return (
    <>
      <h2>Current time : {date.toLocaleTimeString()}</h2>
    </>
  );
}
