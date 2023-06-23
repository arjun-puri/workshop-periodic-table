function performanceCheck(cb) {
  const a = performance.now();
  cb();
  if(cb.name.length === 0) {
    console.log(`Ran anonymous function, time taken: `, performance.now() - a);
  } else {
    console.log(`Ran function ${cb.name}, time taken: `, performance.now() - a);
  }
}

export default performanceCheck;