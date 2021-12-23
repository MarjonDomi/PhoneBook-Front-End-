import PropTypes from 'prop-types'
import Button from './Button'
// import SearchBar from './SearchBar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Header = ({ title, onAdd, showAdd }) => {
  //  const [showForm, setShowForm] = useState(false)


  return (
    <header className="text-center">
      <nav className="navbar navbar-expand-md navbar-dark bg=dark">
        <div><a href="https://www.google.com/search?q=your+awesome&rlz=1C1GCEU_enAL963AL963&sxsrf=AOaemvKkbYfCFFK-sdtJWnoJIS6fXq3UiQ:1637148648815&tbm=isch&source=iu&ictx=1&fir=O9SdlM7KIs5LRM%252CnABDpuN4onWfqM%252C_%253B2cl2Drh1s9ylbM%252CXg915cUlWRi21M%252C_%253BCJ67s9xGTlggMM%252Cbstv1lKKC7RZIM%252C_%253Bh2SMAHJVidzx7M%252CbjsRQs_hJNmVQM%252C_%253B-Gh44Itdxk_MmM%252CnABDpuN4onWfqM%252C_%253BFH8nAcktFqft9M%252CWZI2OHOMjXyQWM%252C_%253BDpPNNFJQ_UBttM%252CpDNRajEC0q4X9M%252C_%253BL1dMUeRCqA0uSM%252CrTnKBaURD63MgM%252C_%253BEDL-rph6ZMsTLM%252C3lJSWGrkFZvydM%252C_%253Bd-tlOr8DmDc05M%252CWU9bbFVpp_PxuM%252C_&vet=1&usg=AI4_-kSTyv_vjuSXeFm5KCJhFh3Cg3i3eQ&sa=X&ved=2ahUKEwjRr6D9pZ_0AhUy87sIHXtHBlAQ9QF6BAgUEAE#imgrc=2cl2Drh1s9ylbM" className=""> Navigation Bar</a></div>
      </nav>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add Contact'}
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'PhoneBook',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header