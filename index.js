function findMatching(drivers, string){
  
const result = drivers.filter(word => word.toLowerCase() === string.toLowerCase());

return result;
}