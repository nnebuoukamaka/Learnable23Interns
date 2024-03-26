import React from "react";
import { Fade } from "react-awesome-reveal";

function Web3({ webs, tableheading }) {
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
          {webs.map((web, index) => {
            return (
              <>
                <tr className="" key={index}>
                  <td className="name">{web.name}</td>
                  <td className="sex">{web.sex}</td>
                  <td className="attendance">{web.attendance}</td>
                  <td className="grade">{web.grade}</td>
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

export default Web3;
