export default function MouseClicker() {
  function handlerEvent(event) {
    console.log(event.target.name);
    console.log(event.currentTarget);
  }

  return (
    <div>
      <button name={"one"} onClick={handlerEvent}>
        Cliccami!
      </button>
      <button name={"two"} onClick={handlerEvent}>
        <img name={"image"} height={20} width={20} />
        Cliccami!
      </button>
    </div>
  );
}
