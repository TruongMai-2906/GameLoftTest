import React from 'react'
import container from './Article.module.scss'
const Article = (props) => {

    const articleList = props.articleList;

  return (
    <span className="article">
      {
        articleList.map((e,i) =>
          (i !== 0) ? <a className={container['container__title']} href='/' key={`article${i}`}>/&nbsp;{e} &nbsp;</a> : <a className={container['container__title']}  href='/' key={i}>{e}&nbsp;</a>
        )
      }
    </span>
  )
}
 
export default Article
 