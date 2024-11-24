import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function ResultsTable({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((annualData) => {
          const totalInterest =
            annualData.valueEndOfYear -
            annualData.annualInvestment * annualData.year -
            initialInvestment;
          const totalAmountInvested = annualData.valueEndOfYear - totalInterest;

          return (
            <tr key={annualData.year}>
              <td>{annualData.year}</td>
              <td>{formatter.format(annualData.valueEndOfYear)}</td>
              <td>{formatter.format(annualData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}