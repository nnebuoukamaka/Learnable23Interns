import React from 'react'
import DataRow from './dataRow'
// import Search from './search'

function Interns() {

    const tableheading =[
     "Intern", "Sex", "Attendance", "Overall Score"
    ]

    const datas = [
        {
            name: 'Ukamaka Nnebuo',
            attendance:"70% ",
            grade: "80%",
            sex:'Female'
           
        },
        {
            name: 'Uchenna Ife',
            attendance:"72% ",
            grade: "85%",
            sex:'Male'

        },
        {
            name: 'Chidi Oge',
            attendance:"70.8% ",
            grade: "50%",
            sex:'Female'

        },
        {
            name: 'Favour Victor',
            attendance:"70.8% ",
            grade: "60%",
            sex:'Female'

        },
        {
            name: 'Boma Gift',
            attendance:"90% ",
            grade: "92%",
            sex:'Female'

        },
        {
            name: 'Victor Uche',
            attendance:"71% ",
            grade: "88%",
            sex:'Male'

        },
        {
            name: 'Kcee Okafor',
            attendance:"85.8% ",
            grade: "95%",
            sex:'Male'

        },
        {
            name: 'Uche Godson',
            attendance:"70% ",
            grade: "75%",
            sex:'Male'

        },
        {
            name:'Princess Obi',
            attendance:"70% ",
            grade: "82.5%",
            sex:'Female'

        },
        {
            name: 'Nneka Obi',
            attendance:"75% ",
            grade: "82%",
            sex:'Female'

        },

    ]

  return (
    <div>
        <DataRow datas={datas} tableheading={tableheading}/>
        {/* <Search  datas={datas}/> */}
    </div>
  )
}

export default Interns