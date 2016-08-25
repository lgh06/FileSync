/**
 * 基于windows10系统测试
 */
var fs = require('fs');  
var util = require('util');
var show = (obj)=>{
    if (arguments.length == 1){
        console.log(util.inspect(obj).toString())
    }
} 
/**
 * https://npm.taobao.org/mirrors/node/latest-v4.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
 * read file
 */
fs.readFile('D:/dev/FileSync/app.js',(err,data) => {
    //console.log(data.toString());
});
fs.readFile(__filename,(err,data) => {
    //console.log(data.toString());
});

/**
 * https://npm.taobao.org/mirrors/node/latest-v4.x/docs/api/fs.html#fs_fs_readdir_path_callback
 * read dir
 */
fs.readdir(__dirname+'/../',(err,files)=>{
    //show(files) //列出了路径下的文件名、路径名
})

/**
 * https://npm.taobao.org/mirrors/node/latest-v4.x/docs/api/fs.html#fs_class_fs_stats
 * 列出文件或目录信息
 */
//判断是文件或者目录
fs.stat(__dirname,(err,stats)=>{
    //show(stats) //包含文件大小、创建时间、修改时间等信息
    //show(stats.isFile())
    //show(stats.isDirectory())
})

/**
 * https://npm.taobao.org/mirrors/node/latest-v4.x/docs/api/fs.html#fs_fs_watch_filename_options_listener
 * 文件改变时触发
 */

fs.watch(
    __dirname,
    {recursive:true}, //recursive option can be used in max and windows
    (event,filename)=>{
        console.log(`event is: ${event}`); //rename可能是添加删除文件   change可能是文件改变 也可能是添加删除文件时触发
        if (filename) {
            console.log(`filename provided: ${filename}`);
        } else {
            console.log('filename not provided');
        }
    }
    
);








