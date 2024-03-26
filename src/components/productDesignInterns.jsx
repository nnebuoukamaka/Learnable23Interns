import React from 'react'
import ProductDesign from './productDesign'

function ProductInterns() {

    const tableheading = [
        "Intern Name", "Sex", "Attendance", "Overall Score"
    ]
    const products = [
        {
            name: 'OKECHUKWU ANI',
            attendance:'91.2%',
            grade:'78.1%',
            sex:"Male"

        },
        {
            name: 'ODINAKA CHUKWUANI',
            attendance:'82.4%',
            grade:'78.04%',
            sex:"Male"

        },
        {
            name: 'VICTOR OKWUDIRE',
            attendance:'100%',
            grade:'77.96%',
            sex:"Male"

        },
        {
            name: 'CHIBUIKE UKO',
            attendance:'94.1%',
            grade:'77.79%',
            sex:"Male"

        },
        {
            name: 'VICTOR NWACHUKWU',
            attendance:'88.2%',
            grade:'77.51%',
            sex:"Male"

        },
        {
            name: 'NZOPUTACHI EMMANUEL',
            attendance:'64.7%',
            grade:'77.22%',
            sex:"Female"

        },
        {
            name: 'VICTOR UBAHAKWE',
            attendance:'76.5%',
            grade:'76.99%',
            sex:"Male"

        },
        {
            name: 'PAUL JIDEOFOR',
            attendance:'85.3%',
            grade:'75.2%',
            sex:"Male"

        },
        {
            name: 'EMMANUEL EZE',
            attendance:'88.2%',
            grade:'75.18%',
            sex:"Male"

        },
        {
            name: 'CHIDUBEM ADIMONYE',
            attendance:'82.4%',
            grade:'75.13%',
            sex:"Male"

        },
        {
            name: 'LAURENT MUODUM',
            attendance:'88.2%',
            grade:'74.5&%',
            sex:"Male"

        }
    ]
    
  return (
    <div>
        <ProductDesign  products={products} tableheading={tableheading}/>
    </div>
  )
}

export default ProductInterns