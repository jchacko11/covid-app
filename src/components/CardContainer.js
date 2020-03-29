import React from 'react'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'
import firebase from "../firebase";
import {Collection} from 'firestorter';
import {observer} from 'mobx-react';

/*
function Card(props) {
  return (
    <li data-color="white" data-size="large" data-name="A">
      <div class="uk-card uk-card-default">
          <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-auto">
                      <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg">
                      </img>
                  </div>
                  <div class="uk-width-expand">
                      <h3 class="uk-card-title uk-margin-remove-bottom">{props.name}</h3>
                      <p class="uk-text-meta uk-margin-remove-top">{props.desc}</p>
                  </div>
              </div>
          </div>
          <div class="uk-card-body">
              <p>{props.body}</p>
          </div>
          <div class="uk-card-footer">
              <a href="#" class="uk-button uk-button-text">Read more</a>
          </div>
      </div>
    </li>
  )
}
*/
const CardContainer = observer(class CardContainer extends React.Component {
  constructor() {
    super()
    this.col = new Collection('todo');
  }
  render() {
    const {docs, fetching} = this.col;
    return <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m" uk-grid="masonry: true">
      {docs.map((doc) => <Card key={doc.id} doc={doc} />)}
    </ul>;
  }
});

const Card = observer(({doc}) => {
  const { title, url, body, tags } = doc.data;
  return (
      <li data-text={(title ? title : "") + "  " + (body ? body : "") + "  " + (url ? url : "")}  data-color="black" data-size="large" data-name="A">
      <div>
        <div class="uk-light uk-background-secondary uk-padding">
            <h3>{title}</h3>
            <p>{body}</p>
            <a target="_blank" href={url} class="uk-button uk-button-default">Button</a>
        </div>
      </div>
    </li>
  );
});

/*
class CardContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [
        {
          name: "Card 1",
          desc: "Body 1",
          body: "Lorum ipsum dolor sit amet cojs slkdj aksfj aosidf aoidsfj dkgjs .",
        },
        {
          name: "Card 2",
          desc: "Body 1",
          body: "Body 2",
        },
        {
          name: "Card 3",
          desc: "Body 1",
          body: "Body 3",
        },
      ]
    }
  }


  render() {
    const cards = this.state.cards

    const cardList = cards.map((card, i) => {
      return (
        <Card
          name={card.name}
          desc={card.desc}
          body={card.body}
        />
      );

    })

    return (
      <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
        {cardList}
      </ul>
    );
  }
}
*/
function CardContuainer(){
  return(

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
        <li data-color="white" data-size="large" data-name="A">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">A</div>
            </div>
        </li>
        <li data-color="blue" data-size="small" data-name="B">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div class="uk-position-center">B</div>
            </div>
        </li>
        <li data-color="white" data-size="medium" data-name="C">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div class="uk-position-center">C</div>
            </div>
        </li>
        <li data-color="white" data-size="small" data-name="D">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div class="uk-position-center">D</div>
            </div>
        </li>
        <li data-color="black" data-size="medium" data-name="E">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div class="uk-position-center">E</div>
            </div>
        </li>
        <li data-color="black" data-size="small" data-name="F">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div class="uk-position-center">F</div>
            </div>
        </li>
        <li data-color="blue" data-size="medium" data-name="G">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div class="uk-position-center">G</div>
            </div>
        </li>
        <li data-color="black" data-size="large" data-name="H">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">H</div>
            </div>
        </li>
        <li data-color="blue" data-size="large" data-name="I">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">I</div>
            </div>
        </li>
        <li data-color="white" data-size="large" data-name="J">
            <div class="uk-card uk-card-default uk-card-body">
                <canvas width="600" height="800"></canvas>
                <div class="uk-position-center">J</div>
            </div>
        </li>
        <li data-color="blue" data-size="medium" data-name="K">
            <div class="uk-card uk-card-primary uk-card-body">
                <canvas width="600" height="600"></canvas>
                <div class="uk-position-center">K</div>
            </div>
        </li>
        <li data-color="black" data-size="small" data-name="L">
            <div class="uk-card uk-card-secondary uk-card-body">
                <canvas width="600" height="400"></canvas>
                <div class="uk-position-center">L</div>
            </div>
        </li>
    </ul>
  )
}

export default CardContainer
