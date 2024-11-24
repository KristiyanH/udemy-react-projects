export default function Input({ inputData, handleOnChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={(event) =>
              handleOnChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) =>
              handleOnChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={(event) =>
              handleOnChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={(event) => handleOnChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
