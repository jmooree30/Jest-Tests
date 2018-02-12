const arrayAnalysis = (arr) => ({
  length: arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  average: arr.reduce((n,sum) => n + sum / arr.length,0)
});

module.exports = arrayAnalysis;
