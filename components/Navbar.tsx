"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href:"/about", label:"About Us" },
  { href:"/fasttrack", label:"FastTrack Literacy™" },
  { href:"/resources", label:"Resources" },
  { href:"/how-it-works", label:"How It Works" },
  { href:"/contact", label:"Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(12,35,64,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#F5820A,#FF9F2F)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🚂</div>
          <div>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:16, color:"white", lineHeight:1.1 }}>FastTrack Literacy<span style={{ color:"#F5820A" }}>™</span></div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.5)", letterSpacing:"0.5px" }}>by CHEETAH®</div>
          </div>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:2 }} className="nav-desktop">
          {links.map(l=>(<Link key={l.href} href={l.href} style={{ color:"rgba(255,255,255,0.75)", textDecoration:"none", fontSize:13, fontWeight:500, padding:"7px 12px", borderRadius:6, whiteSpace:"nowrap" }}>{l.label}</Link>))}
          <Link href="/get-started" style={{ marginLeft:10, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:13, padding:"9px 20px", borderRadius:50, textDecoration:"none", whiteSpace:"nowrap" }}>Get Started →</Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="nav-mobile" style={{ background:"none", border:"1px solid rgba(255,255,255,0.2)", borderRadius:8, color:"white", padding:"6px 11px", cursor:"pointer", fontSize:16 }}>{open?"✕":"☰"}</button>
      </div>
      {open && (
        <div style={{ background:"#0C2340", borderTop:"1px solid rgba(255,255,255,0.1)", padding:"8px 20px 20px" }}>
          {links.map(l=>(<Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{ display:"block", color:"rgba(255,255,255,0.85)", textDecoration:"none", fontSize:15, fontWeight:500, padding:"13px 0", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>{l.label}</Link>))}
          <Link href="/get-started" onClick={()=>setOpen(false)} style={{ display:"block", marginTop:16, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, padding:"13px 20px", borderRadius:50, textDecoration:"none", textAlign:"center" }}>Get Started →</Link>
        </div>
      )}
      <style>{`.nav-desktop{display:flex !important}.nav-mobile{display:none !important}@media(max-width:768px){.nav-desktop{display:none !important}.nav-mobile{display:block !important}}`}</style>
    </nav>
  );
}
