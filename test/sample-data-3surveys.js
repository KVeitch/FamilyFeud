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
    { answer: '1', respondents: 34, surveyId: 3 },
    { answer: '1', respondents: 67, surveyId: 1 },
    { answer: '2', respondents: 5, surveyId: 1 },
    { answer: '1', respondents: 4, surveyId: 2 },
    { answer: '2', respondents: 3, surveyId: 3 },
    { answer: '3', respondents: 24, surveyId: 1 },
    { answer: '2', respondents: 27, surveyId: 2 },
    { answer: '3', respondents: 58, surveyId: 3 },
    { answer: '3', respondents: 61, surveyId: 2 },
    { answer: '1', respondents: 5, surveyId: 4 },
    { answer: '2', respondents: 61, surveyId: 4 },
    { answer: '3', respondents: 33, surveyId: 4 }
  ]
};


export default data;