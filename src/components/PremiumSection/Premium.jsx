import React, { use } from 'react';
import ToolCards from './ToolCards';
import PremiumTab from './PremiumTab';

const Premium = ({ premiumPromise, selected, setSelected, carts, setCarts }) => {
    const toolData = use(premiumPromise);

    return (
        <div className='max-w-300 mx-auto py-10 md:py-30 px-2 md:px-0'>

            <PremiumTab selected={selected} setSelected={setSelected} carts={carts}></PremiumTab>

            {/* Card container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between gap-7.5'>

                {/* cards */}
                {
                    toolData.map(tool => <ToolCards
                        key={tool.id}
                        tool={tool}
                        carts={carts}
                        setCarts={setCarts}
                    ></ToolCards>)
                }


            </div>
        </div>
    );
};

export default Premium;