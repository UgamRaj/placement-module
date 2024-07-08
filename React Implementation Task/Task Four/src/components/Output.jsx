const Output = ({ total, product }) => {
  return (
    <div>
      <h4>Output Result</h4>
      <h5>Sale Price</h5>
      <ul>
        {product?.map((item, i) => (
          <li key={i}>
            {item.productName} - {item.productPrice}
          </li>
        ))}
      </ul>
      <h5>Total Price</h5>
      <p>{total}</p>
    </div>
  );
};

export default Output;
