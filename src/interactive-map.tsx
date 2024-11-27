import { useState } from 'react';
import gambar from './assets/MAPS-DAMAR-LANGIT-Revisi-1.jpg'
import waterpall_1 from './assets/waterfall1.jpg'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"


const InteractiveMap = () => {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);

  const listArea = [
    {
      areaNumber: 27,
      title: "Nomi Waterfall",
      description: "All their equipment and instruments are alive. The sky was cloudless and of a deep dark blue.",
      image: waterpall_1,
    },
    {
      areaNumber: 1,
      title: "Heritage",
      description: "All their equipment and instruments are alive. The sky was cloudless and of a deep dark blue.",
      image: waterpall_1,
    },
    {
      areaNumber: 2,
      title: "Adventure Arena",
      description: "All their equipment and instruments are alive. The sky was cloudless and of a deep dark blue.",
      image: waterpall_1,
    },
    {
      areaNumber: 3,
      title: "Rumah Lumbung",
      description: "All their equipment and instruments are alive. The sky was cloudless and of a deep dark blue.",
      image: waterpall_1,
    }
  ];

  const handleClick = (areaNumber: number) => {
    setSelectedArea(areaNumber);
  };

  console.log(selectedArea);
  

  const selectedAreaData = selectedArea !== null ? listArea.find((area) => area.areaNumber === selectedArea) : null;
  

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      {/* Gambar dengan peta interaktif */}
      <img
        src={gambar}
        alt="Damar Langit Map"
        useMap="#damarMap"
        style={{ width: "100%", maxWidth: "800px" }}
      />

      {/* Peta interaktif */}
      <map name="damarMap">
        {/* Area berdasarkan nomor */}
        <area
          shape="circle"
          coords="130,150,30" // Koordinat area 1
          alt="Area 1"
          onClick={() => handleClick(1)}
          href="#"
        />
        <area
          shape="circle"
          coords="300,250,30" // Koordinat area 2
          alt="Area 2"
          onClick={() => handleClick(2)}
          href="#"
        />
        <area
          shape="circle"
          coords="260,240,30" // Koordinat area 3
          alt="Area 3"
          onClick={() => handleClick(3)}
          href="#"
        />
        <area onClick={() => handleClick(27)} alt="Area 27" title="Area 27" href="#" coords="260,150,30" shape="circle"/>

        {/* Tambahkan area lainnya berdasarkan nomor */}
      </map>
      <Dialog open={selectedArea !== null && !!selectedAreaData} onOpenChange={() => setSelectedArea(null)}>
        <DialogContent>
          <DialogHeader className='gap-3'>
            <DialogTitle>{selectedAreaData?.title}</DialogTitle>
            <DialogDescription>
              <img src={selectedAreaData?.image} alt={selectedAreaData?.title} className='rounded-lg mb-3' />
              {selectedAreaData?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  );
};
export default InteractiveMap;
