
export async function checkFraud({mssv, ip, deviceId, action}:{mssv:string, ip:string, deviceId:string, action:string}){
  return {score: 0, allowed: true}
}
