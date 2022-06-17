import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const SearchTemperature=()=> {
  return (
  <div className="App">
    <section>
      <div>
        <FontAwesomeIcon icon={solid('user-secret')} />
      </div>
    </section>
  </div>
  );
}

export default SearchTemperature;