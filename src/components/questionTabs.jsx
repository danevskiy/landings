import { useState } from 'react';

export default function Group({questions_list}) {

  const [stateItems, setstateItems] = useState(questions_list.map((item, index) => ({...item, show:false, id: index+1})));

    const toggleItem = (id) => {
      setstateItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, show: !item.show } : item
        )
      );
    };

  const questions = stateItems.map((item) => {
        return (
        <div key={item.id} className="rounded-[20px] outline-1 outline-offset-[-1px] outline-[#F1F5F9] flex flex-col bg-white">
        <div className="flex items-center gap-3 py-4 px-6 cursor-pointer" onClick={() => toggleItem(item.id)}>
        <div className="text-[#003F70] text-lg font-medium leading-snug">{item.name}</div>
        <div className='ml-auto'>
        { item.show ? <img src="/images/minus.svg" alt="close" /> :  <img src="/images/plus.svg" alt="open" />}
        </div>
        </div>
        
        { item.content && item.show && 
        <div dangerouslySetInnerHTML={{ __html: item.content }} className='flex flex-wrap gap-x-4 gap-y-3 py-6 border-t-[1px] border-[#F1F5F9] px-6 bg-gradient-to-r from-sky-50/40 via-stone-100/40 to-amber-50/40 text-[#003F70]'/>
        }
        </div>
        )
  })

  return (
    
    <div className='flex flex-col gap-3'>

    { questions }
     
    </div>
  );
}
