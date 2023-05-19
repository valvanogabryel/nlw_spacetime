import {
  ChevronLeft,
  Image as Midia
} from "lucide-react";
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
            className='flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 select-none hover:text-gray-100'
          >
            <Midia className='h-4 w-4' />
            Anexar mídia
          </label>

          <label
            htmlFor='isPublic'
            className='flex items-center gap-1.5 text-sm text-gray-200 select-none hover:text-gray-100'
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 focus:invisible"
            />
            Tornar memória pública
          </label>
        </div>

        <input
          type='file'
          id='midia'
          className='invisible h-0 w-0'
        />


        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>




    </div>
  );
}

export default NewMemories;