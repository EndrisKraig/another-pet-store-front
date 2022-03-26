import React from 'react';
import styles from './CatTable.module.css'

class CatTable extends React.Component {

    header = (
    <tr>
      <th>Id</th>
      <th>Nickname</th>
      <th>Breed</th>
      <th>Price</th>
    </tr>)

    constructor(props){
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        cats: [],
    }
    }

    componentDidMount(){
      console.log('here');
      fetch("http://localhost:8080/cats")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cats: result
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

    render(){
      const { error, isLoaded, cats } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        const catList = cats.map((cat) =>
        <tr key={cat.id}>
          <th >{cat.id}</th>
          <th>{cat.nickname}</th>
          <th>{cat.breed}</th>
          <th>{cat.price}</th>
        </tr>
        ) 
        return (
        <table className={styles.center}>
            <tbody>
                {this.header}
                {catList}
            </tbody>
      </table>);
    }
  }
}

export default CatTable