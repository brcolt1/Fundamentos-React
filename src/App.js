/**
 * Function component do react.
 * As props devem ser imutáveis!!
 */
function Welcome(props) {
    return(
      <p>Hello {props.children}!</p>
    );
}

function App() {
    return(
        <div>
            <Welcome>Bruno</Welcome>
        </div>
    );
}

export default App;