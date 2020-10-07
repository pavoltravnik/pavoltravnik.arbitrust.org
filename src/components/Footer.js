import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/pavoltravnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/pavoltravnik/pavoltravnik.arbitrust.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/5246617/pavol-travnik"
          target="_blank"
          rel="noopener noreferrer"
        >
          stackoverflow
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/pavol-travnik-b1565023/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        &bull;{' '}
        <a
          href="https://medium.com/@pavol.travnik"
          target="_blank"
          rel="noopener noreferrer"
        >medium</a>
      </footer>
    );
  }
}

export default Footer;
