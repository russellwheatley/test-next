import React from 'react';
import idx from 'idx';

import Block from './../../../layout/Block';
import styles from './styles.less';

class Blocks extends React.Component {
  render() {
    return (
      <div className={styles.blocks}>
        {this.props.partners.map((partner) => {
          const { slug, title, meta } = partner;

          const image = idx(meta, m => m.image);

          return (
            <Block
              img={image}
              title={title}
              to={`partners/${slug}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Blocks;