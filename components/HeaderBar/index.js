import React, { Component } from 'react'
import theme from '../theme'
import {MENU} from '../../config/basicConfig'
import { Router } from 'next/router'
class HeaderBar extends Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        const imgstyledefault = {height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem'}
        const logo = this.props.logo || '../../static/logo.png';
        const pageName = '博客主页';
        // const curUrl = this.props.url && this.props.url.pathname
        // const curUrlKeywords = curUrl && curUrl.split('/') || [];
        // const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
        return(
            <div className="headerBar">
                <img style={imgstyledefault} src={logo} className='left' ></img>
                <artical className='left' >{ pageName }</artical>
                <section className='headerBarRight right'>
                    <ul className='left'>{
                        MENU.map((item, iKey) => {
                            return (<li
                                className={ item.mark ? 'left curLi' : 'left'}
                                onClick={(ele) => {
                                    let url = ele && ele.childrenMenus && ele.childrenMenus[0] && ele.childrenMenus[0].url
                                    Router.push(url)
                                }}
                                key={iKey}>{item.title}</li>)
                        })
                    }
                    </ul>
                </section>
                <style jsx>{`
                    .headerBar{
                        background: #FBFBFB;
                        line-height: .58rem;
                        height: .58rem;
                        box-shadow: inset 0px -1px 0px 0px ${theme.bordercolor};
                        color: ${theme.mainfontcolor};
                        font-size: ${theme.fontsize};
                        position: relative;
                        z-index: 100;
                    }
                    .headerBarRight{
                        padding-right: 5rem;
                    }
                    .headerBarRight li.curLi{
                        border-bottom: 3px solid ${theme.maincolor};
                        color: ${theme.maincolor};
                      }
                    .headerBarRight li{
                        border-bottom: 3px solid #FBFBFB;
                        font-size: ${theme.mainfontsize};
                        padding: .18rem .2rem .12rem;
                        color: ${theme.fontcolor};
                        line-height: .24rem;
                        cursor: pointer;
                    }
                `}
                </style>
            </div>
        )
    }
}



export {
    HeaderBar
}