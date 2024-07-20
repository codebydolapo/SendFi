// 'use client'
export const saveAccount = (account: any)=>{
    return{
        type: "SAVE_ACCOUNT",
        account
    }
}