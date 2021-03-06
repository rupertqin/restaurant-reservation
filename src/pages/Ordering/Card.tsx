import React from 'react';
import { NavLink } from "react-router-dom";

export default function Card({ data: { name, tags, img, weight, kcal, amount } }) {

  return <div className="card">
    <div className="picture" style={{background: `url(${img}) left top/cover no-repeat`}}> </div>
    <div className="info">
      <h2>{name}</h2>
      <ul className="tags">
        {
          tags.map((tag, idx) => <li key={idx}>{tag}</li>)
        }
      </ul>
      <div className="quality">
        <div className="left">
          净重
          <h3>{weight}</h3>
        </div>
        <div className="right">
          (Kcal)
          <h3>{kcal}<small>Kcal</small></h3>
        </div>
      </div>
      <div className="action">
        <span className="minus">
          <img src="/img/订餐菜单/订餐-菜单-按钮减少灰.png" alt=""/>
        </span>
        <span>··{amount}··</span>
        <span className="add">
          <img src="/img/订餐菜单/订餐-菜单-按钮添加蓝.png" alt=""/>
        </span>
      </div>
    </div>
  </div>
}


