function findMatching(drivers, string){
  
const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase());

return result;
}


function fuzzyMatch(drivers, string){
  const slength = string.length - 1;
  const slicedDrivers = [];
  for (var driver of drivers){
    
  }
  const result = drivers.filter(word => word === string);
  return result;
}