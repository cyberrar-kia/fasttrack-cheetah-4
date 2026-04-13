"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340 0%,#1A3A70 55%,#0C4A6E 100%)", padding:"100px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"rgba(245,130,10,0.07)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-60, left:-60, width:300, height:300, borderRadius:"50%", background:"rgba(255,255,255,0.03)", pointerEvents:"none" }} />
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:20, background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", padding:"6px 16px", borderRadius:50, fontSize:12, fontWeight:700, color:"#FFB366", letterSpacing:"0.5px" }}>🚂 FastTrack Literacy™ by CHEETAH®</div>
              <h1 style={{ fontSize:"clamp(34px,5vw,56px)", fontWeight:900, color:"white", marginBottom:20, lineHeight:1.08 }}>
                Every Child Can Read.<br/><span style={{ color:"#F5820A" }}>Every Child Must Read.</span>
              </h1>
              <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8, marginBottom:36, maxWidth:500 }}>
                FastTrack Literacy™ is a structured, evidence-based reading program for children ages 3–8. Built on the Science of Reading — combining reggae-inspired phoneme songs, decodable books, AI technology, and 16-step lesson structure.
              </p>
              <div className="btn-row">
                <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
                <Link href="/how-it-works" className="btn-white">How It Works</Link>
              </div>
              <div style={{ display:"flex", gap:"clamp(20px,3vw,36px)", marginTop:40, flexWrap:"wrap" }}>
                {[["90+","Educational Resources"],["1,100+","Resources Developed"],["3","Countries Served"],["Ages 3–8","Primary Focus"]].map(([n,l])=>(
                  <div key={l}><div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#F5820A" }}>{n}</div><div style={{ fontSize:11, color:"rgba(255,255,255,0.55)", marginTop:2 }}>{l}</div></div>
                ))}
              </div>
            </div>
            <div className="hero-visual" style={{ display:"flex", flexDirection:"column", gap:14 }}>
              <div style={{ background:"rgba(255,255,255,0.97)", borderRadius:20, padding:28, boxShadow:"0 24px 64px rgba(0,0,0,0.3)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                  <div><div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340" }}>Student Reading Progress</div><div style={{ fontSize:12, color:"#5A7184", marginTop:2 }}>FastTrack Literacy™ Assessment</div></div>
                  <span style={{ background:"#F0FDF4", color:"#16A34A", fontSize:11, fontWeight:700, padding:"4px 10px", borderRadius:20 }}>On Track ✓</span>
                </div>
                {[["Phonemic Awareness",92],["Phonics & Decoding",85],["Reading Fluency",78],["Vocabulary & Comprehension",74]].map(([label,pct])=>(
                  <div key={label} style={{ marginBottom:13 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:5, color:"#0C2340", fontWeight:600 }}><span>{label}</span><span style={{ color:"#1A5DB5", fontWeight:700 }}>{pct}%</span></div>
                    <div style={{ height:8, background:"#FFF0E0", borderRadius:4, overflow:"hidden" }}><div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,#F5820A,#FF9F2F)", borderRadius:4 }} /></div>
                  </div>
                ))}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                <div style={{ background:"#FFF0E0", borderRadius:14, padding:18 }}><div style={{ fontSize:22 }}>🎵</div><div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#C05A00", marginTop:6 }}>45</div><div style={{ fontSize:11, color:"#5A7184", marginTop:2 }}>Reggae Phoneme Songs</div></div>
                <div style={{ background:"#EEF4FF", borderRadius:14, padding:18 }}><div style={{ fontSize:22 }}>📚</div><div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#1A5DB5", marginTop:6 }}>70+</div><div style={{ fontSize:11, color:"#5A7184", marginTop:2 }}>Decodable Books</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section-sm" style={{ background:"white", borderBottom:"1px solid #EDE0D0" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#A0927A", marginBottom:18 }}>Trusted by educators & families in</p>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"clamp(16px,4vw,48px)", flexWrap:"wrap" }}>
            {["🇯🇲 Jamaica","🇺🇸 United States","🌍 Africa","🏝️ Caribbean"].map(c=>(<span key={c} style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#C4B08A", letterSpacing:"0.5px" }}>{c}</span>))}
          </div>
        </div>
      </section>

      {/* WHAT IS FASTTRACK — with image alongside text */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🚂 A Literacy Journey</div>
              <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>What is FastTrack Literacy™?</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Phonics™ is a structured early reading program that teaches children how letters sound, connect, and form words. It is grounded in the <strong>Science of Reading</strong>, integrating the five pillars of phonemic awareness, phonics, fluency, vocabulary, and comprehension.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:28 }}>Children are not just learners — they become active participants in their reading journey through child-led learning and guided practice, powered by reggae-inspired songs and storytelling.</p>
              <Link href="/fasttrack" className="btn-orange">Learn More →</Link>
            </div>
            <div style={{ background:"linear-gradient(135deg,#FFF0E0,#FFD4A0)", borderRadius:24, padding:36, display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:18, color:"#0C2340", marginBottom:4 }}>📊 A Global Need</div>
              <div style={{ background:"white", borderRadius:14, padding:20, border:"1px solid #EDE0D0" }}>
                <div style={{ fontSize:13, color:"#5A5240", lineHeight:1.75, marginBottom:14 }}>According to <strong>UNESCO (2023)</strong>, over <strong>770 million people</strong> globally lack basic literacy skills. In the US alone, <strong>37% of fourth-graders</strong> read below basic levels.</div>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  {[["770M+","Lack basic literacy"],["37%","US 4th graders struggling"],["Ages 3-8","Critical window"]].map(([n,l])=>(
                    <div key={l} style={{ background:"#FFF0E0", borderRadius:10, padding:"10px 14px", textAlign:"center" }}>
                      <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:18, color:"#C05A00" }}>{n}</div>
                      <div style={{ fontSize:10, color:"#A0927A", marginTop:2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background:"#0C2340", borderRadius:14, padding:18 }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#F5820A", marginBottom:6 }}>Our Mission</div>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.8)", lineHeight:1.7 }}>FastTrack Literacy™ was created to build strong foundations early — before gaps widen. We are connecting home and school for literacy growth!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER — with images per section (like Jolly Learning) */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>✦ What We Offer</div>
            <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:900, color:"#0C2340" }}>A Complete Literacy Ecosystem</h2>
            <p style={{ fontSize:16, color:"#5A5240", maxWidth:540, margin:"14px auto 0", lineHeight:1.7 }}>CHEETAH® combines curriculum, content, technology, and AI to improve reading outcomes at scale.</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:56 }}>
            {[
              { emoji:"📚", tag:"Evidence-Based Programs", title:"Structured Reading Resources", desc:"Over 90 carefully designed resources including Teacher's Helper, Pupil's Workbooks, 45 reggae phoneme songs, 70+ decodable books, 27+ interactive charts, and flashcards — all built on the Science of Reading.", extras:["Teacher's Helper (Volumes 1 & 2)","Pupil's Workbooks (Volumes 1, 2 & 3)","9 Level 1 CHEETAH® Poster Stories","70+ Level 2 Decodable Readers"], bg:"#FFF0E0", reverse:false },
              { emoji:"🤖", tag:"Technology & AI", title:"iCHEETAH™ & Digital Tools", desc:"CHEETAH® integrates cutting-edge technology including the iCHEETAH™ (patent-pending AI-powered robot), tablets, mobile learning carts, projectors, and all-in-one computer systems to bring learning to life.", extras:["iCHEETAH™ AI-powered robot","Custom CHEETAH® tablets","Digital training platform","Apps for independent practice"], bg:"#EEF4FF", reverse:true },
              { emoji:"🌍", tag:"Global Reach", title:"Customised Country Editions", desc:"FastTrack Literacy™ is delivered in Jamaica as JamDER™ (Jamaica Decodable and Early Readers), with additional editions customised for markets across the USA and Africa — culturally responsive and curriculum-aligned.", extras:["JamDER™ for Jamaica","USA Edition","African Country Editions","Government partnerships nationwide"], bg:"#F0FDF4", reverse:false },
              { emoji:"🎓", tag:"Teacher Training", title:"Professional Development & Support", desc:"Comprehensive teacher training including Transformation Weeks, ongoing classroom support, and a full 640+ activity bank. Every educator receives the instructional tools needed to implement FastTrack with confidence.", extras:["Transformation Week training","Ongoing classroom support","640+ lesson activities","National literacy competition cards"], bg:"#FFF9E0", reverse:true },
            ].map((item, i) => (
              <div key={i} className="grid-2" style={{ gap:48, flexDirection: item.reverse ? "row-reverse" : "row" } as React.CSSProperties}>
                <div>
                  <div className="section-chip">{item.tag}</div>
                  <h3 style={{ fontSize:"clamp(22px,3vw,32px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>{item.emoji} {item.title}</h3>
                  <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.8, marginBottom:20 }}>{item.desc}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                    {item.extras.map(e=>(
                      <div key={e} style={{ display:"flex", alignItems:"center", gap:10, fontSize:13, color:"#0C2340" }}>
                        <div style={{ width:7, height:7, borderRadius:"50%", background:"#F5820A", flexShrink:0 }} />{e}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background:item.bg, borderRadius:24, padding:32, display:"flex", alignItems:"center", justifyContent:"center", minHeight:240 }}>
                  <div style={{ fontSize:80 }}>{item.emoji}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE 5 PILLARS */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🔬 Science of Reading</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:900, color:"#0C2340" }}>Built on the 5 Pillars of Reading</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:520, margin:"12px auto 0", lineHeight:1.7 }}>FastTrack Literacy™ systematically develops every critical skill a young reader needs.</p>
          </div>
          <div className="grid-auto">
            {[
              { icon:"👂", pillar:"Phonemic Awareness", desc:"Hearing and manipulating sounds in spoken words — the #1 predictor of reading success.", color:"#FFF0E0", tc:"#C05A00" },
              { icon:"🔤", pillar:"Phonics", desc:"Systematic letter-sound instruction using our 16-step pattern with reggae songs and visual supports.", color:"#EEF4FF", tc:"#1A5DB5" },
              { icon:"📖", pillar:"Fluency", desc:"Speed, accuracy, and expression through decodable books and guided oral reading practice.", color:"#F0FDF4", tc:"#166534" },
              { icon:"💬", pillar:"Vocabulary", desc:"Building rich word knowledge through storytelling, cultural content, and interactive word walls.", color:"#FFF9E0", tc:"#92400E" },
              { icon:"💡", pillar:"Comprehension", desc:"Deep understanding through active participation, self-assessment, and child-led reading activities.", color:"#F5F0FF", tc:"#5B21B6" },
            ].map(p=>(
              <div key={p.pillar} className="feature-card" style={{ background:p.color, border:"none" }}>
                <div style={{ fontSize:32, marginBottom:14 }}>{p.icon}</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontSize:17, fontWeight:800, color:"#0C2340", marginBottom:8 }}>{p.pillar}</h3>
                <p style={{ fontSize:13, color:"#5A5240", lineHeight:1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"white" }}>What Educators Are Saying</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)", marginTop:10 }}>Real results from classrooms across Jamaica, the US, and Africa</p>
          </div>
          <div className="grid-auto">
            {[
              { q:"FastTrack Literacy™ transformed our classroom. Children who struggled to recognise letters are now reading decodable books independently after just 10 weeks.", n:"Miss Thompson", r:"Year 1 Teacher, Kingston, Jamaica" },
              { q:"The reggae phoneme songs are magical. My students wake up singing them — and that repetition is exactly what builds phonemic awareness.", n:"Mrs. Davis", r:"Literacy Coach, Hartford, CT" },
              { q:"As a parent, the home support guides made it easy to continue the learning at home. My daughter moved two reading levels in one term.", n:"Natalie B.", r:"Parent, Portmore, Jamaica" },
            ].map(t=>(
              <div key={t.n} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:20, padding:28 }}>
                <div style={{ color:"#F5820A", fontSize:18, marginBottom:14 }}>★★★★★</div>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.9)", lineHeight:1.8, marginBottom:20, fontStyle:"italic" }}>"{t.q}"</p>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"white" }}>{t.n}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:3 }}>{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div style={{ background:"linear-gradient(135deg,#FFF0E0,#FFD4A0)", borderRadius:24, padding:40, display:"flex", flexDirection:"column", gap:16 }}>
              <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#F5820A,#FF9F2F)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:32 }}>👩‍💼</div>
              <div>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340" }}>Paulette Trowers-Lawrence, JD</div>
                <div style={{ fontSize:12, fontWeight:600, color:"#C05A00", marginTop:4, letterSpacing:"0.5px" }}>Founder & CEO, CHEETAH Toys & More, LLC</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {["🏆 USA Presidential Lifetime Achievement Award (2024)","🎓 Honorary Doctorate of Humanitarianism","⚖️ Juris Doctor with Honors","📚 1,100+ Educational Resources Developed","🌍 30+ Years Corporate & Business Experience"].map(a=>(
                  <div key={a} style={{ fontSize:12, color:"#5A5240", display:"flex", gap:4 }}>{a}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-chip">🌟 Our Founder</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Driven by One Mission</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Paulette Trowers-Lawrence, JD is a global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Founded in the United States and Jamaica in 2014 and 2015, CHEETAH® has grown from national assessment workbooks into a comprehensive literacy system with over 90 resources, customised for Jamaica, the USA, and several African countries.</p>
              <div style={{ background:"#FFF0E0", borderRadius:14, padding:18, borderLeft:"4px solid #F5820A", marginTop:8 }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"Every child can read, and every child must read." — Our founding mission</p>
              </div>
              <div style={{ marginTop:24 }}>
                <Link href="/about" className="btn-orange">Read Full Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <div className="container-xs">
          <div style={{ fontSize:48, marginBottom:16 }}>🚂</div>
          <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Ready to Start the Literacy Journey?</h2>
          <p style={{ fontSize:16, color:"#5A5240", lineHeight:1.75, marginBottom:36 }}>Join thousands of educators, parents, and students across Jamaica, the US, and Africa already using FastTrack Literacy™.</p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
            <Link href="/contact" className="btn-navy">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
