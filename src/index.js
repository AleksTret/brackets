module.exports =    function check(bracketSequence, bracketsConfig){
  if(!bracketSequence || !bracketsConfig || !Array.isArray(bracketsConfig))
    return false;

  let sequence = bracketSequence.split("");
  if (sequence.length % 2) 
    return false;

  let bracketsSet = new Map(bracketsConfig);
  let result = [];

  sequence.forEach((item) => {
    if(item === bracketsSet.get(result[result.length - 1])){
      result.pop();
    }
    else {
      result.push(item);
    }
  });
  
  return result.length === 0;
}