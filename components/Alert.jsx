import Image from 'next/image';

function Alert() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <Image src="/chat.svg" alt="chat logo" width={48} height={48} />
      </div>
      <div className="">
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message</p>
      </div>
    </div>
  );
}

export default Alert;
