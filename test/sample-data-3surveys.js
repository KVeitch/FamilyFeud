const data = {
  response_code: {
    version: '1.5',
    termsofService: 'http://frontend.turing.io/projects/family-feud.html',
    features: {
      surveys: 1,
      answers: 1
    },
  },
  surveys: [
    { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
    { id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' },
    { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' },
    { id: 4, question: 'Why Might A Family Move Into A Bigger House?' }
  ],
  answers: [
    { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
    { answer: 'Beer', respondents: 67, surveyId: 1 },
    { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
    { answer: 'Buy It', respondents: 4, surveyId: 2 },
    { answer: 'Calendar', respondents: 3, surveyId: 3 },
    { answer: 'Donuts', respondents: 24, surveyId: 1 },
    { answer: 'Remove Price Tag', respondents: 27, surveyId: 2 },
    { answer: 'Watch', respondents: 58, surveyId: 3 },
    { answer: 'Wrap It', respondents: 61, surveyId: 2 },
    { answer: 'Can Afford More', respondents: 5, surveyId: 4 },
    { answer: 'Family Has Grown', respondents: 61, surveyId: 4 },
    { answer: 'Want More Space', respondents: 33, surveyId: 4 }
  ]
};


export default data;