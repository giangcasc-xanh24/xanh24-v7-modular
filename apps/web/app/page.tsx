
import Link from 'next/link'
export default function Home(){
  return <div style={{padding:24,maxWidth:1200,margin:'0 auto'}}>
    <h1 style={{color:'#0A7A42'}}>🟢 Xanh24 v7 Modular - PWA iOS+Android FIXED - Day2 DONE 10 tables</h1>
    <p style={{background:'#ECFDF5',padding:12,borderRadius:8}}>camera_checkins 2 + admin_blocks 10 + xu_ledger 4 + data_orders 2 + vnpt_logs 2 + vnpt_config 1 (510976 MB 49%) - Must work on iOS + Android</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12,marginTop:24}}>
      <Link href='/data-5g' style={{border:'2px solid #0A7A42',padding:16,borderRadius:12,background:'#fff',textDecoration:'none',color:'#0A7A42'}}><b>M5 Data 5G</b><br/>LIVE 510976 MB - Team Telco - Frozen API - iOS+Android ✅</Link>
      <Link href='/camera' style={{border:'1px solid #0A7A42',padding:16,borderRadius:12,background:'#F0FDF4',textDecoration:'none',color:'#0A7A42'}}><b>M2 Camera-QR</b><br/>Team Mobile - iOS playsinline fix + NFC fallback + Android torch - PWA FIXED</Link>
      <Link href='/admin' style={{border:'1px solid #ccc',padding:16,borderRadius:12,background:'#fff',textDecoration:'none',color:'#111'}}><b>M3 Admin-Khoi X0-X6</b><br/>Team Admin - YubiKey 404 + Telegram X0 - 1247 SV - iOS cards</Link>
      <Link href='/anti-fraud' style={{border:'1px solid #ef4444',padding:16,borderRadius:12,background:'#FFF1F2',textDecoration:'none',color:'#991B1B'}}><b>M7 Anti Fraud</b><br/>Team Security - CORE middleware - Chặn trước M5 - iOS+Android</Link>
      <Link href='/captive' style={{border:'1px solid #ccc',padding:16,borderRadius:12,background:'#fff',textDecoration:'none'}}><b>M1 Captive Portal</b><br/>Team NetOps - KTX B WiFi</Link>
    </div>
    <div style={{marginTop:24,background:'#111',color:'#0f0',padding:16,borderRadius:12,fontFamily:'monospace',fontSize:12}}>
      <b>iOS + Android FIXES Applied:</b><br/>
      - Camera: video playsinline webkit-playsinline muted + user gesture button Mở Camera<br/>
      - NFC: Android supported, iOS fallback QR + Manual MSSV<br/>
      - PWA: manifest.json + apple-touch-icon 180 + apple-mobile-web-app-capable<br/>
      - VNPAY: redirect not popup - VNPAY TT 846985 +50k<br/>
      - SMS: sms: intent with user tap - Ban da nhan 1GB<br/>
      - Storage: R2 Hybrid 2GB free per MSSV - Not localStorage
    </div>
  </div>
}
