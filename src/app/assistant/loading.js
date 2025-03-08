export default function Loading(){
  return(
     <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-4 relative top-52">
        <Image
          src="/ghost (5) (1).png"
          width={300}
          height={300}
          alt="Ghost Image"
          className="animate-bounce-slow"
        />
        <p className="text-white text-lg max-w-md">
          GhostCoder is your go-to platform for mastering programming concepts
          with ease. Whether you're a beginner stepping into the world of coding
          or a seasoned developer looking to enhance your skills, we’ve got you
          covered.
        </p>
      </div>
  );
}
