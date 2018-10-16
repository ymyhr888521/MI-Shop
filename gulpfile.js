let basepath = "D:\\phpStudy\\WWW\\MI";//基路径

var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>


//复制index.html的任务
gulp.task("copy-Html",function(){
	gulp.src("index.html").pipe(gulp.dest(basepath));
});


//复制图片文件
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest(basepath+"\\img"));
});


//复制js文件
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest(basepath+"\\js"));
});

//复制css文件
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest(basepath+"\\css"));
});

//复制html文件
gulp.task("copy-allHtml",function(){
	gulp.src("html/**/*")
	.pipe(gulp.dest(basepath+"\\html"));
});

//复制font文件
gulp.task("copy-font",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest(basepath+"\\font"));
});



gulp.task("build",["copy-Html","copy-img","copy-js","copy-css","copy-allHtml","copy-font"],function(){
	console.log("o le");
});


//监听
gulp.task("watch-all",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("index.html",["copy-Html"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("html/**/*",["copy-allHtml"]);
	gulp.watch("font/**/*",["copy-font"]);
});



