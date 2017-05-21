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
      <div className="col-sm-12" onClick={() => talkTo('debug', 'ALL')} >
        <div className="container DrunkSpace">
          <div className="row">
            <div className="col-sm-5">
              <div className="Drunk">
                : o
              </div>
              { listen.from +'='+ listen.message }
            </div>
            <div className="col-sm-5">
              <div className="DrunkTalk">
                { speak }
              </div>
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