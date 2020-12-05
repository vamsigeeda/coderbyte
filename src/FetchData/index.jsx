import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class FetchData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      console.log(items);
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <div className="container-grid">
            <div className="row">
              <div className="col-lg-8 col-lg-8 col-lg-5">
                <h6 className="text-muted">List Of Products with Images</h6> 
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                          Product Name:
                      <div className="col-8">Product Description</div>
                          <div class="image-parent">
                        Product Image
                          </div>
                        </li>
                      {items.map((item) => {
                          return   <li className="list-group-item d-flex justify-content-between align-items-center">
                          { item.name} 
                      <div className="col-8 justify-content-around ">{item.description}</div>
                          <div className="image-parent">
                       <img src={item.image_url} className="img-fluid" alt="quixote"/>
                          </div>
                        </li>
                          })}

                </ul>
              </div>
            </div>
          </div>
          </>
        );
      }
    }
  }
  export default FetchData;