import { Route,Routes } from 'react-router-dom'

import Home from "./Home"

import BrandyList from "../categories/BrandyList"
import BrandyDetails from "../details/BrandyDetails"

import GinList from "../categories/GinList"
import GinDetails from "../details/GinDetails"

import RumList from "../categories/RumList"
import RumDetails from "../details/RumDetails"

import TequilaList from "../categories/TequilaList"
import TequilaDetails from "../details/TequilaDetails"

import VodkaList from "../categories/VodkaList"
import VodkaDetails from "../details/VodkaDetails"

import WhiskeyList from "../categories/WhiskeyList"
import WhiskeyDetails from "../details/WhiskeyDetails"

const Main = (props) => {
    

    return (
        <>
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/brandy" element={<BrandyList brandylist={props.brandylist}/>}/>
                <Route path="/brandy/:id" element={<BrandyDetails brandydetails={props.brandydetails}/>}/>

                <Route path="/gin" element={<GinList ginlist={props.ginlist}/>}/>
                <Route path="/gin/:id" element={<GinDetails gindetails={props.gindetails}/>}/>

                <Route path="/rum" element={<RumList rumlist={props.rumlist}/>}/>
                <Route path="/rum/:id" element={<RumDetails rumdetails={props.rumdetails}/>}/>

                <Route path="/tequila" element={<TequilaList tequilalist={props.tequilalist}/>}/>
                <Route path="/tequila/:id" element={<TequilaDetails tequiladetails={props.tequiladetails}/>}/>

                <Route path="/vodka" element={<VodkaList vodkalist={props.vodkalist}/>}/>
                <Route path="/vodka/:id" element={<VodkaDetails vodkadetails={props.vodkadetails}/>}/>

                <Route path="whiskey" element={<WhiskeyList whiskeylist={props.whiskeylist}/>}/>
                <Route path="whiskey/:id" element={<WhiskeyDetails whiskeydetails={props.whiskeydetails}/>}/>
            </Routes>
        </div>
        </>
    )
    
}

export default Main