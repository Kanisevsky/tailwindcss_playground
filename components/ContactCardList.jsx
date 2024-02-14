import Image from 'next/image';

function ContactCardList() {
  return (
    <ul className="mt-20 max-w-sm mx-auto p-8 bg-white rounded-xl shadow-lg space-y-2 sm:space-y-0 sm:space-x-6 flex">
      <li className="group/item hover:bg-slate-100">
        <Image
          src="/person.jpg"
          width={84}
          height={84}
          alt="person"
          className="rounded-full"
        />
      </li>
    </ul>
  );
}

export default ContactCardList;
