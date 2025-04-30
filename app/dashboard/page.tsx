export default function Dashboard() {
    return (
      <div className="bg-[#FFF7E8] min-h-screen">
        <div className="container mx-auto px-4 py-6">
          <div>
            <h1>
              <span className="text-[#76A5AF] font-[Pacifico] text-6xl">Lyf</span>
              <span className="text-[#EA9999] font-[Pacifico] text-4xl">180</span>
              <span className="text-[#014240] font-[DynaPuff] text-3xl ml-2">Dashboard</span>
            </h1>
          </div>
  
          <h1 className="font-[DynaPuff] text-[#014240] text-5xl my-4">Welcome, LyfUser</h1>
  
          <div>
            <h4 className="font-[Wix_Madefor_Display] text-3xl text-center">
              "The only way to do great work is to love what you do." - Steve Jobs
            </h4>
          </div>
  
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#BFD4D9] p-5 border-[3px] border-[#014240] rounded-lg h-[300px]">
                <h6 className="font-[Wix_Madefor_Display] text-[#014240] text-xl flex justify-center items-center">
                  Daily Habits
                </h6>
              </div>
              <div className="bg-[#BFD4D9] p-5 border-[3px] border-[#014240] rounded-lg h-[300px]">
                <h6 className="font-[Wix_Madefor_Display] text-[#014240] text-xl flex justify-center items-center">
                  Long Term Goals
                </h6>
              </div>
            </div>
  
            <div className="mt-10">
              <div className="bg-[#BFD4D9] p-5 border-[3px] border-[#014240] rounded-lg h-[300px]">
                <h6 className="font-[Wix_Madefor_Display] text-[#014240] text-xl flex justify-center items-center">
                  Your Stats
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }