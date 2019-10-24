import React, { Component } from 'react'
import theme from '../theme'
import { MENU } from '../../config/basicConfig'
import Router from 'next/router'
class HeaderBar extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const imgstyledefault = { height: '.26rem', padding: '0 .1rem 0 .3rem', marginTop: '.16rem' }
        const logo = this.props.logo || '../../static/logo.png';
        const pageName = '博客主页';
        const curUrl = this.props.url;
        const curUrlKeywords = curUrl && curUrl.split('/') || [];
        const curUrlKeyword = curUrlKeywords.length > 1 ? curUrlKeywords[1] : '/'
        return (
            <div className="headerBar">
                <img style={imgstyledefault} src={logo} className='left' ></img>
                <article className='left' >{pageName}</article>
                <section className='headerBarRight right'>
                    <ul className='left'>{
                        MENU.map((item, iKey) => {
                            const itemUrlKeywords = item.url && item.url.split('/') || [];
                            const itemUrlKeyword = itemUrlKeywords.length > 1 ? itemUrlKeywords[1] : '/'
                            return (<li
                                className={itemUrlKeyword == curUrlKeyword ? 'left curLi' : 'left'}
                                onClick={() => {
                                    Router.push(item.url)
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