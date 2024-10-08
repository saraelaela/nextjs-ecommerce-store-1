import Image from 'next/image';
import Link from 'next/link';
import { getItem } from '../../../database/items';

// import createOrUpdateCookie from '../../Cart/cartID/actions';

export default function ProductPage(props) {
  const item = getItem(Number(props.params.itemId));
  return (
    <>
      This is the {item.name} page
      <div>
        <Image
          src={`/images/${item.name}.webp`}
          alt={item.name}
          width={500}
          height={500}
        />
        <p>This is the product description for the single Item</p>
        <div>Quantity:</div>
        <Link href="/Cart">go to Cart</Link>
      </div>
    </>
  );
}

// export async function generateMetadata(props) {
//   const singleAnimal = await getAnimalInsecure(
//     Number((await props.params).animalId),
//   );
//   return {
//     title: items.name,
//     description: 'This is my single animal page ',
//   };
// }

// export default async function AnimalPage(props) {
//   const singleAnimal = await getAnimalInsecure(
//     Number((await props.params).animalId),
//   );

//   const currentDate = new Date();

//   // Create new date object to avoid mutating the original birth date
//   const nextBirthDate = new Date(singleAnimal.birthDate);

//   // Set birth date year to current year
//   nextBirthDate.setUTCFullYear(currentDate.getFullYear());

//   // Set UTC time to 0 to compare only days (avoid time zones)
//   currentDate.setUTCHours(0, 0, 0, 0);
//   nextBirthDate.setUTCHours(0, 0, 0, 0);

//   if (nextBirthDate.getTime() < currentDate.getTime()) {
//     nextBirthDate.setUTCFullYear(currentDate.getFullYear() + 1);
//   }
//   const daysUntilNextBirthDay =
//     (nextBirthDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

//   return (
//     <div>
//       <h1>{singleAnimal.firstName}</h1>
//       <div>
//         Birth date:{' '}
//         {singleAnimal.birthDate.toLocaleDateString('en-GB', {
//           year: 'numeric',
//           month: '2-digit',
//           day: '2-digit',
//         })}
//       </div>
//       <div>Days left until birthday: {daysUntilNextBirthDay}</div>
//       <div>
//         <Image
//           src={`/images/${singleAnimal.firstName.toLowerCase()}.webp`}
//           alt={singleAnimal.firstName}
//           width={300}
//           height={300}
//         />
//         this is a {singleAnimal.type} carrying {singleAnimal.accessory}
//       </div>
//     </div>
//   );
// }
