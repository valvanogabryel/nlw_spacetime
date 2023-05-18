import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

const NewMemories = () => {
  return (
    <div className='flex flex-1 flex-col gap-4'>
      <Link
        href='/'
        className='flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100'
      >
        <ChevronLeft className='h-4 w-4' />
        voltar para a timeline
      </Link>

      <form className='flex flex-1 flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <label
            htmlFor='midia'
            className='flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'
          >
            <Camera className='h-4 w-4' />
            Anexar mídia
          </label>

          <label
            htmlFor='isPublic'
            className='flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className=""
            />
            Tornar memória pública
          </label>
        </div>

        <input
          type='file'
          id='midia'
          className='invisible'
        />
      </form>




    </div>
  );
}

export default NewMemories;