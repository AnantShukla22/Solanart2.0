import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState, getGlobalState }= createGlobalState({
    // to store the belows values to manipulate accordingly
    connectedAccount:'Connect Wallet',
    nft:null,
    nfts:[],
    transactions:[],
    contract:null
})

const truncate = (text, startChars, endChars, maxLength) => {
    if (text.length > maxLength) {
      var start = text.substring(0, startChars)
      var end = text.substring(text.length - endChars, text.length)
      while (start.length + end.length < maxLength) {
        start = start + '.'
      }
      return start + end
    }
    return text
  }

export { setGlobalState, useGlobalState, getGlobalState,truncate }
