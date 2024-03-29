import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function Backend({ backends, tableheading }) {
  const [search, setSearch] = useState("");
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
          {backends
            .filter((backend) => {
              return search.toLowerCase() === ""
                ? backend
                : backend.name.toLowerCase().includes(search);
            })
            .map((backend, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="name">{backend.name}</td>
                    <td className="sex">{backend.sex}</td>
                    <td className="attendance">{backend.attendance}</td>
                    <td className="grade">{backend.grade}</td>
                  </tr>
                </>
              );
            })}
          <tbody></tbody>
        </table>
      </div>
    </Fade>
  );
}

export default Backend;
