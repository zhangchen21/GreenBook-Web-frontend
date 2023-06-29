// 防抖
export function debounce(func: Function, time:  number = 500) {
  // 定义一个变量用于存储定时器
  let timeout: number;
  // 返回一个新的函数
  return function(this: any) {
    // 获取函数的上下文和参数
    let context = this;
    let args = arguments;

    // 如果已经设置了定时器，则清除它
    if (timeout) clearTimeout(timeout);

    // 设置一个新的定时器，在 wait 毫秒后执行 func 函数
    timeout = window.setTimeout(function(){
      // eslint-disable-next-line @typescript-eslint/ban-types
      func.apply(context, args);
    }, time);
  };
}