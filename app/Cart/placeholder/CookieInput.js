//    create the input that needs to be saved

'use client';
import createOrUpdateCookies from './actions';

export default function CookieInput(props) {
  return (
    <>
      <button
        onClick={async () => {
          await createOrUpdateCookies();
          props.setCount(props.count + 1);
        }}
      >
        a button
      </button>

      {/* <button onClick={() => createOrUpdateCookies()}>-</button>
      <div>Cookie Value: {count} </div>
      <button onClick={() => createOrUpdateCookies()}>+</button> */}
    </>
  );
}
