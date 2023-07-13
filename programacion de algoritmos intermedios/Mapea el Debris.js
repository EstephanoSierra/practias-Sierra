function orbitalPeriod(arr) {
const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const calculatePeriod = (avgAlt) => {
    const a = earthRadius + avgAlt;
    const period = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM));
    return period;
  };

  const transformedArr = arr.map((element) => {
    const { name, avgAlt } = element;
    const period = calculatePeriod(avgAlt);
    return { name, orbitalPeriod: period };
  });

  return transformedArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);