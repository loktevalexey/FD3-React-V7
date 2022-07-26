import React from 'react';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);
    // this.loadData();
    // не надо запускать асинхронные или долгие операции из конструктора
    // конструктор инициализирует только КЛАСС, это ещё не React-компонент
    // конструктор должен быть лёгким и быстрым
  }

  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    name: "???",
    clients: [],
  };

  fetchError = (errorMessage) => {
    alert(showStr);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      name:loadedData.companyName,
      clients:loadedData.clientsArr,
    });
  };

  loadData = async () => {

    const response=await fetch("http://fe.it-academy.by/TestFetch.php", {
      method: 'post',
      headers: {
        "Accept": "application/json",
      },
    });
    // в response - http-ответ
    if ( !response.ok ) {
      this.fetchError("fetch error " + response.status);
    }
    else {
      const data=await response.json();
      // в data - пришедшие в ответе данные
      this.fetchSuccess(data);
    }

  };

  /*

  // то же самое через цепочку .then/.catch
  loadData = () => {

    fetch("http://fe.it-academy.by/TestFetch.php", {
        method: 'post',
        headers: {
            "Accept": "application/json",
        },
    })
        .then( response => { // response - HTTP-ответ
            if (!response.ok)
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;

  };

  */

  render() {

    if ( !this.state.dataReady )
      return <div>загрузка данных...</div>;

    const clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>
    )
    ;

  }

}

export default MobileCompany;
