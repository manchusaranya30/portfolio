*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:#0f172a;
color:white;
line-height:1.6;
}

/* HERO */

.hero{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
background:
linear-gradient(
135deg,
#06b6d4,
#2563eb,
#7c3aed
);
}

.profile-pic{
width:200px;
height:200px;
border-radius:50%;
object-fit:cover;
border:5px solid white;
margin-bottom:20px;
box-shadow:0 0 40px white;
}

.hero h1{
font-size:4rem;
}

.tagline{
font-size:1.3rem;
margin-top:15px;
min-height:40px;
}

.cgpa{
margin-top:10px;
font-size:1.2rem;
color:#fde047;
font-weight:bold;
}

.hero-buttons{
margin-top:25px;
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
}

.btn,
.github-btn,
.linkedin-btn{
padding:12px 25px;
border-radius:30px;
text-decoration:none;
color:white;
font-weight:bold;
transition:.3s;
}

.btn{
background:#111827;
}

.github-btn{
background:#24292e;
}

.linkedin-btn{
background:#0077b5;
}

.btn:hover,
.github-btn:hover,
.linkedin-btn:hover{
transform:translateY(-5px);
}

/* NAVBAR */

nav{
background:#111827;
padding:18px;
display:flex;
justify-content:center;
gap:25px;
position:sticky;
top:0;
z-index:100;
}

nav a{
color:white;
text-decoration:none;
font-weight:600;
}

nav a:hover{
color:#06b6d4;
}

/* SECTIONS */

section{
padding:80px 10%;
}

section h2{
text-align:center;
font-size:2.2rem;
margin-bottom:30px;
color:#06b6d4;
}

/* CARDS */

.card{
background:#1e293b;
padding:25px;
border-radius:20px;
transition:.4s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 0 25px #06b6d4;
}

/* PROJECT GRID */

.project-grid{
display:grid;
grid-template-columns:
repeat(auto-fit,minmax(280px,1fr));
gap:20px;
}

/* SKILLS */

.skill{
margin-bottom:20px;
}

.progress{
background:#334155;
border-radius:30px;
overflow:hidden;
}

.progress-bar{
background:#06b6d4;
padding:8px;
text-align:right;
font-weight:bold;
}

/* CONTACT */

#contact{
text-align:center;
}

#contact a{
color:#06b6d4;
text-decoration:none;
}

/* FOOTER */

footer{
text-align:center;
padding:20px;
background:#111827;
}

/* MOBILE */

@media(max-width:768px){

.hero h1{
font-size:2.3rem;
}

.profile-pic{
width:150px;
height:150px;
}

nav{
flex-wrap:wrap;
}

}
