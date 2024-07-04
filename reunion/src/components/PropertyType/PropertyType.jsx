const PropertyType = ({ onPropertyTypeChange, propertyType }) => {
  const accommodationTypes = [
    { value: "All", label: "All" },
    { value: "House", label: "House" },
    { value: "PG", label: "PG" },
    { value: "Farm-house", label: "Farm House" },
    { value: "Villa", label: "Villa" },
    { value: "Hotel", label: "Hotel" },
    { value: "OYO", label: "OYO" },
  ];

  const handleChange = (e) => {
    console.log("Selected accommodation type:");
    onPropertyTypeChange(e.target.value);
  };

  return (
    <select
      required
      className="searchCommon"
      onChange={handleChange}
      value={propertyType}
    >
      {accommodationTypes.map((type) => (
        <option key={type.value} value={type.value}>
          {type.label}
        </option>
      ))}
    </select>
  );
};

export default PropertyType;
