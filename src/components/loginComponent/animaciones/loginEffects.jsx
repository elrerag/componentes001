import React from 'react'

// CSSTransition ...
import { CSSTransition } from 'react-transition-group';
import './CSSTransition.css';

// DotLoader ...
import { DotLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
`;

export const MyDotLoader = ({size, color}) => 
    <div className='sweet-loading'>
        <DotLoader
            css={override}
            sizeUnit={"px"}
            size={size}
            color={color}
            loading={true}/>
    </div> 

// CSSTransition, usa (this.props.children)
export const MyCSSTransition = ({children, mostrarTransicion}) => 
    <CSSTransition
        in={mostrarTransicion}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onExited={() => console.log('onExited')} >
            {children}
        </CSSTransition>


export default MyDotLoader