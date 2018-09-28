function findMatching(drivers, string){
  
const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase());

return result;
}


function fuzzyMatch(drivers, string){
  function fuzzy {
    const slength = string.length - 1;
    const slicedDrivers = [];
  }

  const result = drivers.filter(word => word === string);
  return result;
}