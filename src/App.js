import React from 'react';
import styles from './App.module.css';
import  {fetchData} from './Actions';
import PharmacyList from './components/PharmacyList';
import  CountryPicker  from './components/CountryPicker'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  
    state = {
      data:{},
      country:'',
    }
    async componentDidMount(){
     
      const data = await fetchData();
      
      this.setState({ data: data});
    
    }

  handleCountryChange =  async (country) => {
    const fetchedData = await fetchData(country); 
    // fetch the data
    this.setState({ data: fetchedData, country: country });
    // set the state
    
  }

  
  

  render() {
    
    const { country } = this.state;
    return (
      <Router>
        <div className={styles.container}> 
        <Switch>
          <Route path='/' >
          <h1>Türkiyedeki Tüm İllerin Nöbetçi Eczaneleri</h1>
          <Link to={`/pharmacy/${country}`}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Link>
          <PharmacyList country={this.state.country} />
          </Route>

          <Route path='/pharmacy/:id'> 
          <h1>Türkiyedeki Tüm İllerin Nöbetçi Eczaneleri</h1>
          <Link to={`/pharmacy/${country}`}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Link>
          <PharmacyList country={this.state.country} />
          </Route>
        </Switch>
       </div>
      </Router>
      
    )
  }
}

export default App;
