import _ from 'lodash';
import React from 'react';
import { wrapper } from '@base';

import styles from './index.module.scss';

interface Image {
  src: string,
  link?: string,
}

interface Props {
  list: Image[],
}

const ImageList = (props: Props) => {
  const jump = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  const { list } = props;
  return (
    <div className={styles.imageList}>
      {
        list.map((image) => (
          <img
            key={image.src}
            src={image.src}
            onClick={() => jump(image.link)}
            alt="xxx"
          />
        ))
      }
    </div>
  );
};

export default wrapper(ImageList, (data: Props) => _.some(_.get(data, 'list'), (item) => item.src));
