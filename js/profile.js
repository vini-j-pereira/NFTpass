document.addEventListener("DOMContentLoaded", () => {
    const saldoSpan = document.getElementById("user-saldo");
    const nftsList = document.getElementById("nfts-list");
  
    // Atualizar Saldo
    document.getElementById("refresh-saldo").addEventListener("click", async () => {
      const response = await fetch("http://localhost:5000/user/saldo");
      const data = await response.json();
      saldoSpan.textContent = `${data.saldo} ETH`;
    });
  
    // Listar NFTs
    async function fetchNFTs() {
      const response = await fetch("http://localhost:5000/user/nfts");
      const data = await response.json();
      nftsList.innerHTML = data.nfts
        .map(nft => `<img src="${nft.image}" alt="${nft.name}" title="${nft.name}">`)
        .join("");
    }
    fetchNFTs();
  
    // Depósito
    document.getElementById("deposito-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const valor = document.getElementById("deposito-valor").value;
      await fetch("http://localhost:5000/pay/deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor }),
      });
      alert("Depósito realizado!");
    });
  
    // Saque
    document.getElementById("saque-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const valor = document.getElementById("saque-valor").value;
      await fetch("http://localhost:5000/pay/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor }),
      });
      alert("Saque realizado!");
    });
  });
  