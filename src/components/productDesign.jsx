import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";


function ProductDesign({ products, tableheading }) {
  const [search, setSearch] = useState('');
  return (
    <Fade direction="down" duration={2000}>
      <div className="search">
        <form>
          <input
            type="text"
            id="search_field"
            className="search-box"
            placeholder=" Search Intern"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    <div className="start">
      <table style={{ width: "70%" }}>
        <thead>
          <tr>
            {tableheading.map((heading, index) => (
              <th
                key={index}
                style={{
                  textAlign: "center",
                  paddingBottom: "20px",
                  paddingLeft: "10px",
                  border: "1px solid",
                  fontSize: "20px",
                  backgroundColor: "rgb(132, 130, 130)",
                }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.filter((product) => {
            return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);
          })
          .map((product, index) => {
            return (
              <>
                <tr className="" key={index}>
                  <td className="name">{product.name}</td>
                  <td className="sex">{product.sex}</td>
                  <td className="attendance">{product.attendance}</td>
                  <td className="grade">{product.grade}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
    </Fade>
  );
}

export default ProductDesign;
