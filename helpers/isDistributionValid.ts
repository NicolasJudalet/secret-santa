export const isDistributionValid = (distribution: string[], couples: string[][]) => {
  const forbiddenPresents = {};
  for (const couple of couples) {
    forbiddenPresents[couple[0]] = couple[1];
    forbiddenPresents[couple[1]] = couple[0];
  }

  const loopedDistribution = [...distribution, distribution[0]]
  for (const [index, person] of distribution.entries()) {
    // Reciprocity rule
    if (index > 0 && distribution[index-1] === loopedDistribution[index+1]) {
      return false;
    }

    // Couples rule
    if (forbiddenPresents[person] === loopedDistribution[index+1]){
      return false;
    }
  }

  return true;
}
