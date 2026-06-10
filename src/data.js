// ==========================================
// ZPL EXECUTIVES DATA REGISTRY - src/data.js
// Seed database derived from csk.txt
// ==========================================

const BASE_SEED_TEAMS = [
  {
    id: "CSK",
    name: "Chennai Super Kings",
    password: "CSK7",
    slogan: "Whistle Podu",
    logo: "💛",
    color: "#eab308",
    management: {
      founder: "Zstar studio's pvt ltd (Founder: Mr. Zeeshan M)",
      ceo: "Ms. Priya Malhotra",
      cfo: "Mr. Arwind Mehta",
      cmo: "Ms. Neha Kapoor",
      homeGround: "M.A. Chidambaram Stadium, Chennai"
    },
    coaching: [
      { name: "Mr. Stephen Fleming", role: "Head coach" }
    ],
    physio: [
      { name: "Dr. Aakash Verma", role: "Physio" }
    ],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [
      { name: "TVS Eurogrip", type: "Title Sponsor" },
      { name: "Nike", type: "Kit Partner" }
    ],
    players: [
      { id: "csk_rg", name: "Ruturaj Gaikwad", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "csk_db", name: "Dewald Brevis", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_sk", name: "Sarfaraz Khan", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_am", name: "Ayush Mhatre", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_msd", name: "MS Dhoni", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "csk_ss", name: "Sanju Samson", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_ks", name: "Kartik Sharma", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_up", name: "Urvil Patel", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "csk_sd", name: "Shivam Dube", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_msh", name: "Matthew Short", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_jo", name: "Jamie Overton", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_zf", name: "Zak Foulkes", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_ahk", name: "Aman Hakim Khan", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_mn", name: "Macneil Noronha", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_pv", name: "Prashant Veer", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_df", name: "Dian Forrester", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_ak", name: "Anshul Kamboj", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_rc", name: "Rahul Chahar", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_na", name: "Noor Ahmad", nationality: "International", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_mh", name: "Matt Henry", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_mc", name: "Mukesh Choudhary", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_ah", name: "Akeal Hosein", nationality: "International", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_ka", name: "Khaleel Ahmed", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_sj", name: "Spencer Johnson", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_ky", name: "Kuldip Yadav", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_amad", name: "Akash Madhwal", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_sg", name: "Shreyas Gopal", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "csk_gs", name: "Gurjapneet Singh", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_rg_bowl", name: "Ramakrishna Ghosh", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "csk_ne", name: "Nathan Ellis", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: [
      {
        id: "csk_m1",
        number: 1,
        date: "2026-04-10",
        time: "19:30",
        venue: "M.A. Chidambaram Stadium, Chennai",
        opposition: "Royal Challengers Bengaluru",
        toss: "Chennai Super Kings",
        decision: "Batting",
        result: "Won",
        playerOfMatch: "Ruturaj Gaikwad",
        playingXI: ["csk_rg", "csk_db", "csk_msd", "csk_sd", "csk_rc", "csk_na", "csk_mh", "csk_sj", "csk_ss", "csk_jo", "csk_ak"],
        opponentXI: ["Virat Kohli", "Rajat Patidar", "Phil Salt", "Yash Dayal"],
        notes: "Gaikwad led from the front with a glorious 82 runs. Spinners controlled the middle overs perfectly.",
        performances: [
          { playerId: "csk_rg", runs: 82, balls: 45, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "csk_db", runs: 28, balls: 19, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "csk_msd", runs: 18, balls: 9, isOut: false, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "csk_na", runs: 0, balls: 0, isOut: false, wickets: 2, runsConceded: 22, overs: 4 },
          { playerId: "csk_sj", runs: 0, balls: 0, isOut: false, wickets: 3, runsConceded: 28, overs: 4 }
        ],
        status: "Completed"
      },
      {
        id: "csk_m2",
        number: 2,
        date: "2026-05-28",
        time: "19:30",
        venue: "M.A. Chidambaram Stadium, Chennai",
        opposition: "Mumbai Indians",
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
    id: "RCB",
    name: "Royal Challengers Bengaluru",
    password: "RCB18",
    slogan: "Play Bold",
    logo: "🔴",
    color: "#e11d48",
    management: {
      founder: "Zstar studio's pvt ltd (Founder: Mr. Zeeshan M)",
      ceo: "Ms. Priya Malhotra",
      cfo: "Mr. Arwind Mehta",
      cmo: "Ms. Neha Kapoor",
      homeGround: "M. Chinnaswamy Stadium, Bengaluru"
    },
    coaching: [
      { name: "Mr. Rahul Dravid", role: "Head coach" }
    ],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [
      { name: "Nike", type: "Title Sponsor" }
    ],
    players: [
      { id: "rcb_rp", name: "Rajat Patidar", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "rcb_vk", name: "Virat Kohli", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "rcb_dp", name: "Devdutt Padikkal", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_td", name: "Tim David", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_jb", name: "Jacob Bethell", nationality: "International", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_sd", name: "Satwik Deswal", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ps", name: "Phil Salt", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_js", name: "Jitesh Sharma", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_jc", name: "Jordan Cox", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rcb_kp", name: "Krunal Pandya", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_vi", name: "Venkatesh Iyer", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_rs", name: "Romario Shepherd", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_ss", name: "Swapnil Singh", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_my", name: "Mangesh Yadav", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_kc", name: "Kanishk Chouhan", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_vm", name: "Vihaan Malhotra", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_bk", name: "Bhuvneshwar Kumar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_jh", name: "Josh Hazlewood", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_jd", name: "Jacob Duffy", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_rsal", name: "Rasikh Salam", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_sys", name: "Suyash Sharma", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_nt", name: "Nuwan Thushara", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_yd", name: "Yash Dayal", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rcb_vo", name: "Vicky Ostwal", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rcb_as", name: "Abhinandan Singh", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: [
      {
        id: "rcb_m1",
        number: 1,
        date: "2026-04-10",
        time: "19:30",
        venue: "M.A. Chidambaram Stadium, Chennai",
        opposition: "Chennai Super Kings",
        toss: "Chennai Super Kings",
        decision: "Batting",
        result: "Lost",
        playerOfMatch: "Ruturaj Gaikwad",
        playingXI: ["rcb_vk", "rcb_rp", "rcb_ps", "rcb_vi", "rcb_kp", "rcb_bk", "rcb_jh", "rcb_yd", "rcb_sys"],
        opponentXI: ["Ruturaj Gaikwad", "Dewald Brevis", "MS Dhoni"],
        notes: "CSK spinners were too tough to handle in the second innings.",
        performances: [
          { playerId: "rcb_vk", runs: 42, balls: 31, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_rp", runs: 12, balls: 14, isOut: true, wickets: 0, runsConceded: 0, overs: 0 },
          { playerId: "rcb_ps", runs: 33, balls: 20, isOut: true, wickets: 0, runsConceded: 0, overs: 0 }
        ],
        status: "Completed"
      }
    ]
  },
  {
    id: "MI",
    name: "Mumbai Indians",
    password: "MI45",
    slogan: "Duniya Hila Denge Hum",
    logo: "💙",
    color: "#2563eb",
    management: {
      founder: "Reliance Industries",
      ceo: "Mr. Akash Ambani",
      cfo: "Mr. Sandeep Patel",
      cmo: "Mrs. Nita Ambani",
      homeGround: "Wankhede Stadium, Mumbai"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "mi_hp", name: "Hardik Pandya", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: true, isViceCaptain: false },
      { id: "mi_rs", name: "Rohit Sharma", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "mi_sy", name: "Suryakumar Yadav", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_tv", name: "Tilak Varma", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_sr", name: "Sherfane Rutherford", nationality: "International", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_dm", name: "Danish Malewar", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_mr", name: "Mayank Rawat", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_rr", name: "Ryan Rickelton", nationality: "International", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_rm", name: "Robin Minz", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_qdc", name: "Quinton de Kock", nationality: "International", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_ra", name: "Ruchit Ahir", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "mi_wj", name: "Will Jacks", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_ms", name: "Mitchell Santner", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_cb", name: "Corbin Bosch", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_nd", name: "Naman Dhir", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_ml", name: "Mahipal Lomror", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_aa", name: "Atharva Ankolekar", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_rab", name: "Raj Angad Bawa", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_jb", name: "Jasprit Bumrah", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_tb", name: "Trent Boult", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_dc", name: "Deepak Chahar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_st", name: "Shardul Thakur", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_mm", name: "Mayank Markande", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_ag", name: "Allah Ghazanfar", nationality: "International", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_ak", name: "Ashwani Kumar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "mi_rs_bowl", name: "Raghu Sharma", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "mi_mi", name: "Mohammad Izhar", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "GT",
    name: "Gujarat Titans",
    password: "GT77",
    slogan: "Aava De",
    logo: "🔱",
    color: "#0f172a",
    management: {
      founder: "CVC Capital Partners",
      ceo: "Mr. Arvinder Singh",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "Narendra Modi Stadium, Ahmedabad"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "gt_sg", name: "Shubman Gill", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "gt_ss", name: "Sai Sudharsan", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "gt_sk", name: "Shahrukh Khan", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_ce", name: "Connor Esterhuizen", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "gt_jb", name: "Jos Buttler", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "gt_tb", name: "Tom Banton", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "gt_kk", name: "Kumar Kushagra", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "gt_ar", name: "Anuj Rawat", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "gt_rt", name: "Rahul Tewatia", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_ws", name: "Washington Sundar", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_jh", name: "Jason Holder", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_gp", name: "Glenn Phillips", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_ns", name: "Nishant Sindhu", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_mak", name: "Mohd. Arshad Khan", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_rk", name: "Rashid Khan", nationality: "International", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_ms", name: "Mohammed Siraj", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_kr", name: "Kagiso Rabada", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_pk", name: "Prasidh Krishna", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_is", name: "Ishant Sharma", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_rsk", name: "R. Sai Kishore", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_jy", name: "Jayant Yadav", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_msu", name: "Manav Suthar", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "gt_lw", name: "Luke Wood", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_gb", name: "Gurnoor Brar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_ash_bowl", name: "Ashok Sharma", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "gt_pry", name: "Prithvi Raj Yarra", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "RR",
    name: "Rajasthan Royals",
    password: "RR23",
    slogan: "Halla Bol",
    logo: "💗",
    color: "#ec4899",
    management: {
      founder: "Manoj Badale",
      ceo: "Mr. Jake Lush McCrum",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "Sawai Mansingh Stadium, Jaipur"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "rr_rp", name: "Riyan Parag", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: true, isViceCaptain: false },
      { id: "rr_yj", name: "Yashasvi Jaiswal", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "rr_sh", name: "Shimron Hetmyer", nationality: "International", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_sd", name: "Shubham Dubey", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_vs", name: "Vaibhav Sooryavanshi", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_arp", name: "Aman Rao Perala", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_dj", name: "Dhruv Jurel", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_df", name: "Donovan Ferreira", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_ldp", name: "Lhuan-dre Pretorius", nationality: "International", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_rs", name: "Ravi Singh", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_ksr", name: "Kunal Singh Rathore", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "rr_rj", name: "Ravindra Jadeja", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_sc", name: "Sam Curran", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_wh", name: "Wanindu Hasaranga", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_ds", name: "Dasun Shanaka", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_ysc", name: "Yudhvir Singh Charak", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_esc", name: "Emanjot Singh Chahal", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_yp", name: "Yash Punja", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_bs", name: "Brijesh Sharma", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_ja", name: "Jofra Archer", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_nb", name: "Nandre Burger", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_ss_bowl", name: "Sandeep Sharma", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_mt", name: "Maheesh Theekshana", nationality: "International", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_rb", name: "Ravi Bishnoi", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_ff", name: "Fazalhaq Farooqi", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_td_bowl", name: "Tushar Deshpande", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_km", name: "Kwena Maphaka", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_ks", name: "Kuldeep Sen", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_am", name: "Adam Milne", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_sm", name: "Sushant Mishra", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_vp", name: "Vignesh Puthur", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "rr_ash", name: "Ashok Sharma", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "rr_kk_bowl", name: "Kumar Kartikeya", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "DC",
    name: "Delhi Capitals",
    password: "DC17",
    slogan: "Roar Macha",
    logo: "🔵",
    color: "#1e3a8a",
    management: {
      founder: "GMR Group & JSW Group",
      ceo: "Mr. Sukhvinder Singh",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "Arun Jaitley Stadium, Delhi"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "dc_ap", name: "Axar Patel", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: true, isViceCaptain: false },
      { id: "dc_kn", name: "Karun Nair", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "dc_dm", name: "David Miller", nationality: "International", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_pn", name: "Pathum Nissanka", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_sp", name: "Sahil Parakh", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_ps", name: "Prithvi Shaw", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_sr", name: "Sameer Rizvi", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_as", name: "Ashutosh Sharma", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_nr", name: "Nitish Rana", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_klr", name: "KL Rahul", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_ap_wk", name: "Abishek Porel", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_ts", name: "Tristan Stubbs", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_bd", name: "Ben Duckett", nationality: "International", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "dc_vn", name: "Vipraj Nigam", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_am", name: "Ajay Mandal", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_tv", name: "Tripurana Vijay", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_mt", name: "Madhav Tiwari", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_ad", name: "Auqib Dar", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_mstar", name: "Mitchell Starc", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_tn", name: "T. Natarajan", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_mk", name: "Mukesh Kumar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_dc", name: "Dushmantha Chameera", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_ky", name: "Kuldeep Yadav", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "dc_ln", name: "Lungi Ngidi", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_kj", name: "Kyle Jamieson", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "dc_ra", name: "Rehan Ahmed", nationality: "International", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "LSG",
    name: "Lucknow Super Giants",
    password: "LSG1",
    slogan: "Adab Se Haraenge",
    logo: "🟢",
    color: "#06b6d4",
    management: {
      founder: "RPSG Group",
      ceo: "Mr. Vinod Bisht",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "BRSABV Ekana Cricket Stadium, Lucknow"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "lsg_rp", name: "Rishabh Pant", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "lsg_am", name: "Aiden Markram", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: true },
      { id: "lsg_mb", name: "Matthew Breetzke", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_hs", name: "Himmat Singh", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ar", name: "Akshat Raghuwanshi", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_np", name: "Nicholas Pooran", nationality: "International", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ji", name: "Josh Inglis", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_mc", name: "Mukul Choudhary", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "lsg_mm", name: "Mitchell Marsh", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_sa", name: "Shahbaz Ahmed", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_wh", name: "Wanindu Hasaranga", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ab", name: "Ayush Badoni", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_as", name: "Abdul Samad", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ak", name: "Arshin Kulkarni", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_at", name: "Arjun Tendulkar", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_msh", name: "Mohammed Shami", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_an", name: "Anrich Nortje", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ak_bowl", name: "Avesh Khan", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_mk", name: "Mohsin Khan", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_my", name: "Mayank Yadav", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_as_bowl", name: "Akash Singh", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_ms", name: "Manimaran Siddharth", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_dr", name: "Digvesh Rathi", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "lsg_py", name: "Prince Yadav", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "lsg_nt", name: "Naman Tiwari", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "KKR",
    name: "Kolkata Knight Riders",
    password: "KKR88",
    slogan: "Korbo Lorbo Jeetbo",
    logo: "💜",
    color: "#6b21a8",
    management: {
      founder: "Red Chillies Entertainment & Mehta Group",
      ceo: "Mr. Venky Mysore",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "Eden Gardens, Kolkata"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "kkr_ar", name: "Ajinkya Rahane", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "kkr_rs", name: "Rinku Singh", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "kkr_mp", name: "Manish Pandey", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_rt", name: "Rahul Tripathi", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_rp", name: "Rovman Powell", nationality: "International", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_arag", name: "Angkrish Raghuvanshi", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_fa", name: "Finn Allen", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_ts", name: "Tim Seifert", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_tsd", name: "Tejasvi Singh Dahiya", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_sn", name: "Sunil Narine", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_cg", name: "Cameron Green", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_rr", name: "Rachin Ravindra", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_rms", name: "Ramandeep Singh", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_ar_all", name: "Anukul Roy", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_sr", name: "Sarthak Ranjan", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "kkr_dk", name: "Daksh Kamra", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_vc", name: "Varun Chakaravarthy", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_mp_bowl", name: "Matheesha Pathirana", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_hr", name: "Harshit Rana", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_um", name: "Umran Malik", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_va", name: "Vaibhav Arora", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_ns", name: "Navdeep Saini", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_kt", name: "Kartik Tyagi", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_bm", name: "Blessing Muzarabani", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "kkr_ps", name: "Prashant Solanki", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "kkr_sd_bowl", name: "Saurabh Dubey", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "PBKS",
    name: "Punjab Kings",
    password: "PBKS11",
    slogan: "Sadda Punjab",
    logo: "🦁",
    color: "#dc2626",
    management: {
      founder: "Preity Zinta & Ness Wadia",
      ceo: "Mr. Satish Menon",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "PCA Stadium, Mohali"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "pb_si", name: "Shreyas Iyer", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: true, isViceCaptain: false },
      { id: "pb_pa", name: "Priyansh Arya", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: true },
      { id: "pb_pavin", name: "Pyla Avinash", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_hs", name: "Harnoor Singh", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_nw", name: "Nehal Wadhera", nationality: "Indian", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_ps", name: "Prabhsimran Singh", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_vv", name: "Vishnu Vinod", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_ss", name: "Shashank Singh", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "pb_ms", name: "Marcus Stoinis", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_mj", name: "Marco Jansen", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_ao", name: "Azmatullah Omarzai", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_cc", name: "Cooper Connolly", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_mk", name: "Musheer Khan", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_ssh", name: "Suryansh Shedge", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_mo", name: "Mitchell Owen", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_as_bowl", name: "Arshdeep Singh", nationality: "Indian", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_yc", name: "Yuzvendra Chahal", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_lf", name: "Lockie Ferguson", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_hb", name: "Harpreet Brar", nationality: "Indian", role: "Spin Bowler", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_vv_bowl", name: "Vijaykumar Vyshak", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_yt", name: "Yash Thakur", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_xb", name: "Xavier Bartlett", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_pd", name: "Praveen Dubey", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "pb_bd", name: "Ben Dwarshuis", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "pb_vn", name: "Vishal Nishad", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  },
  {
    id: "SRH",
    name: "Sunrisers Hyderabad",
    password: "SRH4",
    slogan: "Play with Fire",
    logo: "🧡",
    color: "#f97316",
    management: {
      founder: "SUN Group",
      ceo: "Mr. K. Shanmugam",
      cfo: "N/A",
      cmo: "N/A",
      homeGround: "Rajiv Gandhi International Stadium, Hyderabad"
    },
    coaching: [],
    physio: [],
    analysis: [],
    support: [],
    prMedia: [],
    sponsors: [],
    players: [
      { id: "sr_pc", name: "Pat Cummins", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: true, isViceCaptain: false },
      { id: "sr_th", name: "Travis Head", nationality: "International", role: "Batsman", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: true },
      { id: "sr_rs", name: "Ravichandran Smaran", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_av", name: "Aniket Verma", nationality: "Indian", role: "Batsman", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_hk", name: "Heinrich Klaasen", nationality: "International", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_ik", name: "Ishan Kishan", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Left hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_sa", name: "Salil Arora", nationality: "Indian", role: "Wicketkeeper", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_as", name: "Abhishek Sharma", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_nkr", name: "Nitish Kumar Reddy", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_ll", name: "Liam Livingstone", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_km", name: "Kamindu Mendis", nationality: "International", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_ak", name: "Amit Kumar", nationality: "Indian", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "-", isCaptain: false, isViceCaptain: false },
      { id: "sr_hd", name: "Harsh Dubey", nationality: "Indian", role: "All-rounder", battingStyle: "Left hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_je", name: "Jack Edwards", nationality: "International", role: "All-rounder", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_hp", name: "Harshal Patel", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_ju", name: "Jaydev Unadkat", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_gc", name: "Gerald Coetzee", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_dm", name: "Dilshan Madushanka", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_bc", name: "Brydon Carse", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_za", name: "Zeeshan Ansari", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_em", name: "Eshan Malinga", nationality: "International", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_dp", name: "David Payne", nationality: "International", role: "Fast Bowler", battingStyle: "Left hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_sh_bowl", name: "Sakib Hussain", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_ars", name: "Ambrish R.S.", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_ph", name: "Praful Hinge", nationality: "Indian", role: "Spin Bowler", battingStyle: "Right hand", bowlingStyle: "Spin", isCaptain: false, isViceCaptain: false },
      { id: "sr_sk_bowl", name: "Shivang Kumar", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_kbf", name: "Krains Bhaveshbhai Fuletra", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false },
      { id: "sr_ot", name: "Omkar Tarmale", nationality: "Indian", role: "Fast Bowler", battingStyle: "Right hand", bowlingStyle: "Fast", isCaptain: false, isViceCaptain: false }
    ],
    matches: []
  }
];

// Raw text representing all fixtures from Week 1.txt
const RAW_FIXTURES = `
Week 1
Match 1: CSK vs RCB — M. A. Chidambaram Stadium, Chennai
Match 2: MI vs KKR — Wankhede Stadium, Mumbai
Match 3: SRH vs GT — Rajiv Gandhi International Stadium, Hyderabad
Match 4: DC vs RR — Arun Jaitley Stadium, Delhi
Match 5: PBKS vs LSG — PCA Stadium, Mohali
Match 6: RCB vs MI — M. Chinnaswamy Stadium, Bengaluru
Match 7: KKR vs CSK — Eden Gardens, Kolkata

Week 2
Match 8: GT vs DC — Narendra Modi Stadium, Ahmedabad
Match 9: RR vs PBKS — Sawai Mansingh Stadium, Jaipur
Match 10: LSG vs SRH — BRSABV Ekana Cricket Stadium, Lucknow
Match 11: CSK vs MI — M. A. Chidambaram Stadium, Chennai
Match 12: RCB vs KKR — M. Chinnaswamy Stadium, Bengaluru
Match 13: SRH vs DC — Rajiv Gandhi International Stadium, Hyderabad
Match 14: GT vs RR — Narendra Modi Stadium, Ahmedabad

Week 3
Match 15: PBKS vs CSK — PCA Stadium, Mohali
Match 16: MI vs LSG — Wankhede Stadium, Mumbai
Match 17: KKR vs SRH — Eden Gardens, Kolkata
Match 18: DC vs RCB — Arun Jaitley Stadium, Delhi
Match 19: RR vs GT — Sawai Mansingh Stadium, Jaipur
Match 20: LSG vs PBKS — BRSABV Ekana Cricket Stadium, Lucknow
Match 21: CSK vs SRH — M. A. Chidambaram Stadium, Chennai

Week 4
Match 22: MI vs DC — Wankhede Stadium, Mumbai
Match 23: RCB vs RR — M. Chinnaswamy Stadium, Bengaluru
Match 24: KKR vs GT — Eden Gardens, Kolkata
Match 25: PBKS vs SRH — PCA Stadium, Mohali
Match 26: LSG vs CSK — BRSABV Ekana Cricket Stadium, Lucknow
Match 27: DC vs MI — Arun Jaitley Stadium, Delhi
Match 28: RR vs KKR — Sawai Mansingh Stadium, Jaipur

Week 5
Match 29: GT vs RCB — Narendra Modi Stadium, Ahmedabad
Match 30: SRH vs PBKS — Rajiv Gandhi International Stadium, Hyderabad
Match 31: CSK vs DC — M. A. Chidambaram Stadium, Chennai
Match 32: MI vs RR — Wankhede Stadium, Mumbai
Match 33: KKR vs LSG — Eden Gardens, Kolkata
Match 34: RCB vs PBKS — M. Chinnaswamy Stadium, Bengaluru
Match 35: GT vs CSK — Narendra Modi Stadium, Ahmedabad

Week 6
Match 36: SRH vs MI — Rajiv Gandhi International Stadium, Hyderabad
Match 37: DC vs KKR — Arun Jaitley Stadium, Delhi
Match 38: RR vs LSG — Sawai Mansingh Stadium, Jaipur
Match 39: PBKS vs GT — PCA Stadium, Mohali
Match 40: RCB vs SRH — M. Chinnaswamy Stadium, Bengaluru
Match 41: CSK vs KKR — M. A. Chidambaram Stadium, Chennai
Match 42: MI vs GT — Wankhede Stadium, Mumbai

Week 7
Match 43: DC vs PBKS — Arun Jaitley Stadium, Delhi
Match 44: RR vs SRH — Sawai Mansingh Stadium, Jaipur
Match 45: LSG vs RCB — BRSABV Ekana Cricket Stadium, Lucknow
Match 46: CSK vs PBKS — M. A. Chidambaram Stadium, Chennai
Match 47: MI vs RCB — Wankhede Stadium, Mumbai
Match 48: KKR vs DC — Eden Gardens, Kolkata
Match 49: GT vs LSG — Narendra Modi Stadium, Ahmedabad

Week 8
Match 50: SRH vs RR — Rajiv Gandhi International Stadium, Hyderabad
Match 51: PBKS vs MI — PCA Stadium, Mohali
Match 52: LSG vs KKR — BRSABV Ekana Cricket Stadium, Lucknow
Match 53: RCB vs GT — M. Chinnaswamy Stadium, Bengaluru
Match 54: DC vs CSK — Arun Jaitley Stadium, Delhi
Match 55: RR vs MI — Sawai Mansingh Stadium, Jaipur
Match 56: SRH vs KKR — Rajiv Gandhi International Stadium, Hyderabad

Week 9
Match 57: GT vs PBKS — Narendra Modi Stadium, Ahmedabad
Match 58: CSK vs LSG — M. A. Chidambaram Stadium, Chennai
Match 59: RCB vs DC — M. Chinnaswamy Stadium, Bengaluru
Match 60: KKR vs RR — Eden Gardens, Kolkata
Match 61: MI vs SRH — Wankhede Stadium, Mumbai
Match 62: LSG vs GT — BRSABV Ekana Cricket Stadium, Lucknow
Match 63: PBKS vs RCB — PCA Stadium, Mohali

Week 10
Match 64: RR vs CSK — Sawai Mansingh Stadium, Jaipur
Match 65: DC vs GT — Arun Jaitley Stadium, Delhi
Match 66: KKR vs MI — Eden Gardens, Kolkata
Match 67: SRH vs LSG — Rajiv Gandhi International Stadium, Hyderabad
Match 68: PBKS vs DC — PCA Stadium, Mohali
Match 69: GT vs SRH — Narendra Modi Stadium, Ahmedabad
Match 70: LSG vs RR — BRSABV Ekana Cricket Stadium, Lucknow

Playoff Phase (Matches 71-74)
Match 71 (Qualifier 1): RCB vs SRH — M. Chinnaswamy Stadium, Bengaluru
Match 72 (Eliminator): CSK vs MI — M. A. Chidambaram Stadium, Chennai
Match 73 (Qualifier 2): RCB vs CSK — Narendra Modi Stadium, Ahmedabad
Match 74 (Grand Final): SRH vs RCB — Narendra Modi Stadium, Ahmedabad
`;

const TEAM_NAMES = {
  CSK: "Chennai Super Kings",
  RCB: "Royal Challengers Bengaluru",
  MI: "Mumbai Indians",
  GT: "Gujarat Titans",
  RR: "Rajasthan Royals",
  DC: "Delhi Capitals",
  LSG: "Lucknow Super Giants",
  KKR: "Kolkata Knight Riders",
  PBKS: "Punjab Kings",
  SRH: "Sunrisers Hyderabad"
};

// Dynamically parse all fixtures
const parsedMatches = [];
const lines = RAW_FIXTURES.split("\n");
let currentWeek = "Week 1";
const baseDate = new Date("2026-04-10");

lines.forEach(line => {
  const trimmed = line.trim();
  if (!trimmed) return;
  
  if (trimmed.startsWith("Week")) {
    currentWeek = trimmed;
    return;
  }
  if (trimmed.startsWith("Playoff")) {
    currentWeek = "Playoffs";
    return;
  }
  
  if (trimmed.startsWith("Match ")) {
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex !== -1) {
      const matchHeader = trimmed.substring(0, colonIndex);
      const matchContent = trimmed.substring(colonIndex + 1).trim();
      
      const numMatch = matchHeader.match(/\d+/);
      const matchNum = numMatch ? parseInt(numMatch[0]) : 0;
      
      const dashIndex = matchContent.search(/[\u2014\u2013-]/);
      if (dashIndex !== -1) {
        const teamsPart = matchContent.substring(0, dashIndex).trim();
        const venue = matchContent.substring(dashIndex + 1).trim();
        
        const teamParts = teamsPart.split(/\s+vs\s+/i);
        if (teamParts.length === 2) {
          const tA = teamParts[0].trim().toUpperCase();
          const tB = teamParts[1].trim().toUpperCase();
          
          // Calculate date: starting from April 10, adding 1 day per match number
          const matchDateObj = new Date(baseDate.getTime() + (matchNum - 1) * 24 * 60 * 60 * 1000);
          const yyyy = matchDateObj.getFullYear();
          const mm = String(matchDateObj.getMonth() + 1).padStart(2, '0');
          const dd = String(matchDateObj.getDate()).padStart(2, '0');
          const dateStr = `${yyyy}-${mm}-${dd}`;
          
          parsedMatches.push({
            number: matchNum,
            teamA: tA,
            teamB: tB,
            venue: venue,
            date: dateStr,
            time: "19:30",
            week: currentWeek
          });
        }
      }
    }
  }
});

// Distribute matches to each team's schedule
BASE_SEED_TEAMS.forEach(team => {
  const teamMatches = parsedMatches.filter(m => m.teamA === team.id || m.teamB === team.id);
  const consolidated = teamMatches.map(m => {
    const oppositionId = m.teamA === team.id ? m.teamB : m.teamA;
    const oppositionName = TEAM_NAMES[oppositionId] || oppositionId;
    
    // Preserve completed match details if match number matches
    const existing = team.matches?.find(em => em.number === m.number);
    if (existing) {
      return existing;
    }
    
    return {
      id: `${team.id.toLowerCase()}_m_${m.number}`,
      number: m.number,
      date: m.date,
      time: m.time,
      venue: m.venue,
      opposition: oppositionName,
      toss: "",
      decision: "",
      result: "",
      playerOfMatch: "",
      playingXI: [],
      opponentXI: [],
      notes: "",
      performances: [],
      status: "Scheduled"
    };
  });
  
  consolidated.sort((a, b) => a.number - b.number);
  team.matches = consolidated;
});

export const SEED_TEAMS = BASE_SEED_TEAMS;
