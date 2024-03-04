import { useState } from "react";
import axios from "axios";

function InsertForm() {
  const [name, setName] = useState("");
  const [img, setimg] = useState("");
  const [price, setPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [desc, setDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6969/insertitems", {
        name,
        img,
        price,
        sizes,
        desc,
        keywords,
      });
      handleReset();
      console.log(`sent`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizes([...sizes, value]);
    } else {
      setSizes(sizes.filter((size) => size !== value));
    }
  };
  const handleReset = () => {
    setName("");
    setimg("");
    setPrice(0);
    setSizes([]);
    document.querySelectorAll("checkInput").forEach((checkbox) => {
      console.log(checkbox);
    });

    setDesc("");
    setKeywords("");
  };
  return (
    <div>
      <center>
        <h1>Insert Items</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          Name:&nbsp;
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
          />
          <br />
          <br />
          Image Link:&nbsp;
          <input
            type="url"
            name="url"
            placeholder="Image Link"
            value={img}
            onChange={(e) => setimg(e.target.value)}
            autoComplete="off"
            required
          />
          <br />
          <br />
          Price:&nbsp;
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
            required
          />
          <br />
          <br />
          Sizes:&nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="S"
            name="S"
            value="S"
            onChange={handleSizeChange}
          />
          <label htmlFor="S"> S</label>
          &nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="XS"
            name="XS"
            value="XS"
            onChange={handleSizeChange}
          />
          <label htmlFor="XS">XS</label>
          &nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="L"
            name="L"
            value="L"
            onChange={handleSizeChange}
          />
          <label htmlFor="L"> L</label>
          &nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="XL"
            name="XL"
            value="XL"
            onChange={handleSizeChange}
          />
          <label htmlFor="XL">XL</label>
          &nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="XXL"
            name="XXL"
            value="XXL"
            onChange={handleSizeChange}
          />
          <label htmlFor="XXL"> XXL</label>
          &nbsp;
          <input
            type="checkbox"
            className="checkInput"
            id="XXXL"
            name="XXXL"
            value="XXXL"
            onChange={handleSizeChange}
          />
          <label htmlFor="XXXL"> XXXL</label>
          <br />
          <br />
          Description:&nbsp;
          <textarea
            rows="5"
            cols="50"
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            autoComplete="off"
            required
          />
          <br />
          <br />
          Keywords:&nbsp;
          <textarea
            rows="3"
            cols="50"
            name="keywords"
            placeholder="Keywords (comma-separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>{" "}
          <button className="submit-btn" type="button" onClick={handleReset}>
            Reset
          </button>{" "}
        </form>
      </center>
    </div>
  );
}

export default InsertForm;
