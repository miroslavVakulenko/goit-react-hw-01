export default function TransactionsHistory({ transactions }) {
  // console.log(transactions)
  return transactions.map((transaction) => (
    <table key={transaction.id}>
      <thead>
      <tr>
        <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>{transaction.type}</th>
          <th>{transaction.amount}</th>
          <th>{transaction.currency}</th>
      </tr>
      <tr>
        <th>{transaction.type}</th>
          <th>{transaction.amount}</th>
          <th>{transaction.currency}</th>
      </tr>
    </tbody>
  </table>
  ))
}
