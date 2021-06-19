export default function CoinPriceDisplay ({ coinPrice }) {
    if (coinPrice.length === 0) {
        return (
            <h1>No Results</h1>
        )
    } else {
        return (
            <div className="coin-prices">
                <h1 className="crypto">CryptoCorner</h1>
                <div className="btc">
                    <h3>Bitcoin: ${coinPrice.bitcoin.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.bitcoin.usd_24h_change.toFixed(3) < 0) ? 'red' : null}>{coinPrice.bitcoin.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="eth">
                    <h3>Ethereum: ${coinPrice.ethereum.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.ethereum.usd_24h_change.toFixed(3) < 0) ? 'red' : null}>{coinPrice.ethereum.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="xmr">
                    <h3>Monero: <br></br>${coinPrice.monero.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.monero.usd_24h_change.toFixed(3) < 0) ? 'red' : null}>{coinPrice.monero.usd_24h_change.toFixed(3)}</h4>
                </div>
                <div className="doge">
                    <h3>Dogecoin: ${coinPrice.dogecoin.usd}</h3>
                    <h4>24H Change:</h4><h4 className={(coinPrice.dogecoin.usd_24h_change.toFixed(3) < 0) ? 'red' : null}>{coinPrice.dogecoin.usd_24h_change.toFixed(3)}</h4>
                </div>
            </div>
        )
    }
}