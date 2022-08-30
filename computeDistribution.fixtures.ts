interface TestCase {
  description: string,
  people: string[],
  couples: string[][],
}

export const emptyTestCase: TestCase = {
  description: '0 people test case',
  people: [],
  couples: [],
}

export const onePersonTestCase: TestCase = {
  description: '1 person test case',
  people: ['nico'],
  couples: [],
}

export const twoPeopleTestCase: TestCase = {
  description: '2 people test case',
  people: ['abdel', 'berenice'],
  couples: [],
}
