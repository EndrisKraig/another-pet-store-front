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

    render(){
        let cats = this.props.cats;
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

export default CatTable