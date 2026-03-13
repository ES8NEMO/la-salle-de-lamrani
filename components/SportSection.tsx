import { useState, useRef } from 'react';
export default function SportSection({ title, image, isAdmin }) {
  const [img, setImg] = useState(image);
  const fileRef = useRef(null);
  return (
    <div className="p-8 border-b flex flex-col md:flex-row gap-6">
      <img src={img} className={`w-full md:w-1/2 h-64 object-cover rounded ${isAdmin ? 'ring-4 ring-blue-500 cursor-pointer' : ''}`} onClick={() => isAdmin && fileRef.current.click()} />
      <input type="file" ref={fileRef} className="hidden" onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
      <div><h2 className="text-2xl font-bold">{title}</h2><p className="text-gray-500 mt-2">وصف التدريبات والمواعيد يكتب هنا...</p></div>
    </div>
  );
}