/**
 * flows.js — Centralized data definitions for all user flows.
 * Each flow is keyed by the user-type identifier and contains
 * an ordered array of steps with title, explanation, and instruction.
 */

export const USER_TYPES = [
  {
    id: 'first-time',
    label: 'First-time Voter',
    description: 'Never voted before? We\'ll walk you through everything.',
  },
  {
    id: 'not-registered',
    label: 'Not Registered Yet',
    description: 'Let\'s get you registered so you\'re ready on election day.',
  },
  {
    id: 'already-registered',
    label: 'Already Registered',
    description: 'Great! Let\'s make sure you know the voting day process.',
  },
  {
    id: 'exploring',
    label: 'Just Exploring',
    description: 'Curious about elections? Explore the full process here.',
  },
];

export const FLOWS = {
  'first-time': [
    {
      step: 1,
      title: 'Check Your Eligibility',
      explanation:
        'Before anything else, confirm you meet the basic requirements: you must be a citizen, at least 18 years old, and a resident of your voting district.',
      instruction:
        'Visit your country\'s election commission website or use their eligibility checker tool to verify your status.',
    },
    {
      step: 2,
      title: 'Gather Required Documents',
      explanation:
        'You\'ll need identity proof (government-issued ID, passport, or birth certificate) and address proof (utility bill, bank statement, or rental agreement).',
      instruction:
        'Collect originals and photocopies of your ID and address proof documents. Keep them in a single folder for easy access.',
    },
    {
      step: 3,
      title: 'Register to Vote',
      explanation:
        'Voter registration is the process of adding your name to the official electoral roll. Without registration, you cannot cast a vote.',
      instruction:
        'Fill out the voter registration form online or at your nearest election office. Submit it along with your documents before the deadline.',
    },
    {
      step: 4,
      title: 'Find Your Polling Booth',
      explanation:
        'Each registered voter is assigned a specific polling station based on their residential address. Voting at the wrong booth is not allowed.',
      instruction:
        'Search for your assigned polling station on the election commission website using your voter ID or registered address.',
    },
    {
      step: 5,
      title: 'Understand the Ballot',
      explanation:
        'The ballot lists all candidates or parties contesting in your constituency. Familiarize yourself with the candidates, their platforms, and the voting method (EVM, paper ballot, etc.).',
      instruction:
        'Research candidates in your constituency online. Note the symbol or number next to your preferred candidate.',
    },
    {
      step: 6,
      title: 'Cast Your Vote on Election Day',
      explanation:
        'On voting day, visit your assigned polling booth within the designated hours. Carry your voter ID. Follow the queue, verify your identity, and cast your vote in the booth.',
      instruction:
        'Arrive early at your polling station with your voter ID card. Follow instructions from polling officials and cast your vote using the provided method.',
    },
  ],

  'not-registered': [
    {
      step: 1,
      title: 'Check Your Eligibility',
      explanation:
        'Ensure you meet the age requirement (18+), citizenship criteria, and residency conditions for your voting district.',
      instruction:
        'Use the election commission\'s official eligibility tool to confirm you qualify to register.',
    },
    {
      step: 2,
      title: 'Prepare Your Documents',
      explanation:
        'Registration requires proof of identity and proof of address. Having these ready will speed up the process significantly.',
      instruction:
        'Gather a government-issued photo ID and a document showing your current address (utility bill, bank statement, etc.).',
    },
    {
      step: 3,
      title: 'Fill Out the Registration Form',
      explanation:
        'The registration form (often called Form 6 or equivalent) collects your personal details, address, and identification information.',
      instruction:
        'Complete the registration form online at the election commission website, or download it and fill it by hand for in-person submission.',
    },
    {
      step: 4,
      title: 'Submit Your Application',
      explanation:
        'Your completed form and supporting documents need to be submitted to the Electoral Registration Officer (ERO) of your constituency.',
      instruction:
        'Submit online through the portal, or visit your nearest election office to hand in your form with document copies.',
    },
    {
      step: 5,
      title: 'Track Your Application',
      explanation:
        'After submission, your application goes through a verification process. You\'ll receive a reference number to track its status.',
      instruction:
        'Use the reference number on the election commission website to check if your registration has been approved.',
    },
    {
      step: 6,
      title: 'Receive Your Voter ID',
      explanation:
        'Once approved, you\'ll be issued a Voter ID card (EPIC) which serves as your primary identity at the polling booth.',
      instruction:
        'Collect your Voter ID from the election office or wait for it to be delivered. Verify all details are correct.',
    },
  ],

  'already-registered': [
    {
      step: 1,
      title: 'Verify Your Registration Details',
      explanation:
        'Even if you\'re registered, it\'s important to verify that your name, address, and polling station are up to date on the electoral roll.',
      instruction:
        'Search for your name on the electoral roll using the election commission\'s voter search portal.',
    },
    {
      step: 2,
      title: 'Locate Your Polling Booth',
      explanation:
        'Your polling station may change between elections. Confirm the exact location, address, and booth number assigned to you.',
      instruction:
        'Check your polling station details on the election commission website or the Voter Helpline app.',
    },
    {
      step: 3,
      title: 'Know What to Bring',
      explanation:
        'On election day, you must carry a valid photo ID for identity verification at the polling station.',
      instruction:
        'Keep your Voter ID card ready. Alternative IDs (passport, driving license, Aadhaar) may also be accepted — check the official list.',
    },
    {
      step: 4,
      title: 'Understand the Voting Process',
      explanation:
        'At the booth, you\'ll verify your identity, receive a ballot or be directed to an EVM, cast your vote in a private booth, and get your finger marked with indelible ink.',
      instruction:
        'Familiarize yourself with the EVM/ballot process. Remember: press the button next to your candidate\'s name and symbol on the EVM.',
    },
    {
      step: 5,
      title: 'Vote and Verify',
      explanation:
        'After casting your vote, the VVPAT slip (if available) will display your selection for a few seconds so you can verify it\'s correct.',
      instruction:
        'After pressing the button on the EVM, check the VVPAT slip to confirm your vote was recorded for the right candidate.',
    },
  ],

  exploring: [
    {
      step: 1,
      title: 'What Is an Election?',
      explanation:
        'An election is a formal process where citizens choose their representatives by casting votes. It\'s the foundation of democratic governance.',
      instruction:
        'Read up on how your country\'s electoral system works — is it first-past-the-post, proportional representation, or a mixed system?',
    },
    {
      step: 2,
      title: 'Who Can Vote?',
      explanation:
        'Voting eligibility typically requires citizenship, a minimum age (usually 18), and registration on the electoral roll. Some conditions may disqualify voters.',
      instruction:
        'Check the eligibility criteria on your election commission\'s website to understand who qualifies to vote.',
    },
    {
      step: 3,
      title: 'How Does Registration Work?',
      explanation:
        'Voter registration adds your name to the official list of eligible voters. Without it, you cannot participate in elections even if you meet all other criteria.',
      instruction:
        'Explore the registration process on the election commission website — it\'s usually free and can be done online.',
    },
    {
      step: 4,
      title: 'What Happens on Voting Day?',
      explanation:
        'On election day, registered voters visit their assigned polling stations, verify their identity, and cast their vote using the available method (EVM, paper ballot, etc.).',
      instruction:
        'Watch official explainer videos from the election commission to see the voting day process in action.',
    },
    {
      step: 5,
      title: 'How Are Results Declared?',
      explanation:
        'After voting ends, ballots/EVMs are sealed and counted on the designated counting day. Results are declared constituency by constituency.',
      instruction:
        'Follow the official election commission results portal on counting day for live, accurate updates.',
    },
    {
      step: 6,
      title: 'Why Your Vote Matters',
      explanation:
        'Every single vote contributes to shaping the government. Elections have been decided by very thin margins — your vote truly counts.',
      instruction:
        'Look up past elections in your area to see how close some results were. Your participation makes a difference!',
    },
  ],
};

/** Timeline events for the election cycle */
export const TIMELINE_EVENTS = [
  {
    id: 'announcement',
    title: 'Election Announcement',
    description: 'The Election Commission announces the schedule, including key dates and the code of conduct.',
    phase: 'Pre-Election',
  },
  {
    id: 'registration',
    title: 'Registration Period',
    description: 'The window to register as a voter or update your existing registration details on the electoral roll.',
    phase: 'Pre-Election',
  },
  {
    id: 'campaigning',
    title: 'Campaign Period',
    description: 'Candidates and parties campaign to win votes. Campaigning stops 48 hours before polling begins.',
    phase: 'Pre-Election',
  },
  {
    id: 'voting',
    title: 'Voting Day',
    description: 'Registered voters cast their ballots at assigned polling stations during the designated hours.',
    phase: 'Election',
  },
  {
    id: 'counting',
    title: 'Counting Day',
    description: 'Votes are counted under strict supervision. Results are announced as counting progresses.',
    phase: 'Post-Election',
  },
  {
    id: 'results',
    title: 'Result Declaration',
    description: 'Final results are officially declared and winning candidates are announced for each constituency.',
    phase: 'Post-Election',
  },
];

/** Readiness checklist items */
export const READINESS_ITEMS = [
  {
    id: 'registered',
    label: 'I am registered to vote',
    description: 'Your name appears on the official electoral roll.',
  },
  {
    id: 'polling-booth',
    label: 'I know my polling booth location',
    description: 'You\'ve confirmed where you need to go on voting day.',
  },
  {
    id: 'documents',
    label: 'I have my voter ID / valid photo ID',
    description: 'You have the required identification documents ready.',
  },
  {
    id: 'process',
    label: 'I understand the voting process',
    description: 'You know how to use the EVM/ballot and what to expect.',
  },
  {
    id: 'candidate',
    label: 'I\'ve researched my candidates',
    description: 'You\'ve looked into who is contesting in your constituency.',
  },
];
