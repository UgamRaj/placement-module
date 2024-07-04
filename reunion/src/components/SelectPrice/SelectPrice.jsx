const SelectPrice = ({ onPriceChange, price }) => {
  const priceRanges = [
    { value: "0-3000", label: "0-3000" },
    { value: "0-500", label: "₹ 0-500" },
    { value: "500-1000", label: "₹ 500-1000" },
    { value: "1000-1500", label: "₹ 1000-1500" },
    { value: "1500-2000", label: "₹ 1500-2000" },
    { value: "2000-2500", label: "₹ 2000-2500" },
    { value: "2500-3000", label: "₹ 2500-3000" },
  ];

  const handleChange = (e) => {
    console.log("Selected price range:");
    onPriceChange(e.target.value);
  };

  return (
    <select
      required
      value={price}
      className="searchCommon"
      onChange={handleChange}
    >
      {priceRanges.map((range) => (
        <option key={range.value} value={range.value}>
          {range.label}
        </option>
      ))}
    </select>
  );
};

export default SelectPrice;
