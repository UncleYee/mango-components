import React, { useRef, useState } from 'react';

import _ from 'lodash';

import { wrapper } from '@base';

import styles from './index.module.scss';

export interface Props {
  image: string;
  video: string;
}

const Video: React.FC<Props> = ({ image, video }) => {
  const [showCover, toggleCover] = useState(true);

  // videoRef
  const videoRef = useRef<HTMLVideoElement>(null);

  // 播放视频
  const playVideo = () => {
    if (videoRef.current) {
      toggleCover(false);
      videoRef.current?.play();
    }
  };

  return (
    <div className={styles.video}>
      {
        showCover && (<img src={image} alt="xxx" onClick={playVideo} />)
      }
      <video src={video} ref={videoRef} />
    </div>
  );
};

export default wrapper(
  Video,
  (data: Props) => _.get(data, 'image') !== undefined && _.get(data, 'video') !== undefined,
);
