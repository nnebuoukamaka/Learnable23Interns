import React from "react";
import "bootstrap";
import { Fade } from "react-awesome-reveal";

function DataRow({ datas, tableheading }) {
  return (
    <Fade duration={3000}>
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
                  fontSize:'20px',
                  backgroundColor: "rgb(132, 130, 130)"
                }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <>
                <tr className="" key={index}>
                  <td className="name">
                    {data.name}
                  </td>
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
