function findMatching(drivers, string){
  
const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase());

return result;
}


function fuzzyMatch(drivers, string){
  const result = drivers.filter(word => word[0] === string);
  return string;
}