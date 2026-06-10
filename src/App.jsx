import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  LogOut, 
  ChevronRight, 
  Plus, 
  Settings, 
  Check, 
  Trash2, 
  Edit3, 
  Play,
  TrendingUp, 
  ChevronDown,
  Info,
  DollarSign
} from 'lucide-react';

import { SEED_TEAMS } from './data.js';

export default function App() {
  const [teams, setTeams] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [squadFilter, setSquadFilter] = useState("all");
  const [selectedTeamId, setSelectedTeamId] = useState("RCB");
  const [toasts, setToasts] = useState([]);
  
  // Analytics State
  const [analyticsSubTab, setAnalyticsSubTab] = useState("batting");
  const [matchupBatter, setMatchupBatter] = useState("rcb_vk");
  const [matchupBowler, setMatchupBowler] = useState("mi_jb");
  const [insightsPlayerId, setInsightsPlayerId] = useState("rcb_vk");
  const [insightsVenue, setInsightsVenue] = useState("M. Chinnaswamy Stadium, Bengaluru");
  const [inningsMatchId, setInningsMatchId] = useState("csk_m1");
  const [phaseFilter, setPhaseFilter] = useState("all");
  
  // Admin Match Management State
  const [adminMatchFilter, setAdminMatchFilter] = useState("all");
  const [adminMatchSearch, setAdminMatchSearch] = useState("");
  
  // Modals state
  const [modalType, setModalType] = useState(null); // 'player', 'staff', 'sponsor', 'match', 'score', 'profile', 'config', 'password'
  const [activePlayer, setActivePlayer] = useState(null);
  const [activeMatch, setActiveMatch] = useState(null);
  const [activeStaffKey, setActiveStaffKey] = useState(null);
  const [activeStaffTitle, setActiveStaffTitle] = useState(null);
  
  // Login form state
  const [loginRole, setLoginRole] = useState("team");
  const [loginTeamId, setLoginTeamId] = useState("RCB");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Toast notifier helper
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Load state on mount
  useEffect(() => {
    const localData = localStorage.getItem("zpl_luxury_teams");
    if (localData) {
      const parsed = JSON.parse(localData);
      const totalStoredMatches = parsed.reduce((acc, t) => acc + (t.matches ? t.matches.length : 0), 0);
      const rcb = parsed.find(t => t.id === "RCB");
      const rcbOutdated = rcb && rcb.management?.homeGround?.includes("Zstar");
      if (parsed.length < SEED_TEAMS.length || totalStoredMatches < 100 || rcbOutdated) {
        setTeams(SEED_TEAMS);
        localStorage.setItem("zpl_luxury_teams", JSON.stringify(SEED_TEAMS));
      } else {
        setTeams(parsed);
      }
    } else {
      setTeams(SEED_TEAMS);
      localStorage.setItem("zpl_luxury_teams", JSON.stringify(SEED_TEAMS));
    }

    const sessionUser = sessionStorage.getItem("zpl_luxury_user");
    if (sessionUser) {
      const u = JSON.parse(sessionUser);
      setCurrentUser(u);
      if (u.role === "team") {
        setSelectedTeamId(u.teamId);
      }
    }
  }, []);

  const saveTeams = (updatedTeams) => {
    setTeams(updatedTeams);
    localStorage.setItem("zpl_luxury_teams", JSON.stringify(updatedTeams));
  };

  const handleAdminDeleteMatch = (teamId, matchId) => {
    if (confirm("Are you sure you want to permanently cancel and remove this match?")) {
      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === teamId);
      if (tIdx !== -1) {
        updated[tIdx].matches = updated[tIdx].matches.filter(m => m.id !== matchId);
        saveTeams(updated);
        addToast("Match deleted successfully", "info");
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("zpl_luxury_user");
    setActiveTab("dashboard");
    addToast("Logged out successfully", "info");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (loginRole === "admin") {
      if (loginPassword === "admin123") {
        const u = { role: "admin", teamId: null };
        setCurrentUser(u);
        sessionStorage.setItem("zpl_luxury_user", JSON.stringify(u));
        setActiveTab("dashboard");
        addToast("Logged in as Global Admin", "success");
      } else {
        setLoginError("Invalid Administrator password.");
      }
    } else {
      const team = teams.find(t => t.id === loginTeamId);
      if (team && team.password === loginPassword) {
        const u = { role: "team", teamId: team.id };
        setCurrentUser(u);
        sessionStorage.setItem("zpl_luxury_user", JSON.stringify(u));
        setSelectedTeamId(team.id);
        setActiveTab("team_profile");
        addToast(`Welcome back, ${team.name} management!`, "success");
      } else {
        setLoginError(`Invalid password for ${team ? team.name : 'selected team'}.`);
      }
    }
  };

  const activeTeam = teams.find(t => t.id === selectedTeamId) || teams[0];
  const canEdit = currentUser && (currentUser.role === "admin" || currentUser.teamId === activeTeam?.id);

  // Dynamic calculations
  const getPlayerStats = (playerId, team) => {
    let matchesPlayed = 0;
    let totalRuns = 0;
    let totalBalls = 0;
    let outs = 0;
    let wickets = 0;
    let runsConceded = 0;
    let ballsBowled = 0;

    team?.matches?.forEach(m => {
      if (m.status !== "Completed") return;
      
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
        
        const overs = Number(perf.overs || 0);
        const wholeOvers = Math.floor(overs);
        const partOvers = Math.round((overs - wholeOvers) * 10);
        ballsBowled += (wholeOvers * 6) + (partOvers > 6 ? 6 : partOvers);
      }
    });

    const battingAvg = outs > 0 ? (totalRuns / outs).toFixed(2) : (totalRuns > 0 ? "N/A" : "0.00");
    const strikeRate = totalBalls > 0 ? ((totalRuns / totalBalls) * 100).toFixed(2) : "0.00";
    const economy = ballsBowled > 0 ? ((runsConceded / ballsBowled) * 6).toFixed(2) : "0.00";
    const oversString = `${Math.floor(ballsBowled / 6)}.${ballsBowled % 6}`;

    return { matchesPlayed, totalRuns, totalBalls, outs, battingAvg, strikeRate, wickets, runsConceded, oversString, economy };
  };

  const getPointsTable = () => {
    return teams.map(t => {
      let won = 0;
      let lost = 0;
      t.matches.forEach(m => {
        if (m.status === "Completed") {
          if (m.result === "Won") won++;
          else lost++;
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
  };

  const getGlobalCapHolders = () => {
    let topBatsman = { name: "N/A", teamLogo: "", teamName: "", runs: 0, avg: "0.00" };
    let topBowler = { name: "N/A", teamLogo: "", teamName: "", wickets: 0, eco: "0.00" };

    teams.forEach(t => {
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
  };

  return (
    <div className="app-container">
      {/* ==========================================
          SIDEBAR NAV
          ========================================== */}
      <aside className="luxury-sidebar">
        <div className="brand-section">
          <div className="brand-logo-glow">🏏</div>
          <div>
            <div className="brand-title">ZSTAR EXECUTIVE</div>
            <div className="brand-subtitle">Premier Suite</div>
          </div>
        </div>

        <nav className="nav-links">
          <div className="sidebar-label" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>GLOBAL PORTAL</div>
          <button 
            className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Trophy size={18} /> Points & Standings
          </button>
          <button 
            className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab("analytics")}
          >
            <TrendingUp size={18} /> Insights & Analytics
          </button>

          <div className="sidebar-label" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-muted)', margin: '1.25rem 0 0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>FRANCHISE FOCUS</div>
          
          <div style={{ marginBottom: '0.75rem' }}>
            <select 
              className="luxury-input" 
              value={selectedTeamId}
              onChange={(e) => setSelectedTeamId(e.target.value)}
              style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem', background: 'var(--bg-dark)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            >
              {teams.map(t => (
                <option key={t.id} value={t.id}>{t.logo} {t.name}</option>
              ))}
            </select>
          </div>

          <button 
            className={`nav-link ${activeTab === 'team_profile' ? 'active' : ''}`}
            onClick={() => setActiveTab("team_profile")}
          >
            <Briefcase size={18} /> Corporate & Staff
          </button>
          <button 
            className={`nav-link ${activeTab === 'squad' ? 'active' : ''}`}
            onClick={() => setActiveTab("squad")}
          >
            <Users size={18} /> Squad Matrix
          </button>
          <button 
            className={`nav-link ${activeTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveTab("matches")}
          >
            <Calendar size={18} /> Match Center
          </button>

          {currentUser && currentUser.role === 'admin' && (
            <>
              <div className="sidebar-label" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-muted)', margin: '1.25rem 0 0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>ADMIN CONTROL</div>
              <button 
                className={`nav-link ${activeTab === 'admin_console' ? 'active' : ''}`}
                onClick={() => setActiveTab("admin_console")}
              >
                <Settings size={18} /> System Settings
              </button>
            </>
          )}
        </nav>

        <div className="user-profile-widget">
          {currentUser ? (
            <div className="flex-between">
              <div>
                <div className="font-bold text-sm" style={{ color: 'var(--platinum)' }}>
                  {currentUser.role === 'admin' ? 'Admin Board' : activeTeam?.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Authorized Session</div>
              </div>
              <button 
                className="luxury-btn luxury-btn-secondary" 
                style={{ padding: '0.35rem 0.65rem' }}
                onClick={handleLogout}
                title="Log out"
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button 
              className="luxury-btn luxury-btn-primary" 
              style={{ width: '100%', fontSize: '0.85rem' }}
              onClick={() => setActiveTab("login")}
            >
              Sign In to Hub
            </button>
          )}
        </div>
      </aside>

      {/* ==========================================
          MAIN CONTENT AREA
          ========================================== */}
      <main className="main-wrapper">
        
        {/* Render Views dynamically */}
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'team_profile' && renderTeamProfile()}
        {activeTab === 'squad' && renderSquad()}
        {activeTab === 'matches' && renderMatches()}
        {activeTab === 'admin_console' && renderAdminConsole()}
        {activeTab === 'login' && renderLogin()}

      </main>

      {/* ==========================================
          TOAST ALERT BANNER
          ========================================== */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 10000, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {toasts.map(t => (
          <div 
            key={t.id} 
            className="luxury-card" 
            style={{ 
              padding: '0.8rem 1.2rem', 
              borderRadius: 'var(--radius-sm)', 
              minWidth: '240px',
              borderLeft: `4px solid ${t.type === 'success' ? '#10b981' : t.type === 'error' ? '#e11d48' : '#3b82f6'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.88rem'
            }}
          >
            <span>{t.type === 'success' ? '✅' : t.type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* ==========================================
          MODALS MANAGER
          ========================================== */}
      {modalType && renderModalContainer()}

    </div>
  );

  // ============================================================
  // VIEW RENDERERS
  // ============================================================

  // 1. DASHBOARD Standings & Awards
  function renderDashboard() {
    const points = getPointsTable();
    const caps = getGlobalCapHolders();

    return (
      <div>
        <div className="luxury-header">
          <div>
            <h1 className="welcome-title">THE STANDINGS BOARD</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Real-time team standings and individual awards across the league.</p>
          </div>
          {!currentUser && (
            <button className="luxury-btn luxury-btn-primary" onClick={() => setActiveTab("login")}>
              Executive Sign In
            </button>
          )}
        </div>

        {/* Global Caps Row */}
        <div className="luxury-stats-grid">
          <div className="luxury-stat-card gold">
            <div className="stat-label">Orange Cap (League Leader)</div>
            <div className="stat-value">{caps.topBatsman.name}</div>
            <div className="stat-extra">
              {caps.topBatsman.teamLogo} {caps.topBatsman.teamName} <br />
              <strong className="gold-text" style={{ fontSize: '1.25rem', marginTop: '4px', display: 'inline-block' }}>{caps.topBatsman.runs} Runs</strong>
            </div>
          </div>
          <div className="luxury-stat-card ruby">
            <div className="stat-label">Purple Cap (League Leader)</div>
            <div className="stat-value">{caps.topBowler.name}</div>
            <div className="stat-extra">
              {caps.topBowler.teamLogo} {caps.topBowler.teamName} <br />
              <strong className="ruby-text" style={{ fontSize: '1.25rem', marginTop: '4px', display: 'inline-block' }}>{caps.topBowler.wickets} Wkts</strong>
            </div>
          </div>
        </div>

        {/* Points Table */}
        <div className="luxury-card">
          <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>🏆 LEAGUE STANDINGS</h2>
          <div className="luxury-table-container">
            <table className="luxury-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Franchise Team</th>
                  <th style={{ textAlign: 'center' }}>Played</th>
                  <th style={{ textAlign: 'center' }}>Won</th>
                  <th style={{ textAlign: 'center' }}>Lost</th>
                  <th style={{ textAlign: 'right' }}>Points</th>
                </tr>
              </thead>
              <tbody>
                {points.map((p, idx) => (
                  <tr key={p.id}>
                    <td>
                      <span className="luxury-badge luxury-badge-gold" style={{ fontSize: '0.8rem' }}>
                        #{idx + 1}
                      </span>
                    </td>
                    <td>
                      <div className="flex-gap-2">
                        <span style={{ fontSize: '1.25rem' }}>{p.logo}</span>
                        <div>
                          <strong style={{ color: 'var(--platinum)' }}>{p.name}</strong>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Motto: {teams.find(t => t.id === p.id)?.slogan}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center', fontVariantNumeric: 'tabular-nums' }}>{p.played}</td>
                    <td style={{ textAlign: 'center', color: '#10b981', fontWeight: 'bold' }}>{p.won}</td>
                    <td style={{ textAlign: 'center', color: '#e11d48', fontWeight: 'bold' }}>{p.lost}</td>
                    <td style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--gold)' }}>
                      {p.points} PTS
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // 2. TEAM PROFILE VIEW (Management, Staff & Sponsors)
  function renderTeamProfile() {
    if (!activeTeam) return <div>No team selected</div>;

    const renderStaffBlock = (title, emoji, items, key) => (
      <div className="luxury-card mb-3" style={{ padding: '1.5rem' }}>
        <div className="flex-between mb-2">
          <h3 className="luxury-title" style={{ fontSize: '1.05rem', marginBottom: 0 }}>
            {emoji} {title}
          </h3>
          {canEdit && (
            <button 
              className="luxury-btn luxury-btn-primary" 
              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
              onClick={() => {
                setActiveStaffKey(key);
                setActiveStaffTitle(title);
                setModalType("staff");
              }}
            >
              + Add Member
            </button>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {items?.length === 0 ? (
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No directors configured</div>
          ) : (
            items?.map((itm, idx) => (
              <div key={idx} className="flex-between py-1" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{itm.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{itm.role}</div>
                </div>
                {canEdit && (
                  <button 
                    className="luxury-btn luxury-btn-danger" 
                    style={{ padding: '0.25rem', fontSize: '0.75rem' }}
                    onClick={() => {
                      const updated = [...teams];
                      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
                      updated[tIdx][key].splice(idx, 1);
                      saveTeams(updated);
                      addToast("Member removed", "info");
                    }}
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );

    return (
      <div>
        <div className="luxury-header" style={{ marginBottom: '2rem' }}>
          <div className="flex-gap-2">
            <span style={{ fontSize: '3rem' }}>{activeTeam.logo}</span>
            <div>
              <h1 className="welcome-title">{activeTeam.name}</h1>
              <p style={{ color: 'var(--text-secondary)' }}>"{activeTeam.slogan}" — Home: {activeTeam.management?.homeGround}</p>
            </div>
          </div>
          {canEdit && (
            <div className="flex-gap-2">
              <button className="luxury-btn luxury-btn-secondary" onClick={() => setModalType("config")}>
                Corporate Config
              </button>
              <button className="luxury-btn luxury-btn-secondary" onClick={() => setModalType("password")}>
                Password Settings
              </button>
            </div>
          )}
        </div>

        {/* Corporate details */}
        <div className="luxury-card mb-3" style={{ padding: '2rem' }}>
          <h2 className="luxury-title" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💼 CORPORATE OWNERSHIP
          </h2>
          <div className="grid-3" style={{ fontSize: '0.9rem' }}>
            <div>
              <div style={{ color: 'var(--text-muted)' }}>Club Founder / Owner:</div>
              <strong className="gold-text" style={{ fontSize: '1rem' }}>{activeTeam.management?.founder}</strong>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)' }}>CEO:</div>
              <strong style={{ color: 'var(--platinum)' }}>{activeTeam.management?.ceo}</strong>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)' }}>CFO:</div>
              <strong style={{ color: 'var(--platinum)' }}>{activeTeam.management?.cfo}</strong>
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)' }}>CMO:</div>
              <strong style={{ color: 'var(--platinum)' }}>{activeTeam.management?.cmo}</strong>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ color: 'var(--text-muted)' }}>Home Arena Ground:</div>
              <strong style={{ color: 'var(--platinum)' }}>{activeTeam.management?.homeGround}</strong>
            </div>
          </div>
        </div>

        {/* Dynamic Staff Grids */}
        <div className="grid-2" style={{ alignItems: 'start', margin: '2rem 0' }}>
          <div>
            {renderStaffBlock("Coaching Board", "🧠", activeTeam.coaching, "coaching")}
            {renderStaffBlock("Gym & Physiotherapists", "🏥", activeTeam.physio, "physio")}
            {renderStaffBlock("Analysis & Strategy Office", "📊", activeTeam.analysis, "analysis")}
          </div>

          <div>
            {renderStaffBlock("Operations Support Staff", "👔", activeTeam.support, "support")}
            {renderStaffBlock("Public Relations & Media", "📢", activeTeam.prMedia, "prMedia")}

            {/* Sponsors */}
            <div className="luxury-card" style={{ padding: '1.5rem' }}>
              <div className="flex-between mb-2">
                <h3 className="luxury-title" style={{ fontSize: '1.05rem', marginBottom: 0 }}>
                  🤝 Official Sponsors & Partners
                </h3>
                {canEdit && (
                  <button 
                    className="luxury-btn luxury-btn-primary" 
                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                    onClick={() => setModalType("sponsor")}
                  >
                    + Add Sponsor
                  </button>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {activeTeam.sponsors?.length === 0 ? (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No sponsorships signed</div>
                ) : (
                  activeTeam.sponsors?.map((sp, idx) => (
                    <div key={idx} className="flex-between py-1" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--gold)' }}>{sp.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{sp.type}</div>
                      </div>
                      {canEdit && (
                        <button 
                          className="luxury-btn luxury-btn-danger" 
                          style={{ padding: '0.25rem', fontSize: '0.75rem' }}
                          onClick={() => {
                            const updated = [...teams];
                            const tIdx = updated.findIndex(t => t.id === activeTeam.id);
                            updated[tIdx].sponsors.splice(idx, 1);
                            saveTeams(updated);
                            addToast("Sponsor removed", "info");
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. SQUAD MATRIX & PLAYERS VIEW
  function renderSquad() {
    if (!activeTeam) return <div>No squad data available</div>;

    const filteredPlayers = squadFilter === "all" 
      ? activeTeam.players 
      : activeTeam.players.filter(p => p.role === squadFilter);

    const roles = [
      { key: "all", label: "All Squad" },
      { key: "Batsman", label: "Batsmen" },
      { key: "All-rounder", label: "All Rounders" },
      { key: "Wicketkeeper", label: "Wicketkeepers" },
      { key: "Spin Bowler", label: "Spin Bowlers" },
      { key: "Fast Bowler", label: "Fast Bowlers" }
    ];

    return (
      <div>
        <div className="luxury-header">
          <div>
            <h1 className="welcome-title">ROSTER SQUAD MATRIX</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Manage squad registration and view advanced athletic profiles.</p>
          </div>
          {canEdit && (
            <button 
              className="luxury-btn luxury-btn-primary"
              onClick={() => {
                setActivePlayer(null);
                setModalType("player");
              }}
            >
              <Plus size={16} /> Register New Player
            </button>
          )}
        </div>

        {/* Sub tabs filtering */}
        <div className="tab-row">
          {roles.map(r => (
            <button 
              key={r.key}
              className={`sub-tab-btn ${squadFilter === r.key ? 'active' : ''}`}
              onClick={() => setSquadFilter(r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Players List Table */}
        <div className="luxury-card">
          <div className="luxury-table-container">
            <table className="luxury-table">
              <thead>
                <tr>
                  <th>Player Details</th>
                  <th>Role</th>
                  <th style={{ textAlign: 'center' }}>Matches</th>
                  <th style={{ textAlign: 'center' }}>Runs</th>
                  <th style={{ textAlign: 'center' }}>Avg</th>
                  <th style={{ textAlign: 'center' }}>S/R</th>
                  <th style={{ textAlign: 'center' }}>Wkts</th>
                  <th style={{ textAlign: 'center' }}>Econ</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.length === 0 ? (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                      No players registered in this squad category.
                    </td>
                  </tr>
                ) : (
                  filteredPlayers.map(p => {
                    const stats = getPlayerStats(p.id, activeTeam);
                    return (
                      <tr key={p.id}>
                        <td>
                          <div>
                            <strong style={{ color: 'var(--platinum)' }}>{p.name}</strong>
                            {p.isCaptain && <span className="luxury-badge luxury-badge-gold" style={{ marginLeft: '6px', padding: '0.1rem 0.4rem', fontSize: '0.65rem' }}>C</span>}
                            {p.isViceCaptain && <span className="luxury-badge luxury-badge-muted" style={{ marginLeft: '6px', padding: '0.1rem 0.4rem', fontSize: '0.65rem' }}>VC</span>}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {p.nationality} • {p.battingStyle} Bat • {p.bowlingStyle} Bowl
                          </div>
                        </td>
                        <td>{p.role}</td>
                        <td style={{ textAlign: 'center' }}>{stats.matchesPlayed}</td>
                        <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{stats.totalRuns}</td>
                        <td style={{ textAlign: 'center' }}>{stats.battingAvg}</td>
                        <td style={{ textAlign: 'center' }}>{stats.strikeRate}</td>
                        <td style={{ textAlign: 'center', color: 'var(--gold)', fontWeight: 'bold' }}>{stats.wickets}</td>
                        <td style={{ textAlign: 'center' }}>{stats.economy}</td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                            <button 
                              className="luxury-btn luxury-btn-secondary" 
                              style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}
                              onClick={() => {
                                setActivePlayer(p);
                                setModalType("profile");
                              }}
                            >
                              Stats Card
                            </button>
                            {canEdit && (
                              <>
                                <button 
                                  className="luxury-btn luxury-btn-secondary" 
                                  style={{ padding: '0.3rem' }}
                                  onClick={() => {
                                    setActivePlayer(p);
                                    setModalType("player");
                                  }}
                                >
                                  <Edit3 size={12} />
                                </button>
                                <button 
                                  className="luxury-btn luxury-btn-danger" 
                                  style={{ padding: '0.3rem' }}
                                  onClick={() => {
                                    if (confirm("Remove player and wipe stats?")) {
                                      const updated = [...teams];
                                      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
                                      updated[tIdx].players = updated[tIdx].players.filter(pl => pl.id !== p.id);
                                      saveTeams(updated);
                                      addToast("Player removed from roster", "info");
                                    }
                                  }}
                                >
                                  <Trash2 size={12} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // 4. MATCH CENTER & LIVE SIMULATOR
  function renderMatches() {
    if (!activeTeam) return <div>No match scheduled</div>;

    const completed = activeTeam.matches?.filter(m => m.status === "Completed") || [];
    const scheduled = activeTeam.matches?.filter(m => m.status === "Scheduled") || [];

    const handleSimulateMatch = (mId) => {
      // Automatic simulation for a scheduled match
      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      const match = updated[tIdx].matches.find(m => m.id === mId);
      
      if (!match || !updated[tIdx].players.length) {
        addToast("Register squad players before playing match!", "error");
        return;
      }

      // Quick random simulation
      const won = Math.random() > 0.45;
      match.result = won ? "Won" : "Lost";
      match.toss = updated[tIdx].name;
      match.decision = "Batting";
      match.status = "Completed";
      
      // Auto assign performances to random playing XI
      const squad = updated[tIdx].players;
      const playingXI = squad.slice(0, 11).map(p => p.id);
      match.playingXI = playingXI;
      match.opponentXI = ["Opponent 1", "Opponent 2", "Opponent 3", "Opponent 4"];
      
      // Select random POTM
      const potmPlayer = squad[Math.floor(Math.random() * squad.length)];
      match.playerOfMatch = potmPlayer.name;

      match.performances = playingXI.map(pId => {
        const playerObj = squad.find(s => s.id === pId);
        const isBowler = playerObj?.role.includes("Bowler");
        const runs = isBowler ? Math.floor(Math.random() * 12) : Math.floor(Math.random() * 85) + 5;
        const balls = runs + Math.floor(Math.random() * 10) + 1;
        const wickets = isBowler ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * 2);
        const runsConceded = isBowler ? Math.floor(Math.random() * 38) + 12 : 0;
        const overs = isBowler ? Number((Math.floor(Math.random() * 4) + Math.random().toFixed(1) * 0.1).toFixed(1)) : 0;
        
        return {
          playerId: pId,
          runs,
          balls,
          isOut: Math.random() > 0.4,
          wickets,
          runsConceded,
          overs: overs > 4 ? 4 : overs
        };
      });

      match.notes = `Simulated Match Result: Zstar executive tactical engine simulated a thrilling victory/loss. Standout performance by ${potmPlayer.name}.`;

      saveTeams(updated);
      addToast(`Simulated Match: ${activeTeam.id} ${match.result}!`, "success");
    };

    const renderMatchCard = (m) => {
      const isCompleted = m.status === "Completed";
      return (
        <div 
          key={m.id} 
          className="luxury-card mb-2" 
          style={{ 
            padding: '1.5rem',
            borderLeft: `4px solid ${isCompleted ? (m.result === 'Won' ? '#10b981' : '#e11d48') : 'var(--border-color)'}`
          }}
        >
          <div className="flex-between mb-2">
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 600 }}>
              Match {m.number} • {m.date} {m.time}
            </span>
            <span className={`luxury-badge ${isCompleted ? (m.result === 'Won' ? 'luxury-badge-emerald' : 'luxury-badge-ruby') : 'luxury-badge-muted'}`}>
              {isCompleted ? `${m.result}` : 'Upcoming'}
            </span>
          </div>

          <div className="flex-between flex-wrap gap-2">
            <div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                vs {m.opposition}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                📍 Stadium: {m.venue}
              </div>
            </div>
            
            <div className="flex-gap-2">
              {isCompleted ? (
                <>
                  <button 
                    className="luxury-btn luxury-btn-secondary" 
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                    onClick={() => {
                      setActiveMatch(m);
                      setModalType("match_details");
                    }}
                  >
                    Match Summary
                  </button>
                  {canEdit && (
                    <button 
                      className="luxury-btn luxury-btn-primary" 
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                      onClick={() => {
                        setActiveMatch(m);
                        setModalType("score");
                      }}
                    >
                      Edit Score
                    </button>
                  )}
                </>
              ) : (
                <>
                  {canEdit && (
                    <>
                      <button 
                        className="luxury-btn luxury-btn-primary simulator-panel" 
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                        onClick={() => handleSimulateMatch(m.id)}
                      >
                        <Play size={14} /> Quick Simulate
                      </button>
                      <button 
                        className="luxury-btn luxury-btn-primary" 
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                        onClick={() => {
                          setActiveMatch(m);
                          setModalType("score");
                        }}
                      >
                        Log Scorecard
                      </button>
                    </>
                  )}
                </>
              )}
              {canEdit && (
                <>
                  <button 
                    className="luxury-btn luxury-btn-secondary" 
                    style={{ padding: '0.4rem' }}
                    onClick={() => {
                      setActiveMatch(m);
                      setModalType("match");
                    }}
                  >
                    <Edit3 size={12} />
                  </button>
                  <button 
                    className="luxury-btn luxury-btn-danger" 
                    style={{ padding: '0.4rem' }}
                    onClick={() => {
                      if (confirm("Delete this fixture?")) {
                        const updated = [...teams];
                        const tIdx = updated.findIndex(t => t.id === activeTeam.id);
                        updated[tIdx].matches = updated[tIdx].matches.filter(match => match.id !== m.id);
                        saveTeams(updated);
                        addToast("Fixture deleted", "info");
                      }
                    }}
                  >
                    <Trash2 size={12} />
                  </button>
                </>
              )}
            </div>
          </div>

          {isCompleted && m.playerOfMatch && (
            <div style={{ marginTop: '0.8rem', paddingTop: '0.6rem', borderTop: '1px dashed rgba(255, 255, 255, 0.05)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              🌟 Player of the Match: <strong className="gold-text">{m.playerOfMatch}</strong>
            </div>
          )}
        </div>
      );
    };

    return (
      <div>
        <div className="luxury-header">
          <div>
            <h1 className="welcome-title">MATCH EXECUTIVE CENTER</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Track scheduled matches, record scores, and simulate fixtures.</p>
          </div>
          {canEdit && (
            <button 
              className="luxury-btn luxury-btn-primary"
              onClick={() => {
                setActiveMatch(null);
                setModalType("match");
              }}
            >
              <Plus size={16} /> Schedule Match
            </button>
          )}
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div>
            <h2 className="luxury-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🏆 Completed Battles</h2>
            {completed.length === 0 ? (
              <div className="luxury-card text-center" style={{ color: 'var(--text-muted)', padding: '3rem 1rem' }}>No completed fixtures recorded.</div>
            ) : completed.map(renderMatchCard)}
          </div>
          <div>
            <h2 className="luxury-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>📅 Scheduled Fixtures</h2>
            {scheduled.length === 0 ? (
              <div className="luxury-card text-center" style={{ color: 'var(--text-muted)', padding: '3rem 1rem' }}>No upcoming matches scheduled.</div>
            ) : scheduled.map(renderMatchCard)}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // 4.5 INSIGHTS & ANALYTICS ROOM
  // ============================================================
  
  function getMatchupData(batId, bowlId) {
    const batPlayer = teams.flatMap(t => t.players).find(p => p.id === batId);
    const bowlPlayer = teams.flatMap(t => t.players).find(p => p.id === bowlId);
    
    if (!batPlayer || !bowlPlayer) return null;
    
    // Deterministic stats based on charCodes of player names
    const hash = (batId + bowlId).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const runs = (hash * 37) % 160 + 25;
    const balls = Math.floor(runs * (1.1 + (hash % 6) * 0.08)) + 12;
    const strikeRate = ((runs / balls) * 100).toFixed(1);
    const dismissals = (hash % 5);
    const dots = Math.floor(balls * 0.35) + (hash % 8);
    const fours = Math.floor(runs * 0.1) + (hash % 4);
    const sixes = Math.floor(runs * 0.04) + (hash % 3);
    
    return {
      batName: batPlayer.name,
      bowlName: bowlPlayer.name,
      runs,
      balls,
      strikeRate,
      dismissals,
      dots,
      fours,
      sixes,
      dotPercent: ((dots / balls) * 100).toFixed(1)
    };
  };

  function renderWagonWheel(playerId, label = "Wagon Wheel Analytics") {
    const seed = (playerId || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const lineCount = 14 + (seed % 10);
    const lines = [];
    
    for (let i = 0; i < lineCount; i++) {
      const angle = ((seed * (i + 1) * 31) % 360) * Math.PI / 180;
      const lengthMult = 0.45 + ((seed * (i + 2) * 17) % 55) / 100;
      const shotType = (seed * (i + 3) * 13) % 4; // 0: single, 1: double, 2: four, 3: six
      
      const startX = 150;
      const startY = 110;
      const endX = startX + Math.sin(angle) * 95 * lengthMult;
      const endY = startY - Math.cos(angle) * 75 * lengthMult;
      
      let strokeColor = "rgba(255,255,255,0.3)";
      let strokeWidth = 1;
      
      if (shotType === 2) {
        strokeColor = "#eab308"; // Gold for 4
        strokeWidth = 2;
      } else if (shotType === 3) {
        strokeColor = "#06b6d4"; // Cyan for 6
        strokeWidth = 3;
      } else {
        strokeColor = "rgba(255,255,255,0.45)"; // 1s/2s
        strokeWidth = 1.2;
      }
      
      lines.push(
        <line key={i} x1={startX} y1={startY} x2={endX} y2={endY} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      );
    }

    return (
      <div className="luxury-card" style={{ padding: '1.25rem', textAlign: 'center', background: 'rgba(4,5,10,0.5)' }}>
        <h4 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="300" height="220" style={{ background: '#092415', borderRadius: '50% 50% 50% 50% / 12% 12% 12% 12%', border: '2px solid rgba(255,255,255,0.05)' }}>
            <ellipse cx="150" cy="110" rx="140" ry="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3,3" />
            <ellipse cx="150" cy="110" rx="120" ry="80" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <rect x="145" y="90" width="10" height="40" fill="rgba(217, 119, 6, 0.3)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            
            <text x="150" y="25" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="middle">STRAIGHT</text>
            <text x="150" y="205" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="middle">BEHIND</text>
            <text x="35" y="113" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="start">OFF SIDE</text>
            <text x="265" y="113" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="end">LEG SIDE</text>
            
            <circle cx="150" cy="110" r="2" fill="#fff" />
            {lines}
          </svg>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.8rem', fontSize: '0.72rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '12px', height: '3px', background: 'rgba(255,255,255,0.45)', display: 'inline-block' }}></span> 1s/2s</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '12px', height: '3px', background: '#eab308', display: 'inline-block' }}></span> 4s</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '12px', height: '3px', background: '#06b6d4', display: 'inline-block' }}></span> 6s</span>
        </div>
      </div>
    );
  };

  function renderPitchMap(playerId, label = "Bowler Pitch Map") {
    const seed = (playerId || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const ballCount = 10 + (seed % 6);
    const balls = [];
    
    for (let i = 0; i < ballCount; i++) {
      const x = 30 + ((seed * (i + 1) * 19) % 90);
      const y = 20 + ((seed * (i + 2) * 37) % 170);
      
      let color = "#ef4444"; // Red for Short
      if (y >= 60 && y < 125) {
        color = "#10b981"; // Green for Good
      } else if (y >= 125 && y < 165) {
        color = "#3b82f6"; // Blue for Full
      } else if (y >= 165) {
        color = "#eab308"; // Gold for Yorker
      }
      
      balls.push(
        <circle key={i} cx={x} cy={y} r="5" fill={color} stroke="#fff" strokeWidth="1" />
      );
    }

    return (
      <div className="luxury-card" style={{ padding: '1.25rem', textAlign: 'center', background: 'rgba(4,5,10,0.5)' }}>
        <h4 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <svg width="150" height="220" style={{ background: '#7c2d12', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <rect x="0" y="0" width="150" height="220" fill="#15803d" opacity="0.18" />
            <line x1="0" y1="15" x2="150" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <line x1="0" y1="205" x2="150" y2="205" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            
            <line x1="65" y1="13" x2="85" y2="13" stroke="#fff" strokeWidth="2" />
            <line x1="65" y1="207" x2="85" y2="207" stroke="#fff" strokeWidth="2" />
            
            <line x1="0" y1="60" x2="150" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="0" y1="125" x2="150" y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="0" y1="165" x2="150" y2="165" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2,2" />
            
            <text x="10" y="45" fill="rgba(255,255,255,0.25)" fontSize="8">SHORT</text>
            <text x="10" y="95" fill="rgba(255,255,255,0.25)" fontSize="8">GOOD</text>
            <text x="10" y="145" fill="rgba(255,255,255,0.25)" fontSize="8">FULL</text>
            <text x="10" y="190" fill="rgba(255,255,255,0.25)" fontSize="8">YORKER</text>
            {balls}
          </svg>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', marginTop: '0.8rem', fontSize: '0.65rem', textAlign: 'left' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span> Short</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span> Good Length</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }}></span> Full</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }}></span> Yorker</span>
        </div>
      </div>
    );
  };

  function getPhaseMultiplier(phase, role) {
    // Return multipliers for [runs, balls, wickets, economy] depending on phase
    if (role === "batting") {
      switch (phase) {
        case "powerplay": return [0.3, 0.28, 1.25]; // SR increases, runs decent
        case "middle": return [0.45, 0.5, 0.9]; // SR stable, runs bulk
        case "death": return [0.25, 0.22, 1.5]; // SR highest, risk high
        default: return [1.0, 1.0, 1.0];
      }
    } else { // bowling
      switch (phase) {
        case "powerplay": return [0.25, 6.8]; // wickets, economy
        case "middle": return [0.45, 7.2];
        case "death": return [0.3, 9.5];
        default: return [1.0, 1.0];
      }
    }
  };

  function renderAnalytics() {
    // 1. Compile all players across all teams
    const playerMap = {};
    teams.forEach(t => {
      t.players.forEach(p => {
        playerMap[p.id] = {
          id: p.id,
          name: p.name,
          teamId: t.id,
          teamName: t.name,
          teamLogo: t.logo,
          role: p.role,
          
          matches: 0,
          runs: 0,
          balls: 0,
          outs: 0,
          wickets: 0,
          runsConceded: 0,
          ballsBowled: 0,
          
          highestScore: 0,
          highestScoreBalls: 0,
          highestScoreOut: true,
          highestScoreOpp: "",
          highestScoreDate: "",
          
          bestBowlingWickets: 0,
          bestBowlingRuns: 0,
          bestBowlingOvers: 0,
          bestBowlingOpp: "",
          bestBowlingDate: "",
          
          hundreds: 0,
          fifties: 0,
          sixes: 0,
          fours: 0,
          boundaries: 0
        };
      });
    });

    // Deterministic sixes/fours generator based on runs & playerId
    function getInningsBoundaries(playerId, runs) {
      if (runs <= 0) return { sixes: 0, fours: 0 };
      let hash = 0;
      for (let i = 0; i < playerId.length; i++) {
        hash += playerId.charCodeAt(i);
      }
      const powerIndex = (hash % 3) + 1; // 1, 2, or 3
      let sixes = 0;
      if (runs >= 6) {
        sixes = Math.floor((runs * 0.05 * powerIndex) / 6);
      }
      let remainingRuns = runs - (sixes * 6);
      let fours = 0;
      if (remainingRuns >= 4) {
        fours = Math.floor(remainingRuns / 4);
      }
      if (sixes * 6 + fours * 4 > runs) {
        sixes = 0;
        fours = Math.floor(runs / 4);
      }
      return { sixes, fours, boundaries: sixes + fours };
    }

    // 2. Accumulate match performance data
    teams.forEach(t => {
      (t.matches || []).forEach(m => {
        if (m.status !== 'Completed') return;
        
        // Mark players as played in match
        const playedInMatch = new Set();
        if (m.playingXI) {
          m.playingXI.forEach(pId => playedInMatch.add(pId));
        }
        if (m.performances) {
          m.performances.forEach(perf => playedInMatch.add(perf.playerId));
        }
        
        playedInMatch.forEach(pId => {
          if (playerMap[pId]) {
            playerMap[pId].matches++;
          }
        });
        
        // Record individual performances
        if (m.performances) {
          m.performances.forEach(perf => {
            const pId = perf.playerId;
            const player = playerMap[pId];
            if (!player) return;
            
            const runs = Number(perf.runs || 0);
            const balls = Number(perf.balls || 0);
            const wickets = Number(perf.wickets || 0);
            const runsConceded = Number(perf.runsConceded || 0);
            const overs = Number(perf.overs || 0);
            const isOut = !!perf.isOut;
            
            // Batting stats
            player.runs += runs;
            player.balls += balls;
            if (isOut) player.outs++;
            
            if (runs >= 100) {
              player.hundreds++;
            } else if (runs >= 50) {
              player.fifties++;
            }
            
            if (runs > player.highestScore) {
              player.highestScore = runs;
              player.highestScoreBalls = balls;
              player.highestScoreOut = isOut;
              player.highestScoreOpp = m.opposition;
              player.highestScoreDate = m.date;
            } else if (runs === player.highestScore) {
              if (balls < player.highestScoreBalls) {
                player.highestScoreBalls = balls;
                player.highestScoreOut = isOut;
                player.highestScoreOpp = m.opposition;
                player.highestScoreDate = m.date;
              }
            }
            
            const b = getInningsBoundaries(pId, runs);
            player.sixes += b.sixes;
            player.fours += b.fours;
            player.boundaries += b.boundaries;
            
            // Bowling stats
            player.wickets += wickets;
            player.runsConceded += runsConceded;
            
            const wholeOvers = Math.floor(overs);
            const partOvers = Math.round((overs - wholeOvers) * 10);
            const matchBallsBowled = (wholeOvers * 6) + (partOvers > 6 ? 6 : partOvers);
            player.ballsBowled += matchBallsBowled;
            
            if (wickets > player.bestBowlingWickets) {
              player.bestBowlingWickets = wickets;
              player.bestBowlingRuns = runsConceded;
              player.bestBowlingOvers = overs;
              player.bestBowlingOpp = m.opposition;
              player.bestBowlingDate = m.date;
            } else if (wickets === player.bestBowlingWickets && wickets > 0) {
              if (runsConceded < player.bestBowlingRuns) {
                player.bestBowlingRuns = runsConceded;
                player.bestBowlingOvers = overs;
                player.bestBowlingOpp = m.opposition;
                player.bestBowlingDate = m.date;
              }
            }
          });
        }
      });
    });

    // Convert playerMap to list and enrich computed rates
    const allPlayersList = Object.values(playerMap).map(p => {
      const strikeRate = p.balls > 0 ? ((p.runs / p.balls) * 100).toFixed(2) : "0.00";
      const battingAvg = p.outs > 0 ? (p.runs / p.outs).toFixed(2) : (p.runs > 0 ? p.runs.toFixed(2) : "0.00");
      const bowlingAvg = p.wickets > 0 ? (p.runsConceded / p.wickets).toFixed(2) : "99.99";
      const economy = p.ballsBowled > 0 ? ((p.runsConceded / p.ballsBowled) * 6).toFixed(2) : "0.00";
      
      const oversStr = `${Math.floor(p.ballsBowled / 6)}.${p.ballsBowled % 6}`;
      
      return {
        ...p,
        strikeRateNum: Number(strikeRate),
        strikeRateStr: strikeRate,
        battingAvgNum: Number(battingAvg),
        battingAvgStr: battingAvg,
        bowlingAvgNum: Number(bowlingAvg),
        bowlingAvgStr: p.wickets > 0 ? bowlingAvg : "N/A",
        economyNum: Number(economy),
        economyStr: economy,
        oversStr
      };
    });

    // 3. Generate individual sorted leaderboard datasets
    // Orange Cap (Runs leader)
    const orangeCapData = [...allPlayersList]
      .filter(p => p.runs > 0)
      .sort((a, b) => b.runs - a.runs || b.strikeRateNum - a.strikeRateNum)
      .slice(0, 10);

    // Purple Cap (Wickets leader)
    const purpleCapData = [...allPlayersList]
      .filter(p => p.wickets > 0)
      .sort((a, b) => b.wickets - a.wickets || a.economyNum - b.economyNum)
      .slice(0, 10);

    // Highest Scores (Single innings)
    const highestScoresData = [...allPlayersList]
      .filter(p => p.highestScore > 0)
      .sort((a, b) => b.highestScore - a.highestScore || a.highestScoreBalls - b.highestScoreBalls)
      .slice(0, 5);

    // Best Bowling Figures (Single innings)
    const bestBowlingData = [...allPlayersList]
      .filter(p => p.bestBowlingWickets > 0)
      .sort((a, b) => b.bestBowlingWickets - a.bestBowlingWickets || a.bestBowlingRuns - b.bestBowlingRuns)
      .slice(0, 5);

    // Batting Average
    const battingAvgData = [...allPlayersList]
      .filter(p => p.runs >= 10) // minimum runs to qualify
      .sort((a, b) => b.battingAvgNum - a.battingAvgNum || b.runs - a.runs)
      .slice(0, 5);

    // Bowling Average
    const bowlingAvgData = [...allPlayersList]
      .filter(p => p.wickets > 0)
      .sort((a, b) => a.bowlingAvgNum - b.bowlingAvgNum || b.wickets - a.wickets)
      .slice(0, 5);

    // Most Hundreds
    const hundredsData = [...allPlayersList]
      .filter(p => p.hundreds > 0)
      .sort((a, b) => b.hundreds - a.hundreds || b.runs - a.runs)
      .slice(0, 5);

    // Most Fifties
    const fiftiesData = [...allPlayersList]
      .filter(p => p.fifties > 0)
      .sort((a, b) => b.fifties - a.fifties || b.runs - a.runs)
      .slice(0, 5);

    // Most Economical Bowlers
    const economyData = [...allPlayersList]
      .filter(p => p.ballsBowled >= 6) // minimum 1 over
      .sort((a, b) => a.economyNum - b.economyNum || b.ballsBowled - a.ballsBowled)
      .slice(0, 5);

    // Sixes Leaders
    const sixesData = [...allPlayersList]
      .filter(p => p.sixes > 0)
      .sort((a, b) => b.sixes - a.sixes || b.runs - a.runs)
      .slice(0, 5);

    // Fours Leaders
    const foursData = [...allPlayersList]
      .filter(p => p.fours > 0)
      .sort((a, b) => b.fours - a.fours || b.runs - a.runs)
      .slice(0, 5);

    // Total Boundaries
    const boundariesData = [...allPlayersList]
      .filter(p => p.boundaries > 0)
      .sort((a, b) => b.boundaries - a.boundaries || b.runs - a.runs)
      .slice(0, 5);

    // Helper table renderer
    function renderStatsTable(title, headers, data, keyFields, icon = "📊") {
      return (
        <div className="luxury-card" style={{ padding: '1.25rem' }}>
          <h3 className="luxury-title" style={{ fontSize: '1.1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{icon}</span> {title}
          </h3>
          <div className="luxury-table-container">
            <table className="luxury-table" style={{ fontSize: '0.82rem' }}>
              <thead>
                <tr>
                  <th style={{ width: '45px', textAlign: 'center' }}>Pos</th>
                  <th>Player</th>
                  <th>Team</th>
                  {headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'center' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={headers.length + 3} style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
                      No stats recorded yet.
                    </td>
                  </tr>
                ) : (
                  data.map((p, idx) => (
                    <tr key={p.id}>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`luxury-badge ${idx === 0 ? 'luxury-badge-gold' : idx === 1 ? 'luxury-badge-muted' : 'luxury-badge-ruby'}`} style={{ padding: '0.1rem 0.35rem', fontSize: '0.7rem' }}>
                          #{idx + 1}
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: 'var(--text-primary)' }}>{p.name}</strong>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{p.role}</div>
                      </td>
                      <td>
                        <span style={{ fontSize: '1.1rem', marginRight: '3px' }}>{p.teamLogo}</span>
                        <strong style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{p.teamId}</strong>
                      </td>
                      {keyFields.map((field, i) => (
                        <td key={i} style={{ textAlign: 'center', fontWeight: i === 0 ? 'bold' : 'normal', color: i === 0 ? 'var(--royal-blue)' : 'inherit' }}>
                          {typeof field === 'function' ? field(p) : p[field]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    // Set default sub-tab if needed
    const currentSubTab = ['batting', 'bowling', 'power'].includes(analyticsSubTab) ? analyticsSubTab : 'batting';

    return (
      <div>
        <div className="luxury-header">
          <div>
            <h1 className="welcome-title">RECORDS & LEADERBOARD SYSTEM</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Season totals, milestone analytics, averages, and power hitting registers.</p>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex-gap-2 flex-wrap mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <button 
            className={`luxury-btn ${currentSubTab === 'batting' ? 'luxury-btn-primary' : 'luxury-btn-secondary'}`}
            onClick={() => setAnalyticsSubTab("batting")}
          >
            🏏 Batting Stats
          </button>
          <button 
            className={`luxury-btn ${currentSubTab === 'bowling' ? 'luxury-btn-primary' : 'luxury-btn-secondary'}`}
            onClick={() => setAnalyticsSubTab("bowling")}
          >
            🎳 Bowling Stats
          </button>
          <button 
            className={`luxury-btn ${currentSubTab === 'power' ? 'luxury-btn-primary' : 'luxury-btn-secondary'}`}
            onClick={() => setAnalyticsSubTab("power")}
          >
            💥 Power Hitting
          </button>
        </div>

        {/* Render Tab Contents */}
        {currentSubTab === 'batting' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="grid-2">
              {renderStatsTable("Orange Cap (Most Runs)", ["Runs", "Balls", "S/R", "Avg"], orangeCapData, ["runs", "balls", "strikeRateStr", "battingAvgStr"], "👑")}
              {renderStatsTable("Highest Scores", ["Score", "Balls", "Opponent", "Date"], highestScoresData, [p => `${p.highestScore}${p.highestScoreOut ? "" : "*"}`, "highestScoreBalls", "highestScoreOpp", "highestScoreDate"], "🔥")}
            </div>
            
            <div className="grid-3">
              {renderStatsTable("Batting Average (Min 10 runs)", ["Average", "Runs", "Outs"], battingAvgData, ["battingAvgStr", "runs", "outs"], "📈")}
              {renderStatsTable("Most Hundreds (100+)", ["100s", "Runs", "Matches"], hundredsData, ["hundreds", "runs", "matches"], "💯")}
              {renderStatsTable("Most Fifties (50+)", ["50s", "Runs", "Matches"], fiftiesData, ["fifties", "runs", "matches"], "🏏")}
            </div>
          </div>
        )}

        {currentSubTab === 'bowling' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="grid-2">
              {renderStatsTable("Purple Cap (Most Wickets)", ["Wickets", "Runs Conc.", "Overs", "Eco"], purpleCapData, ["wickets", "runsConceded", "oversStr", "economyStr"], "👑")}
              {renderStatsTable("Best Bowling Figures", ["Figures", "Overs", "Opponent", "Date"], bestBowlingData, [p => `${p.bestBowlingWickets}/${p.bestBowlingRuns}`, "bestBowlingOvers", "bestBowlingOpp", "bestBowlingDate"], "🎯")}
            </div>

            <div className="grid-2">
              {renderStatsTable("Bowling Average (Lowest)", ["Average", "Wkts", "Runs Conc."], bowlingAvgData, ["bowlingAvgStr", "wickets", "runsConceded"], "📈")}
              {renderStatsTable("Most Economical Bowlers", ["Economy", "Overs", "Runs Conc."], economyData, ["economyStr", "oversStr", "runsConceded"], "⏱️")}
            </div>
          </div>
        )}

        {currentSubTab === 'power' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="grid-3">
              {renderStatsTable("Sixes Leaders", ["Sixes", "Runs", "Matches"], sixesData, ["sixes", "runs", "matches"], "🚀")}
              {renderStatsTable("Fours Leaders", ["Fours", "Runs", "Matches"], foursData, ["fours", "runs", "matches"], "⚡")}
              {renderStatsTable("Total Boundaries", ["Boundaries", "4s + 6s", "Runs"], boundariesData, ["boundaries", p => `${p.fours} + ${p.sixes}`, "runs"], "💥")}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 5. GLOBAL ADMIN CONSOLE
  function renderAdminConsole() {
    // Collect all matches from all teams
    const allMatches = teams.flatMap(t => 
      (t.matches || []).map(m => ({ 
        ...m, 
        parentTeamId: t.id, 
        parentTeamName: t.name, 
        parentTeamLogo: t.logo 
      }))
    );

    // Sort matches by date ascending
    allMatches.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Filter and search
    const filteredMatches = allMatches.filter(m => {
      const matchSearchLower = adminMatchSearch.toLowerCase();
      const matchesSearch = m.opposition.toLowerCase().includes(matchSearchLower) || 
                            m.parentTeamName.toLowerCase().includes(matchSearchLower) ||
                            m.venue.toLowerCase().includes(matchSearchLower);
      
      if (adminMatchFilter === "completed") {
        return m.status === "Completed" && matchesSearch;
      }
      if (adminMatchFilter === "scheduled") {
        return m.status === "Scheduled" && matchesSearch;
      }
      return matchesSearch;
    });

    return (
      <div>
        <div className="luxury-header">
          <div>
            <h1 className="welcome-title">SYSTEM ADMINISTRATION</h1>
            <p style={{ color: 'var(--text-secondary)' }}>Register new franchises, schedule matches globally, record scorecards, or reset the databases.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <select 
              className="luxury-input" 
              style={{ width: 'auto', padding: '0.4rem 1rem', fontSize: '0.88rem' }}
              value=""
              onChange={(e) => {
                const targetTeam = teams.find(t => t.id === e.target.value);
                if (targetTeam) {
                  setSelectedTeamId(targetTeam.id);
                  setActiveMatch(null);
                  setModalType("match");
                }
              }}
            >
              <option value="" disabled>-- Schedule Match For Team --</option>
              {teams.map(t => (
                <option key={t.id} value={t.id}>{t.logo} {t.name}</option>
              ))}
            </select>
            <button 
              className="luxury-btn luxury-btn-primary"
              onClick={() => setModalType("create_team")}
            >
              + Create New Franchise
            </button>
          </div>
        </div>

        {/* SECTION 1: Franchise Registry */}
        <div className="luxury-card mb-3">
          <h2 className="luxury-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>👥 Franchise Credentials Registry</h2>
          <div className="luxury-table-container">
            <table className="luxury-table">
              <thead>
                <tr>
                  <th>Team Logo / ID</th>
                  <th>Full Name</th>
                  <th>Secret Login Code</th>
                  <th style={{ textAlign: 'center' }}>Squad Count</th>
                  <th style={{ textAlign: 'center' }}>Matches Tracked</th>
                  <th style={{ textAlign: 'right' }}>Controls</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(t => (
                  <tr key={t.id}>
                    <td>
                      <span style={{ fontSize: '1.5rem', marginRight: '6px' }}>{t.logo}</span>
                      <strong>{t.id}</strong>
                    </td>
                    <td>{t.name}</td>
                    <td>
                      <code style={{ background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--gold)', letterSpacing: '0.04em' }}>
                        {t.password}
                      </code>
                    </td>
                    <td style={{ textAlign: 'center' }}>{t.players.length}</td>
                    <td style={{ textAlign: 'center' }}>{t.matches.length}</td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                        <button 
                          className="luxury-btn luxury-btn-secondary" 
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                          onClick={() => {
                            const newPass = prompt(`Set new secret password for ${t.name}:`, t.password);
                            if (newPass) {
                              const updated = [...teams];
                              updated.find(tm => tm.id === t.id).password = newPass;
                              saveTeams(updated);
                              addToast("Franchise password updated", "success");
                            }
                          }}
                        >
                          Reset Pass
                        </button>
                        <button 
                          className="luxury-btn luxury-btn-danger"
                          style={{ padding: '0.3rem' }}
                          onClick={() => {
                            if (confirm(`Completely delete the ${t.name} franchise from ZPL?`)) {
                              const updated = teams.filter(tm => tm.id !== t.id);
                              saveTeams(updated);
                              if (selectedTeamId === t.id) {
                                  setSelectedTeamId(updated[0]?.id || "");
                              }
                              addToast("Franchise deleted", "info");
                            }
                          }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 2: Universal Fixtures & Match Registry */}
        <div className="luxury-card mb-3">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <h2 className="luxury-title" style={{ fontSize: '1.3rem', margin: 0 }}>🛡️ Universal Match & Scorecard Management</h2>
            
            {/* Filter controls */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                className="luxury-input" 
                style={{ width: '220px', padding: '0.35rem 0.75rem', fontSize: '0.85rem' }} 
                placeholder="Search team, venue or opposition..." 
                value={adminMatchSearch} 
                onChange={(e) => setAdminMatchSearch(e.target.value)} 
              />
              
              <div className="tab-pill-deck" style={{ margin: 0, padding: '2px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                <button 
                  className={`tab-pill-btn ${adminMatchFilter === 'all' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setAdminMatchFilter("all")}
                >
                  All ({allMatches.length})
                </button>
                <button 
                  className={`tab-pill-btn ${adminMatchFilter === 'completed' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setAdminMatchFilter("completed")}
                >
                  Completed ({allMatches.filter(m => m.status === 'Completed').length})
                </button>
                <button 
                  className={`tab-pill-btn ${adminMatchFilter === 'scheduled' ? 'active' : ''}`}
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setAdminMatchFilter("scheduled")}
                >
                  Scheduled ({allMatches.filter(m => m.status === 'Scheduled').length})
                </button>
              </div>
            </div>
          </div>

          <div className="luxury-table-container" style={{ maxHeight: '420px', overflowY: 'auto' }}>
            {filteredMatches.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No matches found matching the specified filters or search queries.
              </div>
            ) : (
              <table className="luxury-table">
                <thead>
                  <tr>
                    <th>Franchise Team</th>
                    <th style={{ textAlign: 'center' }}>Match No.</th>
                    <th>Opposition</th>
                    <th>Schedule Date & Time</th>
                    <th>Venue Arena</th>
                    <th style={{ textAlign: 'center' }}>Status</th>
                    <th style={{ textAlign: 'right' }}>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMatches.map(m => (
                    <tr key={`${m.parentTeamId}_${m.id}`}>
                      <td>
                        <span style={{ fontSize: '1.25rem', marginRight: '5px' }}>{m.parentTeamLogo}</span>
                        <strong>{m.parentTeamName}</strong>
                      </td>
                      <td style={{ textAlign: 'center' }}>{m.number}</td>
                      <td>vs <strong>{m.opposition}</strong></td>
                      <td>{m.date} @ {m.time}</td>
                      <td>{m.venue}</td>
                      <td style={{ textAlign: 'center' }}>
                        {m.status === 'Completed' ? (
                          <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            Completed
                          </span>
                        ) : (
                          <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                            Scheduled
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                          {m.status === 'Completed' ? (
                            <>
                              <button 
                                className="luxury-btn luxury-btn-primary" 
                                style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                                onClick={() => {
                                  setSelectedTeamId(m.parentTeamId);
                                  setActiveMatch(m);
                                  setModalType("match_details");
                                }}
                              >
                                View Card
                              </button>
                              <button 
                                className="luxury-btn luxury-btn-secondary" 
                                style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                                onClick={() => {
                                  setSelectedTeamId(m.parentTeamId);
                                  setActiveMatch(m);
                                  setModalType("score");
                                }}
                              >
                                Edit Score
                              </button>
                            </>
                          ) : (
                            <>
                              <button 
                                className="luxury-btn luxury-btn-primary" 
                                style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem', background: 'rgba(217, 119, 6, 0.1)', color: '#d97706', border: '1px solid #d97706' }}
                                onClick={() => {
                                  setSelectedTeamId(m.parentTeamId);
                                  setActiveMatch(m);
                                  setModalType("score");
                                }}
                              >
                                Log Score
                              </button>
                              <button 
                                className="luxury-btn luxury-btn-secondary" 
                                style={{ padding: '0.3rem 0.6rem', fontSize: '0.78rem' }}
                                onClick={() => {
                                  setSelectedTeamId(m.parentTeamId);
                                  setActiveMatch(m);
                                  setModalType("match");
                                }}
                              >
                                Edit Fixture
                              </button>
                            </>
                          )}
                          <button 
                            className="luxury-btn luxury-btn-danger"
                            style={{ padding: '0.3rem' }}
                            onClick={() => handleAdminDeleteMatch(m.parentTeamId, m.id)}
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* System Reset */}
        <div className="luxury-card" style={{ border: '1px solid rgba(225, 29, 72, 0.25)', padding: '2rem' }}>
          <h2 className="luxury-title" style={{ fontSize: '1.2rem', color: '#fda4af' }}>⚠️ System Reset Room</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Warning: This action will restore all team information, squad listings, coaching details, sponsors, and scored matches back to default seed records. All custom entries will be lost.
          </p>
          <button 
            className="luxury-btn luxury-btn-danger"
            onClick={() => {
              if (confirm("Confirm entire system data wipe?")) {
                setTeams(SEED_TEAMS);
                localStorage.setItem("zpl_luxury_teams", JSON.stringify(SEED_TEAMS));
                setCurrentUser(null);
                sessionStorage.removeItem("zpl_luxury_user");
                setActiveTab("dashboard");
                addToast("Database restored to factory default", "info");
              }
            }}
          >
            Reset Database to Factory Defaults
          </button>
        </div>
      </div>
    );
  }

  // 6. LOGIN VIEW
  function renderLogin() {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="luxury-card" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem' }}>
          <div className="text-center mb-3">
            <div style={{ fontSize: '3rem' }}>🏏</div>
            <h2 className="luxury-title" style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>EXECUTIVE PORTAL</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Authorized credentials required for secure database modification</p>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <div className="luxury-input-group">
              <label>Select Authorization Level</label>
              <select 
                className="luxury-input"
                value={loginRole}
                onChange={(e) => setLoginRole(e.target.value)}
              >
                <option value="team">Franchise Staff Login</option>
                <option value="admin">Global Tournament Board</option>
              </select>
            </div>

            {loginRole === "team" ? (
              <div className="luxury-input-group">
                <label>Select Franchise Team</label>
                <select 
                  className="luxury-input"
                  value={loginTeamId}
                  onChange={(e) => setLoginTeamId(e.target.value)}
                >
                  {teams.map(t => (
                    <option key={t.id} value={t.id}>{t.logo} {t.name}</option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="luxury-input-group">
              <label>Security Keyphrase</label>
              <input 
                type="password"
                className="luxury-input"
                placeholder="🔑 Enter keyphrase code"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            {loginError && (
              <div style={{ color: '#fda4af', fontSize: '0.82rem', margin: '0.5rem 0', textAlign: 'center' }}>
                {loginError}
              </div>
            )}

            <button type="submit" className="luxury-btn luxury-btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Verify Authorization
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '0.8rem', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            <strong>Demo Keyphrases:</strong><br />
            • Admin: <code>admin123</code><br />
            • Royal Challengers Bengaluru: <code>RCB18</code><br />
            • Mumbai Indians: <code>MI45</code><br />
            • Chennai Super Kings: <code>CSK7</code>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // MODAL SWITCH BOARD
  // ============================================================
  function renderModalContainer() {
    return (
      <div className="luxury-modal-overlay" onClick={(e) => { if (e.target.className === 'luxury-modal-overlay') setModalType(null); }}>
        <div className={`luxury-modal ${['score', 'profile', 'match_details'].includes(modalType) ? 'luxury-modal-lg' : ''}`}>
          
          {modalType === 'player' && renderPlayerModal()}
          {modalType === 'staff' && renderStaffModal()}
          {modalType === 'sponsor' && renderSponsorModal()}
          {modalType === 'match' && renderMatchModal()}
          {modalType === 'score' && renderScorecardModal()}
          {modalType === 'profile' && renderPlayerProfileModal()}
          {modalType === 'config' && renderTeamConfigModal()}
          {modalType === 'password' && renderChangePasswordModal()}
          {modalType === 'create_team' && renderCreateTeamModal()}
          {modalType === 'match_details' && renderMatchDetailsModal()}

        </div>
      </div>
    );
  }

  // A. Add/Edit Player Modal
  function renderPlayerModal() {
    const isEdit = !!activePlayer;
    
    const handlePlayerSubmit = (e) => {
      e.preventDefault();
      const name = e.target.p_name.value.trim();
      const nationality = e.target.p_nat.value;
      const role = e.target.p_role.value;
      const battingStyle = e.target.p_bat.value;
      const bowlingStyle = e.target.p_bowl.value.trim() || "-";
      const isCaptain = e.target.p_cap.checked;
      const isViceCaptain = e.target.p_vcap.checked;

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);

      if (isCaptain) {
        updated[tIdx].players.forEach(p => p.isCaptain = false);
      }
      if (isViceCaptain) {
        updated[tIdx].players.forEach(p => p.isViceCaptain = false);
      }

      if (isEdit) {
        const pIdx = updated[tIdx].players.findIndex(p => p.id === activePlayer.id);
        updated[tIdx].players[pIdx] = {
          ...activePlayer,
          name, nationality, role, battingStyle, bowlingStyle, isCaptain, isViceCaptain
        };
        addToast("Player squad details saved", "success");
      } else {
        const id = `${activeTeam.id.toLowerCase()}_p_${Date.now()}`;
        updated[tIdx].players.push({
          id, name, nationality, role, battingStyle, bowlingStyle, isCaptain, isViceCaptain
        });
        addToast("New player registered in squad", "success");
      }

      saveTeams(updated);
      setModalType(null);
    };

    return (
      <form onSubmit={handlePlayerSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>
          {isEdit ? '✏️ EDIT ATHLETIC PROFILE' : '🏆 SQUAD ATHLETE REGISTRATION'}
        </h2>
        
        <div className="luxury-input-group">
          <label>Player Full Name</label>
          <input type="text" name="p_name" className="luxury-input" defaultValue={activePlayer?.name || ''} placeholder="e.g. V. Kohli" required />
        </div>

        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Nationality origin</label>
            <select name="p_nat" className="luxury-input" defaultValue={activePlayer?.nationality || 'Indian'}>
              <option value="Indian">Indian Origin</option>
              <option value="International">International</option>
            </select>
          </div>
          <div className="luxury-input-group">
            <label>Tactical Roster Role</label>
            <select name="p_role" className="luxury-input" defaultValue={activePlayer?.role || 'Batsman'}>
              <option value="Batsman">Batsman</option>
              <option value="All-rounder">All-rounder</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
              <option value="Spin Bowler">Spin Bowler</option>
              <option value="Fast Bowler">Fast Bowler</option>
            </select>
          </div>
        </div>

        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Batting Hand Style</label>
            <select name="p_bat" className="luxury-input" defaultValue={activePlayer?.battingStyle || 'Right hand'}>
              <option value="Right hand">Right Hand Bat</option>
              <option value="Left hand">Left Hand Bat</option>
            </select>
          </div>
          <div className="luxury-input-group">
            <label>Bowling Deliveries Style</label>
            <input type="text" name="p_bowl" className="luxury-input" defaultValue={activePlayer?.bowlingStyle || ''} placeholder="e.g. Spin, Fast, or -" />
          </div>
        </div>

        <div className="flex-gap-2" style={{ margin: '1rem 0' }}>
          <div className="flex-gap-2">
            <input type="checkbox" id="p_cap" name="p_cap" defaultChecked={activePlayer?.isCaptain || false} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="p_cap" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Team Captain</label>
          </div>
          <div className="flex-gap-2" style={{ marginLeft: '1.5rem' }}>
            <input type="checkbox" id="p_vcap" name="p_vcap" defaultChecked={activePlayer?.isViceCaptain || false} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="p_vcap" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Vice Captain</label>
          </div>
        </div>

        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Save Profile</button>
        </div>
      </form>
    );
  }

  // B. Add Staff Member Modal
  function renderStaffModal() {
    const handleStaffSubmit = (e) => {
      e.preventDefault();
      const name = e.target.s_name.value.trim();
      const role = e.target.s_role.value.trim();

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      updated[tIdx][activeStaffKey].push({ name, role });

      saveTeams(updated);
      setModalType(null);
      addToast("Staff member appointed", "success");
    };

    return (
      <form onSubmit={handleStaffSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.25rem' }}>
          🧠 APPOINT STAFF: {activeStaffTitle}
        </h2>
        <div className="luxury-input-group">
          <label>Full Professional Name</label>
          <input type="text" name="s_name" className="luxury-input" placeholder="e.g. Mr. Rahul Dravid" required />
        </div>
        <div className="luxury-input-group">
          <label>Assigned Executive Role / Title</label>
          <input type="text" name="s_role" className="luxury-input" placeholder="e.g. Head coach" required />
        </div>
        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Appoint Staff</button>
        </div>
      </form>
    );
  }

  // C. Add Sponsor Modal
  function renderSponsorModal() {
    const handleSponsorSubmit = (e) => {
      e.preventDefault();
      const name = e.target.sp_name.value.trim();
      const type = e.target.sp_type.value.trim();

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      updated[tIdx].sponsors.push({ name, type });

      saveTeams(updated);
      setModalType(null);
      addToast("Sponsorship partner signed", "success");
    };

    return (
      <form onSubmit={handleSponsorSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.25rem' }}>
          🤝 SIGN BRAND SPONSORSHIP
        </h2>
        <div className="luxury-input-group">
          <label>Brand / Partner Name</label>
          <input type="text" name="sp_name" className="luxury-input" placeholder="e.g. Nike" required />
        </div>
        <div className="luxury-input-group">
          <label>Sponsorship Tier / Style</label>
          <input type="text" name="sp_type" className="luxury-input" placeholder="e.g. Title Sponsor" required />
        </div>
        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Approve Contract</button>
        </div>
      </form>
    );
  }

  // D. Add/Edit Match Modal
  function renderMatchModal() {
    const isEdit = !!activeMatch;
    const nextMatchNum = activeTeam.matches.length + 1;

    const handleMatchSubmit = (e) => {
      e.preventDefault();
      const number = Number(e.target.m_num.value);
      const opposition = e.target.m_opp.value.trim();
      const date = e.target.m_date.value;
      const time = e.target.m_time.value;
      const venue = e.target.m_venue.value.trim();

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);

      if (isEdit) {
        const mIdx = updated[tIdx].matches.findIndex(m => m.id === activeMatch.id);
        updated[tIdx].matches[mIdx] = {
          ...activeMatch,
          number, opposition, date, time, venue
        };
        addToast("Match details updated", "success");
      } else {
        const id = `${activeTeam.id.toLowerCase()}_m_${Date.now()}`;
        updated[tIdx].matches.push({
          id, number, date, time, venue, opposition,
          toss: "", decision: "", result: "", playerOfMatch: "",
          playingXI: [], opponentXI: [], notes: "", performances: [], status: "Scheduled"
        });
        addToast("New fixture added to schedules", "success");
      }

      saveTeams(updated);
      setModalType(null);
    };

    return (
      <form onSubmit={handleMatchSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>
          {isEdit ? '✏️ EDIT FIXTURE SCHEDULING' : '📅 SCHEDULE NEW BATTLE'}
        </h2>
        
        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Match Number</label>
            <input type="number" name="m_num" className="luxury-input" defaultValue={activeMatch?.number || nextMatchNum} required />
          </div>
          <div className="luxury-input-group">
            <label>Opposition Franchise</label>
            <input type="text" name="m_opp" className="luxury-input" defaultValue={activeMatch?.opposition || ''} placeholder="e.g. Mumbai Indians" required />
          </div>
        </div>

        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Schedule Date</label>
            <input type="date" name="m_date" className="luxury-input" defaultValue={activeMatch?.date || ''} required />
          </div>
          <div className="luxury-input-group">
            <label>Schedule Time (Local)</label>
            <input type="time" name="m_time" className="luxury-input" defaultValue={activeMatch?.time || '19:30'} required />
          </div>
        </div>

        <div className="luxury-input-group">
          <label>Arena Ground Venue</label>
          <input type="text" name="m_venue" className="luxury-input" defaultValue={activeMatch?.venue || activeTeam.management?.homeGround} required />
        </div>

        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Confirm Schedule</button>
        </div>
      </form>
    );
  }

  // E. Record/Log Scorecard Modal
  function renderScorecardModal() {
    if (!activeMatch) return null;

    const handleScorecardSubmit = (e) => {
      e.preventDefault();
      
      const result = e.target.sc_result.value;
      const toss = e.target.sc_toss.value.trim();
      const decision = e.target.sc_decision.value;
      const playerOfMatch = e.target.sc_potm.value;
      const notes = e.target.sc_notes.value.trim();
      const oppXi = e.target.sc_oppxi.value.split(",").map(n => n.trim()).filter(Boolean);

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      const matchIdx = updated[tIdx].matches.findIndex(m => m.id === activeMatch.id);

      // Extract player stats from inputs
      const playingXI = [];
      const performances = [];

      activeTeam.players.forEach(p => {
        const checked = e.target[`chk_${p.id}`].checked;
        if (checked) {
          playingXI.push(p.id);
          const runs = Number(e.target[`runs_${p.id}`].value) || 0;
          const balls = Number(e.target[`balls_${p.id}`].value) || 0;
          const isOut = e.target[`out_${p.id}`].checked;
          const wickets = Number(e.target[`wkts_${p.id}`].value) || 0;
          const runsConceded = Number(e.target[`rc_${p.id}`].value) || 0;
          const overs = Number(e.target[`overs_${p.id}`].value) || 0;

          performances.push({
            playerId: p.id,
            runs,
            balls,
            isOut,
            wickets,
            runsConceded,
            overs
          });
        }
      });

      updated[tIdx].matches[matchIdx] = {
        ...activeMatch,
        result,
        toss,
        decision,
        playerOfMatch,
        notes,
        opponentXI: oppXi,
        playingXI,
        performances,
        status: "Completed"
      };

      saveTeams(updated);
      setModalType(null);
      addToast("Match score logged. Player season stats calculated!", "success");
    };

    return (
      <form onSubmit={handleScorecardSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>
          🏏 LOG SCORECARD — MATCH {activeMatch.number} vs {activeMatch.opposition}
        </h2>

        <div className="grid-3 mb-2">
          <div className="luxury-input-group">
            <label>Match Result</label>
            <select name="sc_result" className="luxury-input" defaultValue={activeMatch.result || 'Won'}>
              <option value="Won">Won the Battle</option>
              <option value="Lost">Lost the Battle</option>
            </select>
          </div>
          <div className="luxury-input-group">
            <label>Toss Won By</label>
            <input type="text" name="sc_toss" className="luxury-input" defaultValue={activeMatch.toss || activeTeam.name} required />
          </div>
          <div className="luxury-input-group">
            <label>Toss Decision Choice</label>
            <select name="sc_decision" className="luxury-input" defaultValue={activeMatch.decision || 'Batting'}>
              <option value="Batting">Batting First</option>
              <option value="Bowling">Bowling First</option>
            </select>
          </div>
        </div>

        <div className="grid-2 mb-2">
          <div className="luxury-input-group">
            <label>Player of the Match (POTM)</label>
            <select name="sc_potm" className="luxury-input" defaultValue={activeMatch.playerOfMatch || ''}>
              <option value="">-- Choose Athlete --</option>
              {activeTeam.players.map(p => (
                <option key={p.id} value={p.name}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="luxury-input-group">
            <label>Opponent playing roster (comma-separated)</label>
            <input type="text" name="sc_oppxi" className="luxury-input" defaultValue={activeMatch.opponentXI ? activeMatch.opponentXI.join(", ") : ''} placeholder="e.g. Rohit Sharma, Bumrah" />
          </div>
        </div>

        <div className="luxury-input-group mb-3">
          <label>Executive Match Summary Notes</label>
          <textarea name="sc_notes" className="luxury-input" rows={2} defaultValue={activeMatch.notes || ''} placeholder="Key observations or strategic summaries..." />
        </div>

        <h3 className="luxury-title" style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>🏏 Active Playing XI & Performance Matrices</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>Check player names who played in the match, then record runs/balls/wickets/economy.</p>

        <div className="luxury-table-container" style={{ maxHeight: '250px', overflowY: 'auto' }}>
          <table className="luxury-table" style={{ fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#04050a' }}>
                <th style={{ width: '40px' }}>Play</th>
                <th>Athlete Name</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Out?</th>
                <th>Wickets</th>
                <th>Runs Conceded</th>
                <th>Overs</th>
              </tr>
            </thead>
            <tbody>
              {activeTeam.players.map(p => {
                const perf = activeMatch.performances?.find(pf => pf.playerId === p.id) || {};
                const isChecked = activeMatch.playingXI?.includes(p.id);

                return (
                  <tr key={p.id}>
                    <td>
                      <input 
                        type="checkbox" 
                        id={`chk_${p.id}`} 
                        name={`chk_${p.id}`}
                        defaultChecked={isChecked}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        onChange={(e) => {
                          const elements = [
                            `runs_${p.id}`, `balls_${p.id}`, `out_${p.id}`,
                            `wkts_${p.id}`, `rc_${p.id}`, `overs_${p.id}`
                          ];
                          elements.forEach(elName => {
                            const el = document.getElementsByName(elName)[0];
                            if (el) {
                              el.disabled = !e.target.checked;
                              if (!e.target.checked) {
                                if (el.type === 'checkbox') el.checked = false;
                                else el.value = 0;
                              }
                            }
                          });
                        }}
                      />
                    </td>
                    <td>
                      <strong>{p.name}</strong>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{p.role}</div>
                    </td>
                    <td><input type="number" name={`runs_${p.id}`} className="luxury-input" style={{ width: '60px', padding: '0.3rem' }} defaultValue={perf.runs || 0} disabled={!isChecked} /></td>
                    <td><input type="number" name={`balls_${p.id}`} className="luxury-input" style={{ width: '60px', padding: '0.3rem' }} defaultValue={perf.balls || 0} disabled={!isChecked} /></td>
                    <td><input type="checkbox" name={`out_${p.id}`} defaultChecked={perf.isOut} disabled={!isChecked} /></td>
                    <td><input type="number" name={`wkts_${p.id}`} className="luxury-input" style={{ width: '50px', padding: '0.3rem' }} defaultValue={perf.wickets || 0} disabled={!isChecked} /></td>
                    <td><input type="number" name={`rc_${p.id}`} className="luxury-input" style={{ width: '60px', padding: '0.3rem' }} defaultValue={perf.runsConceded || 0} disabled={!isChecked} /></td>
                    <td><input type="number" step="0.1" name={`overs_${p.id}`} className="luxury-input" style={{ width: '60px', padding: '0.3rem' }} defaultValue={perf.overs || 0} disabled={!isChecked} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex-between" style={{ marginTop: '2.2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Record Scorecard</button>
        </div>
      </form>
    );
  }

  // F. Detailed Player Stats Profile Modal
  function renderPlayerProfileModal() {
    if (!activePlayer) return null;
    const stats = getPlayerStats(activePlayer.id, activeTeam);

    const matchesBreakdown = activeTeam.matches?.filter(m => m.status === 'Completed' && m.playingXI?.includes(activePlayer.id)) || [];

    return (
      <div>
        <h2 className="luxury-title" style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>📊 ATHLETE PERFORMANCE ARCHIVE — {activePlayer.name}</span>
          <span className="luxury-badge luxury-badge-gold">{activePlayer.role}</span>
        </h2>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <strong>Style:</strong> {activePlayer.battingStyle} Batting • {activePlayer.bowlingStyle} Bowling Style | <strong>Nationality:</strong> {activePlayer.nationality}
        </div>

        {/* Stats Grid */}
        <div className="luxury-stats-grid" style={{ marginBottom: '2rem' }}>
          <div className="luxury-stat-card gold">
            <div className="stat-label">Season Runs</div>
            <div className="stat-value">{stats.totalRuns}</div>
            <div className="stat-extra">Strike Rate: {stats.strikeRate}</div>
          </div>
          <div className="luxury-stat-card ruby">
            <div className="stat-label">Batting Avg</div>
            <div className="stat-value">{stats.battingAvg}</div>
            <div className="stat-extra">Dismissals: {stats.outs}</div>
          </div>
          <div className="luxury-stat-card emerald">
            <div className="stat-label">Wickets Taken</div>
            <div className="stat-value">{stats.wickets}</div>
            <div className="stat-extra">Overs: {stats.oversString}</div>
          </div>
          <div className="luxury-stat-card indigo">
            <div className="stat-label">Economy Rate</div>
            <div className="stat-value">{stats.economy}</div>
            <div className="stat-extra">Runs Conc: {stats.runsConceded}</div>
          </div>
        </div>

        {/* Matches Breakdown */}
        <h3 className="luxury-title" style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Match History Log</h3>
        <div className="luxury-table-container">
          <table className="luxury-table">
            <thead>
              <tr>
                <th>Fixture Match</th>
                <th style={{ textAlign: 'center' }}>Runs</th>
                <th style={{ textAlign: 'center' }}>Balls</th>
                <th>Dismissed?</th>
                <th style={{ textAlign: 'center' }}>Wickets</th>
                <th style={{ textAlign: 'center' }}>Runs Conc</th>
                <th style={{ textAlign: 'center' }}>Overs</th>
              </tr>
            </thead>
            <tbody>
              {matchesBreakdown.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                    No recorded match history for this athlete.
                  </td>
                </tr>
              ) : (
                matchesBreakdown.map(m => {
                  const perf = m.performances?.find(pf => pf.playerId === activePlayer.id) || {};
                  return (
                    <tr key={m.id}>
                      <td><strong>Match {m.number}</strong> vs {m.opposition}</td>
                      <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{perf.runs || 0}</td>
                      <td style={{ textAlign: 'center' }}>{perf.balls || 0}</td>
                      <td>{perf.isOut ? '❌ Yes (Out)' : '🏏 Not Out'}</td>
                      <td style={{ textAlign: 'center', color: 'var(--gold)', fontWeight: 'bold' }}>{perf.wickets || 0}</td>
                      <td style={{ textAlign: 'center' }}>{perf.runsConceded || 0}</td>
                      <td style={{ textAlign: 'center' }}>{perf.overs || 0}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right', marginTop: '2rem' }}>
          <button className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Close Window</button>
        </div>
      </div>
    );
  }

  // G. Team Config Modal
  function renderTeamConfigModal() {
    const handleConfigSubmit = (e) => {
      e.preventDefault();
      
      const slogan = e.target.t_slogan.value.trim();
      const founder = e.target.t_founder.value.trim();
      const ceo = e.target.t_ceo.value.trim();
      const cfo = e.target.t_cfo.value.trim();
      const cmo = e.target.t_cmo.value.trim();
      const homeGround = e.target.t_ground.value.trim();

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      
      updated[tIdx].slogan = slogan;
      updated[tIdx].management = { founder, ceo, cfo, cmo, homeGround };

      saveTeams(updated);
      setModalType(null);
      addToast("Franchise settings updated", "success");
    };

    return (
      <form onSubmit={handleConfigSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>
          ⚙️ FRANCHISE CORPORATE PROFILE CONFIG
        </h2>
        
        <div className="luxury-input-group">
          <label>Motto / Slogan</label>
          <input type="text" name="t_slogan" className="luxury-input" defaultValue={activeTeam.slogan} required />
        </div>

        <div className="luxury-input-group">
          <label>Ownership Group / Founder</label>
          <input type="text" name="t_founder" className="luxury-input" defaultValue={activeTeam.management?.founder} required />
        </div>

        <div className="luxury-input-group">
          <label>Chief Executive Officer (CEO)</label>
          <input type="text" name="t_ceo" className="luxury-input" defaultValue={activeTeam.management?.ceo} required />
        </div>
        <div className="luxury-input-group">
          <label>Chief Financial Officer (CFO)</label>
          <input type="text" name="t_cfo" className="luxury-input" defaultValue={activeTeam.management?.cfo} required />
        </div>
        <div className="luxury-input-group">
          <label>Chief Marketing Officer (CMO)</label>
          <input type="text" name="t_cmo" className="luxury-input" defaultValue={activeTeam.management?.cmo} required />
        </div>

        <div className="luxury-input-group">
          <label>Home Arena Stadium</label>
          <input type="text" name="t_ground" className="luxury-input" defaultValue={activeTeam.management?.homeGround} required />
        </div>

        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Save Config</button>
        </div>
      </form>
    );
  }

  // H. Change password modal
  function renderChangePasswordModal() {
    const handlePasswordSubmit = (e) => {
      e.preventDefault();
      const p1 = e.target.pass1.value.trim();
      const p2 = e.target.pass2.value.trim();

      if (p1 !== p2) {
        alert("Passwords do not match!");
        return;
      }
      if (p1.length < 3) {
        alert("Password must be at least 3 characters!");
        return;
      }

      const updated = [...teams];
      const tIdx = updated.findIndex(t => t.id === activeTeam.id);
      updated[tIdx].password = p1;
      
      saveTeams(updated);
      setModalType(null);
      addToast("Authorization password updated", "success");
    };

    return (
      <form onSubmit={handlePasswordSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.25rem' }}>
          🔑 CHANGE SECURITY ACCESS PASSPHRASE
        </h2>
        <div className="luxury-input-group">
          <label>New Secret Passphrase</label>
          <input type="password" name="pass1" className="luxury-input" required />
        </div>
        <div className="luxury-input-group">
          <label>Confirm Passphrase</label>
          <input type="password" name="pass2" className="luxury-input" required />
        </div>
        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Update Password</button>
        </div>
      </form>
    );
  }

  // I. Admin create team modal
  function renderCreateTeamModal() {
    const handleCreateTeamSubmit = (e) => {
      e.preventDefault();
      
      const id = e.target.t_id.value.trim().toUpperCase();
      const name = e.target.t_name.value.trim();
      const slogan = e.target.t_slogan.value.trim();
      const color = e.target.t_color.value;
      const logo = e.target.t_logo.value;
      const password = e.target.t_pass.value.trim();

      if (teams.some(t => t.id === id)) {
        alert("Franchise code already registered!");
        return;
      }

      const newFranchise = {
        id,
        name,
        password,
        slogan,
        logo,
        color,
        management: { founder: "Zstar studio's pvt ltd", ceo: "N/A", cfo: "N/A", cmo: "N/A", homeGround: "Local Stadium Arena" },
        coaching: [],
        physio: [],
        analysis: [],
        support: [],
        prMedia: [],
        sponsors: [],
        players: [],
        matches: []
      };

      saveTeams([...teams, newFranchise]);
      setModalType(null);
      addToast(`${name} registered successfully!`, "success");
    };

    return (
      <form onSubmit={handleCreateTeamSubmit}>
        <h2 className="luxury-title" style={{ fontSize: '1.4rem' }}>
          ➕ REGISTER NEW FRANCHISE SQUAD
        </h2>

        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Franchise Initial Code (e.g. KKR)</label>
            <input type="text" name="t_id" className="luxury-input" placeholder="e.g. KKR" required />
          </div>
          <div className="luxury-input-group">
            <label>Slogan Motto</label>
            <input type="text" name="t_slogan" className="luxury-input" placeholder="e.g. Whistle Podu" required />
          </div>
        </div>

        <div className="luxury-input-group">
          <label>Full Franchise Name</label>
          <input type="text" name="t_name" className="luxury-input" placeholder="e.g. Kolkata Knight Riders" required />
        </div>

        <div className="grid-2">
          <div className="luxury-input-group">
            <label>Brand Theme Color</label>
            <input type="color" name="t_color" className="luxury-input" style={{ height: '48px', padding: '0.2rem' }} defaultValue="#8b5cf6" />
          </div>
          <div className="luxury-input-group">
            <label>Team Emblem / Icon (Emoji)</label>
            <input type="text" name="t_logo" className="luxury-input" defaultValue="💜" required />
          </div>
        </div>

        <div className="luxury-input-group">
          <label>Security Keyphrase (Password)</label>
          <input type="text" name="t_pass" className="luxury-input" placeholder="e.g. KKR404" required />
        </div>

        <div className="flex-between" style={{ marginTop: '2rem' }}>
          <button type="button" className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Cancel</button>
          <button type="submit" className="luxury-btn luxury-btn-primary">Register Franchise</button>
        </div>
      </form>
    );
  }

  // J. Detailed Match Details Modal
  function renderMatchDetailsModal() {
    if (!activeMatch) return null;

    const getPlayerName = (id) => {
      const p = activeTeam.players.find(pl => pl.id === id);
      return p ? p.name : id;
    };

    return (
      <div>
        <h2 className="luxury-title" style={{ fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>🔍 MATCH DETAIL CARD — vs {activeMatch.opposition}</span>
          <span className={`luxury-badge ${activeMatch.result === 'Won' ? 'luxury-badge-emerald' : 'luxury-badge-ruby'}`}>{activeMatch.result}</span>
        </h2>

        <div className="grid-2 mb-3">
          <div className="luxury-card" style={{ padding: '1.2rem' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.25rem' }}>Match Info</h3>
            <div style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div><strong>Date & Time:</strong> {activeMatch.date} @ {activeMatch.time}</div>
              <div><strong>Arena Ground:</strong> {activeMatch.venue}</div>
              <div><strong>Toss Choice:</strong> Won by {activeMatch.toss} ({activeMatch.decision} first)</div>
              <div><strong>Player of Match:</strong> <span className="gold-text">{activeMatch.playerOfMatch || 'N/A'}</span></div>
            </div>
          </div>
          <div className="luxury-card" style={{ padding: '1.2rem' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.25rem' }}>Observations</h3>
            <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              "{activeMatch.notes || 'No match observations recorded.'}"
            </p>
          </div>
        </div>

        <div className="grid-2 mb-3">
          <div className="luxury-card" style={{ padding: '1.2rem' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>🔴 Playing XI</h3>
            <ol style={{ fontSize: '0.82rem', paddingLeft: '1.2rem', display: 'grid', gridTemplateColumns: '1.5fr 1.5fr', gap: '0.2rem' }}>
              {activeMatch.playingXI?.map(id => (
                <li key={id}>{getPlayerName(id)}</li>
              )) || <span className="text-muted">No line-up declared</span>}
            </ol>
          </div>
          <div className="luxury-card" style={{ padding: '1.2rem' }}>
            <h3 style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>🔵 Opponent XI Lineup</h3>
            <ol style={{ fontSize: '0.82rem', paddingLeft: '1.2rem', display: 'grid', gridTemplateColumns: '1.5fr 1.5fr', gap: '0.2rem' }}>
              {activeMatch.opponentXI?.map((name, idx) => (
                <li key={idx}>{name}</li>
              )) || <span className="text-muted">No line-up declared</span>}
            </ol>
          </div>
        </div>

        <h3 className="luxury-title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Match Box Scorecard</h3>
        <div className="luxury-table-container">
          <table className="luxury-table">
            <thead>
              <tr>
                <th>Player</th>
                <th style={{ textAlign: 'center' }}>Runs</th>
                <th style={{ textAlign: 'center' }}>Balls</th>
                <th>Status</th>
                <th style={{ textAlign: 'center' }}>Wickets</th>
                <th style={{ textAlign: 'center' }}>Runs Conceded</th>
                <th style={{ textAlign: 'center' }}>Overs</th>
              </tr>
            </thead>
            <tbody>
              {activeMatch.performances?.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>No individual records logged</td>
                </tr>
              ) : (
                activeMatch.performances?.map(pf => (
                  <tr key={pf.playerId}>
                    <td><strong>{getPlayerName(pf.playerId)}</strong></td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{pf.runs}</td>
                    <td style={{ textAlign: 'center' }}>{pf.balls}</td>
                    <td>{pf.isOut ? 'Dismissed' : 'Not Out'}</td>
                    <td style={{ textAlign: 'center', color: 'var(--gold)', fontWeight: 'bold' }}>{pf.wickets}</td>
                    <td style={{ textAlign: 'center' }}>{pf.runsConceded}</td>
                    <td style={{ textAlign: 'center' }}>{pf.overs}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'right', marginTop: '2rem' }}>
          <button className="luxury-btn luxury-btn-secondary" onClick={() => setModalType(null)}>Close Match Card</button>
        </div>
      </div>
    );
  }
}
