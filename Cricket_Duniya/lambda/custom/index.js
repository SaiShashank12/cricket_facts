

'use strict';
const Alexa = require('alexa-sdk');



const APP_ID = undefined;

const SKILL_NAME = 'Cricket Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a cricket fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye! Have a nice day.';


const data = [
    'Sri Lanka has a sole Test win against the Aussies till date.',
'Sanath Jayasuriya has more ODI wickets than Shane Warne.',
'Dhaka’s Sher-e-Bangla stadium and Bangabandhu stadium have hosted more ODIs than Lord’s.',
'The highest number of runs scored in an over is not 36. It’s 77.',
'Adam Gilchrist holds the record for playing the most number of Tests straight after debut.',
'Ishant Sharma is responsible for all the three highest scores made by a batsman against India in the 21 st century.',
'On 12 th January 1964, Indian spinner Bapu Nadkarni bowled 21 consecutive maiden overs vs England at Chennai.',
'Chris Martin and B.S Chandrasekhar have taken more Test wickets in their career than the test runs they scored.',
'Wilfred Rhodes took 4,204 wickets in First Class cricket.',
'In a World Cup Match, chasing 335, Sunil Gavaskar scored an unbeaten 36 off 174 balls.',
'Jim Laker once took 19 wickets in a Test match.',
'Saurav Ganguly is the only Indian player to score a century in the knock out stages of a World Cup.',
'After Virat Kohli’s debut, India has chased down 300+ targets five times.',
'Mahela Jayawardene is the only batsman to have scored centuries in both the Semi-Final and Final of a World Cup.',
'The player with the most number of not outs in Test cricket is not Rahul Dravid, but Courtney Walsh.',
'Saurav Ganguly is the only player to win four consecutive Man of the Match awards in ODIs.',
'Dirk Nannes has represented both Australia and Netherlands in International Cricket.',
'Shahid Afridi used a bat borrowed from Waqar Younis to score the fastest century in a ODI match.',
'In 1989, along with Sachin Tendulkar, 23 other cricketers made their International debuts. The last one to retire before Sachin, was New Zealand'/'s Chris Cairns, who retired in 2004.',
'Inzamam Ul Haq took a wicket off the very first ball he bowled in International Cricket.',
'Sir Don Bradman has just hit 6 sixes in his entire career.',
'Virender Sehwag’s highest scores in T20, ODI and Tests are 119, 219 and 319 respectively.',
'Wasim Akram’s highest Test innings score of 257 is higher than that of Sachin Tendulkars (who has 248 n.o. to his credit).',
'The England Cricket Team is the only team in ODI history to lose a 60 over ODI Final (1979 World Cup), a 50 over ODI Final (1992 World Cup and 2004 Champions Trophy) and a 20 over ODI Final (2013 Champions Trophy) in ICC tournaments.',
'Lance Klusener, Abdur Razzaq, Shoaib Malik and Hashan Tillakaratne are the only players to have batted in 10 different batting positions in ODIs.',
'Graeme Smith is the only player in the history of cricket to have captained a team for more than 100 Test matches.',
' Sachin Tendulkar got out for a duck only once in his Ranji career. Bhuvaneshwar Kumar got him.',
'Saeed Ajmal has never won a Man of the Match award in One Day International Cricket.',
'Chris Gayle is the only batsman to hit a six off the first ball of a Test match',
'Abbas Ali Baig was the first Indian cricketer to be kissed during a Test',
'Vinod Kambli Test match average is better than his childhood friend Sachin Tendulkar',
'Sunil Gavaskar was out off the first ball of a Test match thrice in his career',
'ML Jaisimha and Ravi Shastri are the only Indians to bat on all five days of a Test',
'The only cricketer to play Test cricket for India and England is Saif Ali Khan’s grandfather, Iftikhar Ali Khan Pataudi',
'There is an uncanny similarity between the Indo-Pak match at the Australasia Cup of 1986 and Asia Cup 2014',
'India won their second World Cup 28 years later in 2011 and remarkably won their second ever Test at Lord’s three years later in 2014.',
' India is the only country to win the 60-Over, 50-Over and 20-Over World Cup',
'Alec Stewart was born on 8-4-63 and he scored 8463 Test runs',
'Asif Karim of Kenya has played International cricket and Davis Cup (Tennis) for his country',
' Wilfred Rhodes of England played Test cricket till he was 52',
'Allan Border played 153 consecutive Test matches',
'The only Indian Test cricketer to be knighted is Maharaja of Vizianagaram',
'Australia beat England by 45 runs in the first ever cricket Test as well as the Centenary Test in 1977',
' The 2000 Lords Test between England and West Indies saw all the four innings being played on the same day. This feat was repeated 11 years later in the famous Cape Town Test where South Africa bowled out Australia for 47.',
'As a 10-year-old Richard Stokes witnessed Jim Laker taking all 10 wickets in the 1956 Old Trafford Test against Australia. Forty-three years later he was in India watching the India vs Pakistan Test and saw Anil Kumble taking all the 10 wickets in an innings. These were the only two Tests Stokes has watched in his life.',
'This coincidence occurred during the first Test between South Africa and Australia at Cape Town. At 11:11, on 11/11/11, South Africa were 125 for 1 needing a further 111 runs for a win.',
];


const handlers = {
    'LaunchRequest': function () {
    //this.emit('GetNewFactIntent');
       this.emit(':ask','Here, we will tell you amazing facts about cricket, wanna listen?','You there?');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'positive':function(){
      this.emit('GetNewFactIntent');  
    },
   'Negavitive':function(){
      this.emit(':tell',STOP_MESSAGE);  
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'Unhandle':function () {
        this.emit(':tell','Sorry I was not train for this :StopIntent');
    },
    'SessionEndedRequest':function(){
              this.emit('AMAZON.StopIntent');  

    },
    
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
