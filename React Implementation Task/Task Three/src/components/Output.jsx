const Output = ({ profit, totalSoldPrice, soldList }) => {
  console.log("🚀 ~ Output ~ soldList:", soldList);
  return (
    <>
      <h2>Output Result</h2>
      <h5>Sold Price List</h5>
      <ul>
        {soldList?.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      <h5>Total Sold Price</h5>
      <p>{totalSoldPrice}</p>
      <h5>Total Profit</h5>
      <p>{profit}</p>
    </>
  );
};

export default Output;
