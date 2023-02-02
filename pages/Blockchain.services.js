import { setGlobalState, getGlobalState } from './GlobalState'

let account1 = "Connect Wallet"

const connectWallet = async () => {
    try {
        if (!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        setGlobalState('connectedAccount', accounts[0].toLowerCase())
    } catch (error) {
        console.log(error)
    }
}
export { connectWallet, account1 }