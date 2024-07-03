import { useState } from "react";
import "./WareHouseDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateWarehouse } from "../../Store/WarehouseSlice";

const WareHouseDetails = () => {
  const { id } = useParams();
  //   console.log("🚀 ~ WareHouseDetails ~ id:", id);
  const warehouse = useSelector((state) =>
    state.warehouse.allHouses.find((w) => +w.id === +id)
  );
  const dispatch = useDispatch();
  const [details, setDetails] = useState(warehouse);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails({ ...details, [name]: type === "checkbox" ? checked : value });
  };

  const handleSave = () => {
    // console.log("🚀 ~ handleSave ~ details:", details);
    dispatch(updateWarehouse(details));
    navigate("/");
  };

  //   const handleAddCustomField = (e) => {
  //     const { name, value } = e.target;
  //     // dispatch(
  //     //   addCustomField({ id: details.id, customFields: { [name]: value } })
  //     // );
  //   };

  return (
    <div className="warehouse-details">
      <h2>{details.name}</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={details.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          value={details.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cluster">Cluster</label>
        <input
          id="cluster"
          name="cluster"
          value={details.cluster}
          onChange={handleChange}
        />
      </div>
      <div className="form-group ">
        <label htmlFor="space_available">Space Available</label>
        <input
          id="space_available"
          name="space_available"
          value={details.space_available}
          onChange={handleChange}
        />
      </div>
      <div className="isLiveInput">
        <label htmlFor="is_live">Status</label>
        <input
          type="checkbox"
          id="is_live"
          name="is_live"
          checked={details.is_live}
          onChange={handleChange}
        />
      </div>
      <button className="saveBtn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default WareHouseDetails;
