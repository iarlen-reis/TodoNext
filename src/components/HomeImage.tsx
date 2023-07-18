import Image from 'next/image'
import ImageHome from '/public/home-image.png'

export const HomeImage = () => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="m-auto flex max-w-[300px] flex-col items-center justify-center md:max-w-[400px]">
        <Image src={ImageHome} alt="imagem de um card de tarefa." />
      </div>
    </div>
  )
}
