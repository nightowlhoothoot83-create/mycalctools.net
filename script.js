/* script.js — MyCalcTools.net shared components */

const ALL_TOOLS = [
  { name: 'BMI Calculator', file: 'bmi-calculator.html', cat: 'Health', emoji: '⚖️' },
  { name: 'Calorie Calculator', file: 'calorie-calculator.html', cat: 'Health', emoji: '🔥' },
  { name: 'Pregnancy Calculator', file: 'pregnancy-calculator.html', cat: 'Health', emoji: '🤱' },
  { name: 'Ovulation Calculator', file: 'ovulation-calculator.html', cat: 'Health', emoji: '🌸' },
  { name: 'Due Date Calculator', file: 'due-date-calculator.html', cat: 'Health', emoji: '👶' },
  { name: 'Sleep Cycle Calculator', file: 'sleep-cycle-calculator.html', cat: 'Health', emoji: '😴' },
  { name: 'Water Intake Calculator', file: 'water-intake-calculator.html', cat: 'Health', emoji: '💧' },
  { name: 'Period Calculator', file: 'period-calculator.html', cat: 'Health', emoji: '📅' },
  { name: 'Kids Growth Calculator', file: 'kids-growth-calculator.html', cat: 'Health', emoji: '📏' },
  { name: 'Loan Calculator', file: 'loan-calculator.html', cat: 'Finance', emoji: '💰' },
  { name: 'Mortgage Calculator', file: 'mortgage-calculator.html', cat: 'Finance', emoji: '🏠' },
  { name: 'Tax Calculator', file: 'tax-calculator.html', cat: 'Finance', emoji: '🧾' },
  { name: 'Pay Calculator', file: 'pay-calculator.html', cat: 'Finance', emoji: '💵' },
  { name: 'Insurance Calculator', file: 'insurance-calculator.html', cat: 'Finance', emoji: '🛡️' },
  { name: 'Rent Affordability Calculator', file: 'rent-calculator.html', cat: 'Finance', emoji: '🏘️' },
  { name: 'Electricity Cost Calculator', file: 'electricity-calculator.html', cat: 'Finance', emoji: '⚡' },
  { name: 'Australian Tax Calculator', file: 'australian-tax-calculator.html', cat: 'Finance', emoji: '🦘' },
  { name: 'BAS & GST Calculator', file: 'bas-gst-calculator.html', cat: 'Finance', emoji: '📋' },
  { name: 'HECS-HELP Calculator', file: 'hecs-help-calculator.html', cat: 'Finance', emoji: '🎓' },
  { name: 'Superannuation Calculator', file: 'superannuation-calculator.html', cat: 'Finance', emoji: '🏦' },
  { name: 'Cost of Living Calculator', file: 'cost-of-living-calculator.html', cat: 'Finance', emoji: '🛒' },
  { name: 'Air Fryer Calculator', file: 'airfryer-calculator.html', cat: 'Kitchen', emoji: '🍳' },
  { name: 'Boiled Egg Calculator', file: 'boiled-egg-calculator.html', cat: 'Kitchen', emoji: '🥚' },
  { name: 'Recipe Scaling Calculator', file: 'recipe-scaling-calculator.html', cat: 'Kitchen', emoji: 'x' },
  { name: 'Cups to Grams Converter', file: 'cups-grams-calculator.html', cat: 'Kitchen', emoji: 'g' },
  { name: 'Pan Size Converter', file: 'pan-size-converter.html', cat: 'Kitchen', emoji: 'pan' },
  { name: 'Age Calculator', file: 'age-calculator.html', cat: 'Lifestyle', emoji: '🎂' },
  { name: 'Date Calculator', file: 'date-calculator.html', cat: 'Lifestyle', emoji: '🗓️' },
  { name: 'Fuel Cost Calculator', file: 'fuel-cost-calculator.html', cat: 'Lifestyle', emoji: '⛽' },
  { name: 'Tip Calculator', file: 'tip-calculator.html', cat: 'Lifestyle', emoji: '🧾' },
  { name: 'Screen Time Calculator', file: 'screen-time-calculator.html', cat: 'Lifestyle', emoji: '📱' },
  { name: 'Concrete Calculator', file: 'concrete-calculator.html', cat: 'Lifestyle', emoji: '🏗️' },
  { name: 'Percentage Calculator', file: 'percentage-calculator.html', cat: 'Business', emoji: '📊' },
  { name: 'Scientific Calculator', file: 'scientific-calculator.html', cat: 'Business', emoji: '🔬' },
  { name: 'Etsy Fee Calculator', file: 'etsy-calculator.html', cat: 'Business', emoji: '🛍️' },
  { name: 'Freelancer Calculator', file: 'freelancer-calculator.html', cat: 'Business', emoji: '💼' },
  { name: 'Freelancer Rate Calculator', file: 'freelancer-rate-calculator.html', cat: 'Business', emoji: '💹' },
  { name: 'Digital Product Calculator', file: 'digital-product-calculator.html', cat: 'Business', emoji: '📦' },
  { name: 'Rainwater Harvesting Calculator', file: 'rainwater-calculator.html', cat: 'Eco', emoji: '🌧️' },
  { name: 'Solar & Battery Calculator', file: 'solar-calculator.html', cat: 'Eco', emoji: '☀️' },
  { name: 'Food Forest Calculator', file: 'food-forest-calculator.html', cat: 'Eco', emoji: '🌳' },
  { name: 'Length & Distance Converter', file: 'converters/length-converter.html', cat: 'Converters', emoji: '📏' },
  { name: 'Weight Converter', file: 'converters/weight-converter.html', cat: 'Converters', emoji: '⚖️' },
  { name: 'Volume Converter', file: 'converters/volume-converter.html', cat: 'Converters', emoji: '🧪' },
  { name: 'Temperature Converter', file: 'converters/temperature-converter.html', cat: 'Converters', emoji: '🌡️' },
  { name: 'Speed Converter', file: 'converters/speed-converter.html', cat: 'Converters', emoji: '🚀' },
];

function renderBrandStrip() {
  document.getElementById('brand-strip').innerHTML = `
    <div class="rs-brand-strip">
      <div class="rs-brand-left">
        <a href="https://ravensharppod.pages.dev/login" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;text-decoration:none">
          <img src="/raven-sharp.jpg" alt="Raven Sharp" style="width:32px;height:32px;border-radius:8px;object-fit:cover;filter:drop-shadow(0 0 6px rgba(6,100,255,0.5))">
          <span style="font-weight:700;font-size:0.9rem;color:var(--text,#e8eaf6);letter-spacing:0.02em">Raven Sharp <span style="color:var(--muted,#94a3b8);font-weight:400">Tools</span></span>
        </a>
      </div>
      <a href="/about.html#support" class="rs-support-pill">Support Us</a>
    </div>`;
}

function renderNav() {
  document.getElementById('nav').innerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="/index.html" class="nav-logo">
          <img src="/mycalctools-logo.png" alt="MyCalcTools logo" class="nav-logo-icon">
          <span class="nav-logo-text">MyCalcTools</span>
        </a>
        <div class="nav-search">
          <span class="nav-search-icon">🔍</span>
          <input type="text" class="nav-search-input" id="navSearch" placeholder="Search 46 tools..." autocomplete="off">
          <div class="search-dropdown" id="navDropdown"></div>
        </div>
        <ul class="nav-links">
          <li><a href="/index.html#health">Health</a></li>
          <li><a href="/index.html#finance">Finance</a></li>
          <li><a href="/index.html#kitchen">Kitchen</a></li>
          <li><a href="/index.html#lifestyle">Lifestyle</a></li>
          <li><a href="/index.html#business">Business</a></li>
          <li><a href="/index.html#eco">Eco</a></li>
          <li><a href="/converters/">Converters</a></li>
        </ul>
        <a href="https://www.mycalendartools.net" class="nav-sister-pill" target="_blank" rel="noopener">📅 MyCalendarTools</a>
        <a href="https://www.wheelnamepicker.com.au" class="nav-sister-pill" target="_blank" rel="noopener">🎡 WheelPicker</a>
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-mobile-menu" id="mobileMenu">
      <a href="/index.html#health">🏃 Health</a>
      <a href="/index.html#finance">💰 Finance</a>
      <a href="/index.html#kitchen">🍳 Kitchen</a>
      <a href="/index.html#lifestyle">🎯 Lifestyle</a>
      <a href="/index.html#business">📊 Business</a>
      <a href="/index.html#eco">🌱 Eco</a>
      <a href="/converters/">🔄 Converters</a>
      <a href="/about.html">About</a>
      <a href="https://www.mycalendartools.net" target="_blank" rel="noopener">📅 MyCalendarTools</a>
    </div>`;
  initSearch('navSearch', 'navDropdown');
  initHamburger();
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/index.html" class="nav-logo">
              <img src="/mycalctools-logo.png" alt="MyCalcTools logo" class="nav-logo-icon">
          <span class="nav-logo-text">MyCalcTools</span>
            </a>
            <p>Free online calculators for everyday life. No accounts, no noise. Just answers.</p>
            <p style="margin-top:8px;font-size:0.75rem">© 2025 MyCalcTools · Part of the Ascension Digital Group</p>
          </div>
          <div class="footer-col">
            <h4>Health & Body</h4>
            <ul>
              <li><a href="/bmi-calculator.html">BMI Calculator</a></li>
              <li><a href="/calorie-calculator.html">Calorie Calculator</a></li>
              <li><a href="/pregnancy-calculator.html">Pregnancy Calculator</a></li>
              <li><a href="/sleep-cycle-calculator.html">Sleep Cycle</a></li>
              <li><a href="/water-intake-calculator.html">Water Intake</a></li>
              <li><a href="/kids-growth-calculator.html">Kids Growth</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Finance</h4>
            <ul>
              <li><a href="/loan-calculator.html">Loan Calculator</a></li>
              <li><a href="/mortgage-calculator.html">Mortgage</a></li>
              <li><a href="/australian-tax-calculator.html">AU Tax</a></li>
              <li><a href="/superannuation-calculator.html">Superannuation</a></li>
              <li><a href="/hecs-help-calculator.html">HECS-HELP</a></li>
              <li><a href="/cost-of-living-calculator.html">Cost of Living</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Info</h4>
            <ul>
              <li><a href="/converters/">🔄 Converters</a>
      <a href="/about.html">About</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/terms.html">Terms of Use</a></li>
              <li><a href="/sitemap.html">Sitemap</a></li>
              <li><a href="https://www.mycalendartools.net" target="_blank" rel="noopener">📅 MyCalendarTools</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 MyCalcTools · Part of the <strong>Ascension Digital Group</strong></p>
          <p><a href="https://www.mycalendartools.net" target="_blank" rel="noopener" style="color:var(--dim)">Sister site: mycalendartools.net</a></p>
        </div>
      </div>
    </footer>`;
}

function renderGroupFooter() {
  document.getElementById('group-footer').innerHTML = `
    <div class="rs-footer">
      <img src="/ascension-digital-logo.jpg" alt="Ascension Digital" class="ascension-logo">
      <h3>Part of the Ascension Digital Group</h3>
      <p class="rs-footer-tagline">Elevating Your Digital Future</p>
      <div class="rs-footer-links">
        <a href="/index.html" title="MyCalcTools"><img src="/mycalctools-logo.png" alt="MyCalcTools" class="rs-footer-brand-icon"></a>
        <a href="https://www.mycalendartools.net" target="_blank" rel="noopener" title="MyCalendarTools"><img src="/mycalendartools-logo.png" alt="MyCalendarTools" class="rs-footer-brand-icon"></a>
        <a href="https://www.wheelnamepicker.com.au" target="_blank" rel="noopener" title="WheelNamePicker"><img src="/wheelnamepicker-logo.png" alt="WheelNamePicker" class="rs-footer-brand-icon"></a>
        <a href="https://zyiacreations.etsy.com" target="_blank" rel="noopener" title="Zyia Creations"><img src="/zyia-creations.png" alt="Zyia Creations" class="rs-footer-brand-icon"></a>
        <a href="https://www.facebook.com/share/18Ma3KsJTo/" target="_blank" rel="noopener" title="Feed the Feed"><img src="/feed-the-feed.jpg" alt="Feed the Feed" class="rs-footer-brand-icon"></a>
        <a href="http://www.youtube.com/@spewcrewkids" target="_blank" rel="noopener" title="Spew Crew Kids"><img src="/spew-crew.jpg" alt="Spew Crew Kids" class="rs-footer-brand-icon" style="background:#000;border-radius:8px"></a>
        <a href="https://mysticalmoments.pages.dev" target="_blank" rel="noopener" title="Mystical Moments"><img src="/mystical-moments.png" alt="Mystical Moments" class="rs-footer-brand-icon"></a>
        <a href="https://ravensharppod.pages.dev/login" target="_blank" rel="noopener" title="RavenSharp"><img src="/ravensharp-logo.jpg" alt="RavenSharp" class="rs-footer-brand-icon"></a>

      </div>
      <a href="/about.html#support" class="btn-finance" style="margin-top:8px">Support Us</a>
    </div>`;
}

function renderAdLeaderboard(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `<div class="ad-leaderboard container">
    <div class="ad-placeholder leaderboard">AdSense 728 x 90 placeholder</div>
  </div>`;
}

function renderFinanceBanner() {
  return `<div class="finance-banner">
    <h3>🏦 Looking for the best home loan or finance deal?</h3>
    <p>We work with a brokerage network of 75+ lenders — full market comparison, expert brokers, no obligation. Get matched to the right product.</p>
    <button class="btn-finance" onclick="window.location.href='<!-- INSERT BROKER LEAD FORM LINK -->'">Get a Free Finance Consultation</button>
    <small>Referral partnership · Australian credit licence</small>
  </div>`;
}

function initSearch(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !dropdown) return;
  input.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (!q) { dropdown.classList.remove('open'); return; }
    const results = ALL_TOOLS.filter(t => t.name.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q)).slice(0, 8);
    if (!results.length) { dropdown.classList.remove('open'); return; }
    dropdown.innerHTML = results.map(t =>
      `<a href="/${t.file}" class="search-result-item">
        <span style="font-size:1.2rem">${t.emoji}</span>
        <div><div>${t.name}</div><div class="search-result-cat">${t.cat}</div></div>
      </a>`).join('');
    dropdown.classList.add('open');
  });
  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => { btn.classList.toggle('open'); menu.classList.toggle('open'); });
  }
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      const open = btn.classList.contains('open');
      document.querySelectorAll('.faq-question.open').forEach(b => { b.classList.remove('open'); b.nextElementSibling.classList.remove('open'); });
      if (!open) { btn.classList.add('open'); ans.classList.add('open'); }
    });
  });
}

function initPage() {
  renderBrandStrip();
  renderNav();
  renderFooter();
  renderGroupFooter();
  initFAQ();
  const ha = document.getElementById('hosting-affiliate');
  if (ha) ha.innerHTML = renderHostingAffiliate();
}

document.addEventListener('DOMContentLoaded', initPage);


function renderRavenSharpPromo() {
  return `<div class="soft-promo-card card container">
    <img src="/ravensharp-logo.jpg" alt="RavenSharp">
    <div><h3>RavenSharp Tools</h3><p>AI-assisted formatting, fixing and file tools from the Ascension Digital Group.</p></div>
    <a class="btn-finance" href="https://ravensharppod.pages.dev/login" target="_blank" rel="noopener">Open RavenSharp</a>
  </div>`;
}

function renderHostingAffiliate() {
  return `<div class="affiliate-banner card container"><a href="https://ventraip.com.au/affiliate/uJmhYi4h" target="_blank" rel="sponsored noopener"><img src="/ventraip-affiliate-banner.jpg" alt="VentraIP Australian website hosting affiliate banner"></a></div>`;
}
