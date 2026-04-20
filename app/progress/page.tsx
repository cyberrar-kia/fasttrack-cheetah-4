"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const ORANGE = "#F5820A";
const NAVY = "#0C2340";
const CREAM = "#FFF9F4";
const WHITE = "#FFFFFF";
const MUTED = "#8A7A6A";

const slides = [0,1,2,3];
const slideLabels = ["Cover","Completed","Needs From You","Go Live"];

function Slide0() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100%", textAlign:"center", padding:"0 clamp(20px,6vw,80px)" }}>
      <div style={{ fontSize:"clamp(10px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:600 }}>FastTrack Literacy™ · CHEETAH®</div>
      <h1 style={{ fontSize:"clamp(30px,6vw,72px)", fontWeight:900, color:WHITE, lineHeight:1.05, marginBottom:20, fontFamily:"'Nunito',sans-serif" }}>
        Website Progress<br/><span style={{ color:ORANGE }}>Update</span>
      </h1>
      <div style={{ width:56, height:3, background:ORANGE, margin:"0 auto 24px", borderRadius:2 }} />
      <p style={{ fontSize:"clamp(13px,1.7vw,16px)", color:"rgba(255,255,255,0.55)", lineHeight:1.8, maxWidth:420, marginBottom:40 }}>
        A full breakdown of everything completed and what is still needed to take the site live.
      </p>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", marginBottom:40 }}>
        {[["22","Items Done"],["6","Still Needed"],["1 Day","To Go Live"]].map(([n,l])=>(
          <div key={l} style={{ background:"rgba(245,130,10,0.1)", border:"1px solid rgba(245,130,10,0.3)", borderRadius:12, padding:"14px 20px", textAlign:"center", minWidth:100 }}>
            <div style={{ fontSize:"clamp(22px,3vw,32px)", fontWeight:900, color:ORANGE, fontFamily:"'Nunito',sans-serif" }}>{n}</div>
            <div style={{ fontSize:"clamp(10px,1.2vw,12px)", color:"rgba(255,255,255,0.4)", marginTop:4, letterSpacing:"1px", textTransform:"uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
      <a href="https://fasttrack-cheetah-3.vercel.app" target="_blank" rel="noopener noreferrer" style={{ background:ORANGE, color:WHITE, textDecoration:"none", padding:"14px 32px", borderRadius:50, fontSize:"clamp(13px,1.5vw,15px)", fontWeight:700, fontFamily:"'Nunito',sans-serif" }}>
        🌐 View Live Preview →
      </a>
      <div style={{ position:"absolute", bottom:40, fontSize:11, color:"rgba(255,255,255,0.2)", letterSpacing:"2px", textTransform:"uppercase" }}>Tap or swipe to continue</div>
    </div>
  );
}

function Slide1() {
  const done = [
    { icon:"🏠", t:"Home button added to navigation" },
    { icon:"🔶", t:"Active page highlights orange on navbar" },
    { icon:"🎬", t:"Hero video — full screen, instant load" },
    { icon:"🖼️", t:"NotebookLM watermark removed from all 12 images → replaced with CHEETAH®" },
    { icon:"✂️", t:"\"Join thousands...\" line removed from homepage" },
    { icon:"🐆", t:"CHEETAH® logo added to About page" },
    { icon:"🗑️", t:"37% US 4th graders button removed" },
    { icon:"🗑️", t:"Founder Read More button removed" },
    { icon:"📊", t:"Five Pillars image added to How It Works" },
    { icon:"📄", t:"Phonics Chart PDF — first in Resources, downloadable" },
    { icon:"🎵", t:"3 reggae songs — audio player + download (ANNA-WARRIOR, BIG FISH, BLACK BIRD)" },
    { icon:"📗", t:"All JamDER™ & C-DER Books added as resource card" },
    { icon:"📱", t:"All social media linked on Contact page (IG, FB, YT, LinkedIn)" },
    { icon:"🔗", t:"Footer social icons all linked with real URLs + LinkedIn added" },
    { icon:"⚖️", t:"Privacy Policy fully updated on Legal page" },
    { icon:"🎨", t:"Colours kept — blue, orange and beige as confirmed" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"flex-start", minHeight:"100%", padding:"clamp(16px,4vw,40px) clamp(20px,6vw,80px)" }}>
      <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:12, fontWeight:600 }}>01 — Completed</div>
      <h2 style={{ fontSize:"clamp(22px,4vw,44px)", fontWeight:900, color:WHITE, marginBottom:24, lineHeight:1.05, fontFamily:"'Nunito',sans-serif" }}>Everything<br/><span style={{ color:ORANGE }}>Done ✅</span></h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:10, flex:1 }}>
        {done.map((d,i)=>(
          <div key={i} style={{ background:"rgba(34,197,94,0.07)", border:"1px solid rgba(34,197,94,0.2)", borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"flex-start", gap:12 }}>
            <span style={{ fontSize:18, flexShrink:0, marginTop:1 }}>{d.icon}</span>
            <span style={{ fontSize:"clamp(12px,1.4vw,14px)", color:"rgba(255,255,255,0.8)", lineHeight:1.6 }}>{d.t}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop:16, background:"rgba(245,130,10,0.08)", border:"1px solid rgba(245,130,10,0.2)", borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
        <span style={{ fontSize:16 }}>🌐</span>
        <span style={{ fontSize:"clamp(12px,1.4vw,13px)", color:"rgba(255,255,255,0.55)" }}>Preview: </span>
        <a href="https://fasttrack-cheetah-3.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize:"clamp(12px,1.4vw,13px)", color:ORANGE, fontWeight:700, textDecoration:"none" }}>fasttrack-cheetah-3.vercel.app</a>
      </div>
    </div>
  );
}

function Slide2() {
  const needed = [
    { n:"01", t:"Updated FastTrack Phonics Logo", b:"To replace the current logo and make it larger on the homepage. Please send the new logo file.", urgent:true },
    { n:"02", t:"Careers Page Content", b:"You mentioned you will send this. Once received, I will build the Careers section immediately.", urgent:true },
    { n:"03", t:"Flip Books Asset", b:"Please send the flip books file so it can be embedded on the site.", urgent:false },
    { n:"04", t:"FastTrack Flip Logo", b:"The flip logo is separate from the main logo — please send when ready.", urgent:false },
    { n:"05", t:"Formspree Account", b:"Create a free account at formspree.io using info@mycheetahinc.com, then share the form IDs. This connects all 4 forms to your inbox.", urgent:true },
    { n:"06", t:"GoDaddy Login / Delegate Access", b:"To connect your custom domain. We can do this together whenever you are ready.", urgent:true },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"flex-start", minHeight:"100%", padding:"clamp(16px,4vw,40px) clamp(20px,6vw,80px)" }}>
      <div style={{ fontSize:"clamp(10px,1.2vw,11px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:12, fontWeight:600 }}>02 — Still Needed</div>
      <h2 style={{ fontSize:"clamp(22px,4vw,44px)", fontWeight:900, color:WHITE, marginBottom:24, lineHeight:1.05, fontFamily:"'Nunito',sans-serif" }}>6 Items Needed<br/><span style={{ color:ORANGE }}>From You ⏳</span></h2>
      <div style={{ display:"flex", flexDirection:"column", gap:12, flex:1 }}>
        {needed.map(item=>(
          <div key={item.n} style={{ background: item.urgent ? "rgba(245,130,10,0.08)" : "rgba(255,255,255,0.03)", border:`1px solid ${item.urgent ? "rgba(245,130,10,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius:12, padding:"14px 18px", display:"flex", gap:16, alignItems:"flex-start" }}>
            <div style={{ width:36, height:36, borderRadius:"50%", background: item.urgent ? ORANGE : "rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:800, color:WHITE, flexShrink:0, fontFamily:"'Nunito',sans-serif" }}>{item.n}</div>
            <div>
              <div style={{ fontSize:"clamp(13px,1.5vw,15px)", fontWeight:700, color:WHITE, marginBottom:4, fontFamily:"'Nunito',sans-serif" }}>{item.t}{item.urgent && <span style={{ marginLeft:8, fontSize:10, background:"rgba(245,130,10,0.2)", color:ORANGE, padding:"2px 8px", borderRadius:50, letterSpacing:"1px" }}>NEEDED</span>}</div>
              <div style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"rgba(255,255,255,0.45)", lineHeight:1.65 }}>{item.b}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", minHeight:"100%", textAlign:"center", padding:"0 clamp(20px,6vw,80px)" }}>
      <div style={{ fontSize:"clamp(10px,1.3vw,12px)", letterSpacing:"3px", textTransform:"uppercase", color:ORANGE, marginBottom:20, fontWeight:600 }}>03 — Launch</div>
      <h2 style={{ fontSize:"clamp(28px,6vw,68px)", fontWeight:900, color:WHITE, lineHeight:1.05, marginBottom:20, fontFamily:"'Nunito',sans-serif" }}>
        Ready to<br/><span style={{ color:ORANGE }}>Go Live</span>
      </h2>
      <div style={{ width:56, height:3, background:ORANGE, margin:"0 auto 28px", borderRadius:2 }} />
      <p style={{ fontSize:"clamp(13px,1.7vw,17px)", color:"rgba(255,255,255,0.5)", lineHeight:1.8, maxWidth:460, marginBottom:40 }}>
        Once I receive the 6 items on the previous slide, the site goes live on your custom domain the same day.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:14, width:"100%", maxWidth:560, marginBottom:40 }}>
        {[
          { icon:"✅", label:"Site Built", sub:"All pages complete" },
          { icon:"🎬", label:"Video Live", sub:"Hero embedded" },
          { icon:"📱", label:"Mobile Ready", sub:"All devices" },
          { icon:"🔒", label:"Legal Done", sub:"Privacy policy" },
        ].map(item=>(
          <div key={item.label} style={{ background:"rgba(34,197,94,0.07)", border:"1px solid rgba(34,197,94,0.2)", borderRadius:14, padding:"18px 14px" }}>
            <div style={{ fontSize:28, marginBottom:8 }}>{item.icon}</div>
            <div style={{ fontSize:"clamp(12px,1.4vw,14px)", fontWeight:700, color:WHITE, fontFamily:"'Nunito',sans-serif" }}>{item.label}</div>
            <div style={{ fontSize:"clamp(10px,1.2vw,12px)", color:"rgba(255,255,255,0.35)", marginTop:4 }}>{item.sub}</div>
          </div>
        ))}
      </div>
      <a href="https://fasttrack-cheetah-3.vercel.app" target="_blank" rel="noopener noreferrer" style={{ background:ORANGE, color:WHITE, textDecoration:"none", padding:"16px 40px", borderRadius:50, fontSize:"clamp(14px,1.6vw,16px)", fontWeight:800, fontFamily:"'Nunito',sans-serif", display:"inline-block" }}>
        🌐 Preview the Site →
      </a>
      <p style={{ marginTop:20, fontSize:"clamp(11px,1.3vw,13px)", color:"rgba(255,255,255,0.25)" }}>
        fasttrack-cheetah-3.vercel.app
      </p>
    </div>
  );
}

const slideComponents = [Slide0, Slide1, Slide2, Slide3];

export default function ProgressDeck() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next"|"prev">("next");
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const total = slideComponents.length;

  const goTo = useCallback((index: number, dir: "next"|"prev") => {
    if (transitioning || index < 0 || index >= total) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => { setCurrent(index); setTransitioning(false); }, 280);
  }, [transitioning, total]);

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) { dx > 0 ? next() : prev(); }
  };

  const SlideComponent = slideComponents[current];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width:"100vw", height:"100svh", background:NAVY, overflow:"hidden", position:"relative", fontFamily:"'Inter',sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@300;400;500&display=swap');
        *{box-sizing:border-box;}
      `}</style>

      {/* BG grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(245,130,10,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,130,10,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:0, right:0, width:"clamp(100px,20vw,200px)", height:"clamp(100px,20vw,200px)", background:"radial-gradient(circle at top right,rgba(245,130,10,0.12),transparent 70%)", pointerEvents:"none" }} />

      {/* Top bar */}
      <div style={{ position:"absolute", top:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"clamp(14px,2.5vw,22px) clamp(18px,4vw,40px)", zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:ORANGE }} />
          <span style={{ fontSize:"clamp(10px,1.3vw,12px)", color:"rgba(255,255,255,0.3)", letterSpacing:"2px", textTransform:"uppercase" }}>FastTrack · CHEETAH®</span>
        </div>
        <div style={{ fontSize:"clamp(10px,1.2vw,11px)", color:"rgba(255,255,255,0.2)" }}>
          {String(current+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
        </div>
      </div>

      {/* Slide */}
      <div style={{ position:"absolute", inset:0, paddingTop:"clamp(52px,8vh,70px)", paddingBottom:"clamp(60px,9vh,80px)", overflowY:"auto", overflowX:"hidden", opacity: transitioning ? 0 : 1, transform: transitioning ? `translateX(${direction==="next"?"20px":"-20px"})` : "translateX(0)", transition:"opacity 0.28s ease, transform 0.28s ease" }}>
        <SlideComponent />
      </div>

      {/* Bottom controls */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"clamp(12px,2vw,18px) clamp(18px,4vw,40px)", zIndex:10 }}>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {slides.map(s=>(
            <button key={s} onClick={()=>goTo(s, s>current?"next":"prev")} style={{ width: s===current ? 24 : 6, height:6, borderRadius:3, background: s===current ? ORANGE : "rgba(255,255,255,0.15)", border:"none", cursor:"pointer", padding:0, transition:"all 0.3s ease" }} title={slideLabels[s]} />
          ))}
        </div>
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={prev} disabled={current===0} style={{ width:38, height:38, borderRadius:"50%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color: current===0 ? "rgba(255,255,255,0.15)" : WHITE, cursor: current===0 ? "not-allowed" : "pointer", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center" }}>←</button>
          <button onClick={next} disabled={current===total-1} style={{ width:38, height:38, borderRadius:"50%", background: current===total-1 ? "rgba(245,130,10,0.1)" : ORANGE, border:"none", color:WHITE, cursor: current===total-1 ? "not-allowed" : "pointer", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center" }}>→</button>
        </div>
      </div>

      {/* Slide label */}
      <div style={{ position:"absolute", bottom:"clamp(46px,7vh,60px)", left:"50%", transform:"translateX(-50%)", fontSize:"clamp(9px,1.1vw,11px)", color:"rgba(255,255,255,0.15)", letterSpacing:"2px", textTransform:"uppercase", whiteSpace:"nowrap" }}>
        {slideLabels[current]}
      </div>
    </div>
  );
}
