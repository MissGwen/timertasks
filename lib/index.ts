type TimerMapValue = [NodeJS.Timeout, () => void];

/**
 * 初始化定时器容器
 * * 结构: <自定义定时器名称> : [ <定时器ID> , <定时器执行回调函数> ]
 */
export const timerTaskMap = new Map<string, TimerMapValue>();

/** 设置定时任务可选参数 */
interface TimerParam {
  /** 设置是否立即执行 */
  immediate?: boolean;
}

/**
 * @description 设置并开启定时器
 * @param { string } customTimerName 自定义定时器名称
 * @param { Function } timerCallback 设置定时器的回调函数
 * @param { number } executionTime 定时器的执行时间
 * @param { TimerParam } timerParam 可选配置项
 */
export function setTimedTask(
  customTimerName: string,
  timerCallback: () => void,
  executionTime: number,
  timerParam?: TimerParam
): void {
  // 判断是否需要立即执行
  if (timerParam?.immediate) timerCallback();
  // 将定时器信息保存到Map中,方便管理
  // * <自定义定时器名称> : [ <定时器ID> , <定时器执行回调函数> ]
  timerTaskMap.set(customTimerName, [
    setInterval(timerCallback, executionTime),
    timerCallback,
  ]);
}

/**
 * @description 重启定时器
 * @param { string } customTimerName 已被管理的定时器名称
 * @param { number } executionTime 定时器的执行时间
 */
export function restartTimedTask(
  customTimerName: string,
  executionTime: number
): void {
  // 判断Map中是否存在key值
  if (timerTaskMap.has(customTimerName)) {
    // 获取 [ <定时器ID> , <定时器执行回调函数> ]
    const [timerID, timerCallback] = timerTaskMap.get(
      customTimerName
    ) as TimerMapValue;
    // 清除定时器
    clearInterval(timerID);
    // 重新设置定时器
    timerTaskMap.set(customTimerName, [
      setInterval(timerCallback, executionTime),
      timerCallback,
    ]);
  }
}

/**
 * @description 清除定时器
 * @param { string } customTimerName 已被管理的定时器名称
 */
export function clearTimedTask(customTimerName: string): void {
  // 判断Map中是否存在key值
  if (timerTaskMap.has(customTimerName)) {
    // 获取 [ <定时器ID> , <定时器执行回调函数> ]
    const [timerID] = timerTaskMap.get(customTimerName) as TimerMapValue;
    // 清除定时器
    clearInterval(timerID);
    // 删除Map的项
    timerTaskMap.delete(customTimerName);
  }
}

/**
 * @description 清除全部定时器
 */
export function clearAllTimedTask(): void {
  // 遍历Map中的值
  for (const [timerID] of timerTaskMap.values()) {
    // 清除定时器
    clearInterval(timerID);
  }
  // 清空Map
  timerTaskMap.clear();
}
