import React, {Component} from 'react'
import HeaderSection from './HeaderSection'
import BodySection from './BodySection'


const BaseSection = () =>
    <div>
        <header><HeaderSection /></header>
        <BodySection />
        <footer></footer>
    </div>

export default BaseSection