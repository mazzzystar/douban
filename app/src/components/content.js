// 主页-内容页
import React, { Component } from "react";
import { connect } from "react-redux" ;
// import HotMovie from "./hotMovie" ;
import MovieList from "./movieList";
import BookList from "./bookList";
// import PaperBooks from "./paperBooks";
import FindMore from "./findMore";
import ClassBrowse from "./ClassBrowse";
import Footer from "./footer";
import { hotMovies, freeMovies, newMovies, fictitiousBooks, realityBooks, paperBooks } from "../utils/staticData";


class Content extends Component{
	render() {
		const currResType = this.props.header.currResType;
		let { movieMoreClick, bookMoreClick } = this.props;
		let nodeArr = [] ;

		if(currResType && currResType == "movie"){
			// 热门电影
			nodeArr.push(<MovieList movies={ hotMovies } key="1" title="影院热映" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {movieMoreClick("/movie/nowintheater");} }/>);
			// 免费电影
			nodeArr.push(<MovieList movies={ freeMovies } key="2" title="免费在线观影" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {movieMoreClick("/movie/watchonline");} }/>);
			//新片速递
			nodeArr.push(<MovieList movies={ newMovies } key="3" title="新片速递" onClick={() => {console.log('跳转到电影详情'); }}  moreClick={() => {movieMoreClick("/movie/latest");} }/>);
		}else{
			// 虚构类图书
			nodeArr.push(<BookList  key="1" books={ fictitiousBooks } title="最受关注图书｜虚构类" moreClick={ () => { bookMoreClick("/book/hotfiction") } }/>);
			// 现实类图书
			nodeArr.push(<BookList  key="2" books={ realityBooks } title="最受关注图书｜非虚构类" moreClick={ () => { bookMoreClick("/book/hotnonfiction") } }/>);
			// 豆瓣纸书
			// nodeArr.push(<PaperBooks key="3" books={ paperBooks } title="豆瓣纸书"/>);
		}

		nodeArr.push(<FindMore key="8"/>);
		nodeArr.push(<ClassBrowse key="9"/>);

		return (
			<div className="page">
				<div className="card">
					{ nodeArr }					
				</div>
				<Footer />
			</div>
		);
	}
}

export default connect(state=>state, dispatch => {
	return {
		movieMoreClick: (link) => {
			console.log('点击更多...' + link);
		},
		bookMoreClick: (link) => {
			console.log('点击更多...' + link);
		}
	};
})(Content);