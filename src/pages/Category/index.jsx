// @ts-nocheck
import React from 'react'
import { useParams } from 'react-router-dom'
import MultiFilters from './MultiFilters'
import Balls from './Balls'
import Kits from './Kits'
import Appreal from './Apperal'

const index = () => {
    const {category} = useParams()
    if(category==='bats'){
        return <MultiFilters/>
    }
    if(category==='balls'){
        return <Balls/>
    }
    if(category=='kits'){
        return <Kits/>
    }
    if(category=='apparel'){
        return <Appreal/>
    }
    if(category=='apparel'){
        return <Appreal/>
    }
    return(
        <>
        Not Found Page
        </>
    )
}
export default index