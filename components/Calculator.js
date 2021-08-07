const Calculator = () => {
  return (
    <div className='px-5'>
      <div className='flex flex-col items-center justify-center max-w-[740px] mx-auto border p-10 rounded-[4px] custom-shadow'>
        <form className='space-y-3 flex flex-col items-center justify-center'>
          <h4 className='text-base text-center text-secondary font-normal'>
            Enter the numbers
          </h4>
          <input
            className='w-[227px] py-2 px-[11px] border border-secondary rounded-sm focus:outline-none'
            type='text'
            placeholder='number 1'
          />
          <input
            className='w-[227px] py-2 px-[11px] border border-secondary rounded-sm focus:outline-none'
            type='text'
            placeholder='number 2'
          />
          <button className='max-w-[227px] w-full !mt-[18px] bg-primary text-white border border-primary py-2 px-[11px] rounded-sm hover:bg-transparent hover:text-primary transition'>
            Sum
          </button>
        </form>
        <div className='w-full h-[1px] bg-[#C10708] my-16' />
        <div className='space-y-3 flex flex-col items-center justify-center'>
          <h4 className='text-base text-center text-secondary font-normal'>
            Results
          </h4>
          <input
            className='w-[227px] py-2 px-[11px] border border-[#C10708] rounded-sm focus:outline-none'
            type='text'
            placeholder='0'
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
