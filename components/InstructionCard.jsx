const InstructionCard = () => {
  return (
    <div className="bg-08003a" style={{ overflowWrap: "anywhere" }}>
      <section className="container pt-5 pb-5 align-items-center color-white bg-08003a">
        <div>
          <h2 className="col-12 text-center mb-3">
            How can I save MP4 vids in HDquality?
          </h2>
          <p>There are several options:</p>
          <ol>
            <li>
              Copy the necessary URL to the input field on the top of the
              runner.
            </li>
            <li>Press Enter or click the Downloadbutton.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default InstructionCard;
