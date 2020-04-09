import React from 'react'
import {Share2} from 'react-feather'
import CopyLink from './copy-link'

export default (props) => {

  const {roomName} = props

  return (
    <div id='chat-header'>
      <a id='brand' href='/'>
	<img id='brand-logo' src='/img/voom.png' />
        <span id='brand-text'>voom</span>
      </a>
      {roomName ? <span id='room-name'>{roomName}</span> : null}
      {roomName ? <CopyLink /> : null}
    </div>
  )

}
