import React from "react";
import {useState} from 'react';

function Component(props) {
  const[value, setValue] = useState(""); 

  const calcTotalSales = (id) => {
    var customerArr = props.data.customerList[id]
      if (customerArr.transactions !== undefined) {
        var transactionsArr = customerArr.transactions.map(x => x.cost);
        var totalsalesValue = 0;
        for (var i in transactionsArr) {
          totalsalesValue += transactionsArr[i];
        }
      }
    return totalsalesValue;
  }
  
  const calcRewardPoints = () => {
    console.log()
    var rewardPoints = 0;
    var totalSales = calcTotalSales(value);
    if (totalSales <= 50){
      alert("This customer has zero reward points")
    } else if (totalSales > 50 && totalSales < 100){
      rewardPoints = totalSales - 50;
      alert( `This customer has ${rewardPoints} reward points`)
    } else {
      let temp = totalSales - 100
      rewardPoints = (temp * 2) + 50;
      alert(`This customer has ${rewardPoints} reward points`)
    }
  }

    return (
      <section id="customers">
          <div className="row">
            <div>
              <h1>Customer Reward Points</h1>
              <h3>Enter a customer's ID (ex. 0, 1, 2...)</h3>
              <div id="transcation-wrapper">
              <input value={value} onChange={(e) => {setValue(e.target.value)}} />
              <button onClick={calcRewardPoints}>Check Reward Points</button>
              </div>
            </div>
          </div>
      </section>
    );
}

export default Component;
