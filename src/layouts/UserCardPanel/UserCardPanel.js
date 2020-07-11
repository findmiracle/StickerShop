import React from 'react'
import './UserCardPanel.scss'
import Panel from '../../components/Panel/Panel'
import CardItems from '../../components/CardItems/CardItems'
const UserCardPanel = () => {
  return (
    <Panel title="Your Basket"
           badge="4"
           icon="cart-outline"
           iconSize = "large"
    >
       <CardItems />
       {/*<div className="user-card-panel-footer">*/}
       {/*    <div className="user-card-panel-footer-final-price">*/}
       {/*       <span>Final Price</span>*/}
       {/*       <span>1200 $</span>*/}
       {/*    </div>*/}
       {/*     <button className="user-card-panel-button">Order Now</button>*/}
       {/*</div>*/}
    </Panel>
  )
}


export default UserCardPanel
