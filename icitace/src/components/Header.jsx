import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import logox from '../../public/Logo_03.png' 
import { Logo } from '@/components/Logo'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          {/* <Logo className="h-12 w-auto text-slate-900" /> */}
          <Image src={logox} alt='logo' className='h-14 w-auto text-slate-900'/>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-purple-500 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">13</time>-
              <time dateTime="2022-04-06">14 of November, 2023</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p> Hanoi, Vietnam</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end ">
          <Button href="#" className='bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-br text-slate-200 hover:text-white'>Get your tickets</Button>
        </div>
      </Container>
    </header>
  )
}
