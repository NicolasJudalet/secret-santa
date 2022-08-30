export const logResponse = (distribution: string[]) => {
  console.log('\n============');
  console.log('\nPresent distribution found !');
  console.log(`\nDistribution: ${[...distribution, distribution[0]].join(' > ')}`);
  console.log('\n============');
}
