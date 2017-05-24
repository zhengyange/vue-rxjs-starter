import { HttpService } from './http.service'
import { Observable } from 'rxjs'

// 使用单例模式
let __instance = (function () {
  let instance;
  return (newInstance) => {
    if (newInstance) instance = newInstance;
    return instance;
  }
}());

export class SearchService extends HttpService {
	constructor(props) {
		super();
		if (__instance()) return __instance();
	    //按自己需求实例化
	  __instance(this);
	}

	query(page = 1) {
		let cnpApi = `https://cnodejs.org/api/v1/topics?page=${page}&limit=10&tab=all&mdrender=true`;

		return Observable.fromPromise(super.get(cnpApi))
						.map(res => res.data)
	}

	windowScroll() {
		return Observable.fromEvent(window, 'scroll')
						.debounceTime(100)
						.filter(() => this.isToBottom())
						.scan(count => count + 1, 1)
	}
	getScrollTop(){
	　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
	　　if(document.body){
	　　　　bodyScrollTop = document.body.scrollTop;
	　　}
	　　if(document.documentElement){
	　　　　documentScrollTop = document.documentElement.scrollTop;
	　　}
	　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	　　return scrollTop;
		}

		getScrollHeight(){
		　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
		　　if(document.body){
		　　　　bodyScrollHeight = document.body.scrollHeight;
		　　}
		　　if(document.documentElement){
		　　　　documentScrollHeight = document.documentElement.scrollHeight;
		　　}
		　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		　　return scrollHeight;
		}

		getWindowHeight(){
		　　var windowHeight = 0;
		　　if(document.compatMode == "CSS1Compat"){
		　　　　windowHeight = document.documentElement.clientHeight;
		　　}else{
		　　　　windowHeight = document.body.clientHeight;
		　　}
		　　return windowHeight;
		}

		isToBottom() {
			if(this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()){
	　　　　return true;
	　　}
			return false
		}
}

