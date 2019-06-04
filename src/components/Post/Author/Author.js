// @flow
import React from 'react';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <br/>
        <strong>{author.name}</strong>
      </p>
    </div>
  );
};

export default Author;
