const db = firebase.firestore();
const stockListDom = document.getElementById('stock-list')

async function load() {
    const stocksSnapshots = await db.collection("STOCKS").get();
    stocksSnapshots.forEach((doc) => {
        const stock = doc.data()
        stockListDom.insertAdjacentHTML('beforeend', `
        <a href="single.html?id=${doc.id}">      
            <div class="list__element">
                <div>${stock.name}</div>
                <div>${stock.symbol}</div>
                <div>${stock.market}</div>
                <div>${stock.type}</div>
                <div>${stock.country}</div>
                <div>${stock.currency}</div>
                <div>${stock.isin}</div>
                <div>${stock.website}</div>
                <div>${stock.hours}</div>
                <div>${stock.closingPrice}</div>
                </div>
            </a>
        `)
    })
}

load()