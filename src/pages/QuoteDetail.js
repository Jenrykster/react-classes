import { Fragment } from 'react';
import { Route, useParams } from 'react-router';
import Comments from '../components/comments/Comments';
import HighLightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning is cool' },
  { id: 'q2', author: 'Jao', text: 'Cool is cool' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
