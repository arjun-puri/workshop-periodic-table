function performanceCheck(cb) {
  const a = performance.now();
  const result = cb();
  return {time: performance.now() - a, result};
}

export default performanceCheck;