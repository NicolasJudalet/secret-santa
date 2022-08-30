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

export const simpleTestCase: TestCase = {
  description: '3 people - no couple test case',
  people: ['abdel', 'berenice', 'charles'],
  couples: [],
}

export const simpleTestCase2: TestCase = {
  description: '10 people - no couple test case',
  people: ['abdel', 'berenice', 'charles', 'damien', 'émilie', 'farouk', 'gatien', 'hector', 'ignacio', 'jérôme'],
  couples: [],
}

export const threePeopleOneCoupleTestCase: TestCase = {
  description: '3 people - 1 couple test case',
  people: ['abdel', 'berenice', 'charles'],
  couples: [['abdel', 'berenice']],
}

export const fourPeopleOneCoupleTestCase: TestCase = {
  description: '4 people - 1 couple test case',
  people: ['abdel', 'berenice', 'charles', 'delphine'],
  couples: [['abdel', 'berenice']],
}

export const fourPeopleTwoCouplesTestCase: TestCase = {
  description: '4 people - 2 couples test case',
  people: ['abdel', 'berenice', 'charles', 'delphine'],
  couples: [['abdel', 'berenice'], ['charles', 'delphine']],
}

export const genericTestCase: TestCase = {
  description: 'Generic test case',
  people:  ["Florent", "Jessica", "Coline", "Emilien", "Ambroise", "Bastien"],
  couples: [["Florent", "Jessica"], ["Coline", "Emilien"]],
}
