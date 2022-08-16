var minWindow = function (s, t) {
    let right = 0;
    let left = 0;
    let solution = "";
    const ourMap = {};
    let top = 0;
  
    for (const element of t) {
      if (!ourMap[element]) {
        ourMap[element] = 1;
        top++;
      } else ourMap[element]++;
    }
  
    
    while (left < s.length) {
      const current = s[left];
  
      if (ourMap[current] !== undefined) {
        ourMap[current]--;
        if (ourMap[current] === 0) top--;
      }
  
      
      while (top === 0) {
        if (!solution) solution = s.slice(right, left + 1);
        else {
          const currentSubLength = left - right + 1;
          if (currentSubLength < solution.length)
            solution = s.slice(right, left + 1); 
        }
  
        const elementAtStart = s[right];
        if (ourMap[elementAtStart] !== undefined) {
          if (ourMap[elementAtStart] === 0) top++;
          ourMap[elementAtStart]++;
        }
        right++;
      }
      left++;
    }
  
    return solution;
  };

  ///time O(m+n)
  ///space O(n)