import css from "./Transactions.module.css"

export default function TransactionsHistory({ transactions }) {
  // console.log(transactions)
  return (
    <table className={css.tableTransaction}>
      <thead>
        <tr className={`${css.tableCells} ${css.tableHead}`}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
        {transactions.map((transaction) => (
          <tr className={css.tableCells} key={transaction.id}>
            <th>{transaction.type}</th>
            <th>{transaction.amount}</th>
            <th>{transaction.currency}</th>
          </tr>
        ))}
    </tbody>
  </table>
  );
}
