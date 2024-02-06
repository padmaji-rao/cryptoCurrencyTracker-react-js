import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  console.log(cryptoData)

  return (
    <div className="outer-container ">
      <div className="left-container">
        <img
          className="logo"
          alt={cryptoData.currencyName}
          src={cryptoData.currencyLogo}
        />
        <p className="para">{cryptoData.currencyName}</p>
      </div>
      <div className="right-container">
        <p className="para">{cryptoData.usdValue}</p>
        <p className="para">{cryptoData.euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
