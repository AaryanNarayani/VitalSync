function ManageDeviceCard({image, name,title} : any) {
    return (
      <div className="flex-shrink-0 p-4 min-w-[300px] h-[200px] border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center gap-6">
          <img 
            src={image} 
            alt={name} 
            className="h-[150px] w-[120px] object-contain"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-[25px]">{title}</h1>
            <div className="flex items-center gap-2">
              <p>Online</p>
              <div className="h-2 w-2 bg-[#D6FF64] rounded-full"></div>
            </div>
            <p>Sync</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default ManageDeviceCard