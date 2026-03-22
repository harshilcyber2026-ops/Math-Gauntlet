/* ═══════════════════════════════════════════════════════════════════
   FlagVault CTF — Math Gauntlet · Challenge #P1
   ───────────────────────────────────────────────────────────────
   CHALLENGE:  nc challenge.flagvault.local 5555
   ROUNDS:     100 arithmetic problems (seed=42)
   TIMEOUT:    3 seconds per round
   OPERATIONS: +, -, *, //
   
   FLAG: FlagVault{4ut0_s0lv3r_scr1pt_m4st3r_100_r0unds}
   
   SOLUTION: Write a Python script using pwntools or socket.
   See the Script tab for the complete working solution.
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ──────── All 100 rounds (pre-generated, seed=42) ──────── */
const ROUNDS = [{"a":655,"op":"+","b":26,"expr":"655 + 26","ans":681},{"a":760,"op":"*","b":32,"expr":"760 * 32","ans":24320},{"a":229,"op":"-","b":755,"expr":"229 - 755","ans":-526},{"a":105,"op":"+","b":605,"expr":"105 + 605","ans":710},{"a":433,"op":"+","b":31,"expr":"433 + 31","ans":464},{"a":96,"op":"-","b":239,"expr":"96 - 239","ans":-143},{"a":518,"op":"+","b":575,"expr":"518 + 575","ans":1093},{"a":204,"op":"//","b":29,"expr":"204 // 29","ans":7},{"a":460,"op":"*","b":1,"expr":"460 * 1","ans":460},{"a":778,"op":"-","b":715,"expr":"778 - 715","ans":63},{"a":433,"op":"*","b":36,"expr":"433 * 36","ans":15588},{"a":160,"op":"-","b":981,"expr":"160 - 981","ans":-821},{"a":782,"op":"*","b":14,"expr":"782 * 14","ans":10948},{"a":95,"op":"//","b":13,"expr":"95 // 13","ans":7},{"a":368,"op":"*","b":78,"expr":"368 * 78","ans":28704},{"a":271,"op":"+","b":748,"expr":"271 + 748","ans":1019},{"a":471,"op":"+","b":997,"expr":"471 + 997","ans":1468},{"a":945,"op":"//","b":11,"expr":"945 // 11","ans":85},{"a":566,"op":"*","b":81,"expr":"566 * 81","ans":45846},{"a":634,"op":"*","b":74,"expr":"634 * 74","ans":46916},{"a":197,"op":"+","b":47,"expr":"197 + 47","ans":244},{"a":678,"op":"-","b":792,"expr":"678 - 792","ans":-114},{"a":297,"op":"+","b":876,"expr":"297 + 876","ans":1173},{"a":239,"op":"+","b":390,"expr":"239 + 390","ans":629},{"a":285,"op":"//","b":82,"expr":"285 // 82","ans":3},{"a":855,"op":"*","b":21,"expr":"855 * 21","ans":17955},{"a":380,"op":"*","b":27,"expr":"380 * 27","ans":10260},{"a":687,"op":"*","b":90,"expr":"687 * 90","ans":61830},{"a":960,"op":"+","b":624,"expr":"960 + 624","ans":1584},{"a":651,"op":"-","b":547,"expr":"651 - 547","ans":104},{"a":747,"op":"-","b":168,"expr":"747 - 168","ans":579},{"a":474,"op":"//","b":35,"expr":"474 // 35","ans":13},{"a":948,"op":"-","b":702,"expr":"948 - 702","ans":246},{"a":333,"op":"+","b":235,"expr":"333 + 235","ans":568},{"a":842,"op":"+","b":825,"expr":"842 + 825","ans":1667},{"a":324,"op":"//","b":35,"expr":"324 // 35","ans":9},{"a":68,"op":"-","b":936,"expr":"68 - 936","ans":-868},{"a":966,"op":"*","b":28,"expr":"966 * 28","ans":27048},{"a":672,"op":"//","b":51,"expr":"672 // 51","ans":13},{"a":906,"op":"//","b":19,"expr":"906 // 19","ans":47},{"a":272,"op":"-","b":253,"expr":"272 - 253","ans":19},{"a":763,"op":"*","b":96,"expr":"763 * 96","ans":73248},{"a":599,"op":"//","b":75,"expr":"599 // 75","ans":7},{"a":409,"op":"*","b":29,"expr":"409 * 29","ans":11861},{"a":142,"op":"//","b":12,"expr":"142 // 12","ans":11},{"a":774,"op":"+","b":882,"expr":"774 + 882","ans":1656},{"a":113,"op":"-","b":643,"expr":"113 - 643","ans":-530},{"a":164,"op":"//","b":77,"expr":"164 // 77","ans":2},{"a":66,"op":"//","b":49,"expr":"66 // 49","ans":1},{"a":611,"op":"//","b":68,"expr":"611 // 68","ans":8},{"a":258,"op":"+","b":697,"expr":"258 + 697","ans":955},{"a":739,"op":"+","b":699,"expr":"739 + 699","ans":1438},{"a":907,"op":"*","b":99,"expr":"907 * 99","ans":89793},{"a":657,"op":"*","b":15,"expr":"657 * 15","ans":9855},{"a":301,"op":"//","b":21,"expr":"301 // 21","ans":14},{"a":465,"op":"+","b":977,"expr":"465 + 977","ans":1442},{"a":740,"op":"*","b":65,"expr":"740 * 65","ans":48100},{"a":781,"op":"-","b":520,"expr":"781 - 520","ans":261},{"a":935,"op":"+","b":892,"expr":"935 + 892","ans":1827},{"a":641,"op":"*","b":82,"expr":"641 * 82","ans":52562},{"a":520,"op":"-","b":157,"expr":"520 - 157","ans":363},{"a":383,"op":"-","b":553,"expr":"383 - 553","ans":-170},{"a":977,"op":"+","b":614,"expr":"977 + 614","ans":1591},{"a":332,"op":"//","b":3,"expr":"332 // 3","ans":110},{"a":115,"op":"*","b":40,"expr":"115 * 40","ans":4600},{"a":246,"op":"+","b":247,"expr":"246 + 247","ans":493},{"a":900,"op":"+","b":88,"expr":"900 + 88","ans":988},{"a":750,"op":"//","b":9,"expr":"750 // 9","ans":83},{"a":779,"op":"-","b":132,"expr":"779 - 132","ans":647},{"a":676,"op":"//","b":71,"expr":"676 // 71","ans":9},{"a":170,"op":"*","b":68,"expr":"170 * 68","ans":11560},{"a":894,"op":"//","b":28,"expr":"894 // 28","ans":31},{"a":952,"op":"-","b":731,"expr":"952 - 731","ans":221},{"a":320,"op":"//","b":86,"expr":"320 // 86","ans":3},{"a":666,"op":"*","b":57,"expr":"666 * 57","ans":37962},{"a":922,"op":"//","b":16,"expr":"922 // 16","ans":57},{"a":254,"op":"-","b":66,"expr":"254 - 66","ans":188},{"a":347,"op":"+","b":603,"expr":"347 + 603","ans":950},{"a":568,"op":"-","b":603,"expr":"568 - 603","ans":-35},{"a":226,"op":"+","b":73,"expr":"226 + 73","ans":299},{"a":725,"op":"+","b":235,"expr":"725 + 235","ans":960},{"a":70,"op":"+","b":881,"expr":"70 + 881","ans":951},{"a":339,"op":"+","b":527,"expr":"339 + 527","ans":866},{"a":244,"op":"*","b":86,"expr":"244 * 86","ans":20984},{"a":498,"op":"-","b":553,"expr":"498 - 553","ans":-55},{"a":136,"op":"//","b":32,"expr":"136 // 32","ans":4},{"a":804,"op":"//","b":53,"expr":"804 // 53","ans":15},{"a":195,"op":"+","b":100,"expr":"195 + 100","ans":295},{"a":675,"op":"//","b":46,"expr":"675 // 46","ans":14},{"a":434,"op":"//","b":60,"expr":"434 // 60","ans":7},{"a":885,"op":"+","b":690,"expr":"885 + 690","ans":1575},{"a":670,"op":"+","b":63,"expr":"670 + 63","ans":733},{"a":413,"op":"*","b":14,"expr":"413 * 14","ans":5782},{"a":255,"op":"-","b":195,"expr":"255 - 195","ans":60},{"a":550,"op":"//","b":18,"expr":"550 // 18","ans":30},{"a":433,"op":"-","b":286,"expr":"433 - 286","ans":147},{"a":474,"op":"-","b":896,"expr":"474 - 896","ans":-422},{"a":946,"op":"+","b":454,"expr":"946 + 454","ans":1400},{"a":828,"op":"+","b":52,"expr":"828 + 52","ans":880},{"a":668,"op":"+","b":993,"expr":"668 + 993","ans":1661}];

const FLAG = 'FlagVault{4ut0_s0lv3r_scr1pt_m4st3r_100_r0unds}';

/* ──────── Simulator state ──────── */
let mode          = null;   // 'manual' | 'auto'
let currentRound  = 0;
let running       = false;
let autoTimer     = null;

/* ──────── DOM helpers ──────── */
const termEl  = () => document.getElementById('sim-terminal');
const roundEl = () => document.getElementById('sim-round');
const progEl  = () => document.getElementById('sim-progress-bar');
const titleEl = () => document.getElementById('sim-title');

function termLine(text, cls = '') {
  const line = document.createElement('div');
  line.className = `st-line${cls ? ' ' + cls : ''}`;
  line.innerHTML = text;
  termEl().appendChild(line);
  termEl().scrollTop = termEl().scrollHeight;
}

function setRound(n) {
  roundEl().textContent = n;
  progEl().style.width = `${n}%`;
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ──────── Start simulator ──────── */
async function startSimulator(m) {
  if (running) return;
  mode    = m;
  running = true;
  currentRound = 0;

  document.getElementById('btn-connect').disabled = true;
  document.getElementById('btn-auto').disabled    = true;

  // Clear terminal
  termEl().innerHTML = '';
  setRound(0);

  // Print connection
  termLine(`<span class="st-sys">Connecting to challenge.flagvault.local:5555…</span>`);
  await delay(500);
  termLine(`<span class="st-sys">Connected!</span>`);
  await delay(200);

  // Banner
  termLine(`<span class="st-banner">╔══════════════════════════════════════════╗</span>`);
  termLine(`<span class="st-banner">║         FlagVault CTF — Math Gauntlet    ║</span>`);
  termLine(`<span class="st-banner">╚══════════════════════════════════════════╝</span>`);
  await delay(200);
  termLine(`<span class="st-server">Solve 100 arithmetic problems.</span>`);
  termLine(`<span class="st-server">You have 3 seconds per round. GO!</span>`);
  termLine('');

  if (mode === 'auto') {
    titleEl().textContent = 'challenge.flagvault.local:5555 — AUTO-SOLVE running…';
    await runAutoMode();
  } else {
    titleEl().textContent = 'challenge.flagvault.local:5555 — MANUAL MODE';
    await runManualMode();
  }
}

/* ──────── Auto-solve mode ──────── */
async function runAutoMode() {
  for (let i = 0; i < ROUNDS.length; i++) {
    const r   = ROUNDS[i];
    const num = i + 1;

    termLine(`<span class="st-problem">Round ${String(num).padStart(3,' ')}/100: ${r.expr} = ?</span>`);
    await delay(60);

    // Script sends answer instantly
    termLine(`<span class="st-client">  → script sends: ${r.ans}</span>`);
    await delay(60);
    termLine(`<span class="st-correct">  ✓ Correct! [${num}/100]</span>`);
    termLine('');

    setRound(num);
    await delay(20);
  }

  await delay(200);
  termLine(`<span class="st-correct">╔═══════════════════════════════════╗</span>`);
  termLine(`<span class="st-correct">║   100/100 correct! Sending flag…  ║</span>`);
  termLine(`<span class="st-correct">╚═══════════════════════════════════╝</span>`);
  termLine('');
  await delay(300);
  termLine(`<span class="st-flag">🚩 ${FLAG}</span>`);
  termLine('');
  termLine(`<span class="st-sys">Connection closed by server.</span>`);

  titleEl().textContent = 'challenge.flagvault.local:5555 — complete ✓';
  running = false;
  revealFlag();

  document.getElementById('btn-connect').disabled = false;
  document.getElementById('btn-auto').disabled    = false;
}

/* ──────── Manual mode ──────── */
async function runManualMode() {
  // Enable input
  document.getElementById('sir-input').disabled = false;
  document.getElementById('sir-send').disabled  = false;
  document.getElementById('sir-input').focus();

  sendNextProblem();
}

function sendNextProblem() {
  if (currentRound >= ROUNDS.length) {
    finishManual();
    return;
  }
  const r   = ROUNDS[currentRound];
  const num = currentRound + 1;
  termLine(`<span class="st-problem">Round ${String(num).padStart(3,' ')}/100: ${r.expr} = ?</span>`);
  document.getElementById('sir-input').value = '';
  document.getElementById('sir-input').focus();
}

function manualAnswer() {
  if (!running || mode !== 'manual') return;
  if (currentRound >= ROUNDS.length) return;

  const raw = document.getElementById('sir-input').value.trim();
  const ans = parseInt(raw, 10);
  const r   = ROUNDS[currentRound];
  const num = currentRound + 1;

  if (isNaN(ans)) {
    termLine(`<span class="st-wrong">  ✗ Please enter a number.</span>`);
    return;
  }

  termLine(`<span class="st-client">  → you sent: ${ans}</span>`);

  if (ans === r.ans) {
    termLine(`<span class="st-correct">  ✓ Correct! [${num}/100]</span>`);
    termLine('');
    currentRound++;
    setRound(currentRound);

    if (currentRound >= ROUNDS.length) {
      finishManual();
    } else {
      sendNextProblem();
    }
  } else {
    termLine(`<span class="st-wrong">  ✗ Wrong! Expected ${r.ans}. Session closed.</span>`);
    termLine(`<span class="st-sys">Connection closed by server.</span>`);
    running = false;
    document.getElementById('sir-input').disabled = true;
    document.getElementById('sir-send').disabled  = true;
    document.getElementById('btn-connect').disabled = false;
    document.getElementById('btn-auto').disabled    = false;
    titleEl().textContent = 'challenge.flagvault.local:5555 — disconnected (wrong answer)';
  }
}

async function finishManual() {
  document.getElementById('sir-input').disabled = true;
  document.getElementById('sir-send').disabled  = true;

  termLine(`<span class="st-correct">╔═══════════════════════════════════╗</span>`);
  termLine(`<span class="st-correct">║   100/100 correct! Sending flag…  ║</span>`);
  termLine(`<span class="st-correct">╚═══════════════════════════════════╝</span>`);
  termLine('');
  await delay(400);
  termLine(`<span class="st-flag">🚩 ${FLAG}</span>`);
  termLine('');
  termLine(`<span class="st-sys">Connection closed by server.</span>`);

  running = false;
  titleEl().textContent = 'challenge.flagvault.local:5555 — complete ✓';

  document.getElementById('btn-connect').disabled = false;
  document.getElementById('btn-auto').disabled    = false;

  revealFlag();
}

/* ──────── Reset ──────── */
function resetSimulator() {
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  running      = false;
  currentRound = 0;
  mode         = null;

  termEl().innerHTML = '<div class="st-line st-dim">Simulator reset. Click Manual Mode or Auto-Solve to start.</div>';
  setRound(0);
  titleEl().textContent = 'challenge.flagvault.local:5555 — idle';

  document.getElementById('sir-input').disabled = true;
  document.getElementById('sir-send').disabled  = true;
  document.getElementById('btn-connect').disabled = false;
  document.getElementById('btn-auto').disabled    = false;
}

/* ──────── Script tabs ──────── */
function switchScriptTab(tab) {
  document.querySelectorAll('.sc-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.script-panel').forEach(p => { p.classList.add('hidden'); p.classList.remove('active'); });
  document.querySelector(`[onclick="switchScriptTab('${tab}')"]`)?.classList.add('active');
  const panel = document.getElementById(`panel-${tab}`);
  if (panel) { panel.classList.remove('hidden'); panel.classList.add('active'); }
}

/* ──────── Flag reveal ──────── */
function revealFlag() {
  const wrap = document.getElementById('flag-reveal');
  if (!wrap || !wrap.classList.contains('hidden')) return;
  document.getElementById('fr-val').textContent = FLAG;
  wrap.classList.remove('hidden');
  setTimeout(() => wrap.scrollIntoView({ behavior: 'smooth', block: 'center' }), 400);
}

function copyFlag() {
  const v = document.getElementById('fr-val').textContent;
  const t = document.getElementById('copy-toast');
  navigator.clipboard.writeText(v).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = v; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
  });
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2000);
}

/* ──────── Hints ──────── */
function toggleHint(n) {
  const b = document.getElementById(`h${n}b`);
  const t = document.getElementById(`h${n}t`);
  const h = b.classList.toggle('hidden');
  t.textContent = h ? '▼ Reveal' : '▲ Hide';
}

/* ──────── Submit ──────── */
function submitFlag() {
  const v = document.getElementById('flag-input').value.trim();
  const r = document.getElementById('flag-result');
  if (`FlagVault{${v}}` === FLAG) {
    r.className = 'submit-result correct';
    r.innerHTML = '✓ &nbsp;Correct! Flag accepted. +200 pts — Scripting gauntlet cleared!';
    revealFlag();
  } else {
    r.className = 'submit-result incorrect';
    r.innerHTML = '✗ &nbsp;Incorrect. Run your solver script against the server, or click "⚡ Auto-Solve" above.';
  }
}

/* ──────── Boot ──────── */
document.addEventListener('DOMContentLoaded', () => {
  // Enter key on manual input
  document.getElementById('sir-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') manualAnswer();
  });

  document.getElementById('flag-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') submitFlag();
  });

  console.log('%c🧮 FlagVault CTF — Math Gauntlet', 'font-size:14px;font-weight:bold;color:#00e8c8;');
  console.log('%c100 rounds — solve all correctly with a script', 'color:#b8cdd9;font-family:monospace;');
  console.log('%cKey: readline → eval(expr) → sendline(str(ans))', 'color:#f5a623;font-family:monospace;');
  console.log(`%cFlag: ${FLAG}`, 'color:#00e8c8;font-family:monospace;');
});
