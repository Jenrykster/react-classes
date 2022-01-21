import Link from 'next/link';
import { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/'>News</Link>
        </li>
        <li>
          <Link href='/smtelse/'>Something Else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
