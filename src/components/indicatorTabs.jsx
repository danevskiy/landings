import { useState } from 'react';

export default function Group({indicators_groups}) {

  const [stateGroups, setStateGroups] = useState(indicators_groups.map((group, index) => ({...group, show:false, id: index+1})));

    const toggleItem = (id) => {
        setStateGroups((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, show: !item.show } : item
        )
      );
    };

    function getUkrainianWordForm(number, forms) {
        number = Math.abs(number) % 100;
        const lastDigit = number % 10;
      
        if (number > 10 && number < 20) return forms[2];
        if (lastDigit > 1 && lastDigit < 5) return forms[1];
        if (lastDigit === 1) return forms[0];
        return forms[2];
    }

  const indicators = stateGroups.map((group) => {
        return (
        <div key={group.id} className="rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#F1F5F9] flex flex-col">
        <div className="flex items-center gap-3 py-2 px-4 cursor-pointer" onClick={() => toggleItem(group.id)}>
        <div className="bg-[#F1F5F9] rounded-[99px] inline-flex flex-col justify-center items-center p-2">
        <img className="w-[30px] h-[30px]" src={group.image} alt="im" />
        </div>
        <div className="text-[#003F70] text-lg font-semibold leading-snug">{group.name}</div>
        { group.indicators_list &&
        <div className="px-3 py-2 bg-[#F8FAFC] rounded-[99px] inline-flex justify-center items-center gap-2 ml-auto mr-0">
        <div className="justify-start text-slate-500 text-sm font-medium leading-none">{group.indicators_list.length} {getUkrainianWordForm(group.indicators_list.length, ['показник', 'показники', 'показників'])}</div>
        </div>
        }
        <div>
        { group.show ? <img src="/images/minus.svg" alt="close" /> :  <img src="/images/plus.svg" alt="open" />}
        </div>
        </div>
        
        { group.indicators_list && group.show &&  <div className='flex flex-wrap gap-x-4 gap-y-3 py-6 border-t-[1px] border-[#F1F5F9] px-4 bg-gradient-to-r from-sky-50/40 via-stone-100/40 to-amber-50/40' ><IndicatorList indicators_list={group.indicators_list} /> </div>}
        </div>
        )
  })

  return (
    
    <div className='flex flex-col gap-2'>

    { indicators }
     
    </div>
  );
}

export function IndicatorList({indicators_list}){

return indicators_list.map((item, index) => {
        return (
            <div key={index} className="self-stretch justify-start text-[#003F70] text-base font-normal leading-tight w-[calc(33.33333333%-(32px/3))] flex gap-2">
            <img className="w-[16px] h-auto" src="/images/check.svg" alt="checked" />
            <span>{item}</span>
            </div>
        );
    })

}
