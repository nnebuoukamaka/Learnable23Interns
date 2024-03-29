import React, { useState } from "react";
import "bootstrap";
import { Fade } from "react-awesome-reveal";

function DataRow({ datas, tableheading }) {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <Fade duration={4000}>
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
            {datas
              .filter((data) => {
                return search.toLowerCase() === ""
                  ? data
                  : data.name.toLowerCase().includes(search);
              })
              .map((data, index) => {
                return (
                  <>
                    <tr className="" key={index}>
                      <td className="name">{data.name}</td>
                      <td className="sex">{data.sex}</td>
                      <td className="attendance">{data.attendance}</td>
                      <td className="grade">{data.grade}</td>
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

export default DataRow;
