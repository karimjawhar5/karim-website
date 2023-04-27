export function TimeLineItem({date, emojis, content, next, future}) {
  return (
    <div className="flex h-20 space">
            {future?
            <div className="bg-gray-800 text-xs font-bold py-1 px-1 rounded-md w-1/12 my-auto text-center">
                <p>{date}</p>
            </div>
            :
            <div className="bg-blue-800 text-xs font-bold py-1 px-1 rounded-md w-1/12 my-auto text-center">
                <p>{date}</p>
            </div>
            }

            <div className="h-full  w-1/12 flex-col relative">
                {future? <div className="bg-gray-600  h-8 w-0.5 mx-auto right-1/2 flex flex-col">
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                </div>:<div className="bg-gray-600  h-8 w-0.5 mx-auto  right-1/2"></div>}
                <div className="bg-gray-200  w-2 h-2 rounded-full mx-auto z-10"></div> 
                {(next && future)? <div className="bg-gray-600 h-1/2 w-0.5 mx-auto right-1/2 flex flex-col">
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                    <div class="bg-gray-600 h-1/6"></div>
                    <div class="bg-gray-950 h-1/6"></div>
                </div>:next? <div className="bg-gray-600  h-1/2 w-0.5 mx-auto  right-1/2"></div>:<></>}
            </div>

            <div className=" bg-gray-800 p-3 flex w-9/12 my-auto rounded-md">
                <div className="w-1/12 px-2">
                    <p className="text-md">{emojis}</p>
                </div>
                <div className="w-11/12 px-2">
                    <p className="pl-2 text-sm">{content}</p>
                </div>
        </div>
    </div>
  )
}