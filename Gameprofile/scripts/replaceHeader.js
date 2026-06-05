const fs = require('fs');
const path = 'index.html';
let s = fs.readFileSync(path, 'utf8');
const newHeader = `  <header class="site-header steam-header">
    <div class="steam-left">
      <div class="brand"><img src="covers/730.jpg" class="steam-logo" alt="logo"/> GameStation</div>
      <nav class="steam-nav" role="navigation" aria-label="Main">
        <a class="nav-item active" href="#">Store</a>
        <a class="nav-item" href="#">Library</a>
        <a class="nav-item" href="#">Community</a>
        <a class="nav-item" href="#">About</a>
      </nav>
    </div>
    <div class="steam-center">
      <div class="search"><input id="search" placeholder="Search the store..." /></div>
    </div>
    <div class="steam-right">
      <button id="cartBtn" class="icon-btn">Cart (<span id="cartCount">0</span>)</button>
      <div class="account">
        <button id="profileBtn" class="profile-btn">Guest ▾</button>
        <div id="accountMenu" class="account-menu hidden">
          <a href="#" id="loginBtn">Log in</a>
          <a href="#" id="signupBtn">Sign up</a>
          <a href="#" id="profileLink" class="hidden">Profile</a>
        </div>
      </div>
    </div>
  </header>`;

const replaced = s.replace(/<header[\s\S]*?<\/header>/, newHeader);
if (replaced === s) {
  console.log('no header replaced');
  process.exit(0);
}
fs.writeFileSync(path, replaced, 'utf8');
console.log('header replaced');
