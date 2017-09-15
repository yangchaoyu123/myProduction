/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//定义全局变量
	var nav_btn = $(".nav li");
	var content  = $(".content");
	var index = 0;
	var content_page = $('.content_page');
	var index_page = null;
	$(function() {
		//点击效果
		nav_btn.on('touchstart', function() {
			index = $(this).index();
			nav_btn.css('color','#ccc');
			nav_btn.eq(index).css('color','#000');
			content.eq(index).show().siblings().hide();
		});
		nav_btn.eq(index).css('color','#000');
		$(content).on('touchstart', '.content_bg li', function() {
			index_page = $(this).index();
			var btn = $(this).attr('data-btn');
			var content_con = $(this).parent();
			var content_page = $(this).parent().siblings().eq(btn-1);
			content_con.hide();
			content_page.fadeIn();
			nav_btn.on('touchstart', function() {
				index = $(this).index();
				nav_btn.css('color','#ccc');
				nav_btn.eq(index).css('color','#000');
				content_page.fadeOut();
				content.eq(index).show().siblings().hide();
				content_con.show();
			});
		})
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODdlN2ViNThjZmJmMTkyZDhmYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0YsRUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImpzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg3ZTdlYjU4Y2ZiZjE5MmQ4ZmFjIiwiLy/lrprkuYnlhajlsYDlj5jph49cclxudmFyIG5hdl9idG4gPSAkKFwiLm5hdiBsaVwiKTtcclxudmFyIGNvbnRlbnQgID0gJChcIi5jb250ZW50XCIpO1xyXG52YXIgaW5kZXggPSAwO1xyXG52YXIgY29udGVudF9wYWdlID0gJCgnLmNvbnRlbnRfcGFnZScpO1xyXG52YXIgaW5kZXhfcGFnZSA9IG51bGw7XHJcbiQoZnVuY3Rpb24oKSB7XHJcblx0Ly/ngrnlh7vmlYjmnpxcclxuXHRuYXZfYnRuLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuXHRcdG5hdl9idG4uY3NzKCdjb2xvcicsJyNjY2MnKTtcclxuXHRcdG5hdl9idG4uZXEoaW5kZXgpLmNzcygnY29sb3InLCcjMDAwJyk7XHJcblx0XHRjb250ZW50LmVxKGluZGV4KS5zaG93KCkuc2libGluZ3MoKS5oaWRlKCk7XHJcblx0fSk7XHJcblx0bmF2X2J0bi5lcShpbmRleCkuY3NzKCdjb2xvcicsJyMwMDAnKTtcclxuXHQkKGNvbnRlbnQpLm9uKCd0b3VjaHN0YXJ0JywgJy5jb250ZW50X2JnIGxpJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpbmRleF9wYWdlID0gJCh0aGlzKS5pbmRleCgpO1xyXG5cdFx0dmFyIGJ0biA9ICQodGhpcykuYXR0cignZGF0YS1idG4nKTtcclxuXHRcdHZhciBjb250ZW50X2NvbiA9ICQodGhpcykucGFyZW50KCk7XHJcblx0XHR2YXIgY29udGVudF9wYWdlID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmVxKGJ0bi0xKTtcclxuXHRcdGNvbnRlbnRfY29uLmhpZGUoKTtcclxuXHRcdGNvbnRlbnRfcGFnZS5mYWRlSW4oKTtcclxuXHRcdG5hdl9idG4ub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcblx0XHRcdG5hdl9idG4uY3NzKCdjb2xvcicsJyNjY2MnKTtcclxuXHRcdFx0bmF2X2J0bi5lcShpbmRleCkuY3NzKCdjb2xvcicsJyMwMDAnKTtcclxuXHRcdFx0Y29udGVudF9wYWdlLmZhZGVPdXQoKTtcclxuXHRcdFx0Y29udGVudC5lcShpbmRleCkuc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xyXG5cdFx0XHRjb250ZW50X2Nvbi5zaG93KCk7XHJcblx0XHR9KTtcclxuXHR9KVxyXG59KVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9