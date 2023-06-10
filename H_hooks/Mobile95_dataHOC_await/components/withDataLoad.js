import React from 'react';

let withDataLoad = (fetchConfig,propName) => Component => {

    class ComponentWithDataLoad extends React.Component {

        componentDidMount() {
          this.loadData();
        }
      
        state = {
          dataReady: false, // готовы ли данные
        };
      
        fetchError = errorMessage => {
          console.error(errorMessage);
        };
      
        fetchSuccess = loadedData => {
          this.setState({
            dataReady:true,
            loadedData:loadedData,
          });
        };
      
        loadData = async () => {
      
          try {
            let response=await fetch(fetchConfig.URL, fetchConfig);
            if (!response.ok) {
              throw new Error("fetch error " + response.status);
            }
            let data=await response.json();
            this.fetchSuccess(data);
          } 
          catch ( error )  {
            this.fetchError(error.message);
          }
      
        };
      
        render() {
      
          if ( !this.state.dataReady )
            return <div>загрузка данных...</div>;
          
          let compProps={
            ...this.props,
            [propName]:this.state.loadedData
          };
          /*
          это то же самое что и:
          let compProps={...this.props};
          compProps[propName]=this.state.loadedData;
          */
          return <Component {...compProps} /> ;
        }
      
      }

      return ComponentWithDataLoad;

}

export { withDataLoad };
