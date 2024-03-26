import React from 'react';
import Web3 from './web3';

function Web3Interns() {

    const tableheading = [
        "Intern Name", "Sex", "Attendance", "Overall Score"
    ]

    const webs = [
        {
            name: 'IKEMEFUNA ONUBOGU',
            attendance:'67.6%',
            grade:'74.1%',
            sex:"Male"

        },
        {
            name: 'EJIOFOR OBIEZE',
            attendance:'94.1%',
            grade:'73.51%',
            sex:"Male"


        },
        {
            name: 'BENJAMIN OVU',
            attendance:'70.6%',
            grade:'73.42%',
            sex:"Male"


        },
        {
            name: 'IZUCHUKWU UCHENDU',
            attendance:'73.5%',
            grade:'72.28%',
            sex:"Male"


        },
        {
            name: 'NOFISAT HASSAN',
            attendance:'38.2%',
            grade:'72.27%',
            sex:"Femle"


        },
        {
            name: 'CHINONSO NNAEMEKA',
            attendance:'76.5%',
            grade:'72.23%',
            sex:"Male"


        },
        {
            name: 'ANYIAM MIRACLE',
            attendance:'76.5%',
            grade:'71.55%',
            sex:"Female"


        },
        {
            name: 'SAMUEL NDUBUISI',
            attendance:'79.4%',
            grade:'71%',
            sex:"Male"


        },
        {
            name: 'CHINEMEREMUN OKEREKE',
            attendance:'52.9%',
            grade:'70.85%',
            sex:"Male"


        },
        {
            name: 'TOCHUKWU NWAFOR',
            attendance:'64.7%',
            grade:'70.33%',
            sex:"Male"


        },
        {
            name: 'WISDOM ODOEMENA',
            attendance:'76.5%',
            grade:'69.71%',
            sex:"Male"


        }
    ] 
  return (
    <div>
        <Web3  webs={webs} tableheading={tableheading}/>
    </div>
  )
}

export default Web3Interns