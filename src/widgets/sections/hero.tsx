import { Button } from "shared/ui/buttons/button"

const Hero = () => {
  return (
    <section className='grid h-[calc(100vh_-_80px)] grid-cols-2 place-content-center'>
      <div>
        <h1>KEYCAP. store</h1>
        <p>One glance is enough, one click - isn&apos;t</p>
        <Button>Show me more</Button>
      </div>
      <div className='place-self-end'>
        <p className='flex flex-col'>
          <span>Look.</span>
          <span>Press.</span>
          <span>Enjoy.</span>
        </p>
      </div>
    </section>
  )
}

export default Hero
