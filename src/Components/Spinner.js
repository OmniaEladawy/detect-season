function Spinner(props) {
    return (
        <div className="ui segment">
            <div className="ui active dimmer" style={{height:'100vh'}}>
            <div className="ui indeterminate text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
  }

  
  Spinner.defaultProps={
    message:  "Loading..."
}
  
  export default Spinner;