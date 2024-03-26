import React from 'react';
import Backend from './backend';

function BackendInterns() {

    const tableheading = [
        "Intern Name", "Sex", "Attendance", "Overall Score"
    ]

    const backends =[
        {
            name: 'MARACHUKWU NWEKE',
            attendance:'100%',
            grade:'90.49%',
            sex:"Female"

        },
        {
            name: 'CHUKWUMA IGWENAGU',
            attendance:'94.1%',
            grade:'87.3%',
            sex: "Male"

        },
        {
            name: 'COURAGE NDUKA',
            attendance:'100%',
            grade:'86.89%',
            sex:"Male"

        },
        {
            name: 'UCHE ALI',
            attendance:'100%',
            grade:'86.31%',
            sex:"Male"

        },
        {
            name: 'MATTHEW ENETA',
            attendance:'94.1%',
            grade:'85.55%',
            sex:"Male"

        },
        {
            name: 'GRACIOUS OBEAGU',
            attendance:'94.1%',
            grade:'85.07%',
            sex:"Female"

        },
        {
            name: 'LINDA EZE',
            attendance:'94.1%',
            grade:'83.22%',
            sex:"Female"

        },
        {
            name: 'PRINCE EZEODILI',
            attendance:'88.2%',
            grade:'79.07%',
            sex:"Male"

        },
        {
            name: 'DESIRE GEORGE',
            attendance:'94.1%',
            grade:'78.95%',
            sex:"Female"

        },
        {
            name: 'PREVAIL UZODINMA',
            attendance:'76.5%',
            grade:'78.83%',
            sex:"Male"

        },
        {
            name: 'CALLISTUS OBIORAH',
            sex: "Male",
            attendance:'82.4%',
            grade:'78.23%'

        }
    ]
  return (
    <div>
        <Backend  backends={backends} tableheading={tableheading}/>
    </div>
  )
}

export default BackendInterns