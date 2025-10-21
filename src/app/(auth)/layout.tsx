import { Toaster } from "@/components/ui/sonner";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen h-full w-full grid items-center justify-center px-4">
      <div className="absolute max-w-[340px] -z-1 md:block hidden top-3/5 left-3/5 -rotate-8 bg-background/85">
        <img src="https://reparationscomm.org/wp-content/uploads/2023/10/renty-an-african-slave-1600x900-1.jpg" className="mix-blend-multiply" alt="wanted image 1" />
      </div>
      <div className="absolute max-w-[200px] -z-1 md:block hidden top-1/6 left-18 rotate-12 bg-background/85">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbuNO057K8VrPvONp_cZWbbQBV7muV57rEA&s" className="mix-blend-multiply" alt="wanted image 1" />
      </div>
      <div className="absolute max-w-[200px] -z-1 md:block hidden top-8 right-64 rotate-6 bg-background/85">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLaLb2mn-3WQ7dxQacLj7jOkICYE3NZem1Q&s" className="mix-blend-multiply" alt="wanted image 1" />
      </div>
      <div className="absolute max-w-[200px] -z-1 md:block hidden top-1/3 left-2/10 rotate-5 bg-background/85">
        <img src="https://images.unsplash.com/photo-1497514440240-3b870f7341f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzc2luZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" className="mix-blend-multiply" alt="wanted image 1" />
      </div>
      {children}
       <Toaster position="top-center"/>
    </div>
  );
}
