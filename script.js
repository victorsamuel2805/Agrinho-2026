<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>AgroTech Experience</title>

<!--
========================================================
AGROTECH EXPERIENCE 2026
Licença MIT — uso livre comercial e pessoal.

Imagens e vídeos:
Pexels
Pixabay
Unsplash

Tecnologias:
HTML5
CSS3
Vanilla JS
TSParticles

Criado para experiências premium futuristas.
========================================================
-->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"></script>

<style>

:root{
  --primary:#2E7D32;
  --secondary:#66BB6A;
  --accent:#A5D6A7;
  --dark:#081C15;
  --dark2:#0F2D24;
  --light:#F1F8F4;
  --glass:rgba(255,255,255,.08);
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Inter',sans-serif;
  overflow-x:hidden;
  background:
  linear-gradient(
    135deg,
    #081C15,
    #1B4332,
    #2D6A4F
  );

  background-size:400% 400%;
  animation:bg 15s ease infinite;
  color:white;
}

@keyframes bg{
  0%{background-position:0 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0 50%;}
}

#tsparticles{
  position:fixed;
  inset:0;
  z-index:-1;
}

header{
  position:fixed;
  width:100%;
  top:0;
  z-index:999;
  backdrop-filter:blur(12px);
  background:rgba(0,0,0,.2);
  border-bottom:1px solid rgba(255,255,255,.1);
}

nav{
  width:90%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 0;
}

.logo{
  font-size:1.5rem;
  font-weight:800;
}

nav ul{
  display:flex;
  gap:30px;
  list-style:none;
}

nav a{
  text-decoration:none;
  color:white;
  font-weight:500;
  transition:.3s;
}

nav a:hover{
  color:var(--accent);
}

.hero{
  position:relative;
  height:100vh;
  overflow:hidden;
}

.hero video{
  position:absolute;
  width:100%;
  height:100%;
  object-fit:cover;
}

.overlay{
  position:absolute;
  inset:0;
  background:
  linear-gradient(
    rgba(0,0,0,.4),
    rgba(0,0,0,.8)
  );
}

.hero-content{
  position:relative;
  z-index:2;
  top:50%;
  transform:translateY(-50%);
  text-align:center;
  width:90%;
  margin:auto;
}

.hero h1{
  font-size:6rem;
  font-weight:900;
  line-height:1;
}

.hero span{
  color:var(--accent);
}

.hero p{
  margin-top:25px;
  font-size:1.3rem;
  max-width:800px;
  margin-inline:auto;
  line-height:1.7;
}

.btn{
  margin-top:35px;
  padding:18px 36px;
  border:none;
  border-radius:50px;

  background:
  linear-gradient(
    45deg,
    #2E7D32,
    #66BB6A
  );

  color:white;
  font-size:1rem;
  font-weight:700;
  cursor:pointer;
  transition:.4s;
}

.btn:hover{
  transform:scale(1.05);
  box-shadow:
  0 10px 30px rgba(76,175,80,.5);
}

section{
  padding:120px 10%;
}

.title{
  font-size:3rem;
  margin-bottom:50px;
  font-weight:800;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:30px;
}

.card{
  padding:35px;
  border-radius:24px;
  overflow:hidden;
  transition:.4s;
}

.card:hover{
  transform:
  translateY(-10px)
  scale(1.02);

  box-shadow:
  0 20px 50px rgba(0,0,0,.3);
}

.glass{
  backdrop-filter:blur(12px);
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.1);
  box-shadow:
  0 8px 30px rgba(0,0,0,.2);
}

.card h2{
  margin-bottom:20px;
  font-size:1.7rem;
}

.card p{
  line-height:1.8;
  opacity:.9;
}

.dashboard{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:25px;
}

.stat-card{
  padding:40px;
  border-radius:25px;
  text-align:center;
}

.counter{
  font-size:4rem;
  font-weight:900;
  color:var(--accent);
}

.ai-section{
  text-align:center;
}

.ai-section p{
  max-width:800px;
  margin:auto;
  line-height:1.9;
  margin-top:20px;
}

.gallery{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:20px;
}

.gallery img{
  width:100%;
  height:350px;
  object-fit:cover;
  border-radius:24px;
  transition:.5s;
}

.gallery img:hover{
  transform:scale(1.03);
}

.fade-up{
  opacity:0;
  transform:translateY(80px);
  transition:
  opacity .8s ease,
  transform .8s ease;
}

.fade-up.show{
  opacity:1;
  transform:translateY(0);
}

footer{
  text-align:center;
  padding:60px 20px;
  opacity:.7;
}

.toggle-theme{
  position:fixed;
  right:20px;
  bottom:20px;
  width:60px;
  height:60px;
  border:none;
  border-radius:50%;
  background:var(--primary);
  color:white;
  cursor:pointer;
  font-size:1.2rem;
  z-index:999;
}

.light-mode{
  background:#f4fff5;
  color:#111;
}

.light-mode header{
  background:rgba(255,255,255,.7);
}

.light-mode nav a{
  color:#111;
}

@media(max-width:768px){

  .hero h1{
    font-size:3rem;
  }

  nav ul{
    display:none;
  }

  .title{
    font-size:2rem;
  }

}

</style>
</head>
<body>

<div id="tsparticles"></div>

<header>

<nav>

<div class="logo">
🌍 AgroTech
</div>

<ul>
<li><a href="#about">Sobre</a></li>
<li><a href="#esg">ESG</a></li>
<li><a href="#ai">IA</a></li>
<li><a href="#gallery">Galeria</a></li>
</ul>

</nav>

</header>

<section class="hero">

<video
autoplay
muted
loop
playsinline
id="heroVideo"
>

<source
src="https://player.vimeo.com/external/371433846.sd.mp4?s=2367516bdf1f73c5bb0f3d65c7f5f6cbcf31b0f8&profile_id=139&oauth2_token_id=57447761"
type="video/mp4"
>

</video>

<div class="overlay"></div>

<div class="hero-content fade-up">

<h1>
Agricultura <span>Inteligente</span>
</h1>

<p>
Tecnologia, IA, sustentabilidade e monitoramento climático
em uma experiência visual futurista inspirada em Apple,
Tesla e Nature Tech.
</p>

<button class="btn">
Explorar Futuro
</button>

</div>

</section>

<section id="about">

<h2 class="title fade-up">
🌱 Agricultura Regenerativa
</h2>

<div class="grid">

<div class="card glass fade-up">
<h2>Solo Inteligente</h2>
<p>
Monitoramento em tempo real da saúde do solo,
retenção hídrica e biodiversidade sustentável.
</p>
</div>

<div class="card glass fade-up">
<h2>Energia Limpa</h2>
<p>
Painéis solares, sensores IoT e automação verde
reduzindo impactos ambientais.
</p>
</div>

<div class="card glass fade-up">
<h2>Sustentabilidade Hídrica</h2>
<p>
Uso eficiente da água com inteligência artificial
e análise preditiva climática.
</p>
</div>

</div>

</section>

<section id="esg">

<h2 class="title fade-up">
📊 Dashboard ESG
</h2>

<div class="dashboard">

<div class="stat-card glass fade-up">
<h3 class="counter" data-target="1500">0</h3>
<p>Toneladas CO₂ reduzidas</p>
</div>

<div class="stat-card glass fade-up">
<h3 class="counter" data-target="98">0</h3>
<p>% Eficiência hídrica</p>
</div>

<div class="stat-card glass fade-up">
<h3 class="counter" data-target="320">0</h3>
<p>Fazendas monitoradas</p>
</div>

<div class="stat-card glass fade-up">
<h3 class="counter" data-target="85">0</h3>
<p>% Energia renovável</p>
</div>

</div>

</section>

<section id="ai" class="ai-section">

<h2 class="title fade-up">
🤖 Monitoramento Inteligente por IA
</h2>

<p class="fade-up">
Sensores, satélites, drones e algoritmos de IA monitoram
o solo em tempo real, detectando umidade, nutrientes,
pragas e mudanças climáticas antes que elas impactem
a produção agrícola.
</p>

</section>

<section id="gallery">

<h2 class="title fade-up">
📸 AgroTech Gallery
</h2>

<div class="gallery">

<img
class="fade-up"
src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg"
alt="Agricultura"
/>

<img
class="fade-up"
src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg"
alt="Drone"
/>

<img
class="fade-up"
src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
alt="Plantação"
/>

</div>

</section>

<footer>

© 2026 AgroTech Experience
<br><br>
Licença MIT — uso livre comercial e pessoal.
<br>
Assets gratuitos via Pexels/Pixabay/Unsplash.

</footer>

<button class="toggle-theme">
🌙
</button>

<script>

const heroVideo =
document.getElementById("heroVideo");

window.addEventListener(
"scroll",
() => {

if(heroVideo.paused){
heroVideo.play();
}

heroVideo.muted = false;

},
{ once:true }
);

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document
.querySelectorAll(".fade-up")
.forEach(el=>observer.observe(el));

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

const toggle =
document.querySelector(".toggle-theme");

toggle.onclick=()=>{

document.body.classList.toggle("light-mode");

};

tsParticles.load("tsparticles",{

fpsLimit:60,

particles:{
number:{
value:50
},

color:{
value:"#A5D6A7"
},

links:{
enable:true,
color:"#A5D6A7",
distance:120,
opacity:.2
},

move:{
enable:true,
speed:1
},

size:{
value:{min:1,max:4}
},

opacity:{
value:.5
}

},

background:{
color:"transparent"
}

});

</script>

</body>
</html> 