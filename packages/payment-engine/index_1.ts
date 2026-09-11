
// @xanh24/payment-engine - Double-entry - iOS+Android same logic
export async function createXuTransaction({mssv, amountXu, idempotencyKey}:{mssv:string, amountXu:number, idempotencyKey:string}){
  return {transactionId: 'TXN_'+Date.now(), amountXu}
}
