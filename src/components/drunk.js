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

    return (
      <div className="col-sm-12" onClick={() => talkTo('Hi.', 'TO_ALL')} >
        <div className="container DrunkSpace">
          <div className="row">
            <div className="col-sm-2 Drunk">
              name: { NAME } <br />
              ( : D ) <br />
            </div>
            <div className="col-sm-5 DrunkTalk">
              say: {
                speak
                  .map(msg => (<div className="col-sm-12">{msg}</div>))
              }
            </div>
          </div>
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