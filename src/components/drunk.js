import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/drunk.css';

import { think, mapStateToProps, mapDispatchToProps} from './drunkLogic'

const createDrunk = NAME => {
  const Drunk = ({
    talkTo,
    speak,
    listen,
  }) => {
    think(listen, talkTo)
    const _speak = speak.length <= 6
      ? speak
      : speak.slice(speak.length -6)

    return (
      <div className="drunk" onClick={() => talkTo('Hi.', 'TO_ALL')}>
        <div>( : D )</div>
        <div>{ NAME }</div>
        <div>
          say: {
            _speak
              .map((msg, key) => (<div key={key} className="col-sm-12">{msg}</div>))
          }
        </div>
      </div>
    )
  }

  return connect(
      mapStateToProps(NAME),
      mapDispatchToProps(NAME)
    )(Drunk)
}

export default createDrunk