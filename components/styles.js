import theme from "./theme"

export function style() {
    return (
        <style>{`
            p {
                font-size: 14px;
                line-height: 24px;
            }
            ol, ul, dl, dd, p {
                margin-bottom: 0 !important;
            }
            dl, p, h3{
                margin: 0;
            }
            dd{
                -webkit-margin-start: 0;
            }
            ul{
                padding: 0; margin: 0;
            }
            {/*theme ---start ----*/}
            html{
                font-size: 100px;
            }
            @media(max-width: 370px){
                html{
                    font-size: 90px;
                }
            }
            body{
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
                font-size: ${theme.fontsize};
                background-color: #f2f2f2;
                color: ${theme.fontcolor};
                font-weight: 300;
                margin: 0;
            }
            .flex{
                display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
                display: -moz-box;     /* 老版本语法: Firefox (buggy) */
                display: -ms-flexbox;  /* 混合版本语法: IE 10 */
                display: -webkit-flex; /* 新版本语法: Chrome 21+ */
                display: flex;
              }
            .lr-flex{
            -webkit-justify-content: center;
            -moz-justify-content: center;
            -ms-justify-content: center;
            justify-content: center;
            }
            .tb-flex{
                -webkit-align-items: center;
                -moz-align-items: center;
                -ms-justify-content: center;
                align-items: center;
            }
            .left{
                float: left;
            }
            .right{
                float: right;
            }
            .clearfix {
                content: ".";
                height: 0;
                display: block;
                visibility: hidden;
                clear: both
            }
            a {text-decoration:none}
            li {list-style: none}
            .back-left{
                width: .08rem;
                height: .08rem;
                border-top: .03rem solid #C7C7CC;
                border-left: .03rem solid #C7C7CC;
            }
            
        `}</style>
    )
}