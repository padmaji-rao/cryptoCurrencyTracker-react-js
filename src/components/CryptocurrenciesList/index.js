import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoDataList} = props
  console.log(cryptoDataList)

  return (
    <div className="list-bg-container">
      <div className="outer-container outer">
        <div className="left-container">
          <h1 className="heading outer">Coin Type</h1>
        </div>
        <div className="right-container">
          <h1 className="heading outer">USD</h1>
          <h1 className="heading outer">EURO</h1>
        </div>
      </div>
      <ul>
        {cryptoDataList.map(each => (
          <li key={each.id}>
            <CryptocurrencyItem cryptoData={each} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
