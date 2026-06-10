// ============================================================
// CricketHub – app.js
// ============================================================

// --- Default Seed Data ---
const DEFAULT_TEAMS = [
  {
    id: "RCB",
    name: "Royal Challengers Bengaluru",
    password: "RCB18",
    slogan: "Play Bold",
    logo: "🔴",
    color: "#e03e3e",
    management: {
      founder: "Zstar studio's pvt ltd (Founder: Mr. Zeeshan M)",
      ceo: "Ms. Priya Malhotra",
      cfo: "Mr. Arwind Mehta",
      cmo: "Ms. Neha Kapoor",
      homeGround: "Zstar cricket ground Bengaluru"
    },
    coaching: [
      { name: "Mr. Rahul Dravid", role: "Head coach" },
      { name: "Mr. Sachin Tendulkar", role: "Batting coach" },
      { name: "Mr. Anil Kumble", role: "Bowling coach" },
      { name: "Mr. Md Kaif", role: "Fielding coach" }
    ],
    physio: [
      { name: "Dr. Aakash Verma", role: "Physio" },
      { name: "Vikram Shetty", role: "Gym trainer" }
    ],
    analysis: [
      { name: "Mr. Rahul Iyer", role: "Performance analyst" },
      { name: "Mr. Aarav Sharma", role: "Strategic advisor" },
      { name: "Ms. Sneha Patel", role: "Opposition analyst" },
      { name: "Mr. Rishi Malhotra", role: "Video analyst" }
    ],
    support: [
      { name: "Mrs. Ananya Sen", role: "Team manager" },
      { name: "Mr. Abhay Rathore", role: "Security head" },
      { name: "Rajesh Nair", role: "Kit & Equipment manager" },
      { name: "Anurag Swami", role: "Driver" },
      { name: "Asif M", role: "Driver" }
    ],
    prMedia: [
      { name: "Ms. Kavya Rao", role: "Media & PR manager" },
      { name: "Mr. Rohan Kapoor", role: "Fan engagement host" },
      { name: "Ms. Tanya Gupta", role: "Social media handler" },
      { name: "Ms. Meera Nair", role: "PR Event Coordinator" },
      { name: "Mr. Aditya Verma", role: "Crisis PR specialist" },
      { name: "Mr. Farhan Khan", role: "Digital campaign strategist" }
    ],
    sponsors: [
      { name: "Nike", type: "Title Sponsor" },
      { name: "Red Bull", type: "Energy Drink Partner" },
      { name: "ITC", type: "Hospitality Partner" },
      { name: "Zstar Media", type: "Media Partner" },
      { name: "boAt", type: "Audio & Lifestyle Partner" },
      { name: "Qatar Airways", type: "Official Travel Partner" }
    ],
    players: [
      // Batsmen
      { id: "rcb_vk", name: "V. Kohli", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: true, isViceCaptain: false },
      { id: "rcb_abd", name: "A.B. Devilliers", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_dp", name: "D. Padikkal", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_cp", name: "C. Pujara", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_sr", name: "S. Raina", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_kn", name: "K. Nair", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_sb", name: "S. Binny", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      // All rounder
      { id: "rcb_gm", name: "G. Maxwell", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_kp", name: "K. Pandya", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ca", name: "C. Anderson", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_sbv", name: "S. B. Vinny", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      // Wicket keeper
      { id: "rcb_dk", name: "D. Kartik", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "rcb_sh", name: "S. Hope", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_tb", name: "T. Banton", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ws", name: "W. Saha", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      // Spin Bowler
      { id: "rcb_yc", name: "Y. Chahal", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_hs", name: "H. Singh", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      // Fast Bowler
      { id: "rcb_pc", name: "P. Cummins", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_tbou", name: "T. Boult", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_jp", name: "J. Pattinson", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ms", name: "M. Siraj", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ak", name: "A. Khan", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_va", name: "V. Aaron", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: [
      {
        id: "rcb_m1",
        number: 1,
        date: "2026-04-10",
        time: "19:30",
        venue: "Zstar cricket ground Bengaluru",
        opposition: "Mumbai Indians",
        toss: "Royal Challengers Bengaluru",
        decision: "Batting",
        result: "Won",
        playerOfMatch: "V. Kohli",
        playingXI: ["rcb_vk", "rcb_abd", "rcb_dp", "rcb_gm", "rcb_dk", "rcb_yc", "rcb_ms", "rcb_pc", "rcb_tbou", "rcb_kp", "rcb_sr"],
        opponentXI: ["R. Sharma", "Q. de Kock", "S. Yadav", "I. Kishan", "H. Pandya", "K. Pandya", "K. Pollard", "J. Bumrah", "T. Boult", "R. Chahar", "M. Jansen"],
        notes: "Excellent opening match victory! Virat Kohli led from the front with a spectacular century. Yuzvendra Chahal turned the game around in the middle overs.",
        performances: [
          { playerId: "rcb_vk", runs: 104, balls: 62, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_abd", runs: 48, balls: 22, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_dp", runs: 15, balls: 12, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_gm", runs: 22, balls: 14, isOut: true, wickets: 1, runsConceded: 18, overs: 2 },
          { playerId: "rcb_dk", runs: 12, balls: 8, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_yc", runs: 0, balls: 0, isOut: false, wickets: 3, runsConceded: 24, overs: 4 },
          { playerId: "rcb_ms", runs: 0, balls: 0, isOut: false, wickets: 2, runsConceded: 32, overs: 4 },
          { playerId: "rcb_pc", runs: 0, balls: 0, isOut: false, wickets: 1, runsConceded: 28, overs: 4 },
          { playerId: "rcb_tbou", runs: 0, balls: 0, isOut: false, wickets: 2, runsConceded: 30, overs: 4 },
          { playerId: "rcb_kp", runs: 5, balls: 4, isOut: true, wickets: 0, runsConceded: 15, overs: 2 }
        ],
        status: "Completed"
      },
      {
        id: "rcb_m2",
        number: 2,
        date: "2026-04-15",
        time: "19:30",
        venue: "Wankhede Stadium, Mumbai",
        opposition: "Chennai Super Kings",
        toss: "Chennai Super Kings",
        decision: "Bowling",
        result: "Lost",
        playerOfMatch: "R. Jadeja",
        playingXI: ["rcb_vk", "rcb_abd", "rcb_dp", "rcb_gm", "rcb_dk", "rcb_yc", "rcb_ms", "rcb_pc", "rcb_tbou", "rcb_kp", "rcb_sr"],
        opponentXI: ["F. du Plessis", "R. Gaikwad", "S. Raina", "A. Rayudu", "M.S. Dhoni", "R. Jadeja", "S. Curran", "D. Chahar", "S. Thakur", "L. Ngidi", "I. Tahir"],
        notes: "A tough defeat. Ravindra Jadeja took away the game with both bat and ball in the death overs. Need to improve batting strike rate in the middle overs.",
        performances: [
          { playerId: "rcb_vk", runs: 35, balls: 28, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_abd", runs: 52, balls: 31, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_dp", runs: 28, balls: 18, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_gm", runs: 14, balls: 9, isOut: true, wickets: 0, runsConceded: 22, overs: 2 },
          { playerId: "rcb_dk", runs: 18, balls: 15, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_yc", runs: 2, balls: 5, isOut: false, wickets: 1, runsConceded: 29, overs: 4 },
          { playerId: "rcb_ms", runs: 1, balls: 2, isOut: false, wickets: 0, runsConceded: 35, overs: 4 },
          { playerId: "rcb_pc", runs: 8, balls: 6, isOut: true, wickets: 2, runsConceded: 42, overs: 4 },
          { playerId: "rcb_tbou", runs: 0, balls: 1, isOut: true, wickets: 1, runsConceded: 28, overs: 4 }
        ],
        status: "Completed"
      },
      {
        id: "rcb_m3",
        number: 3,
        date: "2026-04-20",
        time: "19:30",
        venue: "Zstar cricket ground Bengaluru",
        opposition: "Kolkata Knight Riders",
        toss: "Royal Challengers Bengaluru",
        decision: "Bowling",
        result: "Won",
        playerOfMatch: "G. Maxwell",
        playingXI: ["rcb_vk", "rcb_abd", "rcb_dp", "rcb_gm", "rcb_dk", "rcb_yc", "rcb_ms", "rcb_pc", "rcb_tbou", "rcb_hs", "rcb_ca"],
        opponentXI: ["S. Gill", "N. Rana", "R. Tripathi", "E. Morgan", "D. Karthik", "A. Russell", "P. Cummins", "S. Narine", "V. Chakravarthy", "P. Krishna", "H. Patel"],
        notes: "Outstanding run chase! Glenn Maxwell played a jaw-dropping innings of 78 off 38 balls. Harbhajan Singh was incredibly economical in the powerplay.",
        performances: [
          { playerId: "rcb_vk", runs: 42, balls: 33, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_dp", runs: 25, balls: 20, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_gm", runs: 78, balls: 38, isOut: true, wickets: 1, runsConceded: 12, overs: 1 },
          { playerId: "rcb_abd", runs: 34, balls: 18, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_yc", runs: 0, balls: 0, isOut: false, wickets: 2, runsConceded: 25, overs: 4 },
          { playerId: "rcb_ms", runs: 0, balls: 0, isOut: false, wickets: 1, runsConceded: 31, overs: 4 },
          { playerId: "rcb_pc", runs: 0, balls: 0, isOut: false, wickets: 2, runsConceded: 29, overs: 4 },
          { playerId: "rcb_hs", runs: 0, balls: 0, isOut: false, wickets: 1, runsConceded: 16, overs: 4 }
        ],
        status: "Completed"
      },
      {
        id: "rcb_m4",
        number: 4,
        date: "2026-05-28",
        time: "19:30",
        venue: "Zstar cricket ground Bengaluru",
        opposition: "Delhi Capitals",
        toss: "",
        decision: "",
        result: "",
        playerOfMatch: "",
        playingXI: [],
        opponentXI: [],
        notes: "",
        performances: [],
        status: "Scheduled"
      },
      {
        id: "rcb_m5",
        number: 5,
        date: "2026-06-02",
        time: "19:30",
        venue: "Narendra Modi Stadium, Ahmedabad",
        opposition: "Punjab Kings",
        toss: "",
        decision: "",
        result: "",
        playerOfMatch: "",
        playingXI: [],
        opponentXI: [],
        notes: "",
        performances: [],
        status: "Scheduled"
      }
    ]
  },
  {
    id: "MI",
    name: "Mumbai Indians",
    password: "MI45",
    slogan: "Duniya Hila Denge Hum",
    logo: "💙",
    color: "#2277f4",
    management: {
      founder: "Reliance Industries",
      ceo: "Mr. Akash Ambani",
      cfo: "Mr. Sandeep Patel",
      cmo: "Mrs. Nita Ambani",
      homeGround: "Wankhede Stadium, Mumbai"
    },
    coaching: [{ name: "Mahela Jayawardene", role: "Head coach" }],
    physio: [{ name: "Patrick Farhart", role: "Physio" }],
    analysis: [{ name: "C.K. M", role: "Analyst" }],
    support: [],
    prMedia: [],
    sponsors: [{ name: "Samsung", type: "Title Sponsor" }],
    players: [
      { id: "mi_rs", name: "R. Sharma", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: true, isViceCaptain: false },
      { id: "mi_sy", name: "S. Yadav", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_ik", name: "I. Kishan", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "mi_jb", name: "J. Bumrah", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: [
      {
        id: "mi_m1",
        number: 1,
        date: "2026-04-10",
        time: "19:30",
        venue: "Zstar cricket ground Bengaluru",
        opposition: "Royal Challengers Bengaluru",
        toss: "Royal Challengers Bengaluru",
        decision: "Batting",
        result: "Lost",
        playerOfMatch: "V. Kohli",
        playingXI: ["mi_rs", "mi_sy", "mi_ik", "mi_jb"],
        opponentXI: ["V. Kohli", "A.B. Devilliers", "D. Padikkal"],
        notes: "RCB batsman outplayed our bowling lineup in the powerplay. Virat's hundred was the difference.",
        performances: [
          { playerId: "mi_rs", runs: 19, balls: 15, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "mi_sy", runs: 54, balls: 35, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "mi_ik", runs: 28, balls: 21, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "mi_jb", runs: 2, balls: 2, isOut: false, wickets: 2, runsConceded: 24, overs: 4 }
        ],
        status: "Completed"
      }
    ]
  },
  {
    id: "CSK",
    name: "Chennai Super Kings",
    password: "CSK7",
    slogan: "Whistle Podu",
    logo: "💛",
    color: "#f4c422",
    management: {
      founder: "India Cements",
      ceo: "Mr. K.S. Viswanathan",
      cfo: "Mr. Ramesh Kumar",
      cmo: "Mr. Sundar R.",
      homeGround: "M.A. Chidambaram Stadium, Chennai"
    },
    coaching: [{ name: "Stephen Fleming", role: "Head coach" }],
    physio: [{ name: "Tommy Simsek", role: "Physio" }],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [{ name: "TVS Eurogrip", type: "Title Sponsor" }],
    players: [
      { id: "csk_msd", name: "M.S. Dhoni", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "csk_rg", name: "R. Gaikwad", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_rj", name: "R. Jadeja", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: true },
      { id: "csk_dc", name: "D. Chahar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: [
      {
        id: "csk_m1",
        number: 1,
        date: "2026-04-15",
        time: "19:30",
        venue: "Wankhede Stadium, Mumbai",
        opposition: "Royal Challengers Bengaluru",
        toss: "Chennai Super Kings",
        decision: "Bowling",
        result: "Won",
        playerOfMatch: "R. Jadeja",
        playingXI: ["csk_msd", "csk_rg", "csk_rj", "csk_dc"],
        opponentXI: ["V. Kohli", "A.B. Devilliers", "D. Padikkal"],
        notes: "Jadeja's all-round masterclass secured a comfortable victory against a strong RCB side.",
        performances: [
          { playerId: "csk_rj", runs: 62, balls: 28, isOut: false, wickets: 3, runsConceded: 13, overs: 4 },
          { playerId: "csk_rg", runs: 33, balls: 25, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "csk_msd", runs: 14, balls: 9, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "csk_dc", runs: 0, balls: 0, isOut: false, wickets: 1, runsConceded: 32, overs: 4 }
        ],
        status: "Completed"
      }
    ]
  }
];

// --- Application State ---
let state = {
  teams: [],
  currentUser: null, // { role: 'admin' | 'team', teamId: string | null }
  activeTab: "dashboard", // Current side nav
  activeSubTab: "all", // Sub categories if needed
  selectedTeamId: "RCB", // Selected team filter in Admin view or general view
  editingPlayerId: null,
  editingMatchId: null,
  toastTimeout: null
};

// --- Initialization ---
function initApp() {
  // Load from localStorage or set defaults
  const storedTeams = localStorage.getItem("zpl_teams");
  if (storedTeams) {
    state.teams = JSON.parse(storedTeams);
  } else {
    state.teams = DEFAULT_TEAMS;
    localStorage.setItem("zpl_teams", JSON.stringify(state.teams));
  }

  const storedUser = sessionStorage.getItem("zpl_user");
  if (storedUser) {
    state.currentUser = JSON.parse(storedUser);
    // If team user, enforce selection of their own team
    if (state.currentUser.role === "team") {
      state.selectedTeamId = state.currentUser.teamId;
    }
  } else {
    state.currentUser = null;
  }

  render();
}

// --- LocalStorage persistence ---
function saveToStorage() {
  localStorage.setItem("zpl_teams", JSON.stringify(state.teams));
}

// --- Notifications ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let emoji = "ℹ️";
  if (type === "success") emoji = "✅";
  if (type === "error") emoji = "❌";

  toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Data Operations & Math Helpers ---

function getTeam(teamId) {
  return state.teams.find(t => t.id === teamId) || state.teams[0];
}

// Calculate player stats dynamically based on matches
function getPlayerStats(playerId, team) {
  let matchesPlayed = 0;
  let totalRuns = 0;
  let totalBalls = 0;
  let outs = 0;
  let wickets = 0;
  let runsConceded = 0;
  let ballsBowled = 0;

  team.matches.forEach(m => {
    if (m.status !== "Completed") return;
    
    // Check if player played (either in playingXI or has performance recorded)
    const hasPlayed = m.playingXI && m.playingXI.includes(playerId);
    const perf = m.performances && m.performances.find(p => p.playerId === playerId);

    if (hasPlayed || perf) {
      matchesPlayed++;
    }

    if (perf) {
      totalRuns += Number(perf.runs || 0);
      totalBalls += Number(perf.balls || 0);
      if (perf.isOut) outs++;
      wickets += Number(perf.wickets || 0);
      runsConceded += Number(perf.runsConceded || 0);
      
      // Calculate balls from overs
      const overs = Number(perf.overs || 0);
      const wholeOvers = Math.floor(overs);
      const partOvers = Math.round((overs - wholeOvers) * 10);
      ballsBowled += (wholeOvers * 6) + (partOvers > 6 ? 6 : partOvers);
    }
  });

  const battingAvg = outs > 0 ? (totalRuns / outs).toFixed(2) : (totalRuns > 0 ? "N/A" : "0.00");
  const strikeRate = totalBalls > 0 ? ((totalRuns / totalBalls) * 100).toFixed(2) : "0.00";
  
  // Economy rate
  let economy = "0.00";
  if (ballsBowled > 0) {
    economy = ((runsConceded / ballsBowled) * 6).toFixed(2);
  }

  // Overs Bowled readable format
  const oversString = `${Math.floor(ballsBowled / 6)}.${ballsBowled % 6}`;

  return {
    matchesPlayed,
    totalRuns,
    totalBalls,
    outs,
    battingAvg,
    strikeRate,
    wickets,
    runsConceded,
    oversString,
    economy
  };
}

// Global Cap Holders Search (Orange and Purple)
function getGlobalCapHolders() {
  let topBatsman = { name: "N/A", teamLogo: "", teamName: "", runs: 0, avg: "0.00" };
  let topBowler = { name: "N/A", teamLogo: "", teamName: "", wickets: 0, eco: "0.00" };

  state.teams.forEach(t => {
    t.players.forEach(p => {
      const stats = getPlayerStats(p.id, t);
      if (stats.totalRuns > topBatsman.runs) {
        topBatsman = {
          name: p.name,
          teamLogo: t.logo,
          teamName: t.name,
          runs: stats.totalRuns,
          avg: stats.battingAvg
        };
      }
      if (stats.wickets > topBowler.wickets) {
        topBowler = {
          name: p.name,
          teamLogo: t.logo,
          teamName: t.name,
          wickets: stats.wickets,
          eco: stats.economy
        };
      }
    });
  });

  return { topBatsman, topBowler };
}

// Calculate team points table records
function getPointsTable() {
  return state.teams.map(t => {
    let won = 0;
    let lost = 0;
    
    t.matches.forEach(m => {
      if (m.status === "Completed") {
        if (m.result === "Won") won++;
        else if (m.result === "Lost") lost++;
      }
    });

    return {
      id: t.id,
      name: t.name,
      logo: t.logo,
      color: t.color,
      played: won + lost,
      won,
      lost,
      points: won * 2
    };
  }).sort((a, b) => b.points - a.points || b.won - a.won);
}

// --- Authentication UI & Logic ---

function handleLogin(e) {
  e.preventDefault();
  const role = document.getElementById("login-role").value;
  const errorEl = document.getElementById("login-error");
  errorEl.textContent = "";

  if (role === "admin") {
    const pass = document.getElementById("admin-pass").value;
    if (pass === "admin123") {
      state.currentUser = { role: "admin", teamId: null };
      sessionStorage.setItem("zpl_user", JSON.stringify(state.currentUser));
      state.activeTab = "dashboard";
      showToast("Logged in as Admin successfully!");
      render();
    } else {
      errorEl.textContent = "Invalid Admin password (hint: admin123)";
    }
  } else {
    const teamId = document.getElementById("team-select").value;
    const pass = document.getElementById("team-pass").value;
    const team = state.teams.find(t => t.id === teamId);

    if (team && team.password === pass) {
      state.currentUser = { role: "team", teamId: team.id };
      sessionStorage.setItem("zpl_user", JSON.stringify(state.currentUser));
      state.selectedTeamId = team.id;
      state.activeTab = "team_profile";
      showToast(`Welcome back, ${team.name}!`);
      render();
    } else {
      errorEl.textContent = `Invalid password for ${team ? team.name : 'selected team'}`;
    }
  }
}

function handleLogout() {
  state.currentUser = null;
  sessionStorage.removeItem("zpl_user");
  state.activeTab = "login";
  showToast("Logged out successfully");
  render();
}

// --- Modal Control ---
function openModal(htmlContent) {
  const overlay = document.getElementById("modal-overlay");
  const box = document.getElementById("modal-box");
  box.innerHTML = htmlContent;
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

// --- DOM Rendering Router ---

function render() {
  const appContainer = document.getElementById("app");
  
  // 1. If not logged in, render login page
  if (!state.currentUser) {
    appContainer.innerHTML = renderLoginPage();
    // Bind login form elements
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("login-role").addEventListener("change", (e) => {
      const isTeam = e.target.value === "team";
      document.getElementById("admin-pass-group").style.display = isTeam ? "none" : "block";
      document.getElementById("team-login-group").style.display = isTeam ? "block" : "none";
    });
    return;
  }

  // 2. Render main Layout with Sidebar and Navigation
  appContainer.innerHTML = `
    <div class="layout">
      ${renderTopbar()}
      ${renderSidebar()}
      <main class="main-content" id="main-content-panel">
        ${renderActivePage()}
      </main>
    </div>
  `;

  // Bind any active event listeners or scroll locks
  setupPageListeners();
}

// --- Renderers for components ---

function renderLoginPage() {
  const teamOptions = state.teams.map(t => `<option value="${t.id}">${t.logo} ${t.name}</option>`).join("");
  return `
    <div class="login-page">
      <div class="login-card">
        <div class="login-brand">
          <div class="emoji">🏏</div>
          <h1>Zstar Premier League</h1>
          <p>Cricket Tournament Management Portal</p>
        </div>
        <form id="login-form">
          <div class="form-group">
            <label for="login-role">Login As</label>
            <select id="login-role" class="form-control">
              <option value="team">Team Management (RCB, MI, etc.)</option>
              <option value="admin">Tournament Administrator</option>
            </select>
          </div>

          <div id="team-login-group">
            <div class="form-group">
              <label for="team-select">Select Team</label>
              <select id="team-select" class="form-control">
                ${teamOptions}
              </select>
            </div>
            <div class="form-group">
              <label for="team-pass">Team Password</label>
              <input type="password" id="team-pass" class="form-control" placeholder="e.g. RCB18" required>
            </div>
          </div>

          <div id="admin-pass-group" style="display: none;">
            <div class="form-group">
              <label for="admin-pass">Admin Password</label>
              <input type="password" id="admin-pass" class="form-control" placeholder="Enter administrator password">
            </div>
          </div>

          <button type="submit" class="btn-login">Secure Access</button>
          
          <div id="login-error" class="login-error"></div>

          <div class="login-hint">
            <strong>Demo Credentials:</strong><br>
            • Admin: <code>admin123</code><br>
            • Royal Challengers Bengaluru: <code>RCB18</code><br>
            • Mumbai Indians: <code>MI45</code><br>
            • Chennai Super Kings: <code>CSK7</code>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderTopbar() {
  const userText = state.currentUser.role === "admin" 
    ? "Tournament Admin" 
    : `${getTeam(state.currentUser.teamId).name} (Staff)`;
  
  return `
    <header class="topbar">
      <div class="topbar-brand">
        <span>🏏</span> ZSTAR PREMIER LEAGUE
      </div>
      <div class="topbar-right">
        <div class="user-pill">
          <span class="dot"></span>
          <span>${userText}</span>
        </div>
        <button class="btn-logout" onclick="handleLogout()">Log Out</button>
      </div>
    </header>
  `;
}

function renderSidebar() {
  const isAdmin = state.currentUser.role === "admin";
  const team = getTeam(state.selectedTeamId);

  return `
    <aside class="sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">GLOBAL VIEW</div>
        <div class="nav-item ${state.activeTab === 'dashboard' ? 'active' : ''}" onclick="navigate('dashboard')">
          <span class="nav-icon">📊</span> Points Table & Caps
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-label">TEAM SELECTOR</div>
        <div class="form-group" style="padding: 0 1.2rem;">
          <select class="form-control" onchange="changeSelectedTeam(this.value)" ${!isAdmin ? 'disabled' : ''} style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
            ${state.teams.map(t => `
              <option value="${t.id}" ${t.id === state.selectedTeamId ? 'selected' : ''}>
                ${t.logo} ${t.id}
              </option>
            `).join("")}
          </select>
        </div>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-label">${team.id} HUB</div>
        
        <div class="nav-item ${state.activeTab === 'team_profile' ? 'active' : ''}" onclick="navigate('team_profile')">
          <span class="nav-icon">🏢</span> Staff & Sponsors
        </div>

        <div class="nav-item ${state.activeTab === 'squad' ? 'active' : ''}" onclick="navigate('squad')">
          <span class="nav-icon">👥</span> Player Squad
        </div>

        <div class="nav-item ${state.activeTab === 'matches' ? 'active' : ''}" onclick="navigate('matches')">
          <span class="nav-icon">📅</span> Match Tracking
        </div>
      </div>

      ${isAdmin ? `
        <div class="sidebar-section">
          <div class="sidebar-label">ADMIN CONTROLS</div>
          <div class="nav-item ${state.activeTab === 'admin_console' ? 'active' : ''}" onclick="navigate('admin_console')">
            <span class="nav-icon">⚙️</span> Tournament Settings
          </div>
        </div>
      ` : ''}

      <div style="position: absolute; bottom: 10px; width: 100%; text-align: center; font-size: 0.65rem; color: var(--text3);">
        Owner: Zstar studio's pvt ltd
      </div>
    </aside>
  `;
}

function navigate(tab) {
  state.activeTab = tab;
  state.editingPlayerId = null;
  state.editingMatchId = null;
  render();
}

function changeSelectedTeam(val) {
  state.selectedTeamId = val;
  render();
}

function renderActivePage() {
  switch (state.activeTab) {
    case "dashboard":
      return renderDashboardPage();
    case "team_profile":
      return renderTeamProfilePage();
    case "squad":
      return renderSquadPage();
    case "matches":
      return renderMatchesPage();
    case "admin_console":
      return renderAdminConsolePage();
    default:
      return `<div>Page not found</div>`;
  }
}

// ==========================================
// 1. DASHBOARD VIEW (Points Table & Caps)
// ==========================================
function renderDashboardPage() {
  const points = getPointsTable();
  const caps = getGlobalCapHolders();

  const pointsRows = points.map((p, idx) => {
    let rankClass = "plain";
    if (idx === 0) rankClass = "gold";
    if (idx === 1) rankClass = "silver";
    if (idx === 2) rankClass = "bronze";

    return `
      <tr>
        <td>
          <span class="rank-badge ${rankClass}">${idx + 1}</span>
        </td>
        <td>
          <div class="team-chip">
            <span class="team-color-dot" style="background-color: ${p.color}"></span>
            <strong>${p.name}</strong>
          </div>
        </td>
        <td class="num">${p.played}</td>
        <td class="num" style="color: var(--green); font-weight: 600;">${p.won}</td>
        <td class="num" style="color: var(--red); font-weight: 600;">${p.lost}</td>
        <td class="num font-bold" style="color: var(--accent);">${p.points}</td>
      </tr>
    `;
  }).join("");

  return `
    <div class="page-header">
      <h1>Tournament Leaderboard</h1>
      <p>Real-time team standings and individual award caps across ZPL</p>
    </div>

    <!-- Cap Cards -->
    <div class="cap-grid">
      <div class="cap-card orange">
        <div class="cap-icon">🏏</div>
        <div class="cap-title">Orange Cap (Top Batsman)</div>
        <div class="cap-player">${caps.topBatsman.name}</div>
        <div class="cap-team">${caps.topBatsman.teamLogo} ${caps.topBatsman.teamName}</div>
        <div class="cap-stat orange-text">${caps.topBatsman.runs} Runs <span style="font-size: 0.8rem; font-weight: normal; color: var(--text2);">Avg: ${caps.topBatsman.avg}</span></div>
      </div>
      <div class="cap-card purple">
        <div class="cap-icon">🥎</div>
        <div class="cap-title">Purple Cap (Top Bowler)</div>
        <div class="cap-player">${caps.topBowler.name}</div>
        <div class="cap-team">${caps.topBowler.teamLogo} ${caps.topBowler.teamName}</div>
        <div class="cap-stat purple-text">${caps.topBowler.wickets} Wickets <span style="font-size: 0.8rem; font-weight: normal; color: var(--text2);">Eco: ${caps.topBowler.eco}</span></div>
      </div>
    </div>

    <!-- Points Table -->
    <div class="card">
      <div class="card-title">🏆 Standings Table</div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width: 60px;">Rank</th>
              <th>Team</th>
              <th class="num">Played</th>
              <th class="num">Won</th>
              <th class="num">Lost</th>
              <th class="num">Points</th>
            </tr>
          </thead>
          <tbody>
            ${pointsRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================
// 2. TEAM PROFILE & STAFF & SPONSORS
// ==========================================
function renderTeamProfilePage() {
  const team = getTeam(state.selectedTeamId);
  const canEdit = state.currentUser.role === "admin" || state.currentUser.teamId === team.id;

  const staffSection = (title, emoji, items, key) => {
    const list = items.map((itm, idx) => `
      <div class="flex justify-between items-center py-2" style="border-bottom: 1px solid var(--border);">
        <div>
          <div class="font-bold text-sm">${itm.name}</div>
          <div style="font-size: 0.75rem; color: var(--text3);">${itm.role}</div>
        </div>
        ${canEdit ? `
          <button class="btn btn-secondary btn-sm btn-icon" onclick="deleteStaffMember('${key}', ${idx})">🗑️</button>
        ` : ''}
      </div>
    `).join("");

    return `
      <div class="card" style="margin-bottom: 1rem;">
        <div class="card-title flex justify-between items-center">
          <span>${emoji} ${title}</span>
          ${canEdit ? `<button class="btn btn-primary btn-sm" onclick="openAddStaffModal('${key}', '${title}')">+ Add</button>` : ''}
        </div>
        <div>
          ${items.length === 0 ? '<div class="empty-state text-sm py-2">No staff configured</div>' : list}
        </div>
      </div>
    `;
  };

  const sponsorList = team.sponsors.map((sp, idx) => `
    <div class="flex justify-between items-center py-2" style="border-bottom: 1px solid var(--border);">
      <div>
        <div class="font-bold text-sm" style="color: var(--accent);">${sp.name}</div>
        <div style="font-size: 0.75rem; color: var(--text3);">${sp.type}</div>
      </div>
      ${canEdit ? `
        <button class="btn btn-secondary btn-sm btn-icon" onclick="deleteSponsor(${idx})">🗑️</button>
      ` : ''}
    </div>
  `).join("");

  // Calculate summary stats
  let totalMatches = 0;
  let wonMatches = 0;
  let lostMatches = 0;
  
  team.matches.forEach(m => {
    if (m.status === "Completed") {
      totalMatches++;
      if (m.result === "Won") wonMatches++;
      if (m.result === "Lost") lostMatches++;
    }
  });

  // Calculate Top performers
  let topRunsPlayer = "N/A";
  let topRunsVal = 0;
  let topWktsPlayer = "N/A";
  let topWktsVal = 0;

  team.players.forEach(p => {
    const s = getPlayerStats(p.id, team);
    if (s.totalRuns > topRunsVal) {
      topRunsVal = s.totalRuns;
      topRunsPlayer = p.name;
    }
    if (s.wickets > topWktsVal) {
      topWktsVal = s.wickets;
      topWktsPlayer = p.name;
    }
  });

  return `
    <div class="page-header flex justify-between items-center flex-wrap gap-3">
      <div>
        <span style="font-size: 2.5rem; float: left; margin-right: 12px; line-height: 1;">${team.logo}</span>
        <h1>${team.name}</h1>
        <p>"${team.slogan}" — Home Ground: ${team.management.homeGround}</p>
      </div>
      ${canEdit ? `
        <div class="flex gap-2">
          <button class="btn btn-secondary btn-sm" onclick="openTeamConfigModal()">⚙️ Team Config</button>
          <button class="btn btn-secondary btn-sm" onclick="openChangePasswordModal()">🔑 Change Password</button>
        </div>
      ` : ''}
    </div>

    <!-- Performance Summary -->
    <div class="stat-grid" style="margin-bottom: 2rem;">
      <div class="stat-card orange">
        <div class="stat-label">Matches Won / Played</div>
        <div class="stat-value">${wonMatches}/${totalMatches}</div>
        <div class="stat-sub">Win Rate: ${totalMatches > 0 ? Math.round((wonMatches/totalMatches)*100) : 0}%</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-label">Matches Lost</div>
        <div class="stat-value">${lostMatches}</div>
        <div class="stat-sub">Team Loss Count</div>
      </div>
      <div class="stat-card green">
        <div class="stat-label">Top Run Scorer</div>
        <div class="stat-value" style="font-size: 1.3rem; margin-top: 0.4rem;">${topRunsPlayer}</div>
        <div class="stat-sub">${topRunsVal} Runs total</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-label">Top Wicket Taker</div>
        <div class="stat-value" style="font-size: 1.3rem; margin-top: 0.4rem;">${topWktsPlayer}</div>
        <div class="stat-sub">${topWktsVal} Wickets total</div>
      </div>
    </div>

    <!-- Management Card -->
    <div class="card mb-3">
      <div class="card-title">🏢 Club Ownership & Management</div>
      <div class="form-row-3" style="font-size: 0.85rem;">
        <div>
          <span class="text-muted">Ownership:</span>
          <div class="font-bold" style="color: var(--accent);">${team.management.founder}</div>
        </div>
        <div>
          <span class="text-muted">CEO:</span>
          <div class="font-bold">${team.management.ceo}</div>
        </div>
        <div>
          <span class="text-muted">CFO:</span>
          <div class="font-bold">${team.management.cfo}</div>
        </div>
        <div>
          <span class="text-muted">CMO:</span>
          <div class="font-bold">${team.management.cmo}</div>
        </div>
        <div>
          <span class="text-muted">Home Venue:</span>
          <div class="font-bold">${team.management.homeGround}</div>
        </div>
      </div>
    </div>

    <!-- Staff Matrix grid -->
    <div class="form-row" style="align-items: start; margin-bottom: 2rem;">
      <div>
        ${staffSection("Coaching Staff", "🧠", team.coaching, "coaching")}
        ${staffSection("Gym & Physiotherapists", "🏥", team.physio, "physio")}
        ${staffSection("Analysis and Strategy", "📊", team.analysis, "analysis")}
      </div>
      <div>
        ${staffSection("Support Staff Operations", "👔", team.support, "support")}
        ${staffSection("PR & Media Relations", "📢", team.prMedia, "prMedia")}
        
        <!-- Sponsors -->
        <div class="card">
          <div class="card-title flex justify-between items-center">
            <span>🤝 Official Partners & Sponsors</span>
            ${canEdit ? `<button class="btn btn-primary btn-sm" onclick="openAddSponsorModal()">+ Add</button>` : ''}
          </div>
          <div>
            ${team.sponsors.length === 0 ? '<div class="empty-state text-sm py-2">No partners listed</div>' : sponsorList}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 3. SQUAD VIEW & SQUAD STATISTICS
// ==========================================
function renderSquadPage() {
  const team = getTeam(state.selectedTeamId);
  const canEdit = state.currentUser.role === "admin" || state.currentUser.teamId === team.id;

  // Render players filtered by sub category
  const activeRole = state.activeSubTab || "all";
  
  const roles = [
    { key: "all", label: "All Players" },
    { key: "Batsman", label: "Batsmen" },
    { key: "All-rounder", label: "All Rounders" },
    { key: "Wicketkeeper", label: "Wicket Keepers" },
    { key: "Spin Bowler", label: "Spin Bowlers" },
    { key: "Fast Bowler", label: "Fast Bowlers" }
  ];

  const subTabButtons = roles.map(r => `
    <button class="page-tab ${activeRole === r.key ? 'active' : ''}" onclick="setSquadFilter('${r.key}')">
      ${r.label}
    </button>
  `).join("");

  const filteredPlayers = activeRole === "all" 
    ? team.players 
    : team.players.filter(p => p.role === activeRole);

  const squadRows = filteredPlayers.map(p => {
    const stats = getPlayerStats(p.id, team);
    let roleBadge = p.role;
    if (p.isCaptain) roleBadge += " (C)";
    if (p.isViceCaptain) roleBadge += " (VC)";

    return `
      <tr>
        <td>
          <div>
            <strong>${p.name}</strong>
            ${p.isCaptain ? '<span class="badge badge-win" style="margin-left:5px;">C</span>' : ''}
            ${p.isViceCaptain ? '<span class="badge badge-loss" style="margin-left:5px;">VC</span>' : ''}
          </div>
          <span style="font-size: 0.72rem; color: var(--text3);">${p.nationality} • ${p.battingStyle} Bat</span>
        </td>
        <td>${p.role}</td>
        <td class="num">${stats.matchesPlayed}</td>
        <td class="num font-bold">${stats.totalRuns}</td>
        <td class="num">${stats.battingAvg}</td>
        <td class="num">${stats.strikeRate}</td>
        <td class="num" style="color: var(--purple); font-weight: 600;">${stats.wickets}</td>
        <td class="num">${stats.economy}</td>
        <td style="text-align: right; white-space: nowrap;">
          <button class="btn btn-secondary btn-sm" onclick="viewPlayerProfile('${p.id}')">📊 Stats</button>
          ${canEdit ? `
            <button class="btn btn-secondary btn-sm btn-icon" onclick="openEditPlayerModal('${p.id}')">✏️</button>
            <button class="btn btn-danger btn-sm btn-icon" onclick="deletePlayer('${p.id}')">🗑️</button>
          ` : ''}
        </td>
      </tr>
    `;
  }).join("");

  return `
    <div class="page-header flex justify-between items-center flex-wrap gap-2">
      <div>
        <h1>Player Squad Matrix</h1>
        <p>List of active players for ${team.name} and current season stats</p>
      </div>
      ${canEdit ? `<button class="btn btn-primary" onclick="openAddPlayerModal()">+ Add New Player</button>` : ''}
    </div>

    <!-- Filters -->
    <div class="page-tabs">
      ${subTabButtons}
    </div>

    <!-- Players Table -->
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Role</th>
              <th class="num">Matches</th>
              <th class="num">Runs</th>
              <th class="num">Bat Avg</th>
              <th class="num">Strike Rate</th>
              <th class="num">Wickets</th>
              <th class="num">Econ</th>
              <th style="width: 150px; text-align: right;">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filteredPlayers.length === 0 ? `
              <tr>
                <td colspan="9" class="empty-state">
                  <div class="empty-icon">👥</div>
                  No players found in this category.
                </td>
              </tr>
            ` : squadRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setSquadFilter(role) {
  state.activeSubTab = role;
  render();
}

// ==========================================
// 4. MATCH TRACKING & SCHEDULE VIEW
// ==========================================
function renderMatchesPage() {
  const team = getTeam(state.selectedTeamId);
  const canEdit = state.currentUser.role === "admin" || state.currentUser.teamId === team.id;

  const completedMatches = team.matches.filter(m => m.status === "Completed");
  const scheduledMatches = team.matches.filter(m => m.status === "Scheduled");

  const renderMatchCard = (m) => {
    let resultBadge = `<span class="badge" style="background: var(--border); color: var(--text2);">Upcoming</span>`;
    if (m.status === "Completed") {
      resultBadge = m.result === "Won" 
        ? `<span class="badge badge-win">Won</span>` 
        : `<span class="badge badge-loss">Lost</span>`;
    }

    return `
      <div class="card mb-2" style="border-left: 4px solid ${m.status === 'Completed' ? (m.result === 'Won' ? 'var(--green)' : 'var(--red)') : 'var(--border)'};">
        <div class="flex justify-between items-center mb-1">
          <div style="font-size: 0.72rem; color: var(--text3); font-weight: bold; letter-spacing: 0.05em; text-transform: uppercase;">
            Match ${m.number} • ${m.date} ${m.time}
          </div>
          <div>
            ${resultBadge}
          </div>
        </div>

        <div class="flex justify-between items-center mb-2 flex-wrap gap-2">
          <div>
            <div style="font-size: 1.15rem; font-weight: 800;">
              vs ${m.opposition}
            </div>
            <div style="font-size: 0.75rem; color: var(--text2);">
              📍 Venue: ${m.venue}
            </div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" onclick="viewMatchDetails('${m.id}')">🔍 Details</button>
            ${canEdit ? `
              <button class="btn btn-secondary btn-sm" onclick="openEditMatchModal('${m.id}')">✏️ Edit Details</button>
              ${m.status === 'Scheduled' ? `
                <button class="btn btn-primary btn-sm" onclick="openRecordPerformanceModal('${m.id}')">🏏 Score Card</button>
              ` : `
                <button class="btn btn-primary btn-sm" onclick="openRecordPerformanceModal('${m.id}')">🏏 Edit Score</button>
              `}
              <button class="btn btn-danger btn-sm btn-icon" onclick="deleteMatch('${m.id}')">🗑️</button>
            ` : ''}
          </div>
        </div>

        ${m.status === 'Completed' && m.playerOfMatch ? `
          <div style="font-size: 0.78rem; border-top: 1px dashed var(--border); padding-top: 0.5rem; margin-top: 0.5rem;" class="flex justify-between items-center">
            <div>🌟 POTM: <strong>${m.playerOfMatch}</strong></div>
            ${m.toss ? `<div class="text-muted">Toss won by: ${m.toss} (${m.decision} first)</div>` : ''}
          </div>
        ` : ''}
      </div>
    `;
  };

  return `
    <div class="page-header flex justify-between items-center flex-wrap gap-2">
      <div>
        <h1>Match Tracking & Schedules</h1>
        <p>Results, schedule and players scores tracking for matches</p>
      </div>
      ${canEdit ? `<button class="btn btn-primary" onclick="openAddMatchModal()">+ Create Match Entry</button>` : ''}
    </div>

    <div class="form-row" style="align-items: start; margin-bottom: 2rem;">
      <div>
        <h3 class="mb-2" style="font-family: var(--font2); font-weight: 700;">🏏 Completed Match Records</h3>
        ${completedMatches.length === 0 
          ? '<div class="card empty-state text-sm">No completed matches tracked yet.</div>' 
          : completedMatches.map(renderMatchCard).join("")}
      </div>
      
      <div>
        <h3 class="mb-2" style="font-family: var(--font2); font-weight: 700;">📅 Upcoming Schedule</h3>
        ${scheduledMatches.length === 0 
          ? '<div class="card empty-state text-sm">No upcoming matches scheduled.</div>' 
          : scheduledMatches.map(renderMatchCard).join("")}
      </div>
    </div>
  `;
}

// ==========================================
// 5. ADMIN CONTROL CONSOLE
// ==========================================
function renderAdminConsolePage() {
  const teamsRows = state.teams.map(t => {
    let won = 0, lost = 0;
    t.matches.forEach(m => {
      if (m.status === "Completed") {
        if (m.result === "Won") won++;
        else lost++;
      }
    });

    return `
      <tr>
        <td>${t.logo} <strong>${t.id}</strong></td>
        <td>${t.name}</td>
        <td><code class="pass-pill" onclick="changeTeamPasswordPrompt('${t.id}')">${t.password}</code></td>
        <td class="num">${t.players.length}</td>
        <td class="num">${won + lost}</td>
        <td style="text-align: right;">
          <button class="btn btn-secondary btn-sm" onclick="resetTeamPrompt('${t.id}')">🔄 Reset</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTeamPrompt('${t.id}')">🗑️ Delete</button>
        </td>
      </tr>
    `;
  }).join("");

  return `
    <div class="page-header">
      <h1>Tournament Administration Console</h1>
      <p>Configure team secrets, create new participating teams, and oversee global stats reset</p>
    </div>

    <div class="form-row" style="align-items: start; margin-bottom: 2rem;">
      <!-- Teams Management -->
      <div class="card" style="grid-column: span 2;">
        <div class="card-title flex justify-between items-center">
          <span>👥 Participating Tournament Teams</span>
          <button class="btn btn-primary btn-sm" onclick="openCreateTeamModal()">+ Register New Team</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Full Team Name</th>
                <th>Security Password</th>
                <th class="num">Squad Count</th>
                <th class="num">Matches</th>
                <th style="width: 170px; text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${teamsRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Data Reset -->
    <div class="card border-danger mb-3" style="border: 1px solid var(--red);">
      <div class="card-title" style="color: var(--red);">⚠️ System Danger Zone</div>
      <p class="text-sm mb-2 text-muted">Reset all records back to system defaults. This deletes any changes, custom scores, and teams you created.</p>
      <button class="btn btn-danger" onclick="resetAllDataSystem()">Reset Entire Database to Seed Data</button>
    </div>
  `;
}

// ==========================================
// MODAL FORMS & SUBMISSIONS
// ==========================================

// Add Staff
function openAddStaffModal(key, titleName) {
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Add member to ${titleName}</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="add-staff-form" onsubmit="submitStaffForm(event, '${key}')">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control" id="staff-name" placeholder="e.g. Mr. Rajesh Nair" required>
        </div>
        <div class="form-group">
          <label>Role / Position</label>
          <input type="text" class="form-control" id="staff-role" placeholder="e.g. Head coach" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Staff Member</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitStaffForm(e, key) {
  e.preventDefault();
  const name = document.getElementById("staff-name").value.trim();
  const role = document.getElementById("staff-role").value.trim();
  
  const team = getTeam(state.selectedTeamId);
  team[key].push({ name, role });
  
  saveToStorage();
  closeModal();
  showToast("Staff member added successfully");
  render();
}

function deleteStaffMember(key, index) {
  if (confirm("Are you sure you want to remove this staff member?")) {
    const team = getTeam(state.selectedTeamId);
    team[key].splice(index, 1);
    saveToStorage();
    showToast("Staff member removed");
    render();
  }
}

// Add Sponsor
function openAddSponsorModal() {
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Add Official Sponsor</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="add-sponsor-form" onsubmit="submitSponsorForm(event)">
        <div class="form-group">
          <label>Partner Brand Name</label>
          <input type="text" class="form-control" id="sponsor-name" placeholder="e.g. Puma" required>
        </div>
        <div class="form-group">
          <label>Sponsorship Type</label>
          <input type="text" class="form-control" id="sponsor-type" placeholder="e.g. Official Kit Partner" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Partner</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitSponsorForm(e) {
  e.preventDefault();
  const name = document.getElementById("sponsor-name").value.trim();
  const type = document.getElementById("sponsor-type").value.trim();

  const team = getTeam(state.selectedTeamId);
  team.sponsors.push({ name, type });

  saveToStorage();
  closeModal();
  showToast("Sponsor partner added");
  render();
}

function deleteSponsor(index) {
  if (confirm("Remove this sponsor?")) {
    const team = getTeam(state.selectedTeamId);
    team.sponsors.splice(index, 1);
    saveToStorage();
    showToast("Sponsor removed");
    render();
  }
}

// Add/Edit Player
function openAddPlayerModal() {
  state.editingPlayerId = null;
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Register Squad Player</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="player-form" onsubmit="submitPlayerForm(event)">
        <div class="form-group">
          <label>Player Name</label>
          <input type="text" class="form-control" id="player-name" placeholder="e.g. V. Kohli" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Nationality</label>
            <select class="form-control" id="player-nat">
              <option value="Indian">Indian</option>
              <option value="International">International</option>
            </select>
          </div>
          <div class="form-group">
            <label>Role</label>
            <select class="form-control" id="player-role">
              <option value="Batsman">Batsman</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
              <option value="Spin Bowler">Spin Bowler</option>
              <option value="Fast Bowler">Fast Bowler</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Batting Style</label>
            <select class="form-control" id="player-bat">
              <option value="Right hand">Right hand</option>
              <option value="Left hand">Left hand</option>
            </select>
          </div>
          <div class="form-group">
            <label>Bowling Style</label>
            <input type="text" class="form-control" id="player-bowl" placeholder="e.g. Fast, Spin, or -">
          </div>
        </div>
        <div class="form-row" style="margin-top: 0.5rem;">
          <div class="form-group flex items-center gap-2">
            <input type="checkbox" id="player-cap">
            <label for="player-cap" style="margin-bottom:0; cursor:pointer;">Team Captain</label>
          </div>
          <div class="form-group flex items-center gap-2">
            <input type="checkbox" id="player-vcap">
            <label for="player-vcap" style="margin-bottom:0; cursor:pointer;">Vice Captain</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Squad Player</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function openEditPlayerModal(pId) {
  state.editingPlayerId = pId;
  const team = getTeam(state.selectedTeamId);
  const p = team.players.find(pl => pl.id === pId);
  if (!p) return;

  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Edit Squad Player</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="player-form" onsubmit="submitPlayerForm(event)">
        <div class="form-group">
          <label>Player Name</label>
          <input type="text" class="form-control" id="player-name" value="${p.name}" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Nationality</label>
            <select class="form-control" id="player-nat">
              <option value="Indian" ${p.nationality === 'Indian' ? 'selected' : ''}>Indian</option>
              <option value="International" ${p.nationality === 'International' ? 'selected' : ''}>International</option>
            </select>
          </div>
          <div class="form-group">
            <label>Role</label>
            <select class="form-control" id="player-role">
              <option value="Batsman" ${p.role === 'Batsman' ? 'selected' : ''}>Batsman</option>
              <option value="All-rounder" ${p.role === 'All-rounder' ? 'selected' : ''}>All-rounder</option>
              <option value="Wicketkeeper" ${p.role === 'Wicketkeeper' ? 'selected' : ''}>Wicketkeeper</option>
              <option value="Spin Bowler" ${p.role === 'Spin Bowler' ? 'selected' : ''}>Spin Bowler</option>
              <option value="Fast Bowler" ${p.role === 'Fast Bowler' ? 'selected' : ''}>Fast Bowler</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Batting Style</label>
            <select class="form-control" id="player-bat">
              <option value="Right hand" ${p.battingStyle === 'Right hand' ? 'selected' : ''}>Right hand</option>
              <option value="Left hand" ${p.battingStyle === 'Left hand' ? 'selected' : ''}>Left hand</option>
            </select>
          </div>
          <div class="form-group">
            <label>Bowling Style</label>
            <input type="text" class="form-control" id="player-bowl" value="${p.bowlingStyle || '-'}" placeholder="e.g. Fast, Spin, or -">
          </div>
        </div>
        <div class="form-row" style="margin-top: 0.5rem;">
          <div class="form-group flex items-center gap-2">
            <input type="checkbox" id="player-cap" ${p.isCaptain ? 'checked' : ''}>
            <label for="player-cap" style="margin-bottom:0; cursor:pointer;">Team Captain</label>
          </div>
          <div class="form-group flex items-center gap-2">
            <input type="checkbox" id="player-vcap" ${p.isViceCaptain ? 'checked' : ''}>
            <label for="player-vcap" style="margin-bottom:0; cursor:pointer;">Vice Captain</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Player</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitPlayerForm(e) {
  e.preventDefault();
  const name = document.getElementById("player-name").value.trim();
  const nationality = document.getElementById("player-nat").value;
  const role = document.getElementById("player-role").value;
  const battingStyle = document.getElementById("player-bat").value;
  let bowlingStyle = document.getElementById("player-bowl").value.trim();
  if (!bowlingStyle) bowlingStyle = "-";

  const isCaptain = document.getElementById("player-cap").checked;
  const isViceCaptain = document.getElementById("player-vcap").checked;

  const team = getTeam(state.selectedTeamId);

  // If captain/vice captain checkbox is checked, reset others
  if (isCaptain) {
    team.players.forEach(pl => pl.isCaptain = false);
  }
  if (isViceCaptain) {
    team.players.forEach(pl => pl.isViceCaptain = false);
  }

  if (state.editingPlayerId) {
    // Edit
    const index = team.players.findIndex(pl => pl.id === state.editingPlayerId);
    if (index !== -1) {
      team.players[index] = {
        ...team.players[index],
        name, nationality, role, battingStyle, bowlingStyle, isCaptain, isViceCaptain
      };
      showToast("Player details updated");
    }
  } else {
    // Add
    const id = `${team.id.toLowerCase()}_${Date.now()}`;
    team.players.push({
      id, name, nationality, role, battingStyle, bowlingStyle, isCaptain, isViceCaptain
    });
    showToast("Player added to team");
  }

  saveToStorage();
  closeModal();
  render();
}

function deletePlayer(pId) {
  if (confirm("Remove player from squad? This will wipe stats linked to this player ID.")) {
    const team = getTeam(state.selectedTeamId);
    team.players = team.players.filter(pl => pl.id !== pId);
    
    // Cleanup performances from matches
    team.matches.forEach(m => {
      m.playingXI = m.playingXI ? m.playingXI.filter(id => id !== pId) : [];
      m.performances = m.performances ? m.performances.filter(pf => pf.playerId !== pId) : [];
    });

    saveToStorage();
    showToast("Player removed");
    render();
  }
}

// Add/Edit Match details
function openAddMatchModal() {
  state.editingMatchId = null;
  const nextMatchNum = getTeam(state.selectedTeamId).matches.length + 1;
  const defaultGround = getTeam(state.selectedTeamId).management.homeGround;

  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Schedule New Match</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="match-details-form" onsubmit="submitMatchDetailsForm(event)">
        <div class="form-row">
          <div class="form-group">
            <label>Match Number</label>
            <input type="number" class="form-control" id="match-number" value="${nextMatchNum}" required>
          </div>
          <div class="form-group">
            <label>Opposition</label>
            <input type="text" class="form-control" id="match-opposition" placeholder="e.g. Mumbai Indians" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Date</label>
            <input type="date" class="form-control" id="match-date" value="${new Date().toISOString().split('T')[0]}" required>
          </div>
          <div class="form-group">
            <label>Time</label>
            <input type="time" class="form-control" id="match-time" value="19:30" required>
          </div>
        </div>
        <div class="form-group">
          <label>Venue Ground</label>
          <input type="text" class="form-control" id="match-venue" value="${defaultGround}" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Schedule Match</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function openEditMatchModal(mId) {
  state.editingMatchId = mId;
  const team = getTeam(state.selectedTeamId);
  const m = team.matches.find(match => match.id === mId);
  if (!m) return;

  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Edit Match Details</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="match-details-form" onsubmit="submitMatchDetailsForm(event)">
        <div class="form-row">
          <div class="form-group">
            <label>Match Number</label>
            <input type="number" class="form-control" id="match-number" value="${m.number}" required>
          </div>
          <div class="form-group">
            <label>Opposition</label>
            <input type="text" class="form-control" id="match-opposition" value="${m.opposition}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Date</label>
            <input type="date" class="form-control" id="match-date" value="${m.date}" required>
          </div>
          <div class="form-group">
            <label>Time</label>
            <input type="time" class="form-control" id="match-time" value="${m.time}" required>
          </div>
        </div>
        <div class="form-group">
          <label>Venue Ground</label>
          <input type="text" class="form-control" id="match-venue" value="${m.venue}" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitMatchDetailsForm(e) {
  e.preventDefault();
  const number = Number(document.getElementById("match-number").value);
  const opposition = document.getElementById("match-opposition").value.trim();
  const date = document.getElementById("match-date").value;
  const time = document.getElementById("match-time").value;
  const venue = document.getElementById("match-venue").value.trim();

  const team = getTeam(state.selectedTeamId);

  if (state.editingMatchId) {
    const match = team.matches.find(m => m.id === state.editingMatchId);
    if (match) {
      match.number = number;
      match.opposition = opposition;
      match.date = date;
      match.time = time;
      match.venue = venue;
      showToast("Match details updated");
    }
  } else {
    const id = `${team.id.toLowerCase()}_m_${Date.now()}`;
    team.matches.push({
      id, number, date, time, venue, opposition,
      toss: "", decision: "", result: "", playerOfMatch: "",
      playingXI: [], opponentXI: [], notes: "", performances: [], status: "Scheduled"
    });
    showToast("Match entry successfully scheduled");
  }

  saveToStorage();
  closeModal();
  render();
}

function deleteMatch(mId) {
  if (confirm("Are you sure you want to permanently delete this match entry and all of its logged scores?")) {
    const team = getTeam(state.selectedTeamId);
    team.matches = team.matches.filter(m => m.id !== mId);
    saveToStorage();
    showToast("Match deleted successfully");
    render();
  }
}

// Record/Edit Score card performances
function openRecordPerformanceModal(mId) {
  const team = getTeam(state.selectedTeamId);
  const match = team.matches.find(m => m.id === mId);
  if (!match) return;

  // Let's create selection rows for all players in squad
  const playerRows = team.players.map(p => {
    // Check if player has recorded stats in this match
    const perf = match.performances.find(pf => pf.playerId === p.id) || {
      runs: 0, balls: 0, isOut: false, wickets: 0, runsConceded: 0, overs: 0
    };

    // Check if they are selected in playing XI
    const isChecked = match.playingXI.includes(p.id) || match.performances.some(pf => pf.playerId === p.id);

    return `
      <tr class="player-perf-row" data-player-id="${p.id}">
        <td>
          <input type="checkbox" class="perf-active-chk" ${isChecked ? 'checked' : ''} onchange="togglePerfFields('${p.id}', this.checked)">
        </td>
        <td>
          <strong>${p.name}</strong>
          <div style="font-size:0.72rem; color:var(--text3);">${p.role}</div>
        </td>
        <td>
          <input type="number" class="form-control btn-sm perf-runs" value="${perf.runs}" placeholder="R" style="width:60px;" ${!isChecked ? 'disabled' : ''}>
        </td>
        <td>
          <input type="number" class="form-control btn-sm perf-balls" value="${perf.balls}" placeholder="B" style="width:60px;" ${!isChecked ? 'disabled' : ''}>
        </td>
        <td>
          <input type="checkbox" class="perf-out" ${perf.isOut ? 'checked' : ''} ${!isChecked ? 'disabled' : ''}> Out?
        </td>
        <td>
          <input type="number" class="form-control btn-sm perf-wkts" value="${perf.wickets}" placeholder="W" style="width:50px;" ${!isChecked ? 'disabled' : ''}>
        </td>
        <td>
          <input type="number" class="form-control btn-sm perf-conceded" value="${perf.runsConceded}" placeholder="Rc" style="width:60px;" ${!isChecked ? 'disabled' : ''}>
        </td>
        <td>
          <input type="number" step="0.1" class="form-control btn-sm perf-overs" value="${perf.overs}" placeholder="O" style="width:60px;" ${!isChecked ? 'disabled' : ''}>
        </td>
      </tr>
    `;
  }).join("");

  const html = `
    <div class="modal modal-lg">
      <div class="modal-header">
        <h2 class="modal-title">Record Match Score & Stats (Match ${match.number})</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="record-perf-form" onsubmit="submitRecordPerformance(event, '${match.id}')">
        
        <div class="form-row-3 mb-2">
          <div class="form-group">
            <label>Match Result</label>
            <select class="form-control" id="m-result" required>
              <option value="Won" ${match.result === 'Won' ? 'selected' : ''}>Won</option>
              <option value="Lost" ${match.result === 'Lost' ? 'selected' : ''}>Lost</option>
            </select>
          </div>
          <div class="form-group">
            <label>Toss Won By</label>
            <input type="text" class="form-control" id="m-toss" value="${match.toss || team.name}" placeholder="Toss winner">
          </div>
          <div class="form-group">
            <label>Toss Decision</label>
            <select class="form-control" id="m-decision">
              <option value="Batting" ${match.decision === 'Batting' ? 'selected' : ''}>Batting first</option>
              <option value="Bowling" ${match.decision === 'Bowling' ? 'selected' : ''}>Bowling first</option>
            </select>
          </div>
        </div>

        <div class="form-row mb-2">
          <div class="form-group">
            <label>Player of the Match</label>
            <select class="form-control" id="m-potm">
              <option value="">-- Select --</option>
              ${team.players.map(p => `<option value="${p.name}" ${match.playerOfMatch === p.name ? 'selected' : ''}>${p.name}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label>Opponent XI (Comma separated names)</label>
            <input type="text" class="form-control" id="m-oppxi" value="${match.opponentXI ? match.opponentXI.join(', ') : ''}" placeholder="e.g. Rohit Sharma, Jasprit Bumrah">
          </div>
        </div>

        <div class="form-group">
          <label>Match Notes / Key Moments</label>
          <textarea class="form-control" id="m-notes" rows="2" placeholder="Write key details, summaries, etc.">${match.notes || ''}</textarea>
        </div>

        <h3 class="mb-2">🏏 Player Stats & Playing XI</h3>
        <p class="text-sm text-muted mb-2">Tick the players who participated in the playing XI, then fill out their batting and bowling contributions below.</p>
        
        <div class="table-wrap" style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border);">
          <table>
            <thead>
              <tr>
                <th style="width:40px;">Play</th>
                <th>Player</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Out?</th>
                <th>Wkts</th>
                <th>Runs Cond.</th>
                <th>Overs Bowled</th>
              </tr>
            </thead>
            <tbody>
              ${playerRows}
            </tbody>
          </table>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Complete Score Card</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

// Enable/Disable input fields on click
function togglePerfFields(playerId, checked) {
  const row = document.querySelector(`.player-perf-row[data-player-id="${playerId}"]`);
  if (!row) return;

  const fields = row.querySelectorAll("input:not(.perf-active-chk)");
  fields.forEach(field => {
    field.disabled = !checked;
    if (!checked) {
      if (field.type === "checkbox") {
        field.checked = false;
      } else {
        field.value = 0;
      }
    }
  });
}

function submitRecordPerformance(e, mId) {
  e.preventDefault();
  const team = getTeam(state.selectedTeamId);
  const match = team.matches.find(m => m.id === mId);
  if (!match) return;

  match.result = document.getElementById("m-result").value;
  match.toss = document.getElementById("m-toss").value.trim();
  match.decision = document.getElementById("m-decision").value;
  match.playerOfMatch = document.getElementById("m-potm").value;
  
  const oppXiVal = document.getElementById("m-oppxi").value.trim();
  match.opponentXI = oppXiVal ? oppXiVal.split(",").map(name => name.trim()) : [];
  match.notes = document.getElementById("m-notes").value.trim();

  // Extract playing XI and performances
  match.playingXI = [];
  match.performances = [];

  const rows = document.querySelectorAll(".player-perf-row");
  rows.forEach(row => {
    const playerId = row.getAttribute("data-player-id");
    const active = row.querySelector(".perf-active-chk").checked;

    if (active) {
      match.playingXI.push(playerId);

      const runs = Number(row.querySelector(".perf-runs").value) || 0;
      const balls = Number(row.querySelector(".perf-balls").value) || 0;
      const isOut = row.querySelector(".perf-out").checked;
      const wickets = Number(row.querySelector(".perf-wkts").value) || 0;
      const runsConceded = Number(row.querySelector(".perf-conceded").value) || 0;
      const overs = Number(row.querySelector(".perf-overs").value) || 0;

      match.performances.push({
        playerId, runs, balls, isOut, wickets, runsConceded, overs
      });
    }
  });

  match.status = "Completed";
  saveToStorage();
  closeModal();
  showToast("Scores recorded and player stats re-calculated!");
  render();
}

// ==========================================
// 6. SPECIAL PRESETS & ACTIONS
// ==========================================

// View detailed stats modal for a player
function viewPlayerProfile(pId) {
  const team = getTeam(state.selectedTeamId);
  const p = team.players.find(pl => pl.id === pId);
  if (!p) return;

  const stats = getPlayerStats(p.id, team);

  // Compile match by match breakdown rows
  const matchRows = team.matches
    .filter(m => m.status === "Completed")
    .map(m => {
      const perf = m.performances.find(pf => pf.playerId === p.id);
      if (!perf) return ""; // They didn't play or record performance

      return `
        <tr>
          <td><strong>Match ${m.number}</strong> vs ${m.opposition}</td>
          <td class="num">${perf.runs}</td>
          <td class="num">${perf.balls}</td>
          <td>${perf.isOut ? '❌ Yes' : '🏏 Not Out'}</td>
          <td class="num">${perf.wickets}</td>
          <td class="num">${perf.runsConceded}</td>
          <td class="num">${perf.overs}</td>
        </tr>
      `;
    }).join("");

  const html = `
    <div class="modal modal-lg">
      <div class="modal-header">
        <h2 class="modal-title">📊 ${p.name} — Player Statistics Profile</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      
      <!-- Stats summary -->
      <div class="stat-grid mb-3">
        <div class="stat-card orange">
          <div class="stat-label">Total Runs Scored</div>
          <div class="stat-value">${stats.totalRuns}</div>
          <div class="stat-sub">Strike Rate: ${stats.strikeRate}</div>
        </div>
        <div class="stat-card blue">
          <div class="stat-label">Batting Average</div>
          <div class="stat-value">${stats.battingAvg}</div>
          <div class="stat-sub">Outs: ${stats.outs} / Innings: ${stats.matchesPlayed}</div>
        </div>
        <div class="stat-card green">
          <div class="stat-label">Wickets Taken</div>
          <div class="stat-value">${stats.wickets}</div>
          <div class="stat-sub">Overs Bowled: ${stats.oversString}</div>
        </div>
        <div class="stat-card purple">
          <div class="stat-label">Economy Rate</div>
          <div class="stat-value">${stats.economy}</div>
          <div class="stat-sub">Runs Conceded: ${stats.runsConceded}</div>
        </div>
      </div>

      <!-- Match Breakdown -->
      <h3 class="mb-2">Match-by-Match breakdown</h3>
      <div class="table-wrap" style="max-height: 250px; overflow-y: auto; border: 1px solid var(--border);">
        <table>
          <thead>
            <tr>
              <th>Match</th>
              <th class="num">Runs</th>
              <th class="num">Balls Faced</th>
              <th>Dismissed?</th>
              <th class="num">Wickets</th>
              <th class="num">Runs Conc.</th>
              <th class="num">Overs</th>
            </tr>
          </thead>
          <tbody>
            ${matchRows === "" ? `
              <tr>
                <td colspan="7" class="empty-state text-sm">No recorded performances for this player.</td>
              </tr>
            ` : matchRows}
          </tbody>
        </table>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Close Profile</button>
      </div>
    </div>
  `;
  openModal(html);
}

// View details for a match
function viewMatchDetails(mId) {
  const team = getTeam(state.selectedTeamId);
  const match = team.matches.find(m => m.id === mId);
  if (!match) return;

  const getPlayerName = (id) => {
    const found = team.players.find(pl => pl.id === id);
    return found ? found.name : id;
  };

  const playingXIList = match.playingXI && match.playingXI.length > 0
    ? match.playingXI.map(id => `<li>${getPlayerName(id)}</li>`).join("")
    : "<span class='text-muted'>No roster submitted</span>";

  const opponentXIList = match.opponentXI && match.opponentXI.length > 0
    ? match.opponentXI.map(name => `<li>${name}</li>`).join("")
    : "<span class='text-muted'>No roster submitted</span>";

  const scorecardRows = match.performances && match.performances.length > 0
    ? match.performances.map(pf => `
        <tr>
          <td><strong>${getPlayerName(pf.playerId)}</strong></td>
          <td class="num">${pf.runs}</td>
          <td class="num">${pf.balls}</td>
          <td>${pf.isOut ? 'Dismissed' : 'Not Out'}</td>
          <td class="num">${pf.wickets}</td>
          <td class="num">${pf.runsConceded}</td>
          <td class="num">${pf.overs}</td>
        </tr>
      `).join("")
    : `<tr><td colspan="7" class="empty-state text-sm">No stats recorded for this match yet.</td></tr>`;

  const html = `
    <div class="modal modal-lg">
      <div class="modal-header">
        <h2 class="modal-title">🔍 Match Details & Team Lineups</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>

      <div class="form-row mb-3">
        <div class="card">
          <div class="card-title">📅 Match Schedule Information</div>
          <div class="text-sm">
            <p><strong>Match Number:</strong> Match ${match.number}</p>
            <p><strong>Opposition:</strong> ${match.opposition}</p>
            <p><strong>Date & Time:</strong> ${match.date} at ${match.time}</p>
            <p><strong>Venue Ground:</strong> ${match.venue}</p>
            <p><strong>Toss Winner:</strong> ${match.toss || 'N/A'}</p>
            <p><strong>Decision:</strong> ${match.decision || 'N/A'}</p>
            <p><strong>Result:</strong> ${match.status === 'Completed' ? match.result : 'Pending'}</p>
            <p><strong>POTM:</strong> ${match.playerOfMatch || 'N/A'}</p>
          </div>
        </div>

        <div class="card">
          <div class="card-title">📝 Match Notes / Key Observations</div>
          <div style="font-size:0.88rem; font-style:italic; line-height:1.5; color: var(--accent);">
            "${match.notes || 'No match notes entered yet.'}"
          </div>
        </div>
      </div>

      <div class="form-row mb-3">
        <div class="card">
          <div class="card-title">🔴 Our Playing XI</div>
          <ol class="text-sm" style="padding-left:1.2rem; display:grid; grid-template-columns: 1fr 1fr; gap:0.2rem;">
            ${playingXIList}
          </ol>
        </div>
        <div class="card">
          <div class="card-title">🔵 Opponent XI</div>
          <ol class="text-sm" style="padding-left:1.2rem; display:grid; grid-template-columns: 1fr 1fr; gap:0.2rem;">
            ${opponentXIList}
          </ol>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🏆 Match scorecard breakdown</div>
        <div class="table-wrap" style="max-height: 200px; overflow-y: auto;">
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th class="num">Runs</th>
                <th class="num">Balls</th>
                <th>Status</th>
                <th class="num">Wickets</th>
                <th class="num">Runs Conceded</th>
                <th class="num">Overs</th>
              </tr>
            </thead>
            <tbody>
              ${scorecardRows}
            </tbody>
          </table>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Close Details</button>
      </div>
    </div>
  `;
  openModal(html);
}

// Config Team Slogan and Ground details
function openTeamConfigModal() {
  const team = getTeam(state.selectedTeamId);
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Configure Team Profile Details</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="team-config-form" onsubmit="submitTeamConfig(event)">
        <div class="form-group">
          <label>Team Motto / Slogan</label>
          <input type="text" class="form-control" id="config-slogan" value="${team.slogan}" required>
        </div>
        <div class="form-group">
          <label>Home Stadium Venue Name</label>
          <input type="text" class="form-control" id="config-venue" value="${team.management.homeGround}" required>
        </div>
        <div class="form-row-3">
          <div class="form-group" style="grid-column: span 3;">
            <label>Club Owner & Founder Name</label>
            <input type="text" class="form-control" id="config-founder" value="${team.management.founder}" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>CEO</label>
            <input type="text" class="form-control" id="config-ceo" value="${team.management.ceo}" required>
          </div>
          <div class="form-group">
            <label>CFO</label>
            <input type="text" class="form-control" id="config-cfo" value="${team.management.cfo}" required>
          </div>
        </div>
        <div class="form-group">
          <label>CMO</label>
          <input type="text" class="form-control" id="config-cmo" value="${team.management.cmo}" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitTeamConfig(e) {
  e.preventDefault();
  const slogan = document.getElementById("config-slogan").value.trim();
  const homeGround = document.getElementById("config-venue").value.trim();
  const founder = document.getElementById("config-founder").value.trim();
  const ceo = document.getElementById("config-ceo").value.trim();
  const cfo = document.getElementById("config-cfo").value.trim();
  const cmo = document.getElementById("config-cmo").value.trim();

  const team = getTeam(state.selectedTeamId);
  team.slogan = slogan;
  team.management = { founder, ceo, cfo, cmo, homeGround };

  saveToStorage();
  closeModal();
  showToast("Team Profile Settings saved!");
  render();
}

// Change Team Password
function openChangePasswordModal() {
  const team = getTeam(state.selectedTeamId);
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">🔑 Change Login Password</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="pass-config-form" onsubmit="submitChangePassword(event)">
        <p class="text-sm text-muted mb-2">Changing password for: ${team.name}</p>
        <div class="form-group">
          <label>New Secret Password</label>
          <input type="password" class="form-control" id="new-password" placeholder="e.g. RCB999" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Password</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitChangePassword(e) {
  e.preventDefault();
  const newPass = document.getElementById("new-password").value.trim();
  
  if (newPass.length < 3) {
    alert("Password must be at least 3 characters long");
    return;
  }

  const team = getTeam(state.selectedTeamId);
  team.password = newPass;

  saveToStorage();
  closeModal();
  showToast("Password changed successfully!");
  render();
}

// Admin Console Special Methods
function changeTeamPasswordPrompt(teamId) {
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return;
  const newP = prompt(`Set new secret password for ${team.name}:`, team.password);
  if (newP !== null && newP.trim() !== "") {
    team.password = newP.trim();
    saveToStorage();
    showToast("Password updated");
    render();
  }
}

function resetTeamPrompt(teamId) {
  if (confirm(`Are you sure you want to reset all players and matches for ${teamId}?`)) {
    const seed = DEFAULT_TEAMS.find(t => t.id === teamId);
    const index = state.teams.findIndex(t => t.id === teamId);
    if (index !== -1 && seed) {
      state.teams[index] = JSON.parse(JSON.stringify(seed));
      saveToStorage();
      showToast(`${teamId} successfully reset to default seed data`);
      render();
    }
  }
}

function deleteTeamPrompt(teamId) {
  if (confirm(`Remove ${teamId} permanently from Zstar Premier League?`)) {
    state.teams = state.teams.filter(t => t.id !== teamId);
    if (state.selectedTeamId === teamId) {
      state.selectedTeamId = state.teams[0] ? state.teams[0].id : "";
    }
    saveToStorage();
    showToast("Team deleted");
    render();
  }
}

function openCreateTeamModal() {
  const html = `
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">Register New Team Franchise</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <form id="create-team-form" onsubmit="submitCreateTeamForm(event)">
        <div class="form-row">
          <div class="form-group">
            <label>Team Initial Code</label>
            <input type="text" class="form-control" id="new-team-id" placeholder="e.g. KKR" required>
          </div>
          <div class="form-group">
            <label>Slogan/Motto</label>
            <input type="text" class="form-control" id="new-team-slogan" placeholder="e.g. Korbo Lorbo Jeetbo" required>
          </div>
        </div>
        <div class="form-group">
          <label>Full Franchise Name</label>
          <input type="text" class="form-control" id="new-team-name" placeholder="e.g. Kolkata Knight Riders" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Theme Color Hex</label>
            <input type="color" class="form-control" id="new-team-color" value="#8b5cf6">
          </div>
          <div class="form-group">
            <label>Team Emoji Icon</label>
            <input type="text" class="form-control" id="new-team-logo" value="💜" required>
          </div>
        </div>
        <div class="form-group">
          <label>Security Password</label>
          <input type="text" class="form-control" id="new-team-pass" placeholder="e.g. KKR2026" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Create franchise</button>
        </div>
      </form>
    </div>
  `;
  openModal(html);
}

function submitCreateTeamForm(e) {
  e.preventDefault();
  const id = document.getElementById("new-team-id").value.trim().toUpperCase();
  const name = document.getElementById("new-team-name").value.trim();
  const slogan = document.getElementById("new-team-slogan").value.trim();
  const color = document.getElementById("new-team-color").value;
  const logo = document.getElementById("new-team-logo").value.trim();
  const password = document.getElementById("new-team-pass").value.trim();

  // Validate duplicate ID
  if (state.teams.some(t => t.id === id)) {
    alert("Franchise code already registered!");
    return;
  }

  state.teams.push({
    id, name, password, slogan, logo, color,
    management: { founder: "Zstar studio's pvt ltd", ceo: "N/A", cfo: "N/A", cmo: "N/A", homeGround: "Local Stadium" },
    coaching: [], physio: [], analysis: [], support: [], prMedia: [], sponsors: [],
    players: [], matches: []
  });

  saveToStorage();
  closeModal();
  showToast(`${name} registered for the tournament!`);
  render();
}

function resetAllDataSystem() {
  if (confirm("WARNING: This will wipe out all changes and restore original defaults. Continue?")) {
    state.teams = JSON.parse(JSON.stringify(DEFAULT_TEAMS));
    saveToStorage();
    state.selectedTeamId = "RCB";
    state.currentUser = null;
    sessionStorage.removeItem("zpl_user");
    state.activeTab = "dashboard";
    showToast("System database successfully reset!");
    render();
  }
}

// Bind other modal overlay dismissals on clicking outside the modal box
function setupPageListeners() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }
}

// --- Run App ---
document.addEventListener("DOMContentLoaded", initApp);
