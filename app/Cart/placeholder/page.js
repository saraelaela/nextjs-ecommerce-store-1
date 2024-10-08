// parent element, pass props to Cookieinput and actions
'use client';
import { cookies } from 'next/headers';
import { useState } from 'react';

export default function Cookies() {
  const [count, setCount] = useState(0);
  const cartValue = cookies().get('cookie1');
  console.log(cartValue);
  return (
    <>
      <h1>test 123</h1>

      {/* {cartValue.value} */}
    </>
  );
}
