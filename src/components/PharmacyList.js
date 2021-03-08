import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../Actions/index";
import "./PharmacyList.css";

class PharmacyList extends Component {
  handleValue = (e) => this.setState({ search: e.target.value });

  componentDidMount() {
    const country = this.props.country;
    this.props.fetchData(country);
  }
  componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      this.props.fetchData(this.props.country);
    }
  }
  state = {
    search: "",
  };

  render() {
    const { search } = this.state;

    const filteredData = this.props.data.filter((item) => {
      return item.eczane_ilce.toLowerCase().includes(search.toLowerCase());
    });

    let dataItems;

    if (this.props.data.length > 0) {
      dataItems = filteredData.map((item) => (
        <div key={item.id} className="product">
          <div className="product_info">
            <h3>{item.eczane_adi}</h3>
          </div>
          <hr />
          <div className="product_info">
            <p>
              <b>{item.eczane_ilce} İlçesi</b>
            </p>
          </div>
          <div className="product_info">
            <p>Adres: {item.eczane_adres}</p>
          </div>
          <div className="product_info">
            <p>No :{item.eczane_telefon}</p>
          </div>
        </div>
      ));
    } else {
      dataItems = <h4>Bir İl Seçiniz</h4>;
    }

    return (
      <div>
        <div className="header_container">
          <div className="header_search">
            <h4>İLÇE </h4>
            <input
              className="header_searchInput"
              type="text"
              placeholder="Search"
              onChange={this.handleValue}
            />
          </div>
        </div>

        <div className="container">{dataItems}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, { fetchData })(PharmacyList);
