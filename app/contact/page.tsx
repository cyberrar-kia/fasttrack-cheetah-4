"use client";
export default function Contact() {
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Contact Us</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:"white", marginBottom:18 }}>Let&apos;s Build <span style={{ color:"#F5820A" }}>Together</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Whether you want to adopt the programme, book a demo, or explore a partnership — our team is here.</p>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems:"start" }}>
            <div>
              <div className="section-chip">📍 Get In Touch</div>
              <h2 style={{ fontSize:"clamp(20px,3vw,28px)", fontWeight:900, color:"#0C2340", marginBottom:24 }}>Contact CHEETAH®</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
                {[{icon:"📧",label:"General Enquiries",val:"info@mycheetahinc.com"},{icon:"📧",label:"Founder",val:"paulettetrowers@yahoo.com"},{icon:"📱",label:"Phone (Jamaica)",val:"876-909-6311"},{icon:"📱",label:"Phone (USA)",val:"860-781-1276"}].map(c=>(
                  <div key={c.label} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:14, padding:18, display:"flex", gap:14, alignItems:"flex-start" }}>
                    <div style={{ fontSize:22 }}>{c.icon}</div>
                    <div><div style={{ fontSize:11, fontWeight:700, color:"#A0927A", marginBottom:3 }}>{c.label}</div><div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340" }}>{c.val}</div></div>
                  </div>
                ))}
              </div>
              <div style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", borderRadius:16, padding:24 }}>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:16, color:"white", marginBottom:14 }}>🌍 Our Offices</h3>
                {[{flag:"🇺🇸",loc:"207 Main Street, 3rd Floor, Hartford, CT 06106 — USA Branch"},{flag:"🇯🇲",loc:"Port Antonio PO, Portland, Jamaica, WI — Portland Branch"},{flag:"🇯🇲",loc:"4 West Minister Road, Kingston 10, Jamaica — Kingston Branch"}].map(o=>(
                  <div key={o.loc} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"10px 0", borderBottom:"1px solid rgba(255,255,255,0.08)", fontSize:13, color:"rgba(255,255,255,0.75)" }}>
                    <span style={{ fontSize:18 }}>{o.flag}</span>{o.loc}
                  </div>
                ))}
              </div>
              <div style={{ background:"#FFF0E0", borderRadius:14, padding:20, marginTop:16 }}>
                <h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:8 }}>🌐 Also Visit</h4>
                <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" style={{ color:"#C05A00", fontSize:14, fontWeight:600, textDecoration:"none" }}>mycheetahinc.com →</a>
              </div>
            </div>
            <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(20px,4vw,36px)" }}>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", marginBottom:6 }}>Send a Message</h3>
              <p style={{ fontSize:13, color:"#5A5240", marginBottom:24 }}>We respond to all enquiries within 1 business day.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <div className="grid-2" style={{ gap:14 }}>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>First Name *</label><input placeholder="Sarah" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Last Name *</label><input placeholder="Thompson" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                </div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Email *</label><input type="email" placeholder="you@example.com" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Organisation / School</label><input placeholder="e.g. Springfield Primary School" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Enquiry Type *</label>
                  <select style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", background:"white" }}>
                    <option>Select an option</option>
                    <option>Book a Demo</option>
                    <option>School / District Partnership</option>
                    <option>Government / Ministry Partnership</option>
                    <option>NGO / International Programme</option>
                    <option>Resource Order</option>
                    <option>Teacher Training</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Message *</label><textarea rows={4} placeholder="Tell us about your context and how we can help..." style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", resize:"vertical" }} /></div>
                <button style={{ width:"100%", background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:14, fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"white", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(18px,3vw,28px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>Ready to Book a Demo?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:24, maxWidth:440, margin:"0 auto 24px" }}>See FastTrack Literacy™ in action. Our team will walk you through the full programme and answer your questions.</p>
        <button style={{ background:"#0C2340", color:"white", border:"none", fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"14px 28px", borderRadius:50, fontSize:15, cursor:"pointer" }}>Book a Demo →</button>
      </section>
    </>
  );
}
