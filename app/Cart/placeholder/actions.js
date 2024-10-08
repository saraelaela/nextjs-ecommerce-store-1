'use server';
import { cookies } from 'next/headers';

export default async function createOrUpdateCookie() {
  (await cookies()).set('cookie1', 'a value');
}
