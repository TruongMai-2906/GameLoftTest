import React from 'react'
import container from './Article.module.scss'
const Article = (props) => {

    const articleList = props.articleList;

  return (
    <span className="article">
      {
        articleList.map((e,i) =>
          (i !== 0) ? <a className={container['container__title']} href='/'>/&nbsp;{e} &nbsp;</a> : <a className={container['container__title']}  href='/'>{e}&nbsp;</a>
        )
      }
    </span>
  )
}
 
export default Article
 