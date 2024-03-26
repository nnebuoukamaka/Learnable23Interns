import { useState } from "react";
import React from "react";
import './search.css'

function Search() {

    // const datas = [
    //     {
    //         name: 'Ukamaka Nnebuo',
    //         attendance:"70% ",
    //         grade: "80%",
    //         sex:'Female'
           
    //     },
    //     {
    //         name: 'Uchenna Ife',
    //         attendance:"72% ",
    //         grade: "85%",
    //         sex:'Male'

    //     },
    //     {
    //         name: 'Chidi Oge',
    //         attendance:"70.8% ",
    //         grade: "50%",
    //         sex:'Female'

    //     },
    //     {
    //         name: 'Favour Victor',
    //         attendance:"70.8% ",
    //         grade: "60%",
    //         sex:'Female'

    //     },
    //     {
    //         name: 'Boma Gift',
    //         attendance:"90% ",
    //         grade: "92%",
    //         sex:'Female'

    //     },
    //     {
    //         name: 'Victor Uche',
    //         attendance:"71% ",
    //         grade: "88%",
    //         sex:'Male'

    //     },
    //     {
    //         name: 'Kcee Okafor',
    //         attendance:"85.8% ",
    //         grade: "95%",
    //         sex:'Male'

    //     },
    //     {
    //         name: 'Uche Godson',
    //         attendance:"70% ",
    //         grade: "75%",
    //         sex:'Male'

    //     },
    //     {
    //         name:'Princess Obi',
    //         attendance:"70% ",
    //         grade: "82.5%",
    //         sex:'Female'

    //     },
    //     {
    //         name: 'Nneka Obi',
    //         attendance:"75% ",
    //         grade: "82%",
    //         sex:'Female'

    //     },

    // ]

    const [infos, setInfos] = useState();
    const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setInfos(infos);
      return;
    }
    const filterSearch = infos.filter((item) => {
      if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      }
    });
    setInfos(filterSearch);
  };

  return (
  <div>
        <form
            onSubmit={searchHandler}
        >
            <div className="">
                <input
                    type="text"
                    id="search_field"
                    className="search-box"
                    placeholder="Intern"
                    onChange={(e) => setKeyword(e.target.value)}
                />

            </div>
        </form>
        <div className="start">
        <table>
        <tbody>
          {infos.map((info, index) => {
            return (
              <>
                <tr className="" key={index}>
                  <td className="name">
                    {info.name}
                  </td>
                  <td className="sex">{info.sex}</td>
                  <td className="attendance">{info.attendance}</td>
                  <td className="grade">{info.grade}</td>
                </tr>
              </>
            );
          })}
        </tbody>
        </table>
        </div>
  </div>
  )
}

export default Search;
