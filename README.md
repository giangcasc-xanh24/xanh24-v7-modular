
# Xanh24 v7 Modular - FIXED iOS+Android - PWA

Day2 DONE: camera_checkins 2 + admin_blocks 10 + xu_ledger 4 + data_orders 2 + vnpt_logs 2 + vnpt_config 1 (510976 MB)

## FIXED iOS + Android

- M2 Camera: playsinline webkit-playsinline muted + user gesture button Mở Camera - Works iPhone Safari + Android Chrome
- NFC: Android supported, iOS fallback QR + Manual MSSV - Banner iPhone không hỗ trợ NFC
- PWA: manifest.json + apple-touch-icon 180 + apple-mobile-web-app-capable - Install on both
- VNPAY: redirect not popup
- SMS: sms: intent
- Storage: R2 Hybrid 2GB free

## Deploy Vercel

npm install in apps/web
npm run build
Add env NEXT_PUBLIC_SUPABASE_URL, ANON_KEY, SERVICE_ROLE_KEY, NEXT_PUBLIC_MODULE_M5/M2/M3/M7=true

Test iPhone Safari + Android Chrome:
- / -> Dashboard
- /camera -> M2 Camera-QR - Must work on both
- /admin -> M3 Admin-Khoi
- /data-5g -> M5 LIVE
- /anti-fraud -> M7

