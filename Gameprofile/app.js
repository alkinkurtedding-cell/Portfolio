// Real Steam trending games sample data with downloaded cover headers
const games = [
  {id:730,title:'Counter-Strike 2',genre:'FPS',price:0.00,cover:'covers/730.jpg',rating:4.6,developer:'Valve',description:'Competitive team shooter.'},
  {id:570,title:'Dota 2',genre:'MOBA',price:0.00,cover:'covers/570.jpg',rating:4.7,developer:'Valve',description:'Free-to-play multiplayer strategy.'},
  {id:1086940,title:'Baldur\'s Gate 3',genre:'RPG',price:59.99,cover:'covers/1086940.jpg',rating:4.9,developer:'Larian Studios',description:'Epic CRPG with branching choice.'},
  {id:1091500,title:'Cyberpunk 2077',genre:'RPG',price:39.99,cover:'covers/1091500.jpg',rating:4.1,developer:'CD PROJEKT RED',description:'Open-world sci-fi adventure.'},
  {id:990080,title:'Hogwarts Legacy',genre:'Adventure',price:49.99,cover:'covers/990080.jpg',rating:4.3,developer:'Avalanche Software',description:'Wizarding world open-world RPG.'},
  {id:1716740,title:'Starfield',genre:'RPG',price:59.99,cover:'covers/1716740.jpg',rating:4.2,developer:'Bethesda',description:'Space exploration and roleplay.'},
  {id:2050650,title:'Resident Evil 4',genre:'Horror',price:39.99,cover:'covers/2050650.jpg',rating:4.8,developer:'Capcom',description:'Modern remake of survival horror.'},
  {id:1245620,title:'Elden Ring',genre:'RPG',price:59.99,cover:'covers/1245620.jpg',rating:4.9,developer:'FromSoftware',description:'Open-world soulslike adventure.'},
  {id:892970,title:'Valheim',genre:'Survival',price:19.99,cover:'covers/892970.jpg',rating:4.6,developer:'Iron Gate',description:'Viking survival exploration.'},
  {id:271590,title:'Grand Theft Auto V',genre:'Open world',price:29.99,cover:'covers/271590.jpg',rating:4.7,developer:'Rockstar Games',description:'Crime epic with online mode.'},
  {id:105600,title:'Terraria',genre:'Adventure',price:9.99,cover:'covers/105600.jpg',rating:4.8,developer:'Re-Logic',description:'2D crafting and exploration.'},
  {id:413150,title:'Stardew Valley',genre:'Simulation',price:14.99,cover:'covers/413150.jpg',rating:4.9,developer:'ConcernedApe',description:'Relaxing farming sim.'},
  {id:252490,title:'Rust',genre:'Survival',price:39.99,cover:'covers/252490.jpg',rating:4.0,developer:'Facepunch Studios',description:'Harsh online survival.'},
  {id:1172470,title:'Apex Legends',genre:'FPS',price:0.00,cover:'covers/1172470.jpg',rating:4.4,developer:'Respawn',description:'Free-to-play battle royale.'},
  {id:381210,title:'Dead by Daylight',genre:'Horror',price:19.99,cover:'covers/381210.jpg',rating:4.1,developer:'Behaviour Interactive',description:'Multiplayer asymmetrical horror.'},
  {id:1604030,title:'Sons of the Forest',genre:'Horror',price:29.99,cover:'covers/1604030.jpg',rating:4.0,developer:'Endnight',description:'Survival horror sequel.'},
  {id:1794680,title:'Vampire Survivors',genre:'Indie',price:4.99,cover:'covers/1794680.jpg',rating:4.6,developer:'Poncle',description:'Minimalist action roguelike.'},
  {id:292030,title:'The Witcher 3: Wild Hunt',genre:'RPG',price:29.99,cover:'covers/292030.jpg',rating:4.9,developer:'CD PROJEKT RED',description:'Story-rich fantasy RPG.'},
  {id:1172620,title:'Sea of Thieves',genre:'Adventure',price:29.99,cover:'covers/1172620.jpg',rating:4.2,developer:'Rare',description:'Pirate adventure on the open sea.'},
  {id:255710,title:'Cities: Skylines',genre:'Simulation',price:29.99,cover:'covers/255710.jpg',rating:4.8,developer:'Colossal Order',description:'City-building management sim.'},
  {id:1145360,title:'Hades',genre:'Action',price:24.99,cover:'covers/1145360.jpg',rating:4.9,developer:'Supergiant',description:'Fast-paced roguelike combat.'},
  {id:582010,title:'Monster Hunter: World',genre:'Action',price:29.99,cover:'covers/582010.jpg',rating:4.5,developer:'Capcom',description:'Hunt giant monsters in groups.'},
  {id:72850,title:'The Elder Scrolls V: Skyrim',genre:'RPG',price:39.99,cover:'covers/72850.jpg',rating:4.8,developer:'Bethesda',description:'Legendary open-world fantasy.'},
  {id:1174180,title:'Red Dead Redemption 2',genre:'Action',price:59.99,cover:'covers/1174180.jpg',rating:4.9,developer:'Rockstar Games',description:'Western story in an open world.'},
  {id:359550,title:'Rainbow Six Siege',genre:'FPS',price:19.99,cover:'covers/359550.jpg',rating:4.3,developer:'Ubisoft',description:'Tactical team-based shooter.'},
  {id:739630,title:'Phasmophobia',genre:'Horror',price:13.99,cover:'covers/739630.jpg',rating:4.5,developer:'Kinetic Games',description:'Co-op ghost hunting horror.'},
  {id:1449850,title:'Helldivers 2',genre:'Shooter',price:39.99,cover:'covers/1449850.jpg',rating:4.4,developer:'Arrowhead',description:'Co-op tactical top-down shooter.'},
  {id:1938090,title:'Call of Duty: Modern Warfare II',genre:'FPS',price:59.99,cover:'covers/1938090.jpg',rating:4.2,developer:'Infinity Ward',description:'Modern military shooter.'},
  {id:218620,title:'Payday 2',genre:'Action',price:9.99,cover:'covers/218620.jpg',rating:4.0,developer:'Starbreeze',description:'Co-op bank robbery simulator.'},
  {id:367520,title:'Hollow Knight',genre:'Indie',price:14.99,cover:'covers/367520.jpg',rating:4.9,developer:'Team Cherry',description:'Metroidvania exploration adventure.'}
];

const gameExtras = {
  730: { trailer:'M1j9HF3pDgQ' },
  570: { trailer:'x55J-qkN13s' },
  1086940: { trailer:'mqefzzi4m6A' },
  1091500: { trailer:'qIcTM8WXFjk' },
  990080: { trailer:'SBR3lK8GYtA' },
  1716740: { trailer:'m_Nj6If1R1E' },
  2050650: { trailer:'qZmDGYUcj24' },
  1245620: { trailer:'E3XUFzC1aoY' },
  892970: { trailer:'Nmzgz6gWB-I' },
  271590: { trailer:'QkkoHAzjnUs' },
  105600: { trailer:'stCqY4mQ9eA' },
  413150: { trailer:'ZCShLRPv4ys' },
  252490: { trailer:'zvG-WaT-o-c' },
  1172470: { trailer:'eoqAqQU9KDE' },
  381210: { trailer:'_bRj3wAayGc' },
  1604030: { trailer:'prl0Igl_YMc' },
  1794680: { trailer:'yStpqO6T2Qg' },
  292030: { trailer:'c0i88t0Kacs' },
  1172620: { trailer:'k6REOVI4ZPs' },
  255710: { trailer:'jIsuU8c3w8U' },
  1145360: { trailer:'c4SPi0egYeY' },
  582010: { trailer:'HF-x4cmXMnA' },
  72850: { trailer:'7aAoU0uupDY' },
  1174180: { trailer:'zcYvSF6S8n4' },
  359550: { trailer:'W3MQZC2W_44' },
  739630: { trailer:'sTAXVfX47rU' },
  1449850: { trailer:'ru9VPT0ELkI' },
  1938090: { trailer:'2a5rUu1xgNk' },
  218620: { trailer:'5xM9XlFg8PQ' },
  367520: { trailer:'4H444gh0fSg' }
};

window.games = games;

// Available cover files (from covers/ folder)
const coverFiles = [
  'covers/105600.jpg','covers/1086940.jpg','covers/1091500.jpg','covers/1145360.jpg','covers/1172470.jpg','covers/1172620.jpg','covers/1174180.jpg','covers/1222670.jpg','covers/1245620.jpg','covers/1285190.jpg',
  'covers/1407200.jpg','covers/1449850.jpg','covers/1604030.jpg','covers/1677280.jpg','covers/1716740.jpg','covers/1771300.jpg','covers/1794680.jpg','covers/1808500.jpg','covers/1809540.jpg','covers/1938090.jpg',
  'covers/1962700.jpg','covers/1971870.jpg','covers/2050650.jpg','covers/2119830.jpg','covers/218620.jpg','covers/220200.jpg','covers/227300.jpg','covers/230410.jpg','covers/2344520.jpg','covers/2357570.jpg',
  'covers/236390.jpg','covers/2479810.jpg','covers/2507950.jpg','covers/252490.jpg','covers/255710.jpg','covers/264710.jpg','covers/2681030.jpg','covers/2694490.jpg','covers/270880.jpg','covers/271590.jpg',
  'covers/2767030.jpg','covers/2807960.jpg','covers/2868840.jpg','covers/292030.jpg','covers/3008130.jpg','covers/3105440.jpg','covers/311210.jpg','covers/3164500.jpg','covers/3240220.jpg','covers/3241660.jpg',
  'covers/3321460.jpg','covers/3526710.jpg','covers/359550.jpg','covers/367520.jpg','covers/381210.jpg','covers/413150.jpg','covers/440900.jpg','covers/553850.jpg','covers/570.jpg','covers/578080.jpg',
  'covers/582010.jpg','covers/582660.jpg','covers/601150.jpg','covers/72850.jpg','covers/730.jpg','covers/739630.jpg','covers/848450.jpg','covers/892970.jpg','covers/979110.jpg','covers/990080.jpg'
];
const coverCount = coverFiles.length;

// Assign screenshots (3 distinct) and preserve trailers where provided
games.forEach((game, idx) => {
  const extras = gameExtras[game.id] || {};
  if (extras.trailer) game.trailer = extras.trailer;

  // find index of the game's cover in coverFiles, fallback to idx
  let i = coverFiles.indexOf(game.cover);
  if (i === -1) i = idx % coverCount;

  // make description longer (append informative paragraph)
  const extraDesc = ' This expanded description highlights core gameplay systems, modes, progression, and what makes the experience unique. Expect deep mechanics, community content, and many hours of play.';
  if (!game.description || game.description.length < 40) game.description = (game.description || '') + extraDesc;
  else if (!game.description.includes(extraDesc)) game.description = game.description + extraDesc;
});

const genres = ['All','FPS','MOBA','RPG','Adventure','Survival','Open world','Simulation','Horror','Indie','Action','Shooter','Strategy','Racing','Platformer','Party','Puzzle','Roguelike','Sports','Sandbox','Fighting'];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const genreSelect = document.getElementById('genreSelect');
const sortSelect = document.getElementById('sortSelect');
const cartBtn = document.getElementById('cartBtn');
const cartEl = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');

let cart = JSON.parse(localStorage.getItem('cart')||'[]');

function init(){
  populateGenres();
  renderGrid(games);
  bind();
  updateCartUI();
  applySavedTheme();
  updateAuthUI();
}

function populateGenres(){
  genres.forEach(g=>{
    const opt=document.createElement('option');
    opt.value=g.toLowerCase();
    opt.textContent=g;
    genreSelect.appendChild(opt);
  });
}

function renderGrid(list){
  grid.innerHTML='';
  if(list.length===0){
    grid.innerHTML='<div class="empty">No games match your search.</div>';
    return;
  }
  list.forEach(g=>grid.appendChild(cardFor(g)));
}

function cardFor(game){
  const el=document.createElement('article');
  el.className='card';

  const art=document.createElement('div');
  art.className='art';
  const img=document.createElement('img');
  img.src=game.cover;
  img.alt=`${game.title} cover`;
  img.loading='lazy';
  art.appendChild(img);

  const title=document.createElement('div');
  title.className='title';
  title.textContent=game.title;

  const desc=document.createElement('div');
  desc.className='description';
  desc.textContent=game.description;

  const meta=document.createElement('div');
  meta.className='meta';
  meta.innerHTML=`<div class="genre">${game.genre}</div><div class="price">${game.price===0? 'Free' : '$'+game.price.toFixed(2)}</div>`;

  const info=document.createElement('div');
  info.className='info';
  info.innerHTML=`<span>${game.developer}</span><span>${game.rating.toFixed(1)} ★</span>`;

  const btn=document.createElement('button');
  btn.className='btn';
  btn.textContent='Add to cart';
  btn.onclick=(e)=>{ e.stopPropagation(); addToCart(game); };
  el.dataset.id = game.id;

  el.appendChild(art);
  el.appendChild(title);
  el.appendChild(desc);
  el.appendChild(meta);
  el.appendChild(info);
  el.appendChild(btn);
  return el;
}

function bind(){
  searchInput.addEventListener('input',applyFilters);
  genreSelect.addEventListener('change',applyFilters);
  sortSelect.addEventListener('change',applyFilters);
  cartBtn.addEventListener('click',()=>toggleCart(true));
  closeCart.addEventListener('click',()=>toggleCart(false));
  document.getElementById('checkout').addEventListener('click',()=>{toastMsg('Checkout simulated — thanks!');cart=[];saveCart();updateCartUI();});

  // Auth buttons
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const profileBtn = document.getElementById('profileBtn');
  const themeToggle = document.getElementById('themeToggle');

  loginBtn.addEventListener('click',()=>document.getElementById('loginModal').classList.remove('hidden'));
  signupBtn.addEventListener('click',()=>document.getElementById('signupModal').classList.remove('hidden'));
  profileBtn.addEventListener('click',()=>document.getElementById('profileModal').classList.remove('hidden'));
  document.getElementById('loginClose').addEventListener('click',()=>document.getElementById('loginModal').classList.add('hidden'));
  document.getElementById('signupClose').addEventListener('click',()=>document.getElementById('signupModal').classList.add('hidden'));
  document.getElementById('profileClose').addEventListener('click',()=>document.getElementById('profileModal').classList.add('hidden'));

  document.getElementById('loginSubmit').addEventListener('click',loginSubmit);
  document.getElementById('signupSubmit').addEventListener('click',signupSubmit);
  document.getElementById('logoutBtn').addEventListener('click',logout);

  themeToggle.addEventListener('click',toggleTheme);
}

function applyFilters(){
  const q=searchInput.value.trim().toLowerCase();
  const g=genreSelect.value;
  let out=games.filter(x=>{
    if(g!=='all' && g!=='') if(x.genre.toLowerCase()!==g) return false;
    if(q==='') return true;
    return x.title.toLowerCase().includes(q) || x.genre.toLowerCase().includes(q) || x.developer.toLowerCase().includes(q) || x.description.toLowerCase().includes(q);
  });
  const sort=sortSelect.value;
  if(sort==='price-asc') out.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') out.sort((a,b)=>b.price-a.price);
  if(sort==='new') out = out.slice().reverse();
  if(sort==='popular') out = out.slice();
  renderGrid(out);
}

function loginSubmit(){
  const email=document.getElementById('loginEmail').value.trim();
  const pw=document.getElementById('loginPassword').value;
  const users=JSON.parse(localStorage.getItem('users')||'[]');
  const u=users.find(x=>x.email===email && x.password===pw);
  if(u){ localStorage.setItem('currentUser',JSON.stringify(u)); document.getElementById('loginModal').classList.add('hidden'); toastMsg('Logged in'); updateAuthUI(); }
  else toastMsg('Invalid credentials');
}

function signupSubmit(){
  const name=document.getElementById('signupName').value.trim();
  const email=document.getElementById('signupEmail').value.trim();
  const pw=document.getElementById('signupPassword').value;
  if(!name||!email||!pw){ toastMsg('Fill all fields'); return; }
  const users=JSON.parse(localStorage.getItem('users')||'[]');
  if(users.find(x=>x.email===email)){ toastMsg('Email already registered'); return; }
  const user={id:Date.now(),name,email,password:pw};
  users.push(user); localStorage.setItem('users',JSON.stringify(users)); localStorage.setItem('currentUser',JSON.stringify(user)); document.getElementById('signupModal').classList.add('hidden'); toastMsg('Account created'); updateAuthUI();
}

function logout(){ localStorage.removeItem('currentUser'); document.getElementById('profileModal').classList.add('hidden'); toastMsg('Logged out'); updateAuthUI(); }

function updateAuthUI(){
  const cur=JSON.parse(localStorage.getItem('currentUser')||'null');
  const profileBtn=document.getElementById('profileBtn');
  const loginBtn=document.getElementById('loginBtn');
  const signupBtn=document.getElementById('signupBtn');
  if(cur){ profileBtn.classList.remove('hidden'); loginBtn.classList.add('hidden'); signupBtn.classList.add('hidden'); document.getElementById('profileInfo').innerHTML=`<div><strong>${cur.name}</strong></div><div>${cur.email}</div>`; }
  else { profileBtn.classList.add('hidden'); loginBtn.classList.remove('hidden'); signupBtn.classList.remove('hidden'); document.getElementById('profileInfo').innerHTML=''; }
}

function addToCart(game){
  const found=cart.find(i=>i.id===game.id);
  if(found) found.qty++;
  else cart.push({id:game.id,title:game.title,price:game.price,qty:1});
  saveCart();
  updateCartUI();
  toastMsg('Added to cart');
}

function saveCart(){localStorage.setItem('cart',JSON.stringify(cart));}

function updateCartUI(){
  cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
  cartItemsEl.innerHTML='';
  if(cart.length===0){ cartItemsEl.innerHTML='<div class="cart-empty">Your cart is empty.</div>'; }
  cart.forEach(item=>{
    const div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`<div class="cart-thumb">${item.title.split(' ')[0]}</div><div class="cart-info"><strong>${item.title}</strong><div class="cart-meta">${item.qty} × ${item.price===0? 'Free' : '$'+item.price.toFixed(2)}</div></div><div class="cart-cost">${item.price===0? 'Free' : '$'+(item.qty*item.price).toFixed(2)}</div>`;
    cartItemsEl.appendChild(div);
  });
  cartTotal.textContent = cart.reduce((s,i)=>s+i.qty*i.price,0).toFixed(2);
}

function toggleCart(show){
  if(show){cartEl.classList.remove('hidden');cartEl.setAttribute('aria-hidden','false');}
  else {cartEl.classList.add('hidden');cartEl.setAttribute('aria-hidden','true');}
}

function toastMsg(text){toast.textContent=text;toast.style.display='block';setTimeout(()=>toast.style.display='none',1600);}

function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

function applySavedTheme(){
  const t=localStorage.getItem('theme'); if(t==='dark') document.body.classList.add('dark');
}

init();
