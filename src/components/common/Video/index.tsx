import _ from 'lodash'
import React, { useRef, useState, } from 'react'
import { wrapper } from '@base'

import styles from './index.module.scss'

export interface Props {
  image: string;
  video: string;
}

const Video = (props: Props) => {
  const { image, video } = props
  const [showCover, toggleCover] = useState(true)

  // videoRef
  const videoRef = useRef<HTMLVideoElement>(null)

  // 播放视频
  const playVideo = () => {
    if (videoRef.current) {
      toggleCover(!showCover)
      videoRef.current?.play();
    }
  }
  
  return (
    <div className={styles.video}>
      {
        showCover && <img src={image} alt="xxx" onClick={playVideo}/>
      }
      <video src={video} ref={videoRef}/>
    </div>
  )
}

export default wrapper(Video, (data: any) => _.get(data, 'image') && _.get(data, 'video'))
