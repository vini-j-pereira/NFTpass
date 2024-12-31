const connectWalletButton = document.getElementById("connectWallet");
const walletInfoDiv = document.getElementById("walletInfo");
const addressSpan = document.getElementById("address");
const balanceSpan = document.getElementById("balance");

connectWalletButton.addEventListener("click", async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const [account] = await ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(account);
            addressSpan.textContent = account;
            balanceSpan.textContent = ethers.utils.formatEther(balance);
            walletInfoDiv.style.display = "block";
        } catch (error) {
            console.error("Erro ao conectar a carteira:", error);
        }
    } else {
        alert("Instale uma extensão de carteira como Metamask.");
    }
});
