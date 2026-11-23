function QuickExit({onExit}) {
  return (
    <p id="exit" onClick={() => onExit()} >
      Exit
    </p>
  );
}

export default QuickExit;
