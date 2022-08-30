export const logResponse = (distribution: string[]) => {
  console.log('\n============');
  console.log('\nPresents distribution found !');
  console.log(`\nDistribution: ${[...distribution, distribution[0]].join(' > ')}`);
  console.log('\n============');
}
