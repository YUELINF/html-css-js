/* 
    jQuery简介：
        - 概念：jQuery是一个优秀的轻量级的JavaScript库，而非JavaScript
        - 兼容性：兼容CSS3，以及各种浏览器
        - jQuery使用户能更方便处理HTML、events、实现动画效果，并且方便的为网站提供Ajax交互
        - 优势：文档说明很全，而且各种应用也说的很详细，同时还有许多成熟的插件可供选择
        - 核心理念：write less,d0 more!
*/



$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })
})