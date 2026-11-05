const heroes = ['Ninja','Scout','Nurse','Guard','Driver','Engineer','Sergeant','Alien','Cyber'];
const grid = document.querySelector('#heroes-grid');
heroes.forEach((name,index)=>{const tile=document.createElement('article');tile.className='hero-tile';const number=document.createElement('span');number.className='hero-number';number.textContent=String(index+1).padStart(2,'0');const portrait=document.createElement('img');portrait.className='hero-portrait';portrait.src='assets/heroes/'+name.toLowerCase()+'.webp';portrait.alt=name+' character portrait';portrait.loading='lazy';portrait.decoding='async';const copy=document.createElement('div');const title=document.createElement('h3');title.textContent=name.toUpperCase();const subtitle=document.createElement('p');subtitle.textContent='PLAYABLE HERO';copy.append(title,subtitle);tile.append(number,copy,portrait);grid.append(tile)});
// Teaser card: not counted as a playable hero.
if (grid) {
  const tile=document.createElement('article');
  tile.className='hero-tile mystery-tile';
  const number=document.createElement('span');number.className='hero-number';number.textContent='??';
  const portrait=document.createElement('img');portrait.className='hero-portrait';portrait.src='assets/heroes/mystery.webp';portrait.alt='Mysterious unrevealed future hero silhouette';portrait.loading='lazy';portrait.decoding='async';
  const copy=document.createElement('div');
  const title=document.createElement('h3');title.textContent='WHO’S NEXT?';
  const subtitle=document.createElement('p');subtitle.textContent='MORE HEROES COMING LATER';
  copy.append(title,subtitle);tile.append(number,copy,portrait);grid.append(tile);
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav-links');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();
