 (function (doc, win) {
       var docEl = doc.documentElement,
           resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
           //orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
           //resize事件是屏幕缩放时候触发的事件
           recalc = function () {
               var clientWidth = docEl.clientWidth;
               console.log(clientWidth)
               if (!clientWidth) return;
               if(clientWidth>=640){
                   docEl.style.fontSize = '100px';
               }else{
                   docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
               }
           };
       if (!doc.addEventListener) return;
       win.addEventListener(resizeEvt, recalc, false);
       doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);